import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-claude">University</span>
              <span className="brand-master"> AI</span>
            </div>
            <p className="footer-description">{t('footer.description')}</p>
            <p className="footer-description" style={{ marginTop: 8, fontSize: 13 }}>{t('footer.descriptionDetail')}</p>
          </div>

          <div className="footer-links">
            <h4>{t('footer.quickLinks')}</h4>
            <ul className="footer-link-list">
              <li><Link to="/materials/basic">{language === 'ko' ? '기본학습자료' : 'Basic Materials'}</Link></li>
              <li><Link to="/materials/document">{language === 'ko' ? '문서행정 자동화' : 'Document Automation'}</Link></li>
              <li><Link to="/materials/hr">{language === 'ko' ? '인사행정 자동화' : 'HR Automation'}</Link></li>
              <li><Link to="/tools">{language === 'ko' ? '도구 가이드' : 'Tool Guide'}</Link></li>
              <li><Link to="/community">{language === 'ko' ? '커뮤니티' : 'Community'}</Link></li>
              <li><Link to="/about">{language === 'ko' ? '소개' : 'About'}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{language === 'ko' ? '연락처' : 'Contact'}</h4>
            <p className="footer-email">
              <span className="footer-email-icon"><i className="fa-solid fa-envelope" /></span>
              <a href="mailto:aebon@dreamitbiz.com">aebon@dreamitbiz.com</a>
            </p>
            <p>010-3700-0629</p>
            <p>{language === 'ko' ? '카카오톡' : 'KakaoTalk'}: aebon</p>
            <p className="business-hours">{language === 'ko' ? '평일 09:00 ~ 18:00' : 'Weekdays 09:00 ~ 18:00'}</p>

            <div className="footer-family">
              <select
                defaultValue=""
                onChange={(e) => {
                  if (e.target.value) window.open(e.target.value, '_blank');
                  e.target.value = '';
                }}
              >
                <option value="" disabled>Family Site</option>
                <option value="https://www.dreamitbiz.com">DreamIT Biz</option>
                <option value="https://claude.dreamitbiz.com">Claude Master</option>
                <option value="https://copilot.dreamitbiz.com">Copilot Master</option>
                <option value="https://teaching.dreamitbiz.com">Teaching AI</option>
              </select>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 DreamIT Biz. All rights reserved.</p>
          <p className="footer-bottom-info">
            Designed by Ph.D Aebon Lee | {language === 'ko' ? '대표이사' : 'CEO'}: {language === 'ko' ? '이애본' : 'Aebon Lee'}
          </p>
        </div>
      </div>
    </footer>
  );
}
