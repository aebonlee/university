import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { CURRICULUM } from '../config/site';
import SEOHead from '../components/SEOHead';

export default function Curriculum() {
  const { language, t } = useLanguage();
  const isKo = language === 'ko';
  const [activeDay, setActiveDay] = useState(1);

  const daySessions = CURRICULUM.filter(s => s.day === activeDay);

  return (
    <div className="curriculum-page">
      <SEOHead title={t('curriculum.title')} />
      <div className="container">
        <div className="section-header" style={{ marginTop: 20 }}>
          <h1 className="section-title">{t('curriculum.title')}</h1>
          <p className="section-subtitle">{t('curriculum.subtitle')}</p>
        </div>

        <div className="tabs" style={{ justifyContent: 'center' }}>
          <button className={`tab ${activeDay === 1 ? 'active' : ''}`} onClick={() => setActiveDay(1)}>
            {t('curriculum.day1')}
          </button>
          <button className={`tab ${activeDay === 2 ? 'active' : ''}`} onClick={() => setActiveDay(2)}>
            {t('curriculum.day2')}
          </button>
        </div>

        <div className="session-grid">
          {daySessions.map(session => (
            <Link to={`/day${session.day}/${session.period}`} className="session-card" key={session.id}>
              <div className="session-number">{session.period}</div>
              <div className="session-info">
                <h3>{isKo ? session.title : session.titleEn}</h3>
                <p>{session.description}</p>
                <div className="session-tools">
                  {session.tools.map(tool => <span key={tool} className="tool-tag">{tool}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
