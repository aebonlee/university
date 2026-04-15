import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLanguage } from '../contexts/LanguageContext';
import { CURRICULUM } from '../config/site';
import { SESSION_CONTENTS } from '../data/sessions';
import SEOHead from '../components/SEOHead';

export default function SessionPage() {
  const { period } = useParams();
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const path = window.location.pathname;
  const day = path.startsWith('/day1') ? 1 : 2;
  const periodNum = Number(period);

  const session = CURRICULUM.find(s => s.day === day && s.period === periodNum);
  if (!session) {
    return (
      <div className="session-detail">
        <div className="container">
          <p>{isKo ? '교시 정보를 찾을 수 없습니다.' : 'Session not found.'}</p>
          <Link to="/curriculum" className="btn btn-primary btn-sm mt-3">{isKo ? '커리큘럼으로 돌아가기' : 'Back to Curriculum'}</Link>
        </div>
      </div>
    );
  }

  const content = SESSION_CONTENTS[session.id] || '';

  // Navigation
  const prevSession = CURRICULUM.find(s => s.id === session.id - 1);
  const nextSession = CURRICULUM.find(s => s.id === session.id + 1);

  return (
    <div className="session-detail">
      <SEOHead title={`${isKo ? session.title : session.titleEn}`} />
      <div className="container">
        <div className="session-detail-header">
          <div className="session-detail-badge">
            <i className={`fa-solid ${session.icon}`} />
            {day}{isKo ? '일차' : 'Day'} {session.period}{isKo ? '교시' : 'Session'}
          </div>
          <h1>{isKo ? session.title : session.titleEn}</h1>
          <p>{session.description}</p>
          {session.tools.length > 0 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 16 }}>
              {session.tools.map(tool => <span key={tool} className="badge">{tool}</span>)}
            </div>
          )}
        </div>

        <div className="session-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>

        {session.source && (
          <div className="session-source" style={{ maxWidth: 800, margin: '32px auto 0' }}>
            <strong>{isKo ? '콘텐츠 출처' : 'Content Source'}:</strong> {session.source}
            <br />
            <small>{isKo ? '* DreamIT Biz 교육 콘텐츠를 기반으로 재구성하였습니다.' : '* Reorganized based on DreamIT Biz educational content.'}</small>
          </div>
        )}

        <div className="session-nav" style={{ maxWidth: 800, margin: '0 auto' }}>
          {prevSession ? (
            <Link to={`/day${prevSession.day}/${prevSession.period}`}>
              <i className="fa-solid fa-arrow-left" />
              {isKo ? prevSession.title : prevSession.titleEn}
            </Link>
          ) : <span />}
          {nextSession ? (
            <Link to={`/day${nextSession.day}/${nextSession.period}`}>
              {isKo ? nextSession.title : nextSession.titleEn}
              <i className="fa-solid fa-arrow-right" />
            </Link>
          ) : (
            <Link to="/curriculum">
              {isKo ? '커리큘럼으로 돌아가기' : 'Back to Curriculum'}
              <i className="fa-solid fa-arrow-right" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
