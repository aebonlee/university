import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="not-found-page">
      <SEOHead title="404" />
      <div className="not-found-content">
        <div className="not-found-code">404</div>
        <h2 className="not-found-title">{t('common.notFound')}</h2>
        <p className="not-found-desc">{t('common.notFoundDesc')}</p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">{t('common.backToHome')}</Link>
        </div>
      </div>
    </div>
  );
}
