import { useState } from 'react';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../contexts/ToastContext';
import { signInWithEmail, signInWithGoogle, signInWithKakao } from '../utils/auth';
import SEOHead from '../components/SEOHead';

export default function Login() {
  const { isAuthenticated } = useAuth();
  const { t } = useLanguage();
  const toast = useToast();
  const [searchParams] = useSearchParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (isAuthenticated) return <Navigate to="/" replace />;

  const loginError = searchParams.get('error_description');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error } = await signInWithEmail(email, password);
    setLoading(false);
    if (error) {
      setError(error.message);
      toast.error(error.message);
    }
  }

  return (
    <div className="auth-page">
      <SEOHead title={t('auth.loginTitle')} />
      <div className="auth-card">
        <h1 className="auth-title">{t('auth.loginTitle')}</h1>

        <div className="auth-social">
          <button className="social-btn google" onClick={() => signInWithGoogle()}>
            <i className="fa-brands fa-google" /> {t('auth.google')}
          </button>
          <button className="social-btn kakao" onClick={() => signInWithKakao()}>
            <i className="fa-solid fa-comment" /> {t('auth.kakao')}
          </button>
        </div>

        <div className="auth-divider">{t('auth.or')}</div>

        {(error || loginError) && <div className="auth-error">{error || loginError}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">{t('auth.email')}</label>
            <input type="email" className="form-input" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label className="form-label">{t('auth.password')}</label>
            <input type="password" className="form-input" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? '...' : t('auth.loginBtn')}
          </button>
        </form>

        <div className="auth-footer">
          <p><Link to="/forgot-password">{t('auth.forgotPassword')}</Link></p>
          <p style={{ marginTop: 8 }}>{t('auth.noAccount')} <Link to="/register">{t('auth.registerBtn')}</Link></p>
        </div>
      </div>
    </div>
  );
}
