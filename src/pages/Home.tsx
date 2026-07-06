import { useState, useEffect, useRef } from 'react';
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

const PADLETS = [
  {
    url: 'https://padlet.com/aebon/cnu2603',
    current: true,
    badgeKo: '이번 과정', badgeEn: 'This Course',
    labelKo: '이번 교육 실습 보드', labelEn: 'This Course Practice Board',
    titleKo: '생성형 AI A to Z 특강', titleEn: 'Generative AI A to Z',
    descKo: '이번 과정에서 실습 결과물을 올리고 함께 공유하는 보드입니다. 공문서·PPT·Excel 결과물과 질문을 여기에 등록하세요.',
    descEn: 'The board for this course — upload and share your practice results, documents, slides, and questions here.',
    icon: 'fa-bolt',
  },
  {
    url: 'https://padlet.com/aebon/cnu0421',
    current: false,
    badgeKo: '지난 1회차 · 1일차', badgeEn: 'Prev. Round · Day 1',
    labelKo: '문서행정 자동화', labelEn: 'Document Admin Automation',
    titleKo: '2026.04.21 실습 보드', titleEn: 'Practice Board (Apr 21, 2026)',
    descKo: '지난 1회차 문서행정 자동화 수업의 실습 자료 보관용 보드입니다. 참고용으로 열람하세요.',
    descEn: 'Archive board from the previous round’s document-admin session. Available for reference.',
    icon: 'fa-file-lines',
  },
  {
    url: 'https://padlet.com/aebon/cnu0423',
    current: false,
    badgeKo: '지난 1회차 · 2일차', badgeEn: 'Prev. Round · Day 2',
    labelKo: '인사행정 자동화', labelEn: 'HR Admin Automation',
    titleKo: '2026.04.23 실습 보드', titleEn: 'Practice Board (Apr 23, 2026)',
    descKo: '지난 1회차 인사행정 자동화 수업의 실습 자료 보관용 보드입니다. 참고용으로 열람하세요.',
    descEn: 'Archive board from the previous round’s HR-admin session. Available for reference.',
    icon: 'fa-users-gear',
  },
];

const OUTPUTS = [
  { icon: 'fa-file-lines', title: '공문서 초안', titleEn: 'Official Documents', desc: '기안문, 통보문, 협조문 등', descEn: 'Drafts, notices, cooperation letters' },
  { icon: 'fa-file-powerpoint', title: 'PPT 보고자료', titleEn: 'PPT Reports', desc: '업무보고, 현황보고, 성과보고', descEn: 'Business, status, performance reports' },
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

  // 히어로 SVG 마우스 패럴랙스 효과
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = heroRef.current;
    if (!el || window.matchMedia('(hover: none)').matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty('--px', x.toFixed(3));
        el.style.setProperty('--py', y.toFixed(3));
      });
    };
    const onLeave = () => {
      el.style.setProperty('--px', '0');
      el.style.setProperty('--py', '0');
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <SEOHead />

      {/* Hero */}
      <section className="hero-section" ref={heroRef}>
        <div className="container hero-grid">
          <div className="hero-left">
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

          <div className="hero-right">
            <svg className="hero-illustration" viewBox="0 0 520 460" role="img" aria-label={isKo ? '문서 자동화 일러스트' : 'Document automation illustration'}>
              {/* 배경 블롭 */}
              <ellipse className="hero-blob" cx="270" cy="240" rx="215" ry="200" />
              <circle className="hero-ring hero-ring-1" cx="270" cy="235" r="150" />
              <circle className="hero-ring hero-ring-2" cx="270" cy="235" r="185" />

              {/* 입력 문서 (원본) */}
              <g className="hero-doc hero-doc-in" data-depth="14">
                <rect x="70" y="150" width="150" height="190" rx="14" />
                <rect className="doc-head" x="70" y="150" width="150" height="34" rx="14" />
                <rect className="doc-line" x="90" y="205" width="110" height="9" rx="4.5" />
                <rect className="doc-line" x="90" y="228" width="95" height="9" rx="4.5" />
                <rect className="doc-line" x="90" y="251" width="112" height="9" rx="4.5" />
                <rect className="doc-line" x="90" y="274" width="80" height="9" rx="4.5" />
                <rect className="doc-line" x="90" y="297" width="100" height="9" rx="4.5" />
              </g>

              {/* 흐름 화살표 */}
              <path className="hero-flow" d="M225 245 H295" />
              <path className="hero-flow-arrow" d="M289 238 L299 245 L289 252" />

              {/* AI 처리 노드 */}
              <g className="hero-ai" data-depth="26">
                <circle className="ai-orbit" cx="270" cy="130" r="44" />
                <circle className="ai-core" cx="270" cy="130" r="30" />
                <g className="ai-orbit-spin">
                  <circle className="ai-orbit-dot" cx="270" cy="86" r="5" />
                  <circle className="ai-orbit-dot small" cx="270" cy="174" r="3.5" />
                </g>
                <text className="ai-label" x="270" y="136" textAnchor="middle">AI</text>
              </g>
              <circle className="hero-spark s1" cx="315" cy="95" r="4" />
              <circle className="hero-spark s2" cx="230" cy="100" r="3" />
              <circle className="hero-spark s3" cx="300" cy="165" r="3" />

              {/* 출력 문서 (자동화 완료) */}
              <g className="hero-doc hero-doc-out" data-depth="20">
                <rect x="300" y="165" width="160" height="205" rx="14" />
                <rect className="doc-head-out" x="300" y="165" width="160" height="36" rx="14" />
                {/* 체크 항목 3개 */}
                <g className="doc-check c1">
                  <circle cx="326" cy="232" r="9" />
                  <path d="M322 232 l3 3 5-6" />
                </g>
                <rect className="doc-line-out" x="345" y="227" width="95" height="9" rx="4.5" />
                <g className="doc-check c2">
                  <circle cx="326" cy="266" r="9" />
                  <path d="M322 266 l3 3 5-6" />
                </g>
                <rect className="doc-line-out" x="345" y="261" width="80" height="9" rx="4.5" />
                <g className="doc-check c3">
                  <circle cx="326" cy="300" r="9" />
                  <path d="M322 300 l3 3 5-6" />
                </g>
                <rect className="doc-line-out" x="345" y="295" width="90" height="9" rx="4.5" />
                <rect className="doc-line-out dim" x="326" y="330" width="110" height="8" rx="4" />
              </g>

              {/* 떠다니는 작은 아이콘 */}
              <g className="hero-float f1" data-depth="34">
                <rect x="120" y="80" width="42" height="42" rx="11" />
                <path className="mini-icon" d="M132 96 h18 M132 103 h14 M132 110 h18" />
              </g>
              <g className="hero-float f2" data-depth="30">
                <rect x="400" y="380" width="46" height="46" rx="12" />
                <path className="mini-check" d="M411 403 l6 6 12-14" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Padlet 실습 안내 */}
      <section className="padlet-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fa-solid fa-clipboard-list" style={{ marginRight: 10 }} />
              {isKo ? '실습 패들렛(Padlet) 안내' : 'Practice Padlet Guide'}
            </h2>
            <p className="section-subtitle">
              {isKo
                ? '실습 중 만든 공문서·PPT·Excel 결과물과 질문을 패들렛에 올려 함께 공유합니다.'
                : 'Share your practice outputs — documents, slides, Excel, and questions — on Padlet.'}
            </p>
          </div>

          <div className="padlet-notice">
            <i className="fa-solid fa-circle-info" />
            <p>
              {isKo ? (
                <>
                  <strong>이번 과정 수강생은 아래 ‘이번 교육 실습 보드’를 사용</strong>하세요.
                  지난 1회차 보드는 참고 자료로 열람할 수 있습니다. 버튼을 누르면 새 창에서 패들렛이 열립니다.
                </>
              ) : (
                <>
                  <strong>Students in this course should use the “This Course Practice Board” below.</strong>{' '}
                  The previous round’s boards are available for reference. Each button opens Padlet in a new tab.
                </>
              )}
            </p>
          </div>

          <div className="padlet-grid">
            {PADLETS.map(p => (
              <a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`padlet-card${p.current ? ' padlet-card--current' : ''}`}
              >
                <div className="padlet-card-top">
                  <div className="padlet-card-icon"><i className={`fa-solid ${p.icon}`} /></div>
                  <span className={`padlet-badge${p.current ? ' padlet-badge--current' : ''}`}>
                    {isKo ? p.badgeKo : p.badgeEn}
                  </span>
                </div>
                <h3>{isKo ? p.labelKo : p.labelEn}</h3>
                <p className="padlet-card-sub">{isKo ? p.titleKo : p.titleEn}</p>
                <p className="padlet-card-desc">{isKo ? p.descKo : p.descEn}</p>
                <span className="padlet-card-btn">
                  {isKo ? '패들렛 열기' : 'Open Padlet'}
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </span>
              </a>
            ))}
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
