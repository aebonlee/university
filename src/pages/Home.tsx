import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { CURRICULUM, SessionInfo } from '../config/site';
import SEOHead from '../components/SEOHead';
import FeatureCard from '../components/FeatureCard';

/* Map session to materials topic anchor */
function sessionLink(s: SessionInfo): string {
  if (s.day === 1) {
    const day1Map: Record<number, string> = {
      1: '/materials/basic#ai-basics',
      2: '/materials/basic#prompt-engineering',
      3: '/materials/document#official-documents',
      4: '/materials/document#meeting-reports',
      5: '/materials/document#ppt-structure',
      6: '/materials/document#ppt-design',
      7: '/materials/document#excel-analysis',
      8: '/materials/document#doc-practice',
    };
    return day1Map[s.period] || '/materials/document';
  }
  const day2Map: Record<number, string> = {
    1: '/materials/hr#hr-ai',
    2: '/materials/hr#hr-documents',
    3: '/materials/hr#attendance-excel',
    4: '/materials/hr#hr-report',
    5: '/materials/hr#work-template',
    6: '/materials/hr#work-automation',
    7: '/materials/hr#hr-practice',
    8: '/materials/hr#results-sharing',
  };
  return day2Map[s.period] || '/materials/hr';
}

const TOOLS = [
  { name: 'ChatGPT', icon: 'fa-robot', desc: 'OpenAI' },
  { name: 'Gemini', icon: 'fa-gem', desc: 'Google' },
  { name: 'Claude', icon: 'fa-brain', desc: 'Anthropic' },
  { name: 'HWP', icon: 'fa-file-word', desc: '한글 문서' },
  { name: 'PowerPoint', icon: 'fa-file-powerpoint', desc: 'MS Office' },
  { name: 'Excel', icon: 'fa-file-excel', desc: 'MS Office' },
  { name: 'Gamma', icon: 'fa-wand-magic-sparkles', desc: 'AI PPT' },
  { name: 'Canva', icon: 'fa-palette', desc: '디자인' },
  { name: 'Perplexity', icon: 'fa-magnifying-glass', desc: 'AI 검색' },
];

const OUTPUTS = [
  { icon: 'fa-file-lines', title: '공문서 초안', titleEn: 'Official Documents', desc: '기안문, 통보문, 협조문 등', descEn: 'Drafts, notices, cooperation letters' },
  { icon: 'fa-presentation-screen', title: 'PPT 보고자료', titleEn: 'PPT Reports', desc: '업무보고, 현황보고, 성과보고', descEn: 'Business, status, performance reports' },
  { icon: 'fa-table', title: 'Excel 분석표', titleEn: 'Excel Analysis', desc: '근태 분석, 인사 통계, 데이터 정리', descEn: 'Attendance, HR stats, data cleanup' },
  { icon: 'fa-clipboard-list', title: '회의록·보고서', titleEn: 'Minutes & Reports', desc: '회의록 요약, 업무 보고서 작성', descEn: 'Meeting minutes, work reports' },
  { icon: 'fa-drafting-compass', title: '업무 템플릿', titleEn: 'Work Templates', desc: '프롬프트 라이브러리, 자동화 템플릿', descEn: 'Prompt library, automation templates' },
  { icon: 'fa-gears', title: '자동화 워크플로우', titleEn: 'Automation Workflow', desc: '반복 업무 자동화 설계', descEn: 'Repetitive task automation design' },
];

export default function Home() {
  const { language, t } = useLanguage();
  const isKo = language === 'ko';
  const [activeDay, setActiveDay] = useState(1);

  const daySessions = CURRICULUM.filter(s => s.day === activeDay);
  const features = t('features.items');

  return (
    <>
      <SEOHead />

      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-badge">
            <i className="fa-solid fa-graduation-cap" /> {t('hero.badge')}
          </div>
          <h1 className="hero-title">
            {t('hero.title')}
            <span className="hero-title-highlight">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-actions">
            <Link to="/materials/basic" className="btn btn-primary-large">{t('hero.cta')}</Link>
            <Link to="/tools" className="btn btn-secondary" style={{ borderColor: '#fff', color: '#fff' }}>{t('hero.ctaSecondary')}</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('features.title')}</h2>
            <p className="section-subtitle">{t('features.subtitle')}</p>
          </div>
          <div className="features-grid">
            {Array.isArray(features) && features.map((f: any, i: number) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} description={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Summary */}
      <section className="curriculum-summary-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('curriculum.title')}</h2>
            <p className="section-subtitle">{t('curriculum.subtitle')}</p>
          </div>
          <div className="curriculum-tabs">
            <button className={`curriculum-tab ${activeDay === 1 ? 'active' : ''}`} onClick={() => setActiveDay(1)}>
              {t('curriculum.day1')}
            </button>
            <button className={`curriculum-tab ${activeDay === 2 ? 'active' : ''}`} onClick={() => setActiveDay(2)}>
              {t('curriculum.day2')}
            </button>
          </div>
          <div className="curriculum-summary-grid">
            {daySessions.map(session => (
              <Link to={sessionLink(session)} className="curriculum-card" key={session.id}>
                <div className="curriculum-card-header">
                  <h4>{isKo ? session.title : session.titleEn}</h4>
                </div>
                <p>{session.description}</p>
                <div className="curriculum-card-tools">
                  {session.tools.map(tool => <span key={tool} className="tool-tag">{tool}</span>)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('highlights.title')}</h2>
            <p className="section-subtitle">{t('highlights.subtitle')}</p>
          </div>
          <div className="highlights-grid">
            {(t('highlights.items') as any[])?.map((h: any, i: number) => (
              <FeatureCard key={i} icon={h.icon} title={h.title} description={h.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="tools-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('tools.title')}</h2>
            <p className="section-subtitle">{t('tools.subtitle')}</p>
          </div>
          <div className="tools-grid">
            {TOOLS.map(tool => (
              <div className="tool-card" key={tool.name}>
                <div className="tool-card-icon"><i className={`fa-solid ${tool.icon}`} /></div>
                <h4>{tool.name}</h4>
                <p>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section className="outputs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('outputs.title')}</h2>
            <p className="section-subtitle">{t('outputs.subtitle')}</p>
          </div>
          <div className="outputs-grid">
            {OUTPUTS.map(o => (
              <div className="output-card" key={o.title}>
                <div className="output-card-icon"><i className={`fa-solid ${o.icon}`} /></div>
                <h4>{isKo ? o.title : o.titleEn}</h4>
                <p>{isKo ? o.desc : o.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.description')}</p>
          <Link to="/materials/basic" className="btn btn-primary-large">{t('cta.button')}</Link>
        </div>
      </section>
    </>
  );
}
