import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { signOut } from '../../utils/auth';

type NavChild = { path: string; ko: string; en: string };
type NavItem = { ko: string; en: string; path?: string; children?: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  { path: '/about', ko: 'About', en: 'About' },
  {
    ko: '학습자료', en: 'Materials',
    children: [
      { path: '/materials/basic', ko: '기본학습', en: 'Basics' },
      { path: '/materials/document', ko: '문서행정', en: 'Documents' },
      { path: '/materials/hr', ko: '인사행정', en: 'HR' },
    ],
  },
  { path: '/prompt-eval', ko: '프롬프트 실습', en: 'Prompt Lab' },
  {
    ko: '자료실', en: 'Resources',
    children: [
      { path: '/tools', ko: '도구 가이드', en: 'Tool Guide' },
      { path: '/appendix', ko: '부록', en: 'Appendix' },
      { path: '/recommended', ko: '추천사이트', en: 'Recommended' },
    ],
  },
  { path: '/community', ko: '커뮤니티', en: 'Community' },
];

export default function Navbar() {
  const { mode, toggleTheme, colorTheme, setColorTheme, COLOR_OPTIONS } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { user, isAuthenticated, isAdmin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const colorPickerRef = useRef(null);
  const userMenuRef = useRef(null);

  const isKo = language === 'ko';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (colorPickerRef.current && !(colorPickerRef.current as HTMLElement).contains(e.target as Node)) setShowColorPicker(false);
      if (userMenuRef.current && !(userMenuRef.current as HTMLElement).contains(e.target as Node)) setShowUserMenu(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeIconClass = mode === 'auto' ? 'fa-circle-half-stroke' : mode === 'light' ? 'fa-sun' : 'fa-moon';
  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || '';
  const avatarLetter = displayName.charAt(0).toUpperCase();

  async function handleSignOut() {
    await signOut();
    navigate('/');
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-claude">University</span>
            <span className="logo-master">AI</span>
          </Link>

          <ul className="nav-links">
            {NAV_ITEMS.map((item, idx) => (
              item.children ? (
                <li key={idx} className="nav-item nav-item-dropdown">
                  <span className={`nav-link nav-link-parent ${item.children.some(c => location.pathname.startsWith(c.path)) ? 'active' : ''}`}>
                    {isKo ? item.ko : item.en}
                    <i className="fa-solid fa-chevron-down nav-caret" />
                  </span>
                  <ul className="nav-dropdown-menu">
                    {item.children.map((c, ci) => (
                      <li key={ci}>
                        <Link
                          to={c.path}
                          className={`nav-dropdown-item ${location.pathname.startsWith(c.path) ? 'active' : ''}`}
                        >
                          {isKo ? c.ko : c.en}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={idx} className="nav-item">
                  <Link
                    to={item.path || '/'}
                    className={`nav-link ${item.path && location.pathname.startsWith(item.path) ? 'active' : ''}`}
                  >
                    {isKo ? item.ko : item.en}
                  </Link>
                </li>
              )
            ))}
          </ul>

          <div className="navbar-actions">
            <div className="color-picker-wrapper" ref={colorPickerRef}>
              <button className="color-picker-btn" onClick={() => setShowColorPicker(!showColorPicker)} title="Color Theme">
                <div className="color-dot-preview" style={{ background: COLOR_OPTIONS.find(c => c.name === colorTheme)?.color }} />
              </button>
              <div className={`color-picker-dropdown ${showColorPicker ? 'show' : ''}`}>
                {COLOR_OPTIONS.map(opt => (
                  <button
                    key={opt.name}
                    className={`color-option ${colorTheme === opt.name ? 'active' : ''}`}
                    style={{ background: opt.color }}
                    onClick={() => { setColorTheme(opt.name); setShowColorPicker(false); }}
                    title={opt.name}
                  />
                ))}
              </div>
            </div>

            <button className="theme-toggle" onClick={toggleTheme} title={mode}>
              <i className={`fa-solid ${themeIconClass}`} />
            </button>

            <button className="lang-toggle" onClick={toggleLanguage}>
              {language === 'ko' ? 'EN' : 'KO'}
            </button>

            {isAuthenticated ? (
              <div className="user-menu-wrapper" ref={userMenuRef}>
                <button className="user-avatar-btn" onClick={() => setShowUserMenu(!showUserMenu)}>
                  {avatarLetter}
                </button>
                <div className={`user-menu-dropdown ${showUserMenu ? 'show' : ''}`}>
                  <div className="user-menu-header">
                    <div className="user-menu-name">{displayName}</div>
                    <div className="user-menu-email">{user?.email}</div>
                  </div>
                  {isAdmin && (
                    <Link to="/admin" className="user-menu-item" onClick={() => setShowUserMenu(false)}>
                      <i className="fa-solid fa-shield-halved" /> {t('nav.admin')}
                    </Link>
                  )}
                  <button className="user-menu-item danger" onClick={handleSignOut}>
                    <i className="fa-solid fa-right-from-bracket" /> {t('nav.logout')}
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="nav-auth-btn nav-login-btn">
                {t('nav.login')}
              </Link>
            )}

            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {NAV_ITEMS.map((item, idx) => (
            item.children ? (
              <li key={idx} className="mobile-nav-group">
                <div className="mobile-nav-group-title">{isKo ? item.ko : item.en}</div>
                {item.children.map((c, ci) => (
                  <Link key={ci} to={c.path} className="mobile-nav-link mobile-nav-sub">
                    {isKo ? c.ko : c.en}
                  </Link>
                ))}
              </li>
            ) : (
              <li key={idx}>
                <Link to={item.path || '/'} className="mobile-nav-link">
                  {isKo ? item.ko : item.en}
                </Link>
              </li>
            )
          ))}
        </ul>
        <div className="mobile-menu-actions">
          {isAuthenticated ? (
            <button className="btn btn-primary btn-sm" onClick={handleSignOut}>{t('nav.logout')}</button>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">{t('nav.login')}</Link>
          )}
        </div>
      </div>
    </>
  );
}
