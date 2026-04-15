import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const AI_TOOLS = [
  { name: 'ChatGPT', icon: 'fa-robot', url: 'https://chat.openai.com', descKo: 'OpenAI의 대화형 AI. 범용적인 문서 작성, 코드 생성, 아이디어 브레인스토밍에 강합니다.', descEn: 'OpenAI conversational AI. Strong in document writing, code generation, and brainstorming.', badge: '필수', badgeEn: 'Essential' },
  { name: 'Gemini', icon: 'fa-gem', url: 'https://gemini.google.com', descKo: 'Google의 AI. 검색 연동과 멀티모달(이미지+텍스트) 분석에 강합니다.', descEn: 'Google AI. Strong in search integration and multimodal analysis.', badge: '필수', badgeEn: 'Essential' },
  { name: 'Claude', icon: 'fa-brain', url: 'https://claude.ai', descKo: 'Anthropic의 AI. 긴 문서 분석, 정확한 보고서 작성, 안전한 응답에 강합니다.', descEn: 'Anthropic AI. Strong in long document analysis and accurate report writing.', badge: '필수', badgeEn: 'Essential' },
  { name: 'Gamma', icon: 'fa-wand-magic-sparkles', url: 'https://gamma.app', descKo: 'AI 기반 프레젠테이션 자동 생성 도구. PPT를 빠르게 만들 수 있습니다.', descEn: 'AI-based presentation auto-generation tool.', badge: '추천', badgeEn: 'Recommended' },
  { name: 'Canva', icon: 'fa-palette', url: 'https://canva.com', descKo: '디자인 플랫폼. PPT, 포스터, 인포그래픽 등 시각자료 제작에 활용합니다.', descEn: 'Design platform for presentations, posters, and infographics.', badge: '추천', badgeEn: 'Recommended' },
  { name: 'Perplexity', icon: 'fa-magnifying-glass', url: 'https://perplexity.ai', descKo: 'AI 검색 엔진. 출처가 명시된 정확한 정보 검색에 활용합니다.', descEn: 'AI search engine with cited sources.', badge: '선택', badgeEn: 'Optional' },
];

export default function ToolsGuide() {
  const { language, t } = useLanguage();
  const isKo = language === 'ko';

  return (
    <div className="guide-page">
      <SEOHead title={t('nav.tools')} />
      <div className="container">
        <div className="section-header" style={{ marginTop: 20 }}>
          <h1 className="section-title">{t('tools.title')}</h1>
          <p className="section-subtitle">{t('tools.subtitle')}</p>
        </div>

        <div className="tool-guide-grid">
          {AI_TOOLS.map(tool => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tool-guide-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="tool-guide-icon">
                <i className={`fa-solid ${tool.icon}`} />
              </div>
              <h3>{tool.name}</h3>
              <p>{isKo ? tool.descKo : tool.descEn}</p>
              <span className={`badge ${tool.badge === '필수' || tool.badgeEn === 'Essential' ? 'badge-primary' : ''}`}>
                {isKo ? tool.badge : tool.badgeEn}
              </span>
            </a>
          ))}
        </div>

        {/* AI 도구 활용 팁 */}
        <div className="section-header" style={{ marginTop: 64 }}>
          <h2 className="section-title">{isKo ? 'AI 도구 활용 팁' : 'AI Tool Usage Tips'}</h2>
          <p className="section-subtitle">{isKo ? '효과적인 AI 활용을 위한 핵심 가이드' : 'Essential guide for effective AI usage'}</p>
        </div>

        <div className="tool-tips-grid">
          {/* 1. 용도별 도구 선택 */}
          <div className="tool-tip-card">
            <div className="tool-tip-header">
              <div className="tool-tip-icon"><i className="fa-solid fa-crosshairs" /></div>
              <h3>{isKo ? '용도별 도구 선택' : 'Choose Tool by Purpose'}</h3>
            </div>
            <div className="tool-tip-body">
              <div className="tool-tip-row">
                <span className="tool-tip-label">{isKo ? '공문서·보고서 작성' : 'Documents & Reports'}</span>
                <span className="tool-tip-value">ChatGPT / Claude</span>
              </div>
              <div className="tool-tip-row">
                <span className="tool-tip-label">{isKo ? '정보 검색·팩트체크' : 'Search & Fact-check'}</span>
                <span className="tool-tip-value">Gemini / Perplexity</span>
              </div>
              <div className="tool-tip-row">
                <span className="tool-tip-label">{isKo ? 'PPT 자동 생성' : 'Auto PPT Generation'}</span>
                <span className="tool-tip-value">Gamma</span>
              </div>
              <div className="tool-tip-row">
                <span className="tool-tip-label">{isKo ? '디자인·시각화' : 'Design & Visualization'}</span>
                <span className="tool-tip-value">Canva</span>
              </div>
              <div className="tool-tip-row">
                <span className="tool-tip-label">{isKo ? '긴 문서 분석' : 'Long Document Analysis'}</span>
                <span className="tool-tip-value">Claude <small>(200K)</small></span>
              </div>
            </div>
          </div>

          {/* 2. AI 활용 주의사항 */}
          <div className="tool-tip-card warning">
            <div className="tool-tip-header">
              <div className="tool-tip-icon warning"><i className="fa-solid fa-triangle-exclamation" /></div>
              <h3>{isKo ? 'AI 활용 주의사항' : 'AI Usage Precautions'}</h3>
            </div>
            <div className="tool-tip-body">
              <ul className="tool-tip-list">
                <li><i className="fa-solid fa-xmark" /> {isKo ? '개인정보(주민번호, 계좌번호 등)를 AI에 입력하지 마세요' : 'Never input personal info (SSN, account numbers) into AI'}</li>
                <li><i className="fa-solid fa-check" /> {isKo ? 'AI 생성 결과는 반드시 사실 여부를 확인하세요' : 'Always verify AI-generated results for accuracy'}</li>
                <li><i className="fa-solid fa-xmark" /> {isKo ? '기밀 업무 자료는 AI에 입력하지 마세요' : 'Never input confidential work data into AI'}</li>
                <li><i className="fa-solid fa-user" /> {isKo ? 'AI는 도구입니다 — 최종 판단은 사람이 합니다' : 'AI is a tool — final judgment is always yours'}</li>
              </ul>
            </div>
          </div>

          {/* 3. 효과적인 활용 순서 */}
          <div className="tool-tip-card steps">
            <div className="tool-tip-header">
              <div className="tool-tip-icon steps"><i className="fa-solid fa-list-ol" /></div>
              <h3>{isKo ? '효과적인 활용 순서' : 'Effective Usage Steps'}</h3>
            </div>
            <div className="tool-tip-body">
              <div className="tool-tip-steps">
                <div className="tool-tip-step"><span className="step-num">1</span>{isKo ? '업무 목적과 결과물 형태를 먼저 정의합니다' : 'Define purpose and output format first'}</div>
                <div className="tool-tip-step"><span className="step-num">2</span>{isKo ? '적합한 AI 도구를 선택합니다' : 'Select appropriate AI tool'}</div>
                <div className="tool-tip-step"><span className="step-num">3</span>{isKo ? 'RCF 프레임워크로 프롬프트를 작성합니다' : 'Write prompt using RCF framework'}</div>
                <div className="tool-tip-step"><span className="step-num">4</span>{isKo ? '결과를 검토하고 필요시 프롬프트를 개선합니다' : 'Review results and improve prompt if needed'}</div>
                <div className="tool-tip-step"><span className="step-num">5</span>{isKo ? '최종 결과물에 반영하고 검수합니다' : 'Apply to final output and verify'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
