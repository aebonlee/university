import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../contexts/ToastContext';
import { signUpWithEmail, signInWithGoogle, signInWithKakao } from '../utils/auth';
import SEOHead from '../components/SEOHead';

export default function Register() {
  const { isAuthenticated } = useAuth();
  const { t } = useLanguage();
  const toast = useToast();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (isAuthenticated) return <Navigate to="/" replace />;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (password.length < 6) { setError('Password must be at least 6 characters'); return; }
    if (password !== passwordConfirm) { setError('Passwords do not match'); return; }

    setLoading(true);
    const { error } = await signUpWithEmail(email, password, { full_name: name });
    setLoading(false);
    if (error) {
      setError(error.message);
      toast.error(error.message);
    } else {
      toast.success('Registration successful! Please check your email.');
      navigate('/login');
    }
  }

  return (
    <div className="auth-page">
      <SEOHead title={t('auth.registerTitle')} />
      <div className="auth-card">
        <h1 className="auth-title">{t('auth.registerTitle')}</h1>

        <div className="auth-social">
          <button className="social-btn google" onClick={() => signInWithGoogle()}>
            <i className="fa-brands fa-google" /> {t('auth.google')}
          </button>
          <button className="social-btn kakao" onClick={() => signInWithKakao()}>
            <i className="fa-solid fa-comment" /> {t('auth.kakao')}
          </button>
        </div>

        <div className="auth-divider">{t('auth.or')}</div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">{t('auth.name')}</label>
            <input type="text" className="form-input" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label className="form-label">{t('auth.email')}</label>
            <input type="email" className="form-input" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label className="form-label">{t('auth.password')}</label>
            <input type="password" className="form-input" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className="form-group">
            <label className="form-label">{t('auth.passwordConfirm')}</label>
            <input type="password" className="form-input" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} required />
          </div>
          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? '...' : t('auth.registerBtn')}
          </button>
        </form>

        <div className="auth-footer">
          <p>{t('auth.hasAccount')} <Link to="/login">{t('auth.loginBtn')}</Link></p>
        </div>
      </div>
    </div>
  );
}
