import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

interface SiteItem {
  name: string;
  nameEn: string;
  url: string;
  icon: string;
  iconStyle?: string; // 기본 fa-solid, 브랜드 로고는 fa-brands
  descKo: string;
  descEn: string;
  category: 'ai' | 'research' | 'company';
  tags?: string[];
}

const SITES: SiteItem[] = [
  {
    name: 'ChatGPT',
    nameEn: 'ChatGPT',
    url: 'https://chat.openai.com',
    icon: 'fa-robot',
    descKo: 'OpenAI의 대화형 AI. 텍스트 생성, 번역, 코딩, 분석 등 다양한 작업을 수행합니다.',
    descEn: 'OpenAI\'s conversational AI for text generation, translation, coding, and analysis.',
    category: 'ai',
  },
  {
    name: 'Claude',
    nameEn: 'Claude',
    url: 'https://claude.ai',
    icon: 'fa-brain',
    descKo: 'Anthropic의 AI 어시스턴트. 긴 문서 분석, 논리적 추론, 학술 작문에 강점이 있습니다.',
    descEn: 'Anthropic\'s AI assistant excelling at document analysis, logical reasoning, and academic writing.',
    category: 'ai',
  },
  {
    name: 'Gemini',
    nameEn: 'Gemini',
    url: 'https://gemini.google.com',
    icon: 'fa-gem',
    descKo: 'Google의 AI. 검색 연동, 이미지 분석, 멀티모달 기능을 제공합니다.',
    descEn: 'Google\'s AI with search integration, image analysis, and multimodal capabilities.',
    category: 'ai',
  },
  {
    name: 'Copilot',
    nameEn: 'Copilot',
    url: 'https://copilot.microsoft.com',
    icon: 'fa-microchip',
    descKo: 'Microsoft의 AI 코파일럿. Office 통합, 웹 검색, 이미지 생성을 지원합니다.',
    descEn: 'Microsoft\'s AI copilot with Office integration, web search, and image generation.',
    category: 'ai',
  },
  {
    name: 'Perplexity AI',
    nameEn: 'Perplexity AI',
    url: 'https://www.perplexity.ai',
    icon: 'fa-magnifying-glass',
    descKo: 'AI 기반 검색 엔진. 실시간 웹 검색과 출처 기반 답변을 제공합니다.',
    descEn: 'AI-powered search engine providing real-time web search with source-backed answers.',
    category: 'ai',
  },
  {
    name: 'NotebookLM',
    nameEn: 'NotebookLM',
    url: 'https://notebooklm.google.com',
    icon: 'fa-book-open-reader',
    descKo: 'Google의 AI 노트북. 문서를 업로드하면 요약, Q&A, 연결 분석을 수행합니다.',
    descEn: 'Google\'s AI notebook for document summarization, Q&A, and connection analysis.',
    category: 'ai',
  },
  {
    name: 'Genspark · 젠스파크',
    nameEn: 'Genspark',
    url: 'https://www.genspark.ai',
    icon: 'fa-bolt',
    descKo: 'AI 에이전트 기반 플랫폼. 자율 에이전트가 검색·심층조사부터 문서·슬라이드·시트 생성까지 대신 수행합니다.',
    descEn: 'AI agent platform where autonomous agents handle search, deep research, and document/slide/sheet generation.',
    category: 'ai',
  },
  {
    name: 'ChatGPT 활용 · 드림아이티',
    nameEn: 'ChatGPT Guide · DreamIT',
    url: 'https://chatgpt.dreamitbiz.com',
    icon: 'fa-robot',
    descKo: '드림아이티비즈가 운영하는 ChatGPT 활용 학습 사이트입니다.',
    descEn: 'A DreamIT Biz learning site for using ChatGPT effectively.',
    category: 'ai',
  },
  {
    name: 'Claude 활용 · 드림아이티',
    nameEn: 'Claude Guide · DreamIT',
    url: 'https://claude.dreamitbiz.com',
    icon: 'fa-brain',
    descKo: '드림아이티비즈가 운영하는 Claude 활용 학습 사이트입니다.',
    descEn: 'A DreamIT Biz learning site for using Claude effectively.',
    category: 'ai',
  },
  {
    name: 'Gemini 활용 · 드림아이티',
    nameEn: 'Gemini Guide · DreamIT',
    url: 'https://gemini.dreamitbiz.com',
    icon: 'fa-gem',
    descKo: '드림아이티비즈가 운영하는 Gemini 활용 학습 사이트입니다.',
    descEn: 'A DreamIT Biz learning site for using Gemini effectively.',
    category: 'ai',
  },
  {
    name: 'Genspark 활용 · 드림아이티',
    nameEn: 'Genspark Guide · DreamIT',
    url: 'https://genspark.dreamitbiz.com',
    icon: 'fa-bolt',
    descKo: '드림아이티비즈가 운영하는 Genspark 활용 학습 사이트입니다.',
    descEn: 'A DreamIT Biz learning site for using Genspark effectively.',
    category: 'ai',
  },
  {
    name: 'Planning · 경영기획',
    nameEn: 'Planning · Business Planning',
    url: 'https://planning.dreamitbiz.com',
    icon: 'fa-chart-pie',
    descKo: '사업계획·전략기획·예산관리·경영분석 등 경영기획 실무를 학습하는 플랫폼입니다.',
    descEn: 'A platform for business planning practice: business plans, strategy, budgeting, and management analysis.',
    category: 'research',
    tags: ['사업계획', '전략기획', '예산관리'],
  },
  {
    name: 'Study · 공부 잘하는 방법',
    nameEn: 'Study · How to Study Well',
    url: 'https://study.dreamitbiz.com',
    icon: 'fa-user-graduate',
    descKo: '효과적인 학습 노하우를 배우는 종합 학습 플랫폼입니다.',
    descEn: 'A comprehensive platform for learning effective study know-how.',
    category: 'research',
    tags: ['학습법', '공부습관', '효율학습'],
  },
  {
    name: 'DreamIT Research · 조사방법론',
    nameEn: 'DreamIT Research · Methodology',
    url: 'https://research.dreamitbiz.com',
    icon: 'fa-magnifying-glass-chart',
    descKo: '연구설계·표본추출·측정·설문조사·실험연구·질적연구·연구윤리까지 사회과학 조사방법론 학습.',
    descEn: 'Social science research methodology: design, sampling, measurement, surveys, experiments, qualitative research, ethics.',
    category: 'research',
    tags: ['조사방법론', '연구설계', '연구윤리'],
  },
  {
    name: 'DreamIT Statistics · 통계학',
    nameEn: 'DreamIT Statistics',
    url: 'https://statistics.dreamitbiz.com',
    icon: 'fa-chart-column',
    descKo: '기술통계·확률론·추론통계·가설검정·회귀분석·분산분석·베이지안까지 체계적으로 학습.',
    descEn: 'Systematic statistics: descriptive, probability, inference, hypothesis testing, regression, ANOVA, Bayesian.',
    category: 'research',
    tags: ['통계학', '가설검정', '회귀분석'],
  },
  {
    name: 'DreamIT 프레젠테이션',
    nameEn: 'DreamIT Presentation',
    url: 'https://presentation.dreamitbiz.com',
    icon: 'fa-file-powerpoint',
    descKo: 'PPT·스피치·시각디자인·스토리텔링과 미리캔버스·캔바·파워포인트 등 발표 도구 활용법.',
    descEn: 'Presentation skills: PPT, speech, visual design, storytelling, and tools like Canva and PowerPoint.',
    category: 'research',
    tags: ['발표', '시각자료', '스토리텔링'],
  },
  {
    name: 'AI Literacy · AI 리터러시',
    nameEn: 'AI Literacy',
    url: 'https://ai-literacy.dreamitbiz.com',
    icon: 'fa-lightbulb',
    descKo: 'AI 기초·활용·윤리·미래를 다루는 AI 시대 필수 교양 학습 플랫폼.',
    descEn: 'Essential AI-era literacy platform covering AI basics, applications, ethics, and the future.',
    category: 'research',
    tags: ['AI 교양', '활용', '윤리'],
  },
  {
    name: 'DreamIT Biz',
    nameEn: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com',
    icon: 'fa-building',
    descKo: '드림아이티비즈 본사이트. IT서비스, 교육, 출판, 컨설팅 종합 플랫폼입니다.',
    descEn: 'DreamIT Biz main site. IT services, education, publishing, and consulting platform.',
    category: 'company',
  },
  {
    name: '교수학습 AI 도구',
    nameEn: 'AI Teaching Tools',
    url: 'https://teaching.dreamitbiz.com',
    icon: 'fa-chalkboard-user',
    descKo: '교수학습에 특화된 AI 도구 모음. 강의계획서, 루브릭, 과제 생성기 등을 제공합니다.',
    descEn: 'AI tools specialized for teaching. Syllabus, rubric, and assignment generators.',
    category: 'company',
  },
  {
    name: '대학교육 AI',
    nameEn: 'University AI',
    url: 'https://university.dreamitbiz.com',
    icon: 'fa-graduation-cap',
    descKo: '대학 교육에 특화된 AI 활용 가이드와 교육 콘텐츠를 제공합니다.',
    descEn: 'AI utilization guides and educational content specialized for university education.',
    category: 'company',
  },
];

export default function RecommendedSites(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const aiSites = SITES.filter(s => s.category === 'ai');
  const researchSites = SITES.filter(s => s.category === 'research');
  const companySites = SITES.filter(s => s.category === 'company');

  return (
    <>
      <SEOHead
        title={isKo ? '추천사이트' : 'Recommended Sites'}
        path="/recommended"
      />

      <section className="page-header">
        <div className="container">
          <h1>{isKo ? '추천사이트' : 'Recommended Sites'}</h1>
          <p>{isKo
            ? '교육과 업무에 유용한 AI 서비스와 관련 사이트를 소개합니다.'
            : 'Useful AI services and related sites for education and work.'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* AI Services */}
          <div className="recommended-section">
            <h2 className="recommended-section-title">
              <i className="fa-solid fa-wand-magic-sparkles" />
              {isKo ? 'AI 서비스' : 'AI Services'}
            </h2>
            <div className="recommended-grid">
              {aiSites.map(site => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`recommended-card${site.url.includes('dreamitbiz.com') ? ' recommended-card--own' : ''}`}
                >
                  <div className="recommended-card-icon">
                    <i className={`${site.iconStyle || 'fa-solid'} ${site.icon}`} />
                  </div>
                  <div className="recommended-card-content">
                    <h3>{isKo ? site.name : site.nameEn}</h3>
                    <p>{isKo ? site.descKo : site.descEn}</p>
                    {site.tags && site.tags.length > 0 && (
                      <div className="recommended-card-tags">
                        {site.tags.map((t) => (
                          <span className="rc-tag" key={t}>{t}</span>
                        ))}
                      </div>
                    )}
                    <span className="recommended-card-url">
                      {site.url.replace('https://', '')}
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Learning & Research */}
          <div className="recommended-section">
            <h2 className="recommended-section-title">
              <i className="fa-solid fa-book-open" />
              {isKo ? '학습·연구' : 'Learning & Research'}
            </h2>
            <div className="recommended-grid">
              {researchSites.map(site => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="recommended-card"
                >
                  <div className="recommended-card-icon">
                    <i className={`${site.iconStyle || 'fa-solid'} ${site.icon}`} />
                  </div>
                  <div className="recommended-card-content">
                    <h3>{isKo ? site.name : site.nameEn}</h3>
                    <p>{isKo ? site.descKo : site.descEn}</p>
                    {site.tags && site.tags.length > 0 && (
                      <div className="recommended-card-tags">
                        {site.tags.map((t) => (
                          <span className="rc-tag" key={t}>{t}</span>
                        ))}
                      </div>
                    )}
                    <span className="recommended-card-url">
                      {site.url.replace('https://', '')}
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Company Sites */}
          <div className="recommended-section">
            <h2 className="recommended-section-title">
              <i className="fa-solid fa-globe" />
              {isKo ? '관련 사이트' : 'Related Sites'}
            </h2>
            <div className="recommended-grid">
              {companySites.map(site => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="recommended-card"
                >
                  <div className="recommended-card-icon company">
                    <i className={`${site.iconStyle || 'fa-solid'} ${site.icon}`} />
                  </div>
                  <div className="recommended-card-content">
                    <h3>{isKo ? site.name : site.nameEn}</h3>
                    <p>{isKo ? site.descKo : site.descEn}</p>
                    {site.tags && site.tags.length > 0 && (
                      <div className="recommended-card-tags">
                        {site.tags.map((t) => (
                          <span className="rc-tag" key={t}>{t}</span>
                        ))}
                      </div>
                    )}
                    <span className="recommended-card-url">
                      {site.url.replace('https://', '')}
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
