import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../contexts/ToastContext';
import { resetPassword } from '../utils/auth';
import SEOHead from '../components/SEOHead';

export default function ForgotPassword() {
  const { t } = useLanguage();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await resetPassword(email);
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      setSent(true);
    }
  }

  return (
    <div className="auth-page">
      <SEOHead title={t('auth.forgotTitle')} />
      <div className="auth-card">
        <h1 className="auth-title">{t('auth.forgotTitle')}</h1>

        {sent ? (
          <div className="auth-success">
            <div className="auth-success-icon"><i className="fa-solid fa-envelope-circle-check" /></div>
            <h3>{t('auth.resetSuccess')}</h3>
            <Link to="/login" className="btn btn-primary btn-sm">{t('auth.backToLogin')}</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">{t('auth.email')}</label>
              <input type="email" className="form-input" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? '...' : t('auth.resetBtn')}
            </button>
            <div className="auth-footer">
              <p><Link to="/login">{t('auth.backToLogin')}</Link></p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
