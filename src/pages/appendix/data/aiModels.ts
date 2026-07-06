/** 부록 — 전남대GPT 지원 AI 모델 안내 */
export default {
  id: 'ai-models',
  icon: 'fa-microchip',
  title: 'AI 모델 고르기',
  titleEn: 'Choosing a Model',
  sections: [
    {
      title: '한눈에 고르는 법',
      titleEn: 'Quick Guide',
      content: `> 전남대GPT는 여러 회사의 AI 모델을 골라 쓸 수 있습니다. **잘 모르겠으면 \`Auto(자동)\`** — 작업에 맞는 모델을 알아서 골라줍니다. 표시 뜻: **(고비용)** = 요금이 많이 드니 꼭 필요할 때만 · **(New)** = 최신 모델.

### 기본 프리셋 — 회사별 대표 모델(빠른 선택)
전남대GPT는 각 회사의 대표 모델을 먼저 보여줍니다. 아래가 그 기본 선택지이고, 더 많은 모델은 아래 '제공사별 모델'에서 펼쳐 고르면 됩니다.

| 빠른 선택 | 회사 | 툴에 적힌 쓰임 |
| --- | --- | --- |
| <mark>Auto</mark> | — | 알맞은 AI 모델을 자동으로 선택 |
| Solar Open2 | Upstage | 국가대표 독자 파운데이션 2차 모델 |
| GPT-5.4 Mini | OpenAI | 다양한 작업을 하나의 모델에서 해결 |
| Gemini 3.1 Flash Lite | Google | 최신 정보 기반 콘텐츠 생성·요약 |
| Claude Haiku 4.5 | Anthropic | 긴 글 요약, 코딩, 문맥 중요한 업무 |
| Llama 4 Scout 17B | Meta | 가볍고 빠른 응답 |
| Mistral Small | Mistral | 짧은 대화, 기본 질의응답 |
| Qwen QWQ 32B | Qwen | 중국어 기반 문서, 다국어 업무 |
| Grok 4.20 Fast Reasoning | xAI | 복잡한 텍스트에서 핵심 찾기 |

### 등급 3가지만 기억하세요
| 등급 | 이름에 보이는 단어 | 언제 쓰나 |
| --- | --- | --- |
| <mark>빠름·가벼움</mark> | Mini · Nano · Lite · Flash · Small · Haiku | 간단한 질문, 빠른 요약, 초안 |
| <mark>균형·범용</mark> | 숫자만 붙은 표준 모델 | 대부분의 문서·메일·정리 |
| <mark>고성능·정교</mark> | Pro · Large · Opus · o3 · Deep Research | 긴 문서, 복잡한 분석 (대개 고비용) |

### 목적별 빠른 추천
| 이런 작업 | 이런 모델 |
| --- | --- |
| 간단한 질문·빠른 요약 | Claude Haiku 4.5 · GPT-5 mini · Gemini Flash · Solar Mini |
| 일반 문서·메일·정리 | GPT-5.4 · Claude Sonnet 5 · Gemini 2.5 Flash |
| 긴 문서·정교한 분석 | Claude Opus 4.8 · GPT-5.5 · Gemini 3.1 Pro (고비용) |
| 코딩·자동화 | GPT-5.3 Codex · Codestral · Grok Code Fast |
| 복잡한 추론·논리 | o3 · Magistral · Grok Reasoning · Qwen QWQ |
| 한국어·교내 자료 | Upstage Solar (국산 모델) |
| 최신 정보 검색·요약 | Gemini (검색 연동 강점) |
| 자료 심층 리서치 | O3 Deep Research (고비용) |

> **팁**: 비싼 모델이 항상 정답은 아닙니다. 간단한 일은 **가벼운 모델이 더 빠르고 충분**해요. 결과가 아쉬울 때만 상위 모델로 올리세요.`,
      contentEn: `> 전남대GPT lets you pick models from several companies. **Not sure? Use \`Auto\`** — it picks a fitting model for you. Tags: **(고비용)** = expensive, use only when needed · **(New)** = newest.

### Remember just 3 tiers
| Tier | Words in the name | When |
| --- | --- | --- |
| <mark>fast·light</mark> | Mini · Nano · Lite · Flash · Small · Haiku | simple questions, quick summaries, drafts |
| <mark>balanced</mark> | plain numbered models | most documents, emails, organizing |
| <mark>top·precise</mark> | Pro · Large · Opus · o3 · Deep Research | long docs, complex analysis (usually costly) |

### Quick picks by task
| Task | Models |
| --- | --- |
| simple Q / quick summary | Claude Haiku 4.5 · GPT-5 mini · Gemini Flash · Solar Mini |
| general docs / email | GPT-5.4 · Claude Sonnet 5 · Gemini 2.5 Flash |
| long docs / deep analysis | Claude Opus 4.8 · GPT-5.5 · Gemini 3.1 Pro (costly) |
| coding / automation | GPT-5.3 Codex · Codestral · Grok Code Fast |
| complex reasoning | o3 · Magistral · Grok Reasoning · Qwen QWQ |
| Korean / campus material | Upstage Solar (Korean model) |
| latest-info search | Gemini (search-connected) |
| deep research | O3 Deep Research (costly) |

> **Tip**: pricier isn't always better. For simple tasks a light model is faster and enough — move up only if the result falls short.`,
    },
    {
      title: '모델 선택 기준 (전문 관점)',
      titleEn: 'Selection Criteria (Pro)',
      content: `> 전문적으로 고를 땐 마케팅 문구가 아니라 **아키텍처 특성 6축**으로 판단합니다. 작업 성격을 축에 대입하면 후보가 좁혀집니다.

### 판단하는 6가지 축
| 축 | 무엇을 보나 | 이럴 때 |
| --- | --- | --- |
| <mark>문맥 길이</mark> (context) | 긴 문서·코드를 통째로 넣나 | 규정집·논문·대량 로그 → 장문 강한 계열 |
| <mark>추론 깊이</mark> | 다단계 논리·수학·계획이 핵심인가 | 복잡한 의사결정·증명 → 추론형 |
| <mark>멀티모달</mark> | 이미지·표·PDF·음성을 다루나 | 스캔 문서·도표 해석 → 멀티모달 |
| <mark>지연·비용</mark> | 실시간·대량 처리인가 | 챗봇·배치 요약 → 경량(증류) |
| <mark>에이전트·코딩</mark> | 파일 편집·툴 호출·자동화인가 | 스크립트·시스템 연동 → 코딩/에이전트형 |
| <mark>언어</mark> | 한국어/다국어 정확도 | 교내 한글 문서 → 한국어 특화 |

### 유형별 정리 (이름만 봐도 성격 파악)
| 유형 | 해당 모델 | 기술적 성격 |
| --- | --- | --- |
| 프런티어 | Opus 4.8 · GPT-5.5 · Gemini 3.1 Pro · Mistral Large | 성능 상한이 가장 높음. 복잡·장문·에이전트에 강하나 비용·지연 큼 |
| 균형·범용 | Sonnet 5 · GPT-5.4 · Gemini 2.5 Flash · Solar Pro | 품질/비용 균형점. 대부분 업무의 기본값 |
| 경량(증류) | Haiku · GPT-5 mini/nano · Flash Lite · Small | 지식증류로 소형화 → 저지연·저비용·고처리량, 복잡도 상한은 낮음 |
| 추론형 | o3 · o4-mini · Magistral · Qwen QWQ · Grok Reasoning | 추론에 연산(test-time compute)을 더 씀 → 논리·수학·다단계 계획에 강함 |
| 코딩·에이전트 | GPT-5.x Codex · Codestral · Devstral · Grok Code | 코드 생성·리팩터링·파일 편집·툴 호출(에이전트형 개발) |
| 심층 리서치 | O3 Deep Research | 다단계 웹 탐색 + 출처 종합. 장시간·고비용 |
| 한국어·국산 | Upstage Solar (Pro/Mini/Open2) | 한국어 토크나이즈·문맥에 최적화, 교내 한글 문서 강점 |

> **선택 요령**: '추론형'은 빠른 요약엔 과합니다(느리고 비쌈). 반대로 규정 충돌·복잡한 의사결정엔 범용보다 추론형이 낫습니다. **작업 난이도와 지연·비용을 함께** 저울질하세요. 또한 'Chat' 접미사는 대화·지시 튜닝, 숫자만 붙으면 표준 버전입니다.

> **보안 관점**: 전남대GPT는 교내 전용 플랫폼이라 외부 일반 서비스보다 데이터 취급이 안전한 편이지만, **주민번호·미공개 연구데이터 등 민감정보 최소화** 원칙은 동일하게 적용하세요.`,
      contentEn: `> Professionals choose by **6 architectural axes**, not marketing. Map your task to the axes to narrow candidates.

### The 6 axes
| Axis | What to check | When |
| --- | --- | --- |
| <mark>context length</mark> | Whole long doc/code at once? | rulebooks, papers, big logs → long-context models |
| <mark>reasoning depth</mark> | Multi-step logic/math/planning? | complex decisions, proofs → reasoning models |
| <mark>multimodal</mark> | Images, tables, PDFs, audio? | scanned docs, charts → multimodal |
| <mark>latency·cost</mark> | Real-time or high volume? | chatbots, batch summaries → light (distilled) |
| <mark>agent·coding</mark> | File edits, tool calls, automation? | scripts, integrations → code/agent models |
| <mark>language</mark> | Korean/multilingual accuracy | campus Korean docs → Korean-specialized |

### By type (the name tells the character)
| Type | Models | Technical character |
| --- | --- | --- |
| Frontier | Opus 4.8 · GPT-5.5 · Gemini 3.1 Pro · Mistral Large | Highest ceiling; complex/long/agentic; costly & slower |
| Balanced | Sonnet 5 · GPT-5.4 · Gemini 2.5 Flash · Solar Pro | Quality/cost sweet spot; default for most work |
| Light (distilled) | Haiku · GPT-5 mini/nano · Flash Lite · Small | Distilled → low latency/cost, high throughput; lower ceiling |
| Reasoning | o3 · o4-mini · Magistral · Qwen QWQ · Grok Reasoning | Extra test-time compute → logic, math, planning |
| Coding·agent | GPT-5.x Codex · Codestral · Devstral · Grok Code | Code gen/refactor, file edits, tool calls |
| Deep research | O3 Deep Research | Multi-step web search + synthesis; long, costly |
| Korean | Upstage Solar (Pro/Mini/Open2) | Korean-optimized tokenizer/context; campus docs |

> **Rule of thumb**: reasoning models are overkill for quick summaries (slow, costly) but win on complex decisions. Weigh **task difficulty vs latency/cost**. "Chat" = chat-tuned; plain numbers = standard.

> **Security**: 전남대GPT is campus-only, safer than public services — but still minimize sensitive data (IDs, unpublished research).`,
    },
    {
      title: '제공사별 모델 (2026.07.07 기준)',
      titleEn: 'Models by Provider (as of 2026-07-07)',
      content: `> 회사마다 **설계 철학과 강점**이 다릅니다. 아래는 아키텍처·용도 관점의 **상세 안내**입니다. (구체 수치·벤치마크는 자주 바뀌어 생략 — 잘 모르면 Auto)

### Upstage · Solar — 국산 파운데이션 (한국어·문서 특화)
한국 스타트업 Upstage의 자체 개발 모델. **한국어 토크나이징·문맥**에 최적화돼 교내 한글 문서·공문에 강하고, **Document AI**(OCR·표/정보 추출) 계열이 강점. 국내 데이터 주권 관점에서도 선호됩니다.

| 모델 | 유형 | 강점·추천 용도 | 비고 |
| --- | --- | --- | --- |
| Solar Pro3 | 프런티어(한국어) | 복잡한 한국어 보고서·요약·분석 | Solar 최상위 |
| Solar Pro2 | 상위·균형 | 일반 한국어 문서 업무 전반 | |
| Solar Mini | 경량 | 짧은 질의·빠른 요약, 대량 처리 | 저지연·저비용 |
| Solar Open2 | 오픈웨이트 | 자체 구축·커스터마이즈 | 국가대표 독자 파운데이션 2차(공개형) |

### OpenAI · ChatGPT — 범용 표준, 툴·에이전트 생태계
가장 범용적이고 **함수 호출(tool use)·멀티모달(음성·이미지)·에이전트** 생태계가 넓습니다. 세대(5.x)·크기(mini/nano)로 나뉘고, 별도로 **추론형(o-시리즈)·코딩형(Codex)·리서치형(Deep Research)** 라인이 있습니다.

| 모델 | 유형 | 강점·추천 용도 | 비고 |
| --- | --- | --- | --- |
| GPT-5.5 | 프런티어 | 최고난도 추론·장문·복합 작업 | (고비용) |
| GPT-5.4 | 범용 주력 | 대부분의 문서·분석·대화 | 기본 프리셋 |
| GPT-5.4 Mini · Nano | 경량·초경량 | 빠른 응답, 대량·실시간 | 저비용 |
| GPT-5.3~5 (+Chat) | 세대별 범용 | 표준 작업 (Chat=대화 튜닝) | |
| GPT-5 mini · nano | 경량 | 간단 작업·챗봇 | |
| GPT-4.1 · 4o (+mini) | 이전 세대 | 멀티모달(4o=음성·이미지)·범용 | |
| o3 · o4-mini | 추론형 | 수학·논리·다단계 계획, 복잡한 판단 | o3 (고비용)·느림 |
| GPT-5.x Codex (+Mini) | 코딩·에이전트 | 코드 작성·리팩터·파일 편집·자동화 | |
| O3 Deep Research | 리서치 | 다단계 웹 조사 + 출처 종합 보고 | (고비용)·장시간 |

### Google · Gemini — 멀티모달·검색 그라운딩·초장문
**이미지·오디오·비디오·PDF를 네이티브로** 처리하고, **구글 검색 그라운딩**으로 최신 정보에 강합니다. 컨텍스트가 매우 길어 대용량 문서·자료 묶음 처리에 유리. Flash=저지연, Pro=고성능.

| 모델 | 유형 | 강점·추천 용도 | 비고 |
| --- | --- | --- | --- |
| Gemini 3.1 Pro | 프런티어 | 대용량 문서·멀티모달·정교한 분석 | |
| Gemini 3 Flash | 균형·빠름 | 일반 업무·요약, 최신 정보 | |
| Gemini 3.1 Flash Lite | 경량 | 대량·실시간·간단 요약 | 저비용·기본 프리셋 |
| Gemini 2.5 Pro·Flash·Flash Lite | 이전 세대 | 고성능~경량 범용 | |

### Anthropic · Claude — 장문 문맥·지시 준수·안전, 문서/코드
**긴 문맥과 정확한 지시 준수, 안전성**이 강점. 학술·행정 문서, 코드, 컴퓨터·툴을 쓰는 **에이전트 작업**에 특히 강합니다. Opus=프런티어, Sonnet=균형 주력, Haiku=경량 저지연.

| 모델 | 유형 | 강점·추천 용도 | 비고 |
| --- | --- | --- | --- |
| Claude Opus 4.8·4.7·4.6 | 프런티어 | 최고난도 분석·장문·에이전트 코딩 | (고비용) |
| Claude Sonnet 5 | 균형 주력 | 일상 문서·분석·코딩의 기본값 | (New) |
| Claude Sonnet 4.6·4.5 | 균형 | 범용 업무 | |
| Claude Haiku 4.5 | 경량 | 요약·간단 작업·대량 처리, 저지연 | 경제적·기본 프리셋 |
| Claude Fable 5 | 최신 특화 | 최신 고성능 모델 | (New·고비용) |

### Meta · Llama — 오픈웨이트(자체 구축·커스터마이즈)
가중치가 공개돼 **온프레미스·파인튜닝·비용 통제**에 유리합니다. Scout는 경량·롱컨텍스트·빠른 응답 계열.

| 모델 | 유형 | 강점·추천 용도 | 비고 |
| --- | --- | --- | --- |
| Llama 4 Scout 17B | 경량·오픈 | 가볍고 빠른 응답, 자체 구축 | 오픈웨이트 |

### Mistral — 유럽(효율·오픈), 코딩·추론 라인업
프랑스 Mistral. **효율(크기 대비 성능)·오픈** 지향이며, 코드(Codestral·Devstral)·추론(Magistral) 특화 라인이 뚜렷합니다.

| 모델 | 유형 | 강점·추천 용도 | 비고 |
| --- | --- | --- | --- |
| Mistral Large | 프런티어 | 고난도 범용 | |
| Mistral Medium · Small | 균형·경량 | 일반~간단 업무 | Small=기본 프리셋 |
| Magistral Medium · Small | 추론형 | 논리·수학·계획 | |
| Codestral | 코딩 | 코드 생성·자동완성 | |
| Devstral Medium | 에이전트 코딩 | 개발 자동화·툴 사용 | |

### Qwen · Alibaba — 다국어·중국어·오픈
알리바바. **중국어·다국어**와 오픈웨이트가 강점. QwQ는 추론 특화 계열.

| 모델 | 유형 | 강점·추천 용도 | 비고 |
| --- | --- | --- | --- |
| Qwen QWQ 32B | 추론·다국어 | 중국어 문서, 다국어 업무, 논리 문제 | 오픈·기본 프리셋 |

### Grok · xAI — 실시간·추론
xAI. **실시간(X 연동) 정보**와 추론(Reasoning) 라인이 특징. Code Fast는 코딩 특화.

| 모델 | 유형 | 강점·추천 용도 | 비고 |
| --- | --- | --- | --- |
| Grok 4.3 | 상위 | 고성능 범용 | |
| Grok 4.20 Fast Reasoning | 추론(빠름) | 복잡한 텍스트에서 핵심 추출·추론 | 기본 프리셋 |
| Grok 4.20 Non Reasoning | 범용 | 일반 대화·작업 | |
| Grok Code Fast | 코딩 | 빠른 코드 작업 | |`,
      contentEn: `> Each company has a **distinct design philosophy**. Below is a **detailed** architecture/use guide. (Exact specs/benchmarks change often and are omitted — use Auto if unsure.)

### Upstage · Solar — Korean-built foundation (Korean & documents)
Korea's Upstage. Optimized **Korean tokenization/context** — strong on campus Korean docs; notable **Document AI** (OCR, table/info extraction). Also favored for domestic data sovereignty.
| Model | Type | Strengths·use | Notes |
| --- | --- | --- | --- |
| Solar Pro3 | frontier (Korean) | complex Korean reports/analysis | Solar top |
| Solar Pro2 | upper·balanced | general Korean docs | |
| Solar Mini | light | short Q, quick summary, bulk | low latency/cost |
| Solar Open2 | open-weight | self-host, customize | flagship open (2nd gen) |

### OpenAI · ChatGPT — general standard, tool/agent ecosystem
Broadest **tool use, multimodal (voice/image), agent** ecosystem. Split by generation (5.x) and size (mini/nano), plus **reasoning (o-series), coding (Codex), research (Deep Research)** lines.
| Model | Type | Strengths·use | Notes |
| --- | --- | --- | --- |
| GPT-5.5 | frontier | hardest reasoning, long, complex | (costly) |
| GPT-5.4 | flagship general | most docs/analysis/chat | preset |
| GPT-5.4 Mini · Nano | light·ultra-light | fast, bulk, real-time | cheap |
| GPT-5.3~5 (+Chat) | generational | standard work (Chat=chat-tuned) | |
| GPT-5 mini · nano | light | simple tasks, chatbots | |
| GPT-4.1 · 4o (+mini) | prev gen | multimodal (4o=voice/image) | |
| o3 · o4-mini | reasoning | math, logic, planning | o3 (costly), slow |
| GPT-5.x Codex (+Mini) | coding·agent | code, refactor, file edits | |
| O3 Deep Research | research | multi-step web + synthesis | (costly), long |

### Google · Gemini — multimodal, search grounding, huge context
Native **image/audio/video/PDF** + **Google Search grounding** for fresh info. Very long context for big document sets. Flash=low latency, Pro=top.
| Model | Type | Strengths·use | Notes |
| --- | --- | --- | --- |
| Gemini 3.1 Pro | frontier | big docs, multimodal, precise | |
| Gemini 3 Flash | balanced·fast | general work, fresh info | |
| Gemini 3.1 Flash Lite | light | bulk, real-time, quick summary | cheap·preset |
| Gemini 2.5 Pro·Flash·Flash Lite | prev gen | top→light general | |

### Anthropic · Claude — long context, instruction-following, safety
Strong **long context, precise instruction-following, safety**. Great for academic/admin docs, code, and **agentic** work with computer/tools. Opus=frontier, Sonnet=balanced flagship, Haiku=light.
| Model | Type | Strengths·use | Notes |
| --- | --- | --- | --- |
| Claude Opus 4.8·4.7·4.6 | frontier | hardest analysis, long, agent coding | (costly) |
| Claude Sonnet 5 | balanced flagship | daily docs/analysis/coding | (New) |
| Claude Sonnet 4.6·4.5 | balanced | general work | |
| Claude Haiku 4.5 | light | summaries, simple tasks, bulk | economical·preset |
| Claude Fable 5 | newest | latest high-capability | (New·costly) |

### Meta · Llama — open-weight (self-host, customize)
Open weights → **on-prem, fine-tuning, cost control**. Scout = light, long-context, fast.
| Model | Type | Strengths·use | Notes |
| --- | --- | --- | --- |
| Llama 4 Scout 17B | light·open | light, fast, self-host | open-weight |

### Mistral — Europe (efficient, open), coding·reasoning
France's Mistral. **Efficiency & open**; clear code (Codestral/Devstral) and reasoning (Magistral) lines.
| Model | Type | Strengths·use | Notes |
| --- | --- | --- | --- |
| Mistral Large | frontier | high-end general | |
| Mistral Medium · Small | balanced·light | general→simple | Small=preset |
| Magistral Medium · Small | reasoning | logic, math, planning | |
| Codestral | coding | code gen/complete | |
| Devstral Medium | agent coding | dev automation, tools | |

### Qwen · Alibaba — multilingual, Chinese, open
Alibaba. Strong **Chinese/multilingual** and open weights. QwQ = reasoning.
| Model | Type | Strengths·use | Notes |
| --- | --- | --- | --- |
| Qwen QWQ 32B | reasoning·multilingual | Chinese docs, multilingual, logic | open·preset |

### Grok · xAI — real-time, reasoning
xAI. **Real-time (X-connected)** info and reasoning lines; Code Fast for coding.
| Model | Type | Strengths·use | Notes |
| --- | --- | --- | --- |
| Grok 4.3 | upper | high-end general | |
| Grok 4.20 Fast Reasoning | reasoning (fast) | extract key points, reason | preset |
| Grok 4.20 Non Reasoning | general | general chat/work | |
| Grok Code Fast | coding | fast code tasks | |`,
    },
  ],
};
