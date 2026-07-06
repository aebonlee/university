import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

/* 전남대 aioni 등에서 사용할 수 있는 제공사별 대표 모델 (2026.07 기준) */
const MODEL_PROVIDERS = [
  {
    provider: 'Upstage · Solar', icon: 'fa-flag',
    tagKo: '국산 · 한국어 특화', tagEn: 'Korean-first',
    models: 'Solar Pro3 · Pro2 · Mini',
    descKo: '한국어·한글 공문서에 최적화된 국산 모델. 문서 OCR·표/정보 추출(Document AI)에 강점.',
    descEn: 'Korean-optimized domestic model; strong at HWP documents and Document AI (OCR/extraction).',
  },
  {
    provider: 'OpenAI · ChatGPT', icon: 'fa-robot',
    tagKo: '범용 표준 · 에이전트', tagEn: 'Versatile standard',
    models: 'GPT-5.x · o-시리즈(추론) · Codex',
    descKo: '가장 범용적. 문서 작성·코드·멀티모달·에이전트 생태계가 넓습니다.',
    descEn: 'Most versatile; broad ecosystem for writing, code, multimodal, and agents.',
  },
  {
    provider: 'Google · Gemini', icon: 'fa-gem',
    tagKo: '멀티모달 · 검색 · 초장문', tagEn: 'Multimodal · long context',
    models: 'Gemini 3.1 Pro · 3 Flash',
    descKo: '이미지·PDF를 네이티브로 처리하고, 구글 검색 그라운딩으로 최신 정보에 강합니다.',
    descEn: 'Native image/PDF handling; strong on current info via Google Search grounding.',
  },
  {
    provider: 'Anthropic · Claude', icon: 'fa-brain',
    tagKo: '장문 · 지시 준수 · 안전', tagEn: 'Long-context · faithful',
    models: 'Opus 4.8 · Sonnet 5 · Haiku 4.5',
    descKo: '긴 문맥과 정확한 지시 준수, 안전성이 강점. 학술·행정 문서와 코드에 강합니다.',
    descEn: 'Long context, faithful instruction-following, safety; great for admin docs and code.',
  },
  {
    provider: 'Meta Llama · Mistral', icon: 'fa-cubes',
    tagKo: '오픈웨이트', tagEn: 'Open-weight',
    models: 'Llama 4 Scout · Mistral',
    descKo: '가중치가 공개된 오픈 모델. 자체 구축·파인튜닝·비용 통제에 유리합니다.',
    descEn: 'Open-weight models; good for self-hosting, fine-tuning, and cost control.',
  },
];

/* aioni 에이전트 — 나만의 AI 비서 구성 요소 */
const AGENT_FEATURES = [
  { icon: 'fa-file-lines', nameKo: '기본 템플릿', nameEn: 'Base Template', descKo: '새 대화에 자동 적용되는 개인 지침. 예: "공문체·존댓말로 답해줘"를 저장해두면 매번 쓰지 않아도 됩니다.', descEn: 'Personal instructions auto-applied to new chats (e.g., "answer in formal official tone").' },
  { icon: 'fa-puzzle-piece', nameKo: '스킬', nameEn: 'Skills', descKo: '자주 하는 작업을 스킬로 등록해 재사용. 직접 추가하거나 AI가 만들어 줍니다.', descEn: 'Register frequent tasks as reusable skills — add your own or let AI create them.' },
  { icon: 'fa-plug', nameKo: '커넥터', nameEn: 'Connectors', descKo: '외부 서비스·데이터와 연결. AI가 알맞은 커넥터를 찾아줄 수도 있습니다.', descEn: 'Connect external services/data; AI can help find the right connector.' },
  { icon: 'fa-gears', nameKo: '자동화', nameEn: 'Automations', descKo: '반복 업무를 자동 실행하도록 등록. 직접 만들거나 AI가 설계해 줍니다.', descEn: 'Register repetitive tasks to run automatically — build your own or let AI design them.' },
];

const AGENT_CHANNELS = [
  { icon: 'fa-brands fa-telegram', nameKo: '텔레그램', nameEn: 'Telegram', descKo: '연결 후 시작 버튼 한 번이면 비서 봇과 대화하고 결과를 받습니다.', descEn: 'Connect, tap start once — chat with the bot and receive results.', two: true },
  { icon: 'fa-brands fa-slack', nameKo: '슬랙', nameEn: 'Slack', descKo: '워크스페이스를 고르고 허용하면 연결됩니다(어느 워크스페이스든 가능).', descEn: 'Pick a workspace and allow — works with any workspace.', two: true },
  { icon: 'fa-solid fa-comment', nameKo: '카카오톡', nameEn: 'KakaoTalk', descKo: '카카오 로그인에 동의하면 내 카톡으로 알림 수신 (알림 전용 · 작업 지시는 불가).', descEn: 'Agree to Kakao login to get notifications (notify-only — cannot issue tasks).', two: false },
];

/* aioni Labs — 부가 AI 기능 */
const LABS_FEATURES = [
  { icon: 'fa-file-word', nameKo: '문서 작성', nameEn: 'Document Writing', badge: 'New', descKo: '한글(HWP)·워드(DOCX) 초안 작성 도우미. 공문·보고서 초안을 바로 문서 형식으로.', descEn: 'Drafts HWP/DOCX documents — official docs and reports in native format.' },
  { icon: 'fa-file-lines', nameKo: '텍스트 추출(OCR)', nameEn: 'OCR', badge: 'New', descKo: '이미지 속 글자를 텍스트로 변환. 스캔한 공문·표를 편집 가능하게.', descEn: 'Turns text in images into editable text — scanned documents/tables.' },
  { icon: 'fa-language', nameKo: '문서 번역', nameEn: 'Doc Translation', badge: 'New', descKo: '문서를 업로드하면 자동 번역. 유학생 안내문·대외 공문에 활용.', descEn: 'Upload a document for automatic translation — notices for intl. students, external letters.' },
  { icon: 'fa-table', nameKo: 'AI 시트', nameEn: 'AI Sheet', badge: 'Beta', descKo: '표 데이터를 AI가 자동 작성·편집하는 스프레드시트. 명단·근태 표에 활용.', descEn: 'AI spreadsheet that fills/edits table data — rosters, attendance.' },
  { icon: 'fa-file-powerpoint', nameKo: 'AI 슬라이드', nameEn: 'AI Slides', badge: '', descKo: '간단한 입력만으로 PPT 목차·초안 자동 생성. 보고 자료 초안을 빠르게.', descEn: 'Auto-generates PPT outline/draft from a short input — quick report decks.' },
  { icon: 'fa-book-open', nameKo: '문서검색(RAG)', nameEn: 'Doc Search (RAG)', badge: '', descKo: '업로드한 문서를 근거로 정확한 답변. 방대한 규정집에서 근거 조항 찾기.', descEn: 'Answers grounded in your uploaded documents — find clauses in large rulebooks.' },
  { icon: 'fa-magnifying-glass', nameKo: '지식 검색(Perplexity)', nameEn: 'Knowledge Search', badge: '', descKo: '실시간 정보 검색과 출처가 있는 빠른 답변. 최신 규정·사례 확인.', descEn: 'Real-time search with cited answers — check latest rules/cases.' },
  { icon: 'fa-microphone-lines', nameKo: '대화 기록(음성 요약)', nameEn: 'Voice Summary', badge: '', descKo: '음성 파일을 업로드하면 내용을 요약하고 필요한 정보를 추출. 회의 녹음 → 회의록.', descEn: 'Upload audio to summarize and extract info — recording → minutes.' },
  { icon: 'fa-pen-ruler', nameKo: '캔버스', nameEn: 'Canvas', badge: '', descKo: '문서를 별도 화면에서 정리·편집하고 복사·다운로드하는 작업 공간.', descEn: 'A workspace to organize/edit a document and copy/download it.' },
  { icon: 'fa-robot', nameKo: '에이전트 빌더', nameEn: 'Agent Builder', badge: 'Beta', descKo: '요청한 작업을 단계별로 자동 수행하도록 설계하는 AI 비서.', descEn: 'Design an AI assistant that performs your task step by step.' },
  { icon: 'fa-image', nameKo: '이미지 생성', nameEn: 'Image Gen', badge: 'Update', descKo: '단어와 문구만으로 원하는 이미지 생성. 홍보물·안내문 삽화에 활용.', descEn: 'Generate images from words — illustrations for promos/notices.' },
  { icon: 'fa-volume-high', nameKo: 'TTS(음성 변환)', nameEn: 'TTS', badge: 'Beta', descKo: '텍스트를 자연스러운 음성으로 변환. 안내 방송·교육 자료 음성화.', descEn: 'Turns text into natural speech — announcements, learning audio.' },
  { icon: 'fa-film', nameKo: '영상 생성', nameEn: 'Video Gen', badge: '', descKo: '텍스트 입력만으로 원하는 영상 생성. 홍보 영상 시안 제작.', descEn: 'Generate video from text — promo video drafts.' },
];

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

        {/* 전남대 AI 활용 플랫폼 (aioni) + 제공사별 모델 */}
        <div className="section-header" style={{ marginTop: 64 }}>
          <h2 className="section-title">{isKo ? '전남대 AI 활용 플랫폼 · 제공사별 모델' : 'CNU AI Platform · Models by Provider'}</h2>
          <p className="section-subtitle">{isKo ? '전남대학교 자체 AI 플랫폼과, 그 안에서 고를 수 있는 주요 모델을 안내합니다' : 'The CNU AI platform and the main models you can choose within it'}</p>
        </div>

        <a
          href="https://aioni.jnu.ac.kr/"
          target="_blank"
          rel="noopener noreferrer"
          className="aioni-banner"
        >
          <div className="aioni-banner-icon"><i className="fa-solid fa-graduation-cap" /></div>
          <div className="aioni-banner-text">
            <strong>AI for All @CNU — aioni <span className="aioni-url">aioni.jnu.ac.kr</span></strong>
            <p>{isKo
              ? '전남대학교 자체 AI 종합 플랫폼. 교내 구성원이 로그인 한 번으로 여러 제공사의 AI 모델(아래)을 한 곳에서 골라 사용할 수 있습니다.'
              : "Chonnam National University's own AI platform — sign in once and use models from multiple providers (below) in one place."}</p>
          </div>
          <i className="fa-solid fa-arrow-up-right-from-square aioni-banner-go" />
        </a>

        <div className="model-provider-grid">
          {MODEL_PROVIDERS.map(m => (
            <div key={m.provider} className="model-provider-card">
              <div className="model-provider-head">
                <div className="model-provider-icon"><i className={`fa-solid ${m.icon}`} /></div>
                <div>
                  <h3>{m.provider}</h3>
                  <span className="model-provider-tag">{isKo ? m.tagKo : m.tagEn}</span>
                </div>
              </div>
              <div className="model-provider-models">{m.models}</div>
              <p>{isKo ? m.descKo : m.descEn}</p>
            </div>
          ))}
        </div>

        <p className="model-provider-note">
          <i className="fa-solid fa-circle-info" />
          {isKo ? '모델별 세대·강점·가격은 자주 바뀝니다. 잘 모르겠으면 플랫폼의 기본(Auto) 설정을 쓰고, 더 자세한 안내는 ' : 'Model versions/strengths/prices change often. When unsure, use the platform default (Auto); for details see '}
          <Link to="/appendix">{isKo ? '부록 → AI 모델 고르기' : 'Appendix → Choosing a Model'}</Link>
          {isKo ? ' 를 참고하세요.' : '.'}
        </p>

        {/* aioni 에이전트 */}
        <div className="section-header" style={{ marginTop: 56 }}>
          <h2 className="section-title">{isKo ? '에이전트 — 나만의 AI 비서 만들기' : 'Agent — Build Your Own AI Assistant'}</h2>
          <p className="section-subtitle">{isKo ? '자주 하는 업무를 미리 설정해 두면, AI가 내 방식대로 도와줍니다' : 'Preset your recurring work so the AI helps your way'}</p>
        </div>
        <div className="model-provider-grid">
          {AGENT_FEATURES.map(f => (
            <div key={f.nameKo} className="model-provider-card">
              <div className="model-provider-head">
                <div className="model-provider-icon"><i className={`fa-solid ${f.icon}`} /></div>
                <div><h3>{isKo ? f.nameKo : f.nameEn}</h3></div>
              </div>
              <p>{isKo ? f.descKo : f.descEn}</p>
            </div>
          ))}
        </div>
        <h3 className="tools-subheading">{isKo ? '알림 채널 — 메신저로 결과 받기' : 'Notification Channels'}</h3>
        <p className="tools-subnote">{isKo ? '메신저로 비서 봇과 대화하고 자동화 결과를 받을 수 있습니다.' : 'Chat with the bot and receive automation results via messenger.'}</p>
        <div className="channel-grid">
          {AGENT_CHANNELS.map(c => (
            <div key={c.nameKo} className="channel-card">
              <div className="channel-icon"><i className={c.icon} /></div>
              <div className="channel-text">
                <strong>{isKo ? c.nameKo : c.nameEn}{!c.two && <span className="channel-tag">{isKo ? '알림 전용' : 'notify-only'}</span>}</strong>
                <p>{isKo ? c.descKo : c.descEn}</p>
              </div>
            </div>
          ))}
        </div>

        {/* aioni Labs */}
        <div className="section-header" style={{ marginTop: 56 }}>
          <h2 className="section-title">{isKo ? 'Labs — 업무에 바로 쓰는 부가 기능' : 'Labs — Handy Extra Features'}</h2>
          <p className="section-subtitle">{isKo ? '문서 작성·번역·OCR·시트·슬라이드 등 행정 업무에 유용한 기능 모음' : 'Writing, translation, OCR, sheets, slides and more for admin work'}</p>
        </div>
        <div className="labs-grid">
          {LABS_FEATURES.map(f => (
            <div key={f.nameKo} className="labs-card">
              <div className="labs-icon"><i className={`fa-solid ${f.icon}`} /></div>
              <div className="labs-text">
                <strong>{isKo ? f.nameKo : f.nameEn}{f.badge && <span className={`labs-badge ${f.badge.toLowerCase()}`}>{f.badge}</span>}</strong>
                <p>{isKo ? f.descKo : f.descEn}</p>
              </div>
            </div>
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
                <span className="tool-tip-value">Claude <small>(~1M)</small></span>
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
