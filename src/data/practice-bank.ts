/* ============================================
   주제별 난이도별 실습 프롬프트 뱅크
   - 프롬프트는 일반 문자열(펜스 없음) → CopyBlock으로 렌더(복사 버튼 자동)
   - 키는 LearningMaterials의 topic.id와 일치
   ============================================ */

export type PracticeLevel = 'basic' | 'applied' | 'advanced';

export interface PracticeItem {
  level: PracticeLevel;
  titleKo: string;
  titleEn: string;
  promptKo: string;
  promptEn: string;
}

export const PRACTICE_BANK: Record<string, PracticeItem[]> = {
  /* ─────────── 문서행정 ─────────── */

  'meeting-reports': [
    {
      level: 'basic', titleKo: '회의록 요약', titleEn: 'Meeting Minutes Summary',
      promptKo: `[역할] 대학 행정 담당자
[맥락] 아래 회의 녹취 내용을 정리해 회의록으로 만들어 주세요.
- (여기에 녹취 텍스트를 붙여넣기)
[형식] 「회의 개요(일시·장소·참석자) → 안건별 논의 요약 → 결정사항 → 담당·기한」 표 포함. 간결한 공문체.`,
      promptEn: `[Role] University administrator
[Context] Turn the meeting transcript below into minutes.
- (paste transcript here)
[Format] Overview (time/place/attendees) → discussion summary → decisions → owner/deadline (table). Concise official tone.`,
    },
    {
      level: 'basic', titleKo: '주간 업무보고 작성', titleEn: 'Weekly Work Report',
      promptKo: `[역할] 대학 교무처 담당자
[맥락] 이번 주 업무 내용을 주간 업무보고로 정리해 주세요.
- 완료: 강의계획서 취합, 수강신청 오류 처리
- 진행중: 계절학기 개설 협의
- 예정: 성적입력 안내 공지
[형식] 「완료 / 진행중 / 예정」 3구분 표. 각 항목 1~2줄 요약.`,
      promptEn: `[Role] Academic affairs staff
[Context] Summarize this week's work into a weekly report.
- Done: syllabi collection, registration error handling
- In progress: seasonal term consultation
- Planned: grade-entry notice
[Format] Table in 3 groups (Done / In progress / Planned), 1–2 lines each.`,
    },
    {
      level: 'applied', titleKo: '행사 결과보고서', titleEn: 'Event Result Report',
      promptKo: `[역할] 대학 [우리 부서] 담당자
[맥락] 우리 부서가 진행한 [행사명] 결과보고서를 작성해 주세요.
- 개요: [일시·장소·참석 인원]
- 주요 성과: [ ]
- 개선점: [ ]
[형식] 「행사 개요 → 추진 경과 → 성과(정량·정성) → 개선점 → 향후 계획」. 표와 요약 병행.`,
      promptEn: `[Role] University [your dept] staff
[Context] Write a result report for [event] your dept ran.
- Overview: [time/place/attendance]
- Outcomes: [ ] / Improvements: [ ]
[Format] Overview → progress → outcomes (quant/qual) → improvements → next steps.`,
    },
    {
      level: 'applied', titleKo: '회의 안건·결정사항 추출', titleEn: 'Extract Agenda & Decisions',
      promptKo: `[역할] 회의 서기
[맥락] 아래 긴 회의 내용에서 안건과 결정사항, 후속조치를 뽑아 주세요.
- (회의 내용 붙여넣기)
[형식] 「안건 목록 → 각 안건 결정사항 → 후속조치(담당/기한)」. 실행 항목은 체크리스트로.`,
      promptEn: `[Role] Meeting secretary
[Context] Extract agenda, decisions, and follow-ups from the discussion below.
- (paste discussion)
[Format] Agenda → decisions per item → follow-ups (owner/deadline) as a checklist.`,
    },
    {
      level: 'advanced', titleKo: '회의록 → 산출물 3종 동시 생성', titleEn: 'Minutes → 3 Outputs at Once',
      promptKo: `[심화 과제] 하나의 회의 녹취를 입력하면 ① 공식 회의록 ② 참석자용 할 일 목록 ③ 전 직원 공지문 초안을 한 번에 일관되게 생성하는 프롬프트를 직접 설계해 실행하세요. 세 산출물의 형식·어조를 각각 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a prompt that, from one transcript, produces ① formal minutes ② a to-do list for attendees ③ a staff announcement draft — consistently, in one pass. The key is specifying each output's format and tone.`,
    },
    {
      level: 'basic', titleKo: '간담회·워크숍 결과 정리', titleEn: 'Workshop Result Notes',
      promptKo: `[역할] 행정 담당자
[맥락] 아래 간담회/워크숍에서 나온 의견을 정리해 주세요.
- (참석자 발언·메모 붙여넣기)
[형식] 주요 의견 그룹화 → 공통 제안 → 반대/유의 의견 → 후속 검토 사항.`,
      promptEn: `[Role] Administrator
[Context] Organize opinions from the workshop below.
- (paste remarks/notes)
[Format] Group key opinions → common proposals → concerns → items to review.`,
    },
    {
      level: 'basic', titleKo: '월간 업무보고', titleEn: 'Monthly Work Report',
      promptKo: `[역할] 부서 담당자
[맥락] 이번 달 업무 실적을 월간 보고로 정리해 주세요.
- 주요 실적: [ ] / 미흡 사항: [ ] / 다음 달 계획: [ ]
[형식] 실적 요약(표) → 정성 평가 → 다음 달 중점 과제. 경영진이 3분에 읽을 분량.`,
      promptEn: `[Role] Dept staff
[Context] Compile this month's results into a monthly report.
- Results/gaps/next-month plan: [ ]
[Format] Results table → qualitative note → next-month priorities. 3-min read.`,
    },
    {
      level: 'applied', titleKo: '회의 요약 → 이메일 공유문', titleEn: 'Minutes → Share Email',
      promptKo: `[역할] 회의 주관자
[맥락] 아래 회의록을 참석하지 못한 동료에게 공유할 이메일로 바꿔 주세요.
- (회의록 붙여넣기)
[형식] 제목 → 인사 → 핵심 결정 3줄 → 각자 할 일 → 다음 회의 안내. 간결한 업무 이메일체.`,
      promptEn: `[Role] Meeting host
[Context] Turn the minutes into a share email for absent colleagues.
- (paste minutes)
[Format] Subject → greeting → 3 key decisions → action items → next meeting. Concise business tone.`,
    },
    {
      level: 'applied', titleKo: '보고서 → 1페이지 요약', titleEn: 'Report → 1-Page Brief',
      promptKo: `[역할] 보고 담당자
[맥락] 아래 장문 보고서를 경영진용 1페이지 요약으로 압축해 주세요.
- (보고서 본문 붙여넣기)
[형식] 핵심 결론(맨 위) → 배경 3줄 → 주요 수치 → 의사결정 요청 사항.`,
      promptEn: `[Role] Reporting staff
[Context] Compress the long report into a 1-page executive brief.
- (paste report)
[Format] Conclusion first → 3-line background → key figures → decision request.`,
    },
    {
      level: 'advanced', titleKo: '주간회의 누적 요약·이슈 추적', titleEn: 'Weekly Rollup & Issue Tracking',
      promptKo: `[심화 과제] 매주 열리는 회의의 회의록을 누적해, 지난주 결정사항의 이행 여부를 추적하고 미결 이슈를 다음 회의 안건으로 자동 정리하는 프롬프트를 설계하세요. 이행완료/지연/신규 이슈를 구분해 표시하도록 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a prompt that accumulates weekly minutes, tracks whether last week's decisions were done, and rolls unresolved issues into the next agenda. Mark done/delayed/new distinctly.`,
    },
  ],

  'ppt-structure': [
    {
      level: 'basic', titleKo: '업무보고 PPT 목차 설계', titleEn: 'Report PPT Outline',
      promptKo: `[역할] 대학 행정 담당자
[맥락] [주제] 업무보고 발표 PPT의 목차(슬라이드 구성)를 설계해 주세요.
- 발표 시간: 10분 / 청중: 부서장
[형식] 슬라이드 번호 → 제목 → 핵심 메시지 표. 표지·목차·본문·결론 흐름 포함.`,
      promptEn: `[Role] University administrator
[Context] Design a slide outline for a [topic] report PPT.
- Time: 10 min / Audience: dept head
[Format] Slide # → title → key message (table). Include cover, TOC, body, conclusion.`,
    },
    {
      level: 'basic', titleKo: '슬라이드별 핵심 문구 생성', titleEn: 'Per-slide Key Lines',
      promptKo: `[역할] 발표 자료 담당자
[맥락] 아래 목차의 각 슬라이드에 들어갈 핵심 bullet 3개씩 작성해 주세요.
- (목차 붙여넣기)
[형식] 슬라이드별 제목 + 불릿 3개. 간결한 명사형 문구.`,
      promptEn: `[Role] Presentation staff
[Context] Write 3 key bullets per slide for the outline below.
- (paste outline)
[Format] Title + 3 bullets per slide, concise noun phrases.`,
    },
    {
      level: 'applied', titleKo: '발표 스토리라인 설계', titleEn: 'Presentation Storyline',
      promptKo: `[역할] 대학 [우리 부서] 발표자
[맥락] [발표 주제]를 [청중]에게 [시간]분간 발표하려 합니다. 설득력 있는 스토리라인을 설계해 주세요.
- 핵심 메시지: [ ] / 원하는 결론: [ ]
[형식] 도입(문제 제기) → 전개(근거·데이터) → 결론(제안) 3막 구조로, 각 막의 슬라이드 구성 제시.`,
      promptEn: `[Role] University [your dept] presenter
[Context] Present [topic] to [audience] in [N] minutes. Design a persuasive storyline.
- Key message: [ ] / Desired conclusion: [ ]
[Format] Intro (problem) → body (evidence) → conclusion (proposal), with slides per act.`,
    },
    {
      level: 'applied', titleKo: '데이터 → 슬라이드 구조', titleEn: 'Data → Slide Structure',
      promptKo: `[역할] 보고자료 담당자
[맥락] 아래 데이터를 바탕으로 현황을 설명하는 슬라이드 구조를 제안해 주세요.
- (데이터/수치 붙여넣기)
[형식] 어떤 슬라이드에 어떤 차트·표를 배치할지, 슬라이드별 메시지와 함께 제시.`,
      promptEn: `[Role] Report staff
[Context] Propose a slide structure explaining the situation from the data below.
- (paste data)
[Format] Which chart/table on which slide, with each slide's message.`,
    },
    {
      level: 'advanced', titleKo: '청중별 2버전 구조', titleEn: 'Two Versions by Audience',
      promptKo: `[심화 과제] 같은 내용을 ① 경영진용(3분·핵심만) ② 실무진용(10분·상세)의 두 버전 PPT 구조로 동시에 설계하는 프롬프트를 만드세요. 청중에 따라 강조점과 슬라이드 수가 어떻게 달라지는지 명시하도록 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a prompt that structures the same content in two versions — ① executives (3 min, essentials) ② staff (10 min, detailed). Specify how emphasis and slide count differ by audience.`,
    },
    {
      level: 'basic', titleKo: '사업설명회 발표 구조', titleEn: 'Program Briefing Structure',
      promptKo: `[역할] 대학 행정 담당자
[맥락] [사업/제도] 설명회 발표 PPT 구조를 설계해 주세요.
- 청중: 신청 대상자 / 목표: 신청 유도
[형식] 개요 → 지원 내용 → 신청 방법 → 자주 묻는 질문 → 문의처. 슬라이드별 메시지 포함.`,
      promptEn: `[Role] University administrator
[Context] Structure a briefing deck for a [program].
- Audience: applicants / Goal: drive applications
[Format] Overview → benefits → how to apply → FAQ → contact, with per-slide message.`,
    },
    {
      level: 'basic', titleKo: '교육·오리엔테이션 슬라이드 흐름', titleEn: 'Orientation Slide Flow',
      promptKo: `[역할] 교육 담당자
[맥락] [대상] 오리엔테이션 슬라이드 흐름을 설계해 주세요.
- 소요: [시간] / 다룰 내용: [ ]
[형식] 환영 → 일정 안내 → 주요 정보 → 실습/활동 → 마무리(Q&A). 지루하지 않게 완급 조절 제안.`,
      promptEn: `[Role] Training staff
[Context] Design an orientation slide flow for [audience].
- Duration: [ ] / Topics: [ ]
[Format] Welcome → schedule → key info → activity → wrap-up (Q&A), with pacing tips.`,
    },
    {
      level: 'applied', titleKo: '문제해결형 발표 구조', titleEn: 'Problem-Solving Structure',
      promptKo: `[역할] [우리 부서] 발표자
[맥락] [문제 상황]을 다루는 문제해결형 발표 구조를 설계해 주세요.
- 문제: [ ] / 제안하고 싶은 해법: [ ]
[형식] 현황(문제 규모) → 원인 분석 → 대안 비교 → 권고안 → 기대효과. 근거 슬라이드 위치 명시.`,
      promptEn: `[Role] [Your dept] presenter
[Context] Structure a problem-solving talk on [problem].
- Problem: [ ] / Proposed solution: [ ]
[Format] Situation → root cause → options → recommendation → expected impact, with evidence slides.`,
    },
    {
      level: 'applied', titleKo: '3분 브리핑 구조', titleEn: '3-Minute Briefing',
      promptKo: `[역할] 실무 담당자
[맥락] [주제]를 상급자에게 3분 안에 브리핑할 슬라이드 구조를 설계해 주세요.
- 핵심 요청/결론: [ ]
[형식] 3~4장으로 압축: 결론 → 근거 → 요청. 각 장에 딱 한 문장의 핵심 메시지.`,
      promptEn: `[Role] Staff
[Context] Structure a 3-minute briefing on [topic] for a manager.
- Ask/conclusion: [ ]
[Format] 3–4 slides: conclusion → evidence → ask. One key line per slide.`,
    },
    {
      level: 'advanced', titleKo: '발표 목적별 구조 분기 설계', titleEn: 'Purpose-Branching Structure',
      promptKo: `[심화 과제] 같은 주제라도 발표 목적(정보 전달 / 설득 / 보고)에 따라 슬라이드 구조가 달라지도록, 목적을 입력하면 그에 맞는 구조를 제안하는 프롬프트를 설계하세요. 목적별로 강조 요소와 순서가 어떻게 바뀌는지 규칙을 명시하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a prompt where the same topic yields a different slide structure by purpose (inform / persuade / report) — input the purpose, get a matching structure. Specify how emphasis and order change by purpose.`,
    },
  ],

  'ppt-design': [
    {
      level: 'basic', titleKo: '슬라이드 시각화 아이디어', titleEn: 'Slide Visualization Ideas',
      promptKo: `[역할] 발표 디자인 담당자
[맥락] 아래 슬라이드 내용을 시각적으로 표현할 아이디어를 제안해 주세요.
- (슬라이드 텍스트 붙여넣기)
[형식] 도표·아이콘·이미지 유형을 슬라이드별로 3안씩 추천, 이유 포함.`,
      promptEn: `[Role] Presentation designer
[Context] Suggest ways to visualize the slide content below.
- (paste slide text)
[Format] 3 options per slide (diagram/icon/image) with reasons.`,
    },
    {
      level: 'basic', titleKo: '텍스트 → 다이어그램 변환', titleEn: 'Text → Diagram',
      promptKo: `[역할] 발표 자료 담당자
[맥락] 아래 절차 설명을 도식(다이어그램)으로 바꾸는 방법을 제안해 주세요.
- (절차/프로세스 텍스트)
[형식] 플로우차트/단계도/순환도 중 적합한 형태와 각 노드 라벨을 제시.`,
      promptEn: `[Role] Presentation staff
[Context] Suggest how to turn the process below into a diagram.
- (process text)
[Format] Pick flowchart/step/cycle and give node labels.`,
    },
    {
      level: 'applied', titleKo: '통계 데이터 → 차트 추천', titleEn: 'Stats → Chart Recommendation',
      promptKo: `[역할] 보고자료 담당자
[맥락] 아래 데이터에 가장 적합한 차트 유형을 추천해 주세요.
- (데이터/수치 붙여넣기) / 강조하고 싶은 점: [ ]
[형식] 데이터 특성별로 추천 차트(막대·선·원·히트맵 등)와 사용 이유, 주의점 제시.`,
      promptEn: `[Role] Report staff
[Context] Recommend the best chart type for the data below.
- (paste data) / What to emphasize: [ ]
[Format] Recommended chart with reason and caveats.`,
    },
    {
      level: 'applied', titleKo: 'Gamma/Canva 디자인 프롬프트', titleEn: 'Gamma/Canva Design Prompt',
      promptKo: `[역할] 발표 디자인 담당자
[맥락] Gamma(또는 Canva)로 [주제] 발표자료를 만들 프롬프트를 작성해 주세요.
- 톤: [전문적/친근한] / 색상: [기관 색상] / 분량: [슬라이드 수]
[형식] AI 슬라이드 도구에 바로 입력할 수 있는 지시문(주제·구조·톤·색상 포함).`,
      promptEn: `[Role] Presentation designer
[Context] Write a prompt to build a [topic] deck in Gamma/Canva.
- Tone: [ ] / Color: [ ] / Length: [slides]
[Format] A ready-to-paste instruction (topic, structure, tone, color).`,
    },
    {
      level: 'advanced', titleKo: '브랜드 일관 디자인 세트', titleEn: 'Consistent Brand Set',
      promptKo: `[심화 과제] 기관 브랜드 톤(색상·서체·여백 규칙)을 먼저 정의하고, 그 규칙에 맞춰 표지·간지·본문·마무리 슬라이드 디자인 가이드를 일관되게 생성하는 프롬프트를 설계하세요. 재사용 가능한 디자인 규칙을 산출하도록 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] First define a brand tone (color/type/spacing), then design a prompt that generates consistent cover/divider/body/closing slide guidelines to match. The key is producing reusable design rules.`,
    },
    {
      level: 'basic', titleKo: '색상 팔레트 추천', titleEn: 'Color Palette Recommendation',
      promptKo: `[역할] 발표 디자인 담당자
[맥락] [기관/주제]에 어울리는 발표자료 색상 팔레트를 추천해 주세요.
- 분위기: [신뢰감/활기참/차분함 등] / 기본 색상: [있으면 입력]
[형식] 메인·보조·강조·배경 색을 HEX 코드로 제시하고, 각 색의 용도와 대비 주의점 설명.`,
      promptEn: `[Role] Presentation designer
[Context] Recommend a deck color palette for [org/topic].
- Mood: [trustworthy/energetic/calm...] / Base color: [if any]
[Format] Main/secondary/accent/background as HEX, with each color's use and contrast caveats.`,
    },
    {
      level: 'basic', titleKo: '아이콘·픽토그램 선정', titleEn: 'Icon/Pictogram Selection',
      promptKo: `[역할] 발표 디자인 담당자
[맥락] 아래 슬라이드 항목들에 어울리는 아이콘을 추천해 주세요.
- 항목: [예: 예산, 일정, 인력, 성과]
[형식] 항목별 추천 아이콘(개념)과 검색 키워드(Flaticon/Noun Project용), 배치 팁.`,
      promptEn: `[Role] Presentation designer
[Context] Recommend icons for the slide items below.
- Items: [e.g., budget, schedule, staff, outcome]
[Format] Icon concept + search keywords (Flaticon/Noun Project) + placement tip per item.`,
    },
    {
      level: 'applied', titleKo: '인포그래픽 설계', titleEn: 'Infographic Design',
      promptKo: `[역할] 발표 디자인 담당자
[맥락] 아래 내용을 한 장의 인포그래픽으로 설계해 주세요.
- 전달 메시지: [ ] / 핵심 수치: [ ]
[형식] 레이아웃 구획(제목·핵심수치·흐름·결론), 각 구획의 시각 요소와 색상, 시선 흐름 제안.`,
      promptEn: `[Role] Presentation designer
[Context] Design a one-page infographic for the content below.
- Message: [ ] / Key numbers: [ ]
[Format] Layout zones (title/numbers/flow/conclusion), visuals and colors per zone, reading flow.`,
    },
    {
      level: 'applied', titleKo: '표를 시각적으로 개선', titleEn: 'Improve a Table Visually',
      promptKo: `[역할] 발표 자료 담당자
[맥락] 아래 밋밋한 표를 발표에서 잘 보이게 개선하는 방법을 제안해 주세요.
- (표 데이터 붙여넣기)
[형식] 강조할 셀·색상 규칙, 불필요한 열 정리, 표 대신 차트로 바꿀지 여부와 이유.`,
      promptEn: `[Role] Presentation staff
[Context] Suggest how to make the plain table below presentation-ready.
- (paste table)
[Format] Cells/colors to emphasize, columns to trim, whether to switch to a chart and why.`,
    },
    {
      level: 'advanced', titleKo: '발표 노트 + 시각 강조 설계', titleEn: 'Speaker Notes + Visual Emphasis',
      promptKo: `[심화 과제] 완성된 슬라이드마다 ① 발표 스크립트(노트)와 ② 청중 시선을 끌 시각 강조 포인트(애니메이션·하이라이트 위치)를 함께 생성하는 프롬프트를 설계하세요. 슬라이드 내용과 발표 흐름이 어긋나지 않도록 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a prompt that, per finished slide, generates ① speaker notes and ② visual-emphasis points (animation/highlight placement) to draw the audience's eye. The key is keeping slide content and delivery flow aligned.`,
    },
  ],

  'excel-analysis': [
    {
      level: 'basic', titleKo: '조건부 집계 수식 생성', titleEn: 'Conditional Aggregation Formula',
      promptKo: `[역할] 대학 행정 담당자
[맥락] 다음 작업을 위한 Excel 수식을 알려 주세요.
- A열 부서명이 "교무처"인 행의 C열 예산 합계
- B열 상태가 "완료"인 건수
[형식] 각 수식과 함께 한 줄 설명. (구버전 Excel도 쓸 수 있으면 대체 수식도)`,
      promptEn: `[Role] University administrator
[Context] Give Excel formulas for:
- Sum of C where A = "Academic Affairs"
- Count where B = "Done"
[Format] Each formula with a one-line note (add legacy-Excel alternative if any).`,
    },
    {
      level: 'basic', titleKo: '데이터 정리 프롬프트', titleEn: 'Data Cleanup',
      promptKo: `[역할] 데이터 담당자
[맥락] 아래 지저분한 데이터를 정리하는 방법을 알려 주세요.
- (샘플 데이터 붙여넣기: 공백·중복·형식 불일치)
[형식] 정리 순서(중복 제거 → 공백 정리 → 형식 통일)와 각 단계 Excel 기능/수식 제시.`,
      promptEn: `[Role] Data staff
[Context] How to clean the messy data below.
- (paste sample: blanks, duplicates, mixed formats)
[Format] Steps (dedupe → trim → normalize) with the Excel function per step.`,
    },
    {
      level: 'applied', titleKo: '피벗 테이블 설계', titleEn: 'Pivot Table Design',
      promptKo: `[역할] 통계 담당자
[맥락] 아래 데이터로 [분석 목적]을 위한 피벗 테이블을 설계해 주세요.
- (데이터 열 구성 붙여넣기)
[형식] 행/열/값/필터에 각각 어떤 필드를 넣을지와 기대 결과, 만드는 순서를 제시.`,
      promptEn: `[Role] Statistics staff
[Context] Design a pivot for [purpose] from the data below.
- (paste column layout)
[Format] Fields for rows/cols/values/filter, expected result, and steps.`,
    },
    {
      level: 'applied', titleKo: '오류 데이터 정제 규칙', titleEn: 'Error-Cleaning Rules',
      promptKo: `[역할] 데이터 담당자
[맥락] 아래 데이터의 이상값·오류를 찾아내 정제 규칙을 제안해 주세요.
- (데이터 붙여넣기)
[형식] 발견한 오류 유형 → 판별 조건(수식) → 수정/제외 규칙 표.`,
      promptEn: `[Role] Data staff
[Context] Find anomalies/errors in the data and propose cleaning rules.
- (paste data)
[Format] Error type → detection (formula) → fix/exclude rule (table).`,
    },
    {
      level: 'advanced', titleKo: '다중 시트 통합 분석 설계', titleEn: 'Multi-sheet Analysis Design',
      promptKo: `[심화 과제] 여러 시트(월별 데이터)를 통합해 분기 요약 리포트를 자동으로 만드는 절차를 프롬프트로 설계하세요. 통합 방법(수식/파워쿼리) → 요약 지표 → 최종 리포트 형식까지 단계별로 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a prompt for a procedure that merges monthly sheets into a quarterly summary report. Specify the merge method (formula/Power Query) → summary metrics → final report format, step by step.`,
    },
    {
      level: 'basic', titleKo: 'VLOOKUP·XLOOKUP 자동 생성', titleEn: 'VLOOKUP/XLOOKUP Helper',
      promptKo: `[역할] 대학 행정 담당자
[맥락] 두 시트를 연결하는 조회 수식을 만들어 주세요.
- Sheet1의 학번으로 Sheet2에서 이름·학과를 가져오기
[형식] VLOOKUP과 XLOOKUP 두 방식 수식 + 차이 설명. 오류 시 대체값(IFERROR) 포함.`,
      promptEn: `[Role] University administrator
[Context] Build a lookup formula linking two sheets.
- Pull name/dept from Sheet2 by student ID in Sheet1
[Format] Both VLOOKUP and XLOOKUP, with the difference and an IFERROR fallback.`,
    },
    {
      level: 'basic', titleKo: '조건부 서식 규칙 만들기', titleEn: 'Conditional Formatting Rules',
      promptKo: `[역할] 데이터 담당자
[맥락] 아래 표에서 눈에 띄게 표시할 조건부 서식 규칙을 알려 주세요.
- 예산 초과(빨강), 마감 임박 7일 이내(노랑), 완료(회색 처리)
[형식] 각 규칙의 조건식과 서식 설정 방법을 단계별로 설명.`,
      promptEn: `[Role] Data staff
[Context] Conditional-formatting rules to highlight the table.
- Over budget (red), due within 7 days (yellow), done (gray)
[Format] Formula and setup steps for each rule.`,
    },
    {
      level: 'applied', titleKo: '설문 응답 집계·교차분석', titleEn: 'Survey Tally & Cross-tab',
      promptKo: `[역할] 통계 담당자
[맥락] 아래 설문 응답 데이터를 집계하고 교차분석해 주세요.
- (문항별 응답 데이터) / 교차 기준: [부서 × 만족도 등]
[형식] 문항별 빈도·비율 집계표 + 교차표 구성 방법(피벗) + 해석 포인트.`,
      promptEn: `[Role] Statistics staff
[Context] Tally and cross-tabulate the survey responses.
- (response data) / Cross by: [dept × satisfaction...]
[Format] Frequency/ratio table + cross-tab (pivot) + interpretation points.`,
    },
    {
      level: 'applied', titleKo: '데이터 → 자동 요약 문장', titleEn: 'Data → Auto Summary Text',
      promptKo: `[역할] 보고 담당자
[맥락] 아래 집계 데이터를 보고서에 넣을 요약 문장으로 바꿔 주세요.
- (수치/증감 데이터)
[형식] 핵심 수치를 담은 3~4문장 요약 + 전월/전년 대비 증감 표현 포함.`,
      promptEn: `[Role] Reporting staff
[Context] Turn the aggregated data into report summary sentences.
- (numbers/changes)
[Format] 3–4 sentences with key figures and MoM/YoY change phrasing.`,
    },
    {
      level: 'advanced', titleKo: '재사용 분석 템플릿 설계', titleEn: 'Reusable Analysis Template',
      promptKo: `[심화 과제] 매달 같은 형식으로 들어오는 데이터를 붙여넣기만 하면 집계표·차트·요약이 자동으로 나오도록, 수식·피벗·조건부서식을 조합한 재사용 분석 템플릿의 구성을 프롬프트로 설계하세요. 입력 영역과 결과 영역을 분리하도록 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a prompt for a reusable analysis template where pasting monthly same-format data auto-produces tables, charts, and a summary using formulas/pivots/conditional formatting. The key is separating input and output areas.`,
    },
  ],

  'doc-practice': [
    {
      level: 'basic', titleKo: '시나리오 공문 작성', titleEn: 'Scenario Document',
      promptKo: `[역할] 대학 행정 담당자
[맥락] 아래 상황에 맞는 공문 1건을 작성해 주세요.
- 상황: 도서관 임시 휴관을 전 구성원에게 안내
- 기간: [ ] / 사유: 시설 점검
[형식] 공문 안내문. 제목 → 안내 내용 → 유의사항 → 문의처.`,
      promptEn: `[Role] University administrator
[Context] Write one official document for the situation.
- Situation: notify all of a temporary library closure
- Period: [ ] / Reason: maintenance
[Format] Notice: title → details → notes → contact.`,
    },
    {
      level: 'basic', titleKo: '공문 검토 체크', titleEn: 'Document Review Check',
      promptKo: `[역할] 공문 검토자
[맥락] 아래 공문 초안을 검토해 수정할 점을 알려 주세요.
- (공문 초안 붙여넣기)
[형식] 형식·수신처·사실정보·어조·오탈자 항목별로 문제점과 수정안 제시.`,
      promptEn: `[Role] Document reviewer
[Context] Review the draft and list fixes.
- (paste draft)
[Format] By category (format/recipient/facts/tone/typos): issue and fix.`,
    },
    {
      level: 'applied', titleKo: '행사 문서 세트', titleEn: 'Event Document Set',
      promptKo: `[역할] 대학 [우리 부서] 담당자
[맥락] [행사명]을 위한 문서 세트를 순서대로 작성해 주세요.
- ① 기획 기안문 ② 참가 안내 통보문 ③ 협조 요청 협조문
- 공통 정보: [일시·장소·대상]
[형식] 세 문서를 각각 공문 형식으로, 공통 정보는 일관되게 반영.`,
      promptEn: `[Role] University [your dept] staff
[Context] Write a document set for [event], in order.
- ① proposal ② participation notice ③ cooperation request
- Shared: [time/place/target]
[Format] Three official documents; keep shared info consistent.`,
    },
    {
      level: 'applied', titleKo: '반복 공문 템플릿화', titleEn: 'Recurring Document Template',
      promptKo: `[역할] 행정 담당자
[맥락] 매달 반복하는 [공문 유형]을 재사용 가능한 템플릿으로 만들어 주세요.
- 매번 바뀌는 값: [날짜·대상·수치 등]
[형식] 고정 문구는 그대로, 바뀌는 부분은 [ ] 자리표시자로 표시한 템플릿.`,
      promptEn: `[Role] Administrator
[Context] Turn the monthly [document type] into a reusable template.
- Changing values: [dates, targets, numbers]
[Format] Fixed text as-is; variable parts as [ ] placeholders.`,
    },
    {
      level: 'advanced', titleKo: '업무 1건 End-to-End 설계', titleEn: 'End-to-End Task Design',
      promptKo: `[심화 과제] 우리 부서 실제 업무 1건을 골라, 기안문 작성 → 보고 PPT 구조 → Excel 집계표까지 한 흐름으로 AI를 활용해 처리하는 프롬프트 세트를 직접 설계하세요. 각 단계의 입력·출력이 다음 단계로 자연스럽게 이어지도록 구성하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Pick one real task and design a prompt set to handle it end-to-end: proposal → report PPT structure → Excel summary. The key is chaining each step's output into the next.`,
    },
    {
      level: 'basic', titleKo: '민원 답변 공문', titleEn: 'Civil Inquiry Reply',
      promptKo: `[역할] 대학 행정 담당자
[맥락] 아래 민원에 대한 답변 공문을 작성해 주세요.
- 민원 내용: [주차 공간 부족 개선 요청 등]
- 조치/계획: [ ]
[형식] 민원 요지 확인 → 검토 결과 → 조치/계획 → 추가 안내. 정중한 어조.`,
      promptEn: `[Role] University administrator
[Context] Write a reply to the civil inquiry below.
- Inquiry: [e.g., parking shortage] / Action: [ ]
[Format] Restate → review result → action/plan → guidance. Courteous tone.`,
    },
    {
      level: 'basic', titleKo: '공지사항 게시문', titleEn: 'Announcement Post',
      promptKo: `[역할] 행정 담당자
[맥락] 아래 내용을 홈페이지/게시판 공지문으로 작성해 주세요.
- 공지 주제: [ ] / 기간·대상: [ ]
[형식] 제목(눈에 띄게) → 핵심 안내 → 상세 내용 → 문의처. 읽기 쉬운 단락 구성.`,
      promptEn: `[Role] Administrator
[Context] Write a website/board announcement.
- Topic: [ ] / Period·target: [ ]
[Format] Eye-catching title → key notice → details → contact. Easy-to-read paragraphs.`,
    },
    {
      level: 'applied', titleKo: '규정 개정 문서 세트', titleEn: 'Regulation Amendment Set',
      promptKo: `[역할] 주관 부서 담당자
[맥락] [규정] 개정에 필요한 문서 세트를 작성해 주세요.
- ① 개정안(신구대조표) ② 개정 안내문 ③ 시행 공지
- 개정 사유·주요 변경: [ ]
[형식] 세 문서를 일관된 정보로. 신구대조표는 조항/기존/개정 3열 표.`,
      promptEn: `[Role] Owning dept staff
[Context] Write a document set for a [regulation] amendment.
- ① amendment (old/new table) ② notice ③ effective announcement
- Reason·changes: [ ]
[Format] Consistent info; old/new table in 3 columns (clause/old/new).`,
    },
    {
      level: 'applied', titleKo: '감사 대응 소명 공문', titleEn: 'Audit Response Statement',
      promptKo: `[역할] 피감 부서 담당자
[맥락] 감사에서 지적된 사항에 대한 소명 공문을 작성해 주세요.
- 지적 사항: [ ] / 실제 경위: [ ] / 개선 조치: [ ]
[형식] 지적 사항 확인 → 사실 관계(경위) → 개선 조치·재발방지 → 향후 이행 계획. 사실 중심 어조.`,
      promptEn: `[Role] Audited dept staff
[Context] Write a response statement to an audit finding.
- Finding/context/corrective action: [ ]
[Format] Restate finding → facts → corrective action → future plan. Fact-based tone.`,
    },
    {
      level: 'advanced', titleKo: '연간 반복 공문 캘린더 설계', titleEn: 'Annual Recurring-Doc Calendar',
      promptKo: `[심화 과제] 우리 부서가 매년 정해진 시기에 반복 발송하는 공문들을 월별 캘린더로 정리하고, 각 공문의 재사용 템플릿까지 함께 생성하는 프롬프트를 설계하세요. 발송 시기·대상·변경값을 함께 관리하도록 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a prompt that maps our dept's yearly recurring documents onto a monthly calendar and also generates a reusable template for each. The key is tracking timing, recipients, and variable values together.`,
    },
  ],

  /* ─────────── 인사행정 ─────────── */

  'hr-ai': [
    {
      level: 'basic', titleKo: '근태 데이터 요약', titleEn: 'Attendance Summary',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 근태 데이터를 요약해 주세요.
- (출퇴근/지각/연차 데이터 붙여넣기)
[형식] 총원·평균 근무시간·지각/결근 건수·연차 사용률을 표로 요약.`,
      promptEn: `[Role] HR staff
[Context] Summarize the attendance data below.
- (paste attendance data)
[Format] Headcount, avg hours, late/absent counts, leave usage (table).`,
    },
    {
      level: 'basic', titleKo: '인사 FAQ 답변 생성', titleEn: 'HR FAQ Answers',
      promptKo: `[역할] 인사 담당자
[맥락] 자주 묻는 인사 질문에 대한 표준 답변을 만들어 주세요.
- 질문: 연차 이월 규정 / 병가 신청 절차 / 육아휴직 기간
[형식] 질문별 간결한 답변(2~3문장) + 근거 규정 표시 자리.`,
      promptEn: `[Role] HR staff
[Context] Draft standard answers to common HR questions.
- Q: leave carryover / sick-leave process / parental leave
[Format] Concise answer (2–3 sentences) per Q + a slot for the basis.`,
    },
    {
      level: 'applied', titleKo: '근무 유형별 분석', titleEn: 'Analysis by Work Type',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 데이터로 [분석 목적]에 맞게 근무 유형별 분석을 해 주세요.
- (부서·직급·근무형태별 데이터)
[형식] 그룹별 비교표 + 눈에 띄는 특징 3가지 + 시사점.`,
      promptEn: `[Role] HR staff
[Context] Analyze by work type for [purpose] from the data.
- (data by dept/rank/type)
[Format] Comparison table + 3 notable findings + implications.`,
    },
    {
      level: 'applied', titleKo: '인사 규정 안내문', titleEn: 'HR Policy Notice',
      promptKo: `[역할] 인사 담당자
[맥락] [규정/제도] 변경을 전 직원에게 쉽게 안내하는 문서를 작성해 주세요.
- 변경 전/후: [ ] / 시행일: [ ]
[형식] 핵심 변경 요약(표) → 자주 묻는 질문 3개 → 문의처. 이해하기 쉬운 어조.`,
      promptEn: `[Role] HR staff
[Context] Announce a [policy] change to all staff clearly.
- Before/after: [ ] / Effective: [ ]
[Format] Key changes (table) → 3 FAQs → contact. Plain, clear tone.`,
    },
    {
      level: 'advanced', titleKo: '근태 이상패턴 탐지 설계', titleEn: 'Anomaly Detection Design',
      promptKo: `[심화 과제] 근태 데이터에서 이상 패턴(반복 지각, 특정 요일 결근, 과다 초과근무 등)을 자동으로 탐지하고 조치 방안까지 제안하는 프롬프트를 설계하세요. 판별 기준과 개인정보 유의사항을 함께 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a prompt that auto-detects anomaly patterns in attendance (repeated lateness, weekday absences, excess overtime) and proposes actions. The key is specifying detection criteria and privacy caveats.`,
    },
    {
      level: 'basic', titleKo: '신규 입사자 온보딩 안내', titleEn: 'New Hire Onboarding Guide',
      promptKo: `[역할] 인사 담당자
[맥락] 신규 입사자에게 첫 주에 필요한 것들을 안내하는 문서를 작성해 주세요.
- 제출 서류, 시스템 계정, 부서 소개, 근무 규칙 등
[형식] 체크리스트 형식 + 담당자/기한. 친절하고 환영하는 어조.`,
      promptEn: `[Role] HR staff
[Context] Write a first-week onboarding guide for a new hire.
- Documents, system accounts, dept intro, work rules
[Format] Checklist + owner/deadline. Warm, welcoming tone.`,
    },
    {
      level: 'basic', titleKo: '인사 제도 쉬운 설명', titleEn: 'Explain HR Policy Simply',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 인사 제도를 직원이 이해하기 쉽게 풀어 설명해 주세요.
- 제도: [연금·성과급·유연근무 등]
[형식] 한 줄 정의 → 대상·조건 → 예시 → 자주 묻는 질문 2개. 전문용어 최소화.`,
      promptEn: `[Role] HR staff
[Context] Explain the HR policy below in plain terms.
- Policy: [pension/bonus/flex work...]
[Format] One-line definition → who/conditions → example → 2 FAQs. Minimal jargon.`,
    },
    {
      level: 'applied', titleKo: '부서별 인력현황 분석', titleEn: 'Headcount Analysis by Dept',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 인력 데이터로 부서별 현황을 분석해 주세요.
- (부서·직급·정원·현원 데이터)
[형식] 부서별 충원율 표 + 인력 과부족 부서 강조 + 충원/재배치 제언.`,
      promptEn: `[Role] HR staff
[Context] Analyze headcount by department from the data.
- (dept/rank/quota/actual)
[Format] Fill-rate table + flag over/under-staffed depts + hiring/reassignment advice.`,
    },
    {
      level: 'applied', titleKo: '복지제도 안내 답변 세트', titleEn: 'Benefits Q&A Set',
      promptKo: `[역할] 인사 담당자
[맥락] 직원 문의가 잦은 복지제도에 대한 표준 답변 세트를 만들어 주세요.
- 항목: [경조사비·건강검진·교육비 지원 등]
[형식] 항목별 「대상 / 지원 내용 / 신청 방법 / 유의사항」. 챗봇·안내데스크에서 바로 활용 가능하게.`,
      promptEn: `[Role] HR staff
[Context] Build a standard Q&A set for common benefit questions.
- Items: [family events/health checkup/education support...]
[Format] Per item: eligibility / benefit / how to apply / notes. Ready for a chatbot/help desk.`,
    },
    {
      level: 'advanced', titleKo: '월간 인사 인사이트 리포트 설계', titleEn: 'Monthly HR Insight Report',
      promptKo: `[심화 과제] 채용·근태·이직 등 여러 인사 데이터를 종합해 매달 경영진에게 제공할 인사 인사이트 리포트를 설계하세요. 핵심 지표 선정 → 전월 대비 변화 → 주목할 시그널 → 제언까지 자동 생성하도록 구성하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a monthly HR insight report combining hiring/attendance/turnover data for executives. Auto-generate: key metrics → MoM change → notable signals → recommendations.`,
    },
  ],

  'hr-documents': [
    {
      level: 'basic', titleKo: '채용공고 작성', titleEn: 'Job Posting',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 조건으로 채용공고를 작성해 주세요.
- 직무: 행정직원(계약직) / 자격: 관련 경력 2년 이상
- 근무: [부서·기간] / 마감: [ ]
[형식] 「모집 개요 → 담당 업무 → 지원 자격 → 전형 절차 → 제출 서류」 순서.`,
      promptEn: `[Role] HR staff
[Context] Write a job posting.
- Role: admin (contract) / 2+ yrs exp
- Work: [dept/period] / Deadline: [ ]
[Format] Overview → duties → qualifications → process → documents.`,
    },
    {
      level: 'basic', titleKo: '인사발령 통보문', titleEn: 'Appointment Notice',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 인사 이동을 통보하는 공문을 작성해 주세요.
- 홍길동: 교무처 → 기획처 (전보) / 발령일: [ ]
[형식] 공문 인사발령 통보문, 표 형식(성명·현소속·발령·사유) 포함.`,
      promptEn: `[Role] HR staff
[Context] Write an appointment notice.
- Hong: Academic Affairs → Planning (transfer) / date: [ ]
[Format] Official appointment notice with a table (name/current/appt/reason).`,
    },
    {
      level: 'applied', titleKo: '근로계약서 초안', titleEn: 'Employment Contract Draft',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 조건의 근로계약서 초안을 작성해 주세요.
- 계약 기간: [ ] / 급여: [ ] / 근무시간: [ ] / 직무: [ ]
[형식] 필수 조항(근로기준법 기준) 포함. ※ 완성본은 반드시 법무 검토 필요 문구 추가.`,
      promptEn: `[Role] HR staff
[Context] Draft an employment contract.
- Period/salary/hours/role: [ ]
[Format] Include essential clauses (labor law). Add a "requires legal review" note.`,
    },
    {
      level: 'applied', titleKo: '위촉장·임명장', titleEn: 'Appointment Letter',
      promptKo: `[역할] 인사 담당자
[맥락] [위원회/직책] 위촉장을 작성해 주세요.
- 대상: [성명·소속] / 위촉 기간: [ ] / 역할: [ ]
[형식] 격식 있는 위촉장 형식. 위촉 취지·기간·역할·기관장 직인 자리 포함.`,
      promptEn: `[Role] HR staff
[Context] Write an appointment letter for [committee/role].
- Appointee: [name/affiliation] / Term: [ ] / Role: [ ]
[Format] Formal letter: purpose, term, role, seal placeholder.`,
    },
    {
      level: 'advanced', titleKo: '채용 문서 세트 일관 생성', titleEn: 'Consistent Hiring Document Set',
      promptKo: `[심화 과제] 하나의 채용 건에 대해 채용공고 + 서류심사 안내 + 최종 합격 통보문 3종을 공통 정보(직무·일정) 기반으로 일관되게 생성하는 프롬프트를 설계하세요. 문서 간 날짜·명칭이 어긋나지 않도록 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a prompt that generates a hiring set — posting + screening notice + final acceptance — consistently from shared info (role/schedule). The key is keeping dates/names aligned across documents.`,
    },
    {
      level: 'basic', titleKo: '재직·경력 증명서 문구', titleEn: 'Employment/Career Certificate',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 정보로 재직증명서(또는 경력증명서) 문구를 작성해 주세요.
- 성명·부서·직급·재직 기간·용도: [ ]
[형식] 증명서 표준 문구 형식. 발급 목적·증명 내용·발급일·기관장 명의 포함.`,
      promptEn: `[Role] HR staff
[Context] Draft an employment/career certificate.
- Name/dept/rank/period/purpose: [ ]
[Format] Standard certificate wording: purpose, statement, issue date, issuer.`,
    },
    {
      level: 'basic', titleKo: '표창장·감사장', titleEn: 'Award/Appreciation Letter',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 공적에 대한 표창장(또는 감사장) 문구를 작성해 주세요.
- 수상자·공적 내용·시상 사유: [ ]
[형식] 격식 있는 표창장 문구. 공적 요약 → 표창 문구 → 수여자·일자.`,
      promptEn: `[Role] HR staff
[Context] Write an award/appreciation letter for the achievement below.
- Recipient/achievement/reason: [ ]
[Format] Formal wording: achievement → citation → issuer·date.`,
    },
    {
      level: 'applied', titleKo: '인사평가 결과 통보문', titleEn: 'Performance Result Notice',
      promptKo: `[역할] 인사 담당자
[맥락] 인사평가 결과를 대상자에게 통보하는 문서를 작성해 주세요.
- 평가 기간·등급·주요 강점·개선점: [ ]
[형식] 결과 요약 → 강점 → 개선 방향 → 이의신청 안내. 존중하는 어조.`,
      promptEn: `[Role] HR staff
[Context] Write a performance-result notice to an employee.
- Period/grade/strengths/improvements: [ ]
[Format] Result → strengths → improvement direction → appeal info. Respectful tone.`,
    },
    {
      level: 'applied', titleKo: '전보·파견 명령서', titleEn: 'Transfer/Dispatch Order',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 전보 또는 파견 명령서를 작성해 주세요.
- 대상·현소속·전보(파견)처·기간·사유: [ ]
[형식] 공문 명령서 형식. 발령 내용(표) → 근무 조건 → 유의사항 → 결재란.`,
      promptEn: `[Role] HR staff
[Context] Write a transfer/dispatch order.
- Name/current/destination/period/reason: [ ]
[Format] Official order: appointment (table) → conditions → notes → approval.`,
    },
    {
      level: 'advanced', titleKo: '직원 생애주기 문서 패키지', titleEn: 'Employee Lifecycle Package',
      promptKo: `[심화 과제] 입사 → 재직(발령·평가·복지) → 퇴직에 이르는 직원 생애주기 단계별로 필요한 인사 문서 목록을 정의하고, 각 단계 대표 문서의 템플릿을 일관된 서식으로 생성하는 프롬프트를 설계하세요. 단계별 필수 문서를 빠짐없이 정리하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a prompt that defines the HR documents needed at each employee-lifecycle stage (hire → tenure → exit) and generates a consistent template for each stage's key document. The key is completeness per stage.`,
    },
  ],

  'attendance-excel': [
    {
      level: 'basic', titleKo: '지각·결근 집계 수식', titleEn: 'Late/Absence Formula',
      promptKo: `[역할] 인사 담당자
[맥락] 근태 표에서 다음을 계산하는 Excel 수식을 알려 주세요.
- 직원별 지각 횟수 / 부서별 결근 합계
[형식] 각 수식 + 한 줄 설명. 구버전 대체 수식이 있으면 함께.`,
      promptEn: `[Role] HR staff
[Context] Excel formulas from an attendance table:
- Late count per employee / absence total per dept
[Format] Each formula + one-line note; legacy alternative if any.`,
    },
    {
      level: 'basic', titleKo: '월별 근태 요약표', titleEn: 'Monthly Attendance Summary',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 근태 원자료로 월별 요약표를 만드는 방법을 알려 주세요.
- (일자별 출퇴근 데이터)
[형식] 월별 정상/지각/결근/연차 집계표 구성과 필요한 수식/피벗 제시.`,
      promptEn: `[Role] HR staff
[Context] Build a monthly summary from raw attendance.
- (daily punch data)
[Format] Monthly table (normal/late/absent/leave) with formulas/pivot.`,
    },
    {
      level: 'applied', titleKo: '초과근무 분석', titleEn: 'Overtime Analysis',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 데이터로 초과근무 현황을 분석해 주세요.
- (일자·직원·근무시간 데이터) / 기준 근무시간: [ ]
[형식] 개인·부서별 초과근무 시간 집계, 상위 사례, 관리 시사점.`,
      promptEn: `[Role] HR staff
[Context] Analyze overtime from the data.
- (date/employee/hours) / Standard hours: [ ]
[Format] Overtime by person/dept, top cases, management implications.`,
    },
    {
      level: 'applied', titleKo: '근태 이상값 필터', titleEn: 'Attendance Anomaly Filter',
      promptKo: `[역할] 데이터 담당자
[맥락] 근태 데이터에서 이상값(음수 근무시간, 24시간 초과 등)을 걸러내는 규칙을 만들어 주세요.
- (데이터 붙여넣기)
[형식] 이상 유형 → 판별 조건부 서식/수식 → 처리 방법 표.`,
      promptEn: `[Role] Data staff
[Context] Rules to filter anomalies (negative hours, >24h, etc.).
- (paste data)
[Format] Type → conditional format/formula → handling (table).`,
    },
    {
      level: 'advanced', titleKo: '근태 대시보드 지표 설계', titleEn: 'Attendance Dashboard Design',
      promptKo: `[심화 과제] 부서장이 한눈에 보는 근태 대시보드에 넣을 핵심 지표(KPI)를 정의하고, 각 지표를 어떤 차트로 표현할지, 어떤 수식으로 계산할지까지 프롬프트로 설계하세요. 지표 선정 근거를 함께 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a prompt defining key attendance KPIs for a manager dashboard, which chart shows each, and the formula behind it. The key is justifying the KPI selection.`,
    },
    {
      level: 'basic', titleKo: '연차 사용 현황 집계', titleEn: 'Leave Usage Tally',
      promptKo: `[역할] 인사 담당자
[맥락] 직원별 연차 사용 현황을 집계하는 방법을 알려 주세요.
- 데이터: [부여일수·사용일수·잔여] 열 구성
[형식] 개인별 사용률·잔여 집계 수식 + 잔여 과다(소진 독려 대상) 표시 방법.`,
      promptEn: `[Role] HR staff
[Context] How to tally leave usage per employee.
- Columns: granted/used/remaining
[Format] Usage-rate/remaining formulas + how to flag high-remaining employees.`,
    },
    {
      level: 'basic', titleKo: '근무일수 계산(주말·공휴일 제외)', titleEn: 'Working Days (excl. holidays)',
      promptKo: `[역할] 데이터 담당자
[맥락] 두 날짜 사이의 실제 근무일수를 계산하는 수식을 알려 주세요.
- 주말과 공휴일(별도 목록)을 제외
[형식] NETWORKDAYS 계열 수식과 공휴일 목록 지정 방법. 반차 처리 팁도.`,
      promptEn: `[Role] Data staff
[Context] Formula for actual working days between two dates.
- Exclude weekends and holidays (separate list)
[Format] NETWORKDAYS-family formula + how to set the holiday list; half-day tip.`,
    },
    {
      level: 'applied', titleKo: '유연근무 시간 정산', titleEn: 'Flex-Time Settlement',
      promptKo: `[역할] 인사 담당자
[맥락] 유연근무제 직원의 월 근무시간을 정산하는 방법을 설계해 주세요.
- (일자별 출퇴근·의무근무시간 데이터)
[형식] 일별 근무시간 산출 → 월 합계 → 의무시간 대비 과부족 → 정산 결과표.`,
      promptEn: `[Role] HR staff
[Context] Design a monthly flex-time settlement.
- (daily punch + required hours)
[Format] Daily hours → monthly total → vs required → settlement table.`,
    },
    {
      level: 'applied', titleKo: '부서별 출근율 비교', titleEn: 'Attendance Rate by Dept',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 데이터로 부서별 출근율을 비교 분석해 주세요.
- (부서·근무일·출근일 데이터) / 기간: [ ]
[형식] 부서별 출근율 집계표 + 상·하위 부서 + 시각화(막대) 추천 + 해석.`,
      promptEn: `[Role] HR staff
[Context] Compare attendance rate by department.
- (dept/workdays/present) / Period: [ ]
[Format] Rate table + top/bottom depts + chart (bar) recommendation + interpretation.`,
    },
    {
      level: 'advanced', titleKo: '휴가 집중기 인력공백 분석', titleEn: 'Peak-Leave Coverage Analysis',
      promptKo: `[심화 과제] 연차·휴가가 특정 시기에 몰릴 때 발생하는 부서별 인력 공백을 사전에 파악하고, 업무 연속성을 위한 대응(대체 인력·업무 조정)을 제안하는 분석을 프롬프트로 설계하세요. 시기·부서·최소 필요 인력을 함께 고려하도록 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design an analysis that foresees per-dept coverage gaps when leave concentrates in certain periods and proposes continuity measures (backup staff, task shifts). Consider timing, dept, and minimum staffing.`,
    },
  ],

  'hr-report': [
    {
      level: 'basic', titleKo: '인사 현황 요약', titleEn: 'HR Status Summary',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 인사 데이터로 현황 요약을 만들어 주세요.
- (정원·현원·직급·근속 데이터)
[형식] 핵심 지표 요약(표) + 한 문단 총평.`,
      promptEn: `[Role] HR staff
[Context] Summarize HR status from the data.
- (quota/actual/rank/tenure)
[Format] Key metrics (table) + one-paragraph overview.`,
    },
    {
      level: 'basic', titleKo: '채용 결과 보고 문구', titleEn: 'Hiring Result Lines',
      promptKo: `[역할] 인사 담당자
[맥락] 최근 채용 결과를 보고 슬라이드용 문구로 정리해 주세요.
- 지원 [ ]명 / 합격 [ ]명 / 경쟁률 [ ]
[형식] 슬라이드 제목 + 핵심 bullet 3개(명사형).`,
      promptEn: `[Role] HR staff
[Context] Turn recent hiring results into slide lines.
- Applied [ ] / Passed [ ] / Ratio [ ]
[Format] Slide title + 3 key bullets (noun phrases).`,
    },
    {
      level: 'applied', titleKo: '경영진 보고 PPT 구조', titleEn: 'Executive Report PPT',
      promptKo: `[역할] 인사 담당자
[맥락] [보고 주제]를 경영진에게 보고할 PPT 구조를 설계해 주세요.
- 핵심 메시지: [ ] / 원하는 의사결정: [ ]
[형식] 요약(1장) → 현황 → 이슈 → 제안 → 결론 흐름, 슬라이드별 메시지 포함.`,
      promptEn: `[Role] HR staff
[Context] Design an executive report PPT for [topic].
- Key message: [ ] / Desired decision: [ ]
[Format] Summary(1) → status → issues → proposal → conclusion, per-slide message.`,
    },
    {
      level: 'applied', titleKo: '인사 통계 시각화 추천', titleEn: 'HR Stats Visualization',
      promptKo: `[역할] 보고자료 담당자
[맥락] 아래 인사 통계를 효과적으로 보여줄 시각화를 추천해 주세요.
- (연령·성별·직급 분포 등 데이터)
[형식] 지표별 추천 차트와 배치, 강조 색상 가이드.`,
      promptEn: `[Role] Report staff
[Context] Recommend visuals for the HR stats below.
- (age/gender/rank distribution)
[Format] Chart per metric, layout, and accent-color guide.`,
    },
    {
      level: 'advanced', titleKo: '분기 인사보고 2버전 설계', titleEn: 'Quarterly Report, Two Versions',
      promptKo: `[심화 과제] 분기 인사보고서를 ① 1페이지 요약본 ② 상세 보고본 두 버전으로, 동일 데이터에서 일관되게 생성하는 프롬프트를 설계하세요. 요약본은 의사결정 포인트만, 상세본은 근거까지 담도록 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a prompt that generates a quarterly HR report in two versions — ① 1-page summary ② detailed — consistently from the same data. Summary carries decision points only; detailed adds the evidence.`,
    },
    {
      level: 'basic', titleKo: '교육 이수 현황 보고', titleEn: 'Training Completion Report',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 교육 이수 데이터를 현황 보고로 정리해 주세요.
- (교육명·대상·이수·미이수 데이터)
[형식] 교육별 이수율 표 + 미이수자 안내 방안 + 다음 차수 계획 제언.`,
      promptEn: `[Role] HR staff
[Context] Summarize training completion into a status report.
- (course/target/completed/not)
[Format] Completion-rate table + follow-up for non-completers + next-round plan.`,
    },
    {
      level: 'basic', titleKo: '인력 충원 필요 보고 문구', titleEn: 'Staffing-Need Report Lines',
      promptKo: `[역할] 인사 담당자
[맥락] 특정 부서의 인력 충원 필요성을 보고할 슬라이드 문구를 작성해 주세요.
- 부서·현 인력·업무량 근거: [ ]
[형식] 슬라이드 제목 + 근거 bullet 3개 + 요청 사항 한 줄.`,
      promptEn: `[Role] HR staff
[Context] Write slide lines reporting a dept's staffing need.
- Dept/current staff/workload basis: [ ]
[Format] Title + 3 evidence bullets + one-line ask.`,
    },
    {
      level: 'applied', titleKo: '이직·퇴직 분석 보고', titleEn: 'Turnover Analysis Report',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 퇴직 데이터를 분석해 보고자료로 만들어 주세요.
- (기간·부서·사유·근속 데이터)
[형식] 퇴직률 추이 → 주요 사유 → 부서별 특징 → 대응 제언. 시각화 포인트 표시.`,
      promptEn: `[Role] HR staff
[Context] Analyze the turnover data into a report.
- (period/dept/reason/tenure)
[Format] Turnover trend → key reasons → dept patterns → recommendations, with viz points.`,
    },
    {
      level: 'applied', titleKo: '인건비 현황 보고자료', titleEn: 'Labor Cost Report',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 인건비 데이터를 경영진 보고자료로 정리해 주세요.
- (부서·항목·예산·집행 데이터)
[형식] 예산 대비 집행률 표 → 증감 요인 → 유의 부서 → 향후 전망. 핵심 수치 강조.`,
      promptEn: `[Role] HR staff
[Context] Compile the labor-cost data into an executive report.
- (dept/item/budget/spend)
[Format] Execution-rate table → change drivers → watch depts → outlook, key figures highlighted.`,
    },
    {
      level: 'advanced', titleKo: '연간 인사백서 설계', titleEn: 'Annual HR Yearbook Design',
      promptKo: `[심화 과제] 한 해의 인사 활동(채용·교육·평가·복지·조직)을 종합한 연간 인사백서의 목차를 설계하고, 각 장에 넣을 데이터·표·서술 문단을 생성하는 프롬프트를 설계하세요. 장별로 '수치 → 해석 → 시사점' 구조를 일관되게 유지하도록 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a prompt for an annual HR yearbook: outline the chapters covering the year's HR activities (hiring/training/appraisal/benefits/org) and generate each chapter's data, tables, and narrative. Keep a consistent "numbers → interpretation → implications" structure.`,
    },
  ],

  'work-template': [
    {
      level: 'basic', titleKo: '반복 공문 템플릿', titleEn: 'Recurring Doc Template',
      promptKo: `[역할] 행정 담당자
[맥락] 자주 쓰는 [공문 유형]의 재사용 템플릿을 만들어 주세요.
- 매번 바뀌는 값: [ ]
[형식] 고정 문구 + [ ] 자리표시자. 작성 시 유의사항 한 줄 첨부.`,
      promptEn: `[Role] Administrator
[Context] Build a reusable template for a common [document type].
- Changing values: [ ]
[Format] Fixed text + [ ] placeholders. Add one usage note.`,
    },
    {
      level: 'basic', titleKo: '프롬프트 라이브러리 항목', titleEn: 'Prompt Library Entry',
      promptKo: `[역할] 업무 효율화 담당자
[맥락] 우리 부서가 자주 하는 업무 하나를 골라 재사용 프롬프트 1개를 정리해 주세요.
- 업무: [ ]
[형식] 「용도 / 프롬프트 본문 / 입력값 / 기대 결과」 카드 형식.`,
      promptEn: `[Role] Efficiency lead
[Context] Pick a frequent task and write one reusable prompt.
- Task: [ ]
[Format] Card: purpose / prompt / inputs / expected output.`,
    },
    {
      level: 'applied', titleKo: '내 업무용 템플릿 설계', titleEn: 'My Task Template',
      promptKo: `[역할] [우리 부서] 담당자
[맥락] 내가 매주 반복하는 [업무]를 템플릿화하고 싶습니다. 어떤 부분을 고정/변수로 나눌지 함께 설계해 주세요.
- 업무 설명: [ ]
[형식] 고정 항목 / 변수 항목 구분표 + 완성 템플릿.`,
      promptEn: `[Role] [Your dept] staff
[Context] Templatize my weekly [task]. Help split fixed vs variable parts.
- Task: [ ]
[Format] Fixed/variable table + finished template.`,
    },
    {
      level: 'applied', titleKo: '체크리스트 템플릿', titleEn: 'Checklist Template',
      promptKo: `[역할] 행정 담당자
[맥락] [업무 절차]의 누락을 막는 체크리스트를 만들어 주세요.
- 절차: [ ]
[형식] 단계별 체크 항목 + 담당/기한 열. 빠지기 쉬운 항목 표시.`,
      promptEn: `[Role] Administrator
[Context] Make a checklist to prevent misses in [procedure].
- Procedure: [ ]
[Format] Step checklist + owner/deadline; flag easy-to-miss items.`,
    },
    {
      level: 'advanced', titleKo: '부서 공용 프롬프트 가이드', titleEn: 'Team Prompt Guide',
      promptKo: `[심화 과제] 부서원 누구나 같은 품질로 쓸 수 있는 공용 프롬프트 가이드라인을 설계하세요. 업무 유형 분류 → 유형별 표준 프롬프트 → 사용 규칙(개인정보·검토 절차)까지 포함하도록 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a shared team prompt guideline anyone can use for consistent quality: task taxonomy → standard prompt per type → usage rules (privacy, review). The key is including the rules.`,
    },
    {
      level: 'basic', titleKo: '이메일 회신 템플릿', titleEn: 'Email Reply Template',
      promptKo: `[역할] 행정 담당자
[맥락] 자주 받는 [문의 유형]에 대한 이메일 회신 템플릿을 만들어 주세요.
- 문의 유형: [일정 문의·자료 요청 등]
[형식] 인사 → 답변 본문(자리표시자) → 안내 → 맺음말. 정중한 업무 이메일체.`,
      promptEn: `[Role] Administrator
[Context] Create an email reply template for a common [inquiry type].
- Type: [schedule/data request...]
[Format] Greeting → body (placeholders) → guidance → closing. Polite business tone.`,
    },
    {
      level: 'basic', titleKo: '업무 인수인계서 양식', titleEn: 'Handover Document Form',
      promptKo: `[역할] 행정 담당자
[맥락] 담당 업무를 후임자에게 넘길 인수인계서 양식을 만들어 주세요.
- 업무 범위: [ ]
[형식] 「담당 업무 목록 → 진행중 사안 → 주요 연락처 → 파일 위치 → 유의사항」 표.`,
      promptEn: `[Role] Administrator
[Context] Make a handover form for a successor.
- Scope: [ ]
[Format] Task list → in-progress items → key contacts → file locations → notes (table).`,
    },
    {
      level: 'applied', titleKo: '프로젝트 진행보고 템플릿', titleEn: 'Project Status Template',
      promptKo: `[역할] 사업 담당자
[맥락] [프로젝트]의 정기 진행보고 템플릿을 설계해 주세요.
- 보고 주기: [주간/월간]
[형식] 「전체 진척률 → 이번 기간 완료 → 진행중 → 이슈/리스크 → 다음 계획」. 매번 채우기만 하면 되게.`,
      promptEn: `[Role] Project staff
[Context] Design a periodic status-report template for [project].
- Cadence: [weekly/monthly]
[Format] Overall progress → done → in progress → issues/risks → next. Fill-in-the-blank.`,
    },
    {
      level: 'applied', titleKo: '회의 준비·진행 템플릿', titleEn: 'Meeting Prep/Run Template',
      promptKo: `[역할] 회의 주관자
[맥락] 회의를 효율적으로 준비하고 진행할 템플릿을 만들어 주세요.
- 회의 유형: [정기회의·킥오프 등]
[형식] 사전(안건·자료·참석자) / 진행(시간배분·역할) / 사후(회의록·후속조치) 3부 체크리스트.`,
      promptEn: `[Role] Meeting host
[Context] Make a template to prep and run meetings efficiently.
- Type: [regular/kickoff...]
[Format] Before (agenda/materials/attendees) / During (timing/roles) / After (minutes/follow-up).`,
    },
    {
      level: 'advanced', titleKo: '신입 업무 매뉴얼 자동 생성', titleEn: 'New-Staff Manual Generator',
      promptKo: `[심화 과제] 우리 부서 업무를 처음 맡는 사람이 바로 따라 할 수 있는 업무 매뉴얼을, 업무 목록만 입력하면 각 업무의 목적·절차·주의사항·관련 양식까지 일관된 형식으로 생성하는 프롬프트를 설계하세요. 초보자가 이해할 수준으로 서술하도록 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Design a prompt that, from just a task list, generates a beginner-ready work manual — each task's purpose, steps, cautions, and related forms — in a consistent format. The key is writing at a novice level.`,
    },
  ],

  'work-automation': [
    {
      level: 'basic', titleKo: '반복 업무 단계 분해', titleEn: 'Break Down a Task',
      promptKo: `[역할] 업무 개선 담당자
[맥락] 아래 반복 업무를 단계별로 분해하고, 각 단계에서 AI가 도울 수 있는 부분을 표시해 주세요.
- 업무: [ ]
[형식] 단계 → 현재 방식 → AI 활용 가능성(상/중/하) 표.`,
      promptEn: `[Role] Improvement lead
[Context] Break the recurring task into steps and mark where AI can help.
- Task: [ ]
[Format] Step → current way → AI potential (H/M/L) table.`,
    },
    {
      level: 'basic', titleKo: '자동화 후보 선정', titleEn: 'Pick Automation Targets',
      promptKo: `[역할] 업무 개선 담당자
[맥락] 우리 부서 업무 목록 중 자동화 우선순위를 정해 주세요.
- 업무 목록: [ ]
[형식] 반복성·규칙성·소요시간 기준으로 점수화하고 우선순위 표 제시.`,
      promptEn: `[Role] Improvement lead
[Context] Prioritize tasks for automation.
- Task list: [ ]
[Format] Score by repetition/rule-based/time; priority table.`,
    },
    {
      level: 'applied', titleKo: '내 업무 워크플로우 설계', titleEn: 'My Workflow Design',
      promptKo: `[역할] [우리 부서] 담당자
[맥락] [반복 업무]를 AI와 도구를 엮어 처리하는 워크플로우를 설계해 주세요.
- 사용 가능한 도구: [ChatGPT/Excel/HWP 등]
[형식] 입력 → 처리 단계(도구별) → 출력 흐름도. 각 단계 프롬프트 예시 포함.`,
      promptEn: `[Role] [Your dept] staff
[Context] Design a workflow chaining AI and tools for [recurring task].
- Tools: [ChatGPT/Excel/HWP...]
[Format] Input → steps (per tool) → output flow, with a prompt example per step.`,
    },
    {
      level: 'applied', titleKo: 'AI 연계 절차 문서화', titleEn: 'Document the AI Procedure',
      promptKo: `[역할] 업무 개선 담당자
[맥락] 아래 자동화 워크플로우를 다른 사람이 따라 할 수 있게 절차서로 정리해 주세요.
- (워크플로우 개요)
[형식] 준비물 → 단계별 실행 방법 → 확인 포인트 → 예외 처리.`,
      promptEn: `[Role] Improvement lead
[Context] Turn the workflow into a procedure others can follow.
- (workflow overview)
[Format] Prereqs → steps → checkpoints → exception handling.`,
    },
    {
      level: 'advanced', titleKo: '월간 자동화 파이프라인 + ROI', titleEn: 'Monthly Pipeline + ROI',
      promptKo: `[심화 과제] 매달 반복되는 업무 하나를 골라 AI 자동화 파이프라인을 설계하고, 절감되는 시간과 ROI를 추정하는 프롬프트를 만드세요. 현재 소요시간 → 자동화 후 예상시간 → 월/연 절감 효과를 산출하도록 지정하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Pick a monthly recurring task, design an AI automation pipeline, and estimate time saved and ROI. Specify current time → post-automation time → monthly/yearly savings.`,
    },
  ],

  'hr-practice': [
    {
      level: 'basic', titleKo: '인사 시나리오 문서', titleEn: 'HR Scenario Document',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 상황에 맞는 인사 문서 1건을 작성해 주세요.
- 상황: 신규 직원 채용에 따른 인사발령
- 정보: [성명·부서·발령일]
[형식] 공문 인사발령 통보문(표 포함).`,
      promptEn: `[Role] HR staff
[Context] Write one HR document for the situation.
- Situation: appointment for a new hire
- Info: [name/dept/date]
[Format] Official appointment notice (with table).`,
    },
    {
      level: 'basic', titleKo: '근태 분석 요약', titleEn: 'Attendance Analysis Summary',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 근태 데이터를 분석해 한 페이지 요약을 만들어 주세요.
- (근태 데이터)
[형식] 핵심 지표(표) + 주목할 점 3가지 + 관리 제안 1가지.`,
      promptEn: `[Role] HR staff
[Context] Analyze the attendance data into a one-page summary.
- (attendance data)
[Format] Key metrics (table) + 3 findings + 1 management suggestion.`,
    },
    {
      level: 'applied', titleKo: '채용~발령 문서 세트', titleEn: 'Hiring-to-Appointment Set',
      promptKo: `[역할] 인사 담당자
[맥락] 한 명의 채용 확정자에 대해 필요한 문서를 순서대로 작성해 주세요.
- ① 합격 통보문 ② 근로계약서 안내 ③ 인사발령 통보문
- 공통 정보: [성명·부서·시작일]
[형식] 세 문서를 공문 형식으로, 공통 정보 일관 반영.`,
      promptEn: `[Role] HR staff
[Context] Write documents for one confirmed hire, in order.
- ① acceptance ② contract guide ③ appointment notice
- Shared: [name/dept/start date]
[Format] Three official documents; keep shared info consistent.`,
    },
    {
      level: 'applied', titleKo: '인사보고 PPT+Excel 연계', titleEn: 'HR Report PPT + Excel',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 인사 데이터로 Excel 집계표와 보고 PPT 구조를 함께 만들어 주세요.
- (인사 데이터)
[형식] ① Excel 집계 방법(수식/피벗) ② 그 결과를 보여줄 PPT 슬라이드 구조.`,
      promptEn: `[Role] HR staff
[Context] Build an Excel summary and a report PPT structure from the HR data.
- (HR data)
[Format] ① Excel method (formula/pivot) ② PPT slide structure showing it.`,
    },
    {
      level: 'advanced', titleKo: '인사 업무 End-to-End 포트폴리오', titleEn: 'HR End-to-End Portfolio',
      promptKo: `[심화 과제] 실제 인사 업무 1건을 골라, 데이터 분석 → 문서 작성 → 보고자료 제작까지 AI로 처리하는 전 과정을 프롬프트 세트로 설계하고, 결과물을 포트폴리오로 정리하세요. 각 단계 산출물이 다음 단계 입력으로 이어지도록 구성하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Pick one real HR task and design a prompt set covering the whole flow — data analysis → document writing → report — then compile the outputs as a portfolio. The key is chaining each step's output into the next.`,
    },
    {
      level: 'basic', titleKo: '인사 공지문 작성', titleEn: 'HR Announcement',
      promptKo: `[역할] 인사 담당자
[맥락] 전 직원 대상 인사 공지문을 작성해 주세요.
- 공지 내용: [정기 인사발령·평가 일정 안내 등]
[형식] 제목 → 핵심 안내 → 일정/대상 → 문의처. 명확하고 간결하게.`,
      promptEn: `[Role] HR staff
[Context] Write an all-staff HR announcement.
- Topic: [regular appointments/appraisal schedule...]
[Format] Title → key notice → schedule/target → contact. Clear and concise.`,
    },
    {
      level: 'basic', titleKo: '근태 이상 사례 정리', titleEn: 'Attendance Issue Notes',
      promptKo: `[역할] 인사 담당자
[맥락] 아래 근태 이상 사례들을 관리 대장으로 정리해 주세요.
- (사례 데이터: 대상·유형·발생일)
[형식] 유형별 분류 표 + 반복 사례 표시 + 조치 필요/완료 상태. ※ 개인정보 취급 주의 문구.`,
      promptEn: `[Role] HR staff
[Context] Organize the attendance issues into a log.
- (cases: person/type/date)
[Format] Type table + repeat flags + action needed/done. Add a privacy-handling note.`,
    },
    {
      level: 'applied', titleKo: '인사평가 피드백 문서', titleEn: 'Appraisal Feedback Document',
      promptKo: `[역할] 평가 담당자
[맥락] 아래 평가 결과를 바탕으로 피드백 면담용 문서를 작성해 주세요.
- 강점·개선점·목표: [ ]
[형식] 강점 인정 → 구체적 개선 사례 → 다음 기간 목표(SMART) → 지원 방안. 성장 중심 어조.`,
      promptEn: `[Role] Appraiser
[Context] Write a feedback-session document from the results.
- Strengths/improvements/goals: [ ]
[Format] Recognize strengths → concrete improvements → next-period goals (SMART) → support. Growth-oriented tone.`,
    },
    {
      level: 'applied', titleKo: '인력운영 개선 제안서', titleEn: 'Workforce Improvement Proposal',
      promptKo: `[역할] 인사 기획 담당자
[맥락] 아래 현황을 근거로 인력운영 개선 제안서를 작성해 주세요.
- 문제 현황: [업무 편중·공백 등] / 제안 방향: [ ]
[형식] 현황·문제 → 원인 → 개선 제안(대안 비교) → 기대효과 → 실행 일정.`,
      promptEn: `[Role] HR planning staff
[Context] Write a workforce-improvement proposal from the situation.
- Problem: [workload imbalance/gaps...] / Direction: [ ]
[Format] Situation → cause → proposal (options) → expected impact → timeline.`,
    },
    {
      level: 'advanced', titleKo: '인사팀 1개월 업무 종합 시뮬레이션', titleEn: 'One-Month HR Ops Simulation',
      promptKo: `[심화 과제] 인사팀의 한 달치 대표 업무(채용 1건·평가 정리·근태 분석·복지 안내·보고 1건)를 골라, 각 업무를 AI로 처리하는 프롬프트를 순서대로 설계하고 하나의 업무 흐름으로 엮으세요. 업무 간 데이터·문서가 재활용되도록 연결하는 것이 핵심입니다.`,
      promptEn: `[Advanced] Pick one month's representative HR tasks (a hire, appraisal compilation, attendance analysis, benefits notice, one report), design an AI prompt for each in sequence, and weave them into one workflow. The key is reusing data/documents across tasks.`,
    },
  ],
};

/* ============================================
   완성형 실전 예시 (바로 실행) — 빈칸 없이 붙여넣으면 결과가 나오는 프롬프트
   ============================================ */
export interface WorkedExample {
  titleKo: string;
  titleEn: string;
  promptKo: string;
  promptEn: string;
  outputKo: string; // 예상 결과물 요약
  outputEn: string;
}

export const WORKED_EXAMPLES: Record<string, WorkedExample[]> = {
  'official-documents': [
    {
      titleKo: '수강신청 안내 공문 (완성 예시)',
      titleEn: 'Registration Notice (worked)',
      promptKo: `당신은 대학 교무처 학사팀 담당자입니다. 재학생 대상 '2026학년도 2학기 수강신청 안내' 공문을 작성해 주세요.
- 수강신청 기간: 2026년 8월 18일(화)~22일(토), 매일 10:00~16:00
- 방법: 학사정보시스템(sugang.univ.ac.kr) 로그인 후 신청
- 유의사항: 신청 정정 기간은 개강 첫 주, 미신청 시 수강 불가
- 문의: 교무처 학사팀 062-000-0000
형식은 공문 안내문으로, 「제목 → 안내 인사 → 일정(표) → 신청 방법 → 유의사항 → 문의처」 순서로, 정중한 공문체로 작성하세요.`,
      promptEn: `You are an academic-affairs staff member. Write a "Fall 2026 Course Registration" notice for enrolled students.
- Period: Aug 18–22, 2026, daily 10:00–16:00
- Method: log in to the academic system and apply
- Notes: correction period is the first week of the term; no registration = no attendance
- Contact: Academic Affairs 062-000-0000
Format as an official notice: title → greeting → schedule (table) → how to apply → notes → contact.`,
      outputKo: '예상 결과: 제목·인사·일정표·신청방법·유의사항·문의처를 갖춘 공문 초안 1건. HWP에 옮겨 서식만 다듬으면 바로 사용 가능.',
      outputEn: 'Expected: a complete notice draft (title, greeting, schedule table, steps, notes, contact) — ready after light formatting in HWP.',
    },
    {
      titleKo: '행사 예산 신청 기안문 (완성 예시)',
      titleEn: 'Event Budget Proposal (worked)',
      promptKo: `당신은 대학 학생지원처 담당자입니다. 아래 행사의 예산 신청 기안문을 작성해 주세요.
- 행사명: 2026 진로·취업 페스티벌
- 일시/장소: 2026년 10월 8일(수) 10:00~17:00, 대학본부 대강당
- 예산: 총 800만 원 (외부 강사료 300 / 부스 운영 200 / 홍보물 150 / 다과·운영 150)
- 기대효과: 재학생 취업역량 강화, 기업 네트워킹
형식은 공문 기안문으로 「제목 → 기안 배경 → 추진 개요 → 예산 내역(표) → 기대효과 → 협조 요청」 순서로 작성하세요.`,
      promptEn: `You are a student-support staff member. Write a budget-request proposal for the event below.
- Event: 2026 Career Festival
- When/where: Oct 8, 2026 10:00–17:00, Main Hall
- Budget: KRW 8M (speakers 3.0 / booths 2.0 / promo 1.5 / catering 1.5)
- Impact: student employability, corporate networking
Format as a proposal: title → background → overview → budget table → impact → cooperation request.`,
      outputKo: '예상 결과: 예산 내역표를 포함한 기안문 초안. 금액·항목만 우리 부서 값으로 바꾸면 재사용 가능.',
      outputEn: 'Expected: a proposal draft with a budget table — reusable by swapping amounts/items.',
    },
  ],

  'meeting-reports': [
    {
      titleKo: '회의록 자동 정리 (완성 예시)',
      titleEn: 'Auto Minutes (worked)',
      promptKo: `다음 회의 메모를 정식 회의록으로 정리해 주세요.
[메모] 오늘 학사운영 회의. 참석 교무처장, 학사팀장 등 6명. 2학기 개강일 9월 1일 확정. 수강신청 오류 대응 위해 헬프데스크 운영키로(학사팀 담당, 8월 3주차). 계절학기 강의실 부족 문제 제기됨, 정보전산원과 협의 예정. 성적입력 마감 12월 20일로 잠정.
형식: 「회의 개요(일시·장소·참석자) → 안건별 논의 요약 → 결정사항 → 후속조치(담당·기한)」 표를 포함해 정리.`,
      promptEn: `Turn the meeting memo below into formal minutes.
[Memo] Academic ops meeting, 6 attendees. Fall term starts Sep 1. A help desk will handle registration errors (Academic team, 3rd week of Aug). Seasonal-term room shortage raised, to consult IT center. Grade-entry deadline tentatively Dec 20.
Format: overview (time/place/attendees) → discussion summary → decisions → follow-ups (owner/deadline), with a table.`,
      outputKo: '예상 결과: 개요·안건·결정사항·후속조치(담당/기한) 표를 갖춘 회의록. 후속조치가 실행 항목으로 명확히 정리됨.',
      outputEn: 'Expected: minutes with overview, decisions, and a follow-up table (owner/deadline).',
    },
    {
      titleKo: '주간 업무보고 (완성 예시)',
      titleEn: 'Weekly Report (worked)',
      promptKo: `아래 내용을 부서장 보고용 주간 업무보고로 정리해 주세요.
- 완료: 2학기 강의계획서 92% 취합, 수강신청 시스템 점검 완료
- 진행중: 계절학기 강의실 배정 협의(정보전산원), 장학금 심사
- 예정: 성적입력 안내 공지 발송, 학사경고 대상자 상담
형식: 「완료 / 진행중 / 예정」 3구분 표로, 각 항목 한 줄 요약. 부서장이 1분 안에 파악하도록 핵심만.`,
      promptEn: `Compile a weekly report for a dept head.
- Done: 92% syllabi collected, registration system checked
- In progress: seasonal-term room consultation, scholarship review
- Planned: grade-entry notice, academic-warning counseling
Format: 3-group table (Done/In progress/Planned), one line each, 1-minute read.`,
      outputKo: '예상 결과: 3구분 표 형태의 간결한 주간보고. 매주 항목만 갱신해 재사용.',
      outputEn: 'Expected: a concise 3-group weekly report — reuse by updating items weekly.',
    },
  ],

  'ppt-structure': [
    {
      titleKo: '신입생 OT 발표 목차 (완성 예시)',
      titleEn: 'New-Student OT Outline (worked)',
      promptKo: `대학 신입생 오리엔테이션 발표 PPT의 슬라이드 목차를 설계해 주세요.
- 대상: 2026학년도 신입생 / 발표 시간: 20분
- 다룰 내용: 대학 소개, 학사 제도(수강신청·학점), 학생 지원(장학·상담·동아리), 캠퍼스 생활 안내, Q&A
슬라이드 번호 → 제목 → 핵심 메시지 표로, 표지·목차·본문·마무리 흐름을 갖춰 12장 내외로 제안하세요.`,
      promptEn: `Design a slide outline for a new-student orientation deck.
- Audience: 2026 freshmen / Time: 20 min
- Topics: university intro, academics (registration/credits), student support, campus life, Q&A
Slide # → title → key message table, ~12 slides with cover/TOC/body/closing.`,
      outputKo: '예상 결과: 12장 내외의 슬라이드별 제목·핵심 메시지 표. 이 구조에 내용만 채우면 발표자료 완성.',
      outputEn: 'Expected: a ~12-slide title/message table — fill in content to finish the deck.',
    },
    {
      titleKo: '사업 성과보고 PPT 구조 (완성 예시)',
      titleEn: 'Program Result PPT (worked)',
      promptKo: `대학 산학협력단의 '2026 상반기 창업지원사업 성과보고' 발표 PPT 구조를 설계해 주세요.
- 청중: 처장 및 팀장 / 시간: 10분
- 주요 성과: 지원 기업 25개, 창업 12건, 매출 발생 8개사, 만족도 4.3/5
- 원하는 결론: 하반기 예산 확대 요청
「요약(1장) → 사업 개요 → 성과(정량·정성) → 우수 사례 → 하반기 계획·예산 요청 → 결론」 흐름으로, 슬라이드별 메시지 포함.`,
      promptEn: `Design a PPT structure for an "H1 2026 Startup Support Program Results" report.
- Audience: directors / Time: 10 min
- Results: 25 firms supported, 12 startups, 8 revenue-generating, 4.3/5 satisfaction
- Desired conclusion: request H2 budget increase
Flow: summary(1) → overview → results (quant/qual) → best cases → H2 plan/budget → conclusion, per-slide message.`,
      outputKo: '예상 결과: 결론 지향적 성과보고 PPT 구조. 수치만 바꾸면 다른 사업 보고에도 재사용.',
      outputEn: 'Expected: a conclusion-oriented results PPT structure — reusable for other programs.',
    },
  ],

  'ppt-design': [
    {
      titleKo: '예산 데이터 차트 추천 (완성 예시)',
      titleEn: 'Budget Chart Recommendation (worked)',
      promptKo: `아래 예산 집행 데이터를 발표에서 효과적으로 보여줄 차트를 추천해 주세요.
- 부서별 집행률: 교무처 92%, 학생처 78%, 총무처 85%, 입학처 60%
- 월별 집행 추이: 1~6월 점진 증가
- 강조하고 싶은 점: 입학처 집행 저조, 전반적 상반기 집행 순조
각 데이터에 적합한 차트 유형과 이유, 강조 색상, 배치 순서를 제안하세요.`,
      promptEn: `Recommend charts to present the budget-execution data below.
- Execution by dept: Academic 92%, Student 78%, General 85%, Admissions 60%
- Monthly trend: gradual rise Jan–Jun
- Emphasize: Admissions is low; overall H1 on track
Recommend chart type + reason + accent color + layout order for each.`,
      outputKo: '예상 결과: 부서 비교(막대)·추이(선) 등 데이터별 차트 추천과 강조 방법. 슬라이드 시각화에 바로 반영.',
      outputEn: 'Expected: chart recommendations per dataset with emphasis guidance.',
    },
    {
      titleKo: 'Gamma 발표자료 생성 프롬프트 (완성 예시)',
      titleEn: 'Gamma Deck Prompt (worked)',
      promptKo: `Gamma로 발표자료를 만들 프롬프트입니다. 아래 지시를 Gamma 입력창에 붙여넣으세요.
주제: 대학 행정직원을 위한 '생성형 AI 업무 활용' 소개
대상: 교직원 / 분량: 8슬라이드 / 톤: 전문적이되 친근하게 / 색상: 네이비+그린 계열
구성: 표지 → AI란 무엇인가 → 행정 업무 활용 사례 3가지 → 시작하는 법 → 주의사항 → 마무리(Q&A)
각 슬라이드는 제목과 3개 이내 불릿, 관련 아이콘 제안 포함.`,
      promptEn: `A prompt to build a deck in Gamma. Paste the instruction below into Gamma.
Topic: "Using Generative AI for University Admin Work"
Audience: staff / Length: 8 slides / Tone: professional yet friendly / Colors: navy+green
Structure: cover → what is AI → 3 admin use cases → how to start → cautions → wrap-up (Q&A)
Each slide: title + up to 3 bullets + suggested icon.`,
      outputKo: '예상 결과: Gamma가 8슬라이드 초안을 자동 생성. 색상·아이콘까지 반영된 초안을 다듬어 사용.',
      outputEn: 'Expected: Gamma auto-generates an 8-slide draft with colors/icons to refine.',
    },
  ],

  'excel-analysis': [
    {
      titleKo: '부서별 예산 집계 수식 (완성 예시)',
      titleEn: 'Budget Aggregation Formula (worked)',
      promptKo: `Excel에서 다음을 계산하는 수식을 알려 주세요. (열 구성: A=부서, B=항목, C=예산, D=집행액)
1) 부서별 예산 합계와 집행 합계
2) 부서별 집행률(집행액/예산)
3) 집행률이 70% 미만인 부서만 표시
각 수식과 한 줄 설명을 주고, 구버전 Excel(2016)에서도 되는 대체 수식이 있으면 함께 알려 주세요.`,
      promptEn: `Give Excel formulas for (columns: A=dept, B=item, C=budget, D=spent):
1) Budget and spend totals per dept
2) Execution rate per dept (spent/budget)
3) Show only depts with <70% execution
Each formula + one-line note; add legacy-Excel (2016) alternatives if any.`,
      outputKo: '예상 결과: SUMIF/집행률 계산/필터 수식 세트와 설명. 실제 예산 시트에 바로 적용 가능.',
      outputEn: 'Expected: a set of SUMIF/rate/filter formulas ready to apply.',
    },
    {
      titleKo: '근태 데이터 피벗 요약 (완성 예시)',
      titleEn: 'Attendance Pivot (worked)',
      promptKo: `아래 근태 데이터로 월별·부서별 요약 피벗 테이블을 만드는 방법을 단계별로 알려 주세요.
- 데이터 열: 날짜, 부서, 직원명, 근무상태(정상/지각/결근/연차)
- 원하는 결과: 부서별로 정상·지각·결근·연차 건수를 월별로 집계
피벗의 행/열/값/필터에 각각 어떤 필드를 넣을지, 만드는 순서, 결과 해석 팁까지 설명하세요.`,
      promptEn: `Explain step by step how to build a monthly/dept pivot from the attendance data.
- Columns: date, dept, name, status (normal/late/absent/leave)
- Goal: count normal/late/absent/leave per dept, by month
Explain fields for rows/cols/values/filter, the steps, and interpretation tips.`,
      outputKo: '예상 결과: 피벗 필드 배치와 생성 순서 안내. 그대로 따라 하면 근태 요약표 완성.',
      outputEn: 'Expected: pivot field placement and steps — follow to get the summary.',
    },
  ],

  'doc-practice': [
    {
      titleKo: '도서관 휴관 안내 (완성 예시)',
      titleEn: 'Library Closure Notice (worked)',
      promptKo: `전 구성원 대상 도서관 임시 휴관 안내 공지문을 작성해 주세요.
- 휴관 기간: 2026년 8월 5일(수)~7일(금)
- 사유: 냉방설비 교체 공사
- 대체 안내: 전자자료는 정상 이용 가능, 반납 기한 자동 연장
- 문의: 학술정보관 062-000-0000
형식: 홈페이지 공지문. 「제목 → 핵심 안내 → 상세(기간·사유) → 대체 이용 안내 → 문의처」 순서로 읽기 쉽게.`,
      promptEn: `Write an all-member notice for a temporary library closure.
- Period: Aug 5–7, 2026 / Reason: AC replacement
- Alt: e-resources available, due dates auto-extended
- Contact: Library 062-000-0000
Format: website notice — title → key notice → details → alternatives → contact.`,
      outputKo: '예상 결과: 게시판에 바로 올릴 수 있는 공지문. 날짜·사유만 바꾸면 다른 휴관 안내에도 재사용.',
      outputEn: 'Expected: a ready-to-post notice — reusable by changing dates/reason.',
    },
    {
      titleKo: '워크숍 문서 세트 (완성 예시)',
      titleEn: 'Workshop Document Set (worked)',
      promptKo: `'2026 교직원 역량강화 워크숍'을 위한 문서 3종을 순서대로 작성해 주세요.
- 공통 정보: 2026년 9월 15일(월) 09:00~17:00, 교육관 201호, 대상 전 교직원 100명
① 개최 기안문(예산 200만 원) ② 참가 신청 안내 통보문(신청 마감 9월 8일) ③ 강의실·기자재 협조문(정보전산원)
세 문서 모두 공문 형식으로, 공통 정보(일시·장소·대상)를 일관되게 반영하세요.`,
      promptEn: `Write 3 documents for a "2026 Staff Capacity Workshop," in order.
- Shared: Sep 15, 2026 09:00–17:00, Room 201, 100 staff
① proposal (KRW 2M) ② participation notice (apply by Sep 8) ③ room/equipment request (IT center)
All official format; keep shared info consistent across the three.`,
      outputKo: '예상 결과: 기안문·통보문·협조문 3종이 일관된 정보로 생성. 실제 행사 준비에 바로 활용.',
      outputEn: 'Expected: 3 consistent documents (proposal/notice/request) ready for event prep.',
    },
  ],

  'hr-ai': [
    {
      titleKo: '근태 데이터 요약 (완성 예시)',
      titleEn: 'Attendance Summary (worked)',
      promptKo: `당신은 인사 담당자입니다. 아래 8월 근태 요약 데이터를 분석해 관리자 보고용 요약을 만들어 주세요.
- 총원 42명, 근무일 22일
- 지각: 총 18건(A팀 11 / B팀 4 / C팀 3)
- 결근: 3건(모두 병가) / 연차 사용: 총 96일(1인 평균 2.3일)
- 초과근무: 총 210시간(A팀 집중)
형식: 「핵심 지표 요약(표) → 주목할 점 3가지 → 관리 제언 1가지」. 개인 식별 없이 팀 단위로만 서술.`,
      promptEn: `You are an HR staff member. Analyze the August attendance summary for a manager report.
- 42 staff, 22 workdays
- Late: 18 (A11/B4/C3), Absent: 3 (sick), Leave: 96 days (avg 2.3), Overtime: 210h (A-team heavy)
Format: key metrics (table) → 3 findings → 1 recommendation. Team-level only, no individuals.`,
      outputKo: '예상 결과: 지표 요약표 + A팀 지각·초과근무 집중 등 시사점 + 관리 제언. 개인정보 배제.',
      outputEn: 'Expected: metrics table + findings (A-team concentration) + a recommendation, no personal data.',
    },
    {
      titleKo: '복지제도 안내 답변 (완성 예시)',
      titleEn: 'Benefits Q&A (worked)',
      promptKo: `당신은 인사 담당자입니다. 직원 문의가 잦은 복지제도 3가지에 대한 표준 안내 답변을 만들어 주세요.
- 경조사비 지원 / 종합건강검진 / 자기계발 교육비 지원
각 항목을 「대상 / 지원 내용 / 신청 방법 / 유의사항」 4가지로 정리하고, 안내데스크에서 바로 읽어줄 수 있게 간결하게 작성하세요.`,
      promptEn: `You are an HR staff member. Write standard answers for 3 common benefit questions.
- Family-event allowance / health checkup / self-development tuition
Each with: eligibility / benefit / how to apply / notes — concise for a help desk.`,
      outputKo: '예상 결과: 3개 복지제도의 표준 안내 세트. FAQ·챗봇·안내데스크에 바로 활용.',
      outputEn: 'Expected: a standard set for 3 benefits — ready for FAQ/chatbot/help desk.',
    },
  ],

  'hr-documents': [
    {
      titleKo: '채용공고 (완성 예시)',
      titleEn: 'Job Posting (worked)',
      promptKo: `당신은 인사 담당자입니다. 아래 조건으로 채용공고를 작성해 주세요.
- 직무: 학사행정 지원 계약직 1명
- 자격: 대졸 이상, 행정 실무 경력 2년 이상, 한글·엑셀 능숙
- 근무: 교무처, 09:00~18:00, 계약기간 1년(연장 가능)
- 접수: 2026년 8월 1일~14일, 이메일 접수 / 문의: 062-000-0000
형식: 「모집 개요 → 담당 업무 → 지원 자격 → 전형 절차 → 제출 서류 → 문의처」 순서로 작성.`,
      promptEn: `You are an HR staff member. Write a job posting.
- Role: 1 contract academic-admin support
- Reqs: bachelor+, 2+ yrs admin, HWP/Excel
- Work: Academic Affairs, 09:00–18:00, 1-yr (renewable)
- Apply: Aug 1–14, 2026 by email / Contact: 062-000-0000
Format: overview → duties → qualifications → process → documents → contact.`,
      outputKo: '예상 결과: 게시 가능한 채용공고 초안. 직무·자격만 바꾸면 다른 채용에도 재사용.',
      outputEn: 'Expected: a postable job-posting draft — reusable by swapping role/reqs.',
    },
    {
      titleKo: '인사발령 통보문 (완성 예시)',
      titleEn: 'Appointment Notice (worked)',
      promptKo: `당신은 인사 담당자입니다. 아래 인사 이동을 통보하는 공문을 작성해 주세요.
- 김민수: 교무처 학사팀 → 기획처 기획팀 (전보)
- 이서연: 입학처 입학팀 팀원 → 팀장 (승진)
- 박준호: 신규 임용 → 총무처 시설팀
- 발령일: 2026년 9월 1일
형식: 공문 인사발령 통보문으로, 표(성명·현소속·발령내용·사유)를 포함하세요.`,
      promptEn: `You are an HR staff member. Write an appointment notice.
- Kim: Academic → Planning (transfer)
- Lee: Admissions member → team lead (promotion)
- Park: new hire → General Affairs
- Date: Sep 1, 2026
Format: official appointment notice with a table (name/current/appointment/reason).`,
      outputKo: '예상 결과: 표를 포함한 인사발령 통보문. 명단만 바꾸면 매 발령 시 재사용.',
      outputEn: 'Expected: an appointment notice with a table — reusable each cycle.',
    },
  ],

  'attendance-excel': [
    {
      titleKo: '지각·결근 집계 수식 (완성 예시)',
      titleEn: 'Late/Absence Formula (worked)',
      promptKo: `Excel 근태표에서 다음을 계산하는 수식을 알려 주세요. (열: A=날짜, B=부서, C=직원명, D=상태)
1) 직원별 지각 횟수 (상태가 "지각")
2) 부서별 결근 합계 (상태가 "결근")
3) 이번 달 지각 3회 이상인 직원 표시
각 수식과 한 줄 설명, 구버전 Excel 대체 수식(있으면)을 함께 알려 주세요.`,
      promptEn: `Excel formulas from an attendance table (A=date, B=dept, C=name, D=status):
1) Late count per employee 2) Absence total per dept 3) Flag employees with 3+ lates
Each with a note and a legacy alternative if any.`,
      outputKo: '예상 결과: COUNTIFS 기반 집계 수식 세트. 실제 근태표에 바로 적용.',
      outputEn: 'Expected: COUNTIFS-based formulas ready to apply.',
    },
    {
      titleKo: '연차 사용률 집계 (완성 예시)',
      titleEn: 'Leave Usage (worked)',
      promptKo: `Excel에서 직원별 연차 사용 현황을 집계하는 수식을 알려 주세요. (열: A=직원명, B=부여일수, C=사용일수)
1) 개인별 잔여 연차 2) 개인별 사용률(%) 3) 잔여가 5일 이상 남은(소진 독려 대상) 직원 표시
각 수식과 설명을 주고, 잔여 과다자 강조용 조건부 서식 규칙도 알려 주세요.`,
      promptEn: `Excel formulas for leave usage per employee (A=name, B=granted, C=used):
1) Remaining 2) Usage % 3) Flag those with 5+ days left
Each with a note; add a conditional-format rule to highlight high-remaining.`,
      outputKo: '예상 결과: 잔여·사용률 수식 + 조건부 서식 규칙. 연차 소진 관리에 활용.',
      outputEn: 'Expected: remaining/usage formulas + conditional-format rule for leave management.',
    },
  ],

  'hr-report': [
    {
      titleKo: '인사 현황 요약 (완성 예시)',
      titleEn: 'HR Status Summary (worked)',
      promptKo: `당신은 인사 담당자입니다. 아래 인사 현황을 경영진 보고용으로 요약해 주세요.
- 정원 120명 / 현원 112명(충원율 93%)
- 직급: 5급 8, 6급 24, 7급 45, 8급 이하 35
- 평균 근속 9.2년 / 상반기 신규 임용 6명, 퇴직 4명
형식: 「핵심 지표 요약(표) → 한 문단 총평 → 유의점 1가지」. 경영진이 30초에 파악하도록.`,
      promptEn: `Summarize HR status for executives.
- Quota 120 / actual 112 (93%) / ranks: 8/24/45/35 / avg tenure 9.2y / H1 hires 6, exits 4
Format: metrics table → one-paragraph overview → one caution. 30-second read.`,
      outputKo: '예상 결과: 지표 요약표 + 총평 + 유의점. 인사 정기보고에 바로 활용.',
      outputEn: 'Expected: metrics table + overview + caution for regular HR reporting.',
    },
    {
      titleKo: '경영진 보고 PPT 구조 (완성 예시)',
      titleEn: 'Executive HR PPT (worked)',
      promptKo: `당신은 인사 담당자입니다. '2026 상반기 인력운영 현황' 경영진 보고 PPT 구조를 설계해 주세요.
- 청중: 총장·부총장 / 시간: 7분
- 핵심 메시지: 충원율 개선됐으나 특정 부서 과부하 지속
- 원하는 의사결정: 하반기 2명 추가 채용 승인
「요약(1장) → 인력 현황 → 부서별 과부하 분석 → 채용 필요성 → 제안·결론」 흐름으로 슬라이드별 메시지 포함.`,
      promptEn: `Design an executive PPT for "H1 2026 Workforce Status."
- Audience: president / Time: 7 min
- Message: fill rate up, but some depts overloaded
- Decision: approve 2 more hires in H2
Flow: summary(1) → status → overload analysis → hiring need → proposal, per-slide message.`,
      outputKo: '예상 결과: 의사결정 지향 인사보고 PPT 구조. 수치만 바꿔 재사용.',
      outputEn: 'Expected: a decision-oriented HR report PPT structure — reusable.',
    },
  ],

  'work-template': [
    {
      titleKo: '이메일 회신 템플릿 (완성 예시)',
      titleEn: 'Email Reply Template (worked)',
      promptKo: `자주 받는 '증명서 발급 문의' 이메일에 대한 회신 템플릿을 만들어 주세요.
- 발급 서류: 재직증명서, 경력증명서
- 방법: 학사시스템 온라인 발급 또는 방문 발급
- 소요: 온라인 즉시, 방문 당일
- 문의: 총무처 인사팀 062-000-0000
형식: 인사 → 발급 방법 안내(번호 목록) → 소요 시간 → 추가 문의 → 맺음말. 정중한 업무 이메일체. 바뀌는 부분은 [ ]로 표시.`,
      promptEn: `Create a reply template for a common "certificate request" email.
- Docs: employment/career certificate / Method: online or in-person / Time: instant/same-day / Contact: 062-000-0000
Format: greeting → steps (numbered) → time → further contact → closing. Mark variables with [ ].`,
      outputKo: '예상 결과: 재사용 이메일 회신 템플릿. [ ] 부분만 바꿔 매번 활용.',
      outputEn: 'Expected: a reusable email-reply template — swap [ ] each time.',
    },
    {
      titleKo: '업무 인수인계서 (완성 예시)',
      titleEn: 'Handover Form (worked)',
      promptKo: `학사팀 담당 업무를 후임자에게 넘길 인수인계서 양식을 만들어 주세요.
- 담당 업무: 수강신청 운영, 강의계획서 관리, 성적 처리 지원
형식: 「담당 업무 목록 → 진행중 사안(현황·다음 조치) → 주요 연락처 → 자료·파일 위치 → 인수인계 시 유의사항」 표 형태로, 각 항목을 채우기만 하면 되게 구성.`,
      promptEn: `Make a handover form for academic-team duties.
- Duties: registration ops, syllabi management, grade support
Format: task list → in-progress (status/next) → key contacts → file locations → cautions, as a fill-in table.`,
      outputKo: '예상 결과: 채우기만 하면 되는 인수인계서 양식. 인사이동·휴직 시 재사용.',
      outputEn: 'Expected: a fill-in handover form — reuse on transfers/leave.',
    },
  ],

  'work-automation': [
    {
      titleKo: '반복 업무 단계 분해 (완성 예시)',
      titleEn: 'Break Down a Task (worked)',
      promptKo: `아래 반복 업무를 단계별로 분해하고, 각 단계에서 AI가 도울 수 있는 부분을 표시해 주세요.
- 업무: 매월 부서별 근태 취합 → 이상 건 확인 → 요약표 작성 → 부서장 공유
각 단계를 「현재 방식 → 소요 시간 → AI 활용 가능성(상/중/하) → 활용 아이디어」 표로 정리하세요.`,
      promptEn: `Break the recurring task into steps and mark where AI helps.
- Task: monthly attendance collection → anomaly check → summary → share with managers
Table: current way → time → AI potential (H/M/L) → idea, per step.`,
      outputKo: '예상 결과: 단계별 AI 활용 가능성 표. 자동화 우선순위 판단에 활용.',
      outputEn: 'Expected: a per-step AI-potential table for prioritizing automation.',
    },
    {
      titleKo: '문서 생성 자동화 절차 (완성 예시)',
      titleEn: 'Document Automation Procedure (worked)',
      promptKo: `매주 반복하는 '주간 업무보고 작성'을 AI로 자동화하는 절차서를 만들어 주세요.
- 현재: 팀원 메모를 모아 수작업 정리(약 40분)
형식: 「준비물(메모 양식) → 단계별 실행(AI 프롬프트 포함) → 확인 포인트 → 예외 처리」 순서로, 다른 담당자도 따라 할 수 있게 구체적으로 작성.`,
      promptEn: `Write a procedure to automate the weekly work report with AI.
- Now: manually compiling team memos (~40 min)
Format: prereqs (memo form) → steps (with AI prompts) → checkpoints → exceptions — detailed enough for anyone.`,
      outputKo: '예상 결과: 따라 하면 되는 자동화 절차서. 주간보고 작성 시간 대폭 단축.',
      outputEn: 'Expected: a follow-along automation procedure that cuts report time.',
    },
  ],

  'hr-practice': [
    {
      titleKo: '인사 공지문 (완성 예시)',
      titleEn: 'HR Announcement (worked)',
      promptKo: `전 직원 대상 인사 공지문을 작성해 주세요.
- 내용: 2026년 하반기 정기 인사평가 실시 안내
- 평가 기간: 2026년 12월 1일~12월 12일
- 방법: 인사시스템 온라인 평가(자기평가 → 1차 평가자 → 2차 평가자)
- 문의: 총무처 인사팀
형식: 제목 → 안내 인사 → 평가 개요 → 일정(표) → 방법 → 문의처. 명확하고 간결하게.`,
      promptEn: `Write an all-staff HR announcement.
- Topic: H2 2026 regular appraisal / Period: Dec 1–12, 2026 / Method: online (self → 1st → 2nd) / Contact: HR
Format: title → greeting → overview → schedule (table) → method → contact. Clear and concise.`,
      outputKo: '예상 결과: 게시 가능한 인사 공지문. 일정·내용만 바꿔 재사용.',
      outputEn: 'Expected: a postable HR announcement — reusable by editing schedule/content.',
    },
    {
      titleKo: '인사평가 피드백 문서 (완성 예시)',
      titleEn: 'Appraisal Feedback (worked)',
      promptKo: `아래 평가 결과로 피드백 면담용 문서를 작성해 주세요.
- 대상: 학사팀 7급 직원 / 종합 등급: B+
- 강점: 정확한 문서 처리, 민원 응대 친절
- 개선점: 마감 관리, 신규 업무 학습 속도
- 다음 목표: 반복 업무 자동화로 마감 여유 확보
형식: 강점 인정 → 구체적 개선 사례 → 다음 기간 목표(SMART) → 지원 방안. 성장 중심의 존중하는 어조.`,
      promptEn: `Write a feedback-session document from the results.
- Grade: B+ / Strengths: accurate docs, courteous service / Improve: deadline mgmt, ramp-up / Goal: automate repetitive work
Format: recognize strengths → concrete improvements → next goals (SMART) → support. Respectful, growth-oriented.`,
      outputKo: '예상 결과: 면담에 바로 쓸 피드백 문서. 대상·내용만 바꿔 재사용.',
      outputEn: 'Expected: a ready feedback document — reusable by editing the subject.',
    },
  ],
};

/* ============================================
   단계별 실습 워크시트 — 한 주제를 A→Z로 완성
   ============================================ */
export interface WorksheetStep {
  stepKo: string;
  stepEn: string;
  promptKo: string; // 이 단계에서 쓸 프롬프트(없으면 빈 문자열)
  promptEn: string;
  checkKo: string;  // 확인 포인트
  checkEn: string;
}
export interface Worksheet {
  titleKo: string;
  titleEn: string;
  goalKo: string;
  goalEn: string;
  steps: WorksheetStep[];
}

export const WORKSHEETS: Record<string, Worksheet> = {
  'official-documents': {
    titleKo: '공문 1건 완성하기 (A→Z)', titleEn: 'Complete One Document (A→Z)',
    goalKo: '실제 업무 상황 하나를 골라, 프롬프트 작성부터 최종 검토까지 공문 1건을 완성합니다.',
    goalEn: 'Pick one real situation and complete a document from prompt to final review.',
    steps: [
      {
        stepKo: '1단계 — 문서 유형·목적 정하기',
        stepEn: 'Step 1 — Define type & purpose',
        promptKo: `내가 작성할 공문의 유형(기안문/통보문/협조문/회신문)과 목적, 수신 대상을 한 문장으로 정리해 줘. 상황: [내 업무 상황을 여기에]`,
        promptEn: `Summarize in one sentence the document type (proposal/notice/cooperation/response), purpose, and recipient. Situation: [describe here]`,
        checkKo: '유형과 목적이 명확한가? 수신 대상이 정해졌는가?',
        checkEn: 'Are type, purpose, and recipient clear?',
      },
      {
        stepKo: '2단계 — RCF로 프롬프트 작성',
        stepEn: 'Step 2 — Write an RCF prompt',
        promptKo: `위 상황으로 공문을 만들 프롬프트를 [역할]-[맥락]-[형식] 구조로 작성해 줘. 필요한 정보(일시·대상·핵심 내용)를 빠짐없이 포함해.`,
        promptEn: `Write a document-generation prompt in [Role]-[Context]-[Format] structure for the situation above, including all needed info.`,
        checkKo: '역할·맥락·형식이 모두 들어갔는가? 빠진 정보는 없는가?',
        checkEn: 'Are role/context/format all present? Any missing info?',
      },
      {
        stepKo: '3단계 — 초안 생성',
        stepEn: 'Step 3 — Generate a draft',
        promptKo: `(2단계에서 만든 프롬프트를 그대로 실행해 초안을 받으세요.)`,
        promptEn: `(Run the Step-2 prompt to get a draft.)`,
        checkKo: '초안의 구조가 요청한 형식과 일치하는가?',
        checkEn: 'Does the draft match the requested format?',
      },
      {
        stepKo: '4단계 — 사실·형식 검토',
        stepEn: 'Step 4 — Review facts & format',
        promptKo: `위 초안을 검토해 줘. 날짜·수신처·금액 등 사실 정보 오류, 공문 형식 부적합, 어조 문제, 오탈자를 항목별로 지적하고 수정안을 제시해.`,
        promptEn: `Review the draft: flag factual errors (dates/recipient/amounts), format issues, tone, typos, and give fixes.`,
        checkKo: '사실 정보를 실제 값과 대조했는가? 결재 라인·문의처가 정확한가?',
        checkEn: 'Verified facts against reality? Approval line/contact correct?',
      },
      {
        stepKo: '5단계 — HWP 편집·최종 확인',
        stepEn: 'Step 5 — HWP edit & finalize',
        promptKo: `(HWP 표준 서식에 옮기고, 4단계 지적사항을 반영해 최종본을 완성하세요.)`,
        promptEn: `(Move to standard HWP format, apply Step-4 fixes, finalize.)`,
        checkKo: '기관 서식을 따랐는가? 첨부·붙임 목록이 누락되지 않았는가?',
        checkEn: 'Followed the org template? Attachments complete?',
      },
    ],
  },

  'excel-analysis': {
    titleKo: '데이터 분석 1건 완성하기 (A→Z)', titleEn: 'Complete One Analysis (A→Z)',
    goalKo: '내 부서의 실제 데이터 한 세트를 골라, 정리부터 요약 보고까지 완성합니다.',
    goalEn: 'Pick one real dataset and go from cleanup to a summary report.',
    steps: [
      {
        stepKo: '1단계 — 분석 목적·데이터 파악',
        stepEn: 'Step 1 — Define goal & data',
        promptKo: `다음 데이터로 무엇을 알고 싶은지 분석 목적을 정리하고, 필요한 열이 무엇인지 알려 줘. 데이터 설명: [열 구성과 내용]`,
        promptEn: `Clarify the analysis goal and needed columns. Data: [describe columns]`,
        checkKo: '분석 목적이 한 문장으로 명확한가?',
        checkEn: 'Is the goal clear in one sentence?',
      },
      {
        stepKo: '2단계 — 데이터 정리',
        stepEn: 'Step 2 — Clean the data',
        promptKo: `아래 데이터의 중복·공백·형식 불일치를 정리하는 순서와 Excel 기능을 알려 줘. (샘플 데이터 붙여넣기)`,
        promptEn: `Give the cleanup order and Excel functions for dedupe/blanks/format issues. (paste sample)`,
        checkKo: '중복·오류가 제거되었는가? 형식이 통일되었는가?',
        checkEn: 'Duplicates/errors removed? Formats normalized?',
      },
      {
        stepKo: '3단계 — 집계·수식',
        stepEn: 'Step 3 — Aggregate',
        promptKo: `정리된 데이터로 [분석 목적]에 필요한 집계 수식(또는 피벗) 구성을 알려 줘.`,
        promptEn: `Give the aggregation formulas (or pivot) for the goal.`,
        checkKo: '수식이 정상 작동하는가? 합계·비율이 맞는가?',
        checkEn: 'Do formulas work? Totals/ratios correct?',
      },
      {
        stepKo: '4단계 — 시각화',
        stepEn: 'Step 4 — Visualize',
        promptKo: `집계 결과를 가장 잘 보여줄 차트 유형과 강조 방법을 추천해 줘. (집계 결과 요약 붙여넣기)`,
        promptEn: `Recommend the best chart type and emphasis for the results. (paste summary)`,
        checkKo: '차트가 메시지를 왜곡 없이 전달하는가?',
        checkEn: 'Does the chart convey the message without distortion?',
      },
      {
        stepKo: '5단계 — 요약 보고 문장',
        stepEn: 'Step 5 — Summary sentences',
        promptKo: `집계·시각화 결과를 보고서에 넣을 3~4문장 요약으로 만들어 줘. 전월/전년 대비 증감 표현 포함. (수치 붙여넣기)`,
        promptEn: `Turn the results into 3–4 report sentences with MoM/YoY change. (paste numbers)`,
        checkKo: '핵심 수치와 시사점이 담겼는가?',
        checkEn: 'Do the sentences carry key figures and implications?',
      },
    ],
  },

  'doc-practice': {
    titleKo: '행사 하나를 문서로 완성하기 (A→Z)', titleEn: 'Run an Event via Documents (A→Z)',
    goalKo: '가상의(또는 실제) 행사 하나를 골라, 준비부터 보고까지 필요한 문서를 순서대로 만듭니다.',
    goalEn: 'Pick an event and create every document from prep to report, in order.',
    steps: [
      {
        stepKo: '1단계 — 개최 기안문',
        stepEn: 'Step 1 — Proposal',
        promptKo: `[행사명]을 개최하는 기안문을 작성해 줘. 일시·장소·대상·예산을 포함해. 정보: [입력]`,
        promptEn: `Write a proposal to hold [event] with time/place/target/budget. Info: [enter]`,
        checkKo: '예산 내역과 추진 근거가 명확한가?',
        checkEn: 'Are budget and rationale clear?',
      },
      {
        stepKo: '2단계 — 참가 안내 통보문',
        stepEn: 'Step 2 — Participation notice',
        promptKo: `위 행사의 참가 신청 안내 통보문을 작성해 줘. 신청 방법·마감일 포함.`,
        promptEn: `Write a participation notice with how-to-apply and deadline.`,
        checkKo: '신청 절차가 명확하고 마감일이 포함됐는가?',
        checkEn: 'Are steps clear and the deadline included?',
      },
      {
        stepKo: '3단계 — 협조 요청 협조문',
        stepEn: 'Step 3 — Cooperation request',
        promptKo: `행사에 필요한 강의실·기자재 협조를 요청하는 협조문을 작성해 줘. 요청 사항·기간 포함.`,
        promptEn: `Write a cooperation request for rooms/equipment with items and period.`,
        checkKo: '요청 대상 부서와 기간이 정확한가?',
        checkEn: 'Are the target dept and period correct?',
      },
      {
        stepKo: '4단계 — 결과보고서',
        stepEn: 'Step 4 — Result report',
        promptKo: `행사 종료 후 결과보고서를 작성해 줘. 참석 인원·주요 성과·개선점·향후 계획 포함. (결과 정보 입력)`,
        promptEn: `Write a result report with attendance/outcomes/improvements/next steps. (enter results)`,
        checkKo: '정량·정성 성과가 균형 있게 담겼는가?',
        checkEn: 'Are quantitative and qualitative outcomes balanced?',
      },
      {
        stepKo: '5단계 — 보고 PPT 구조',
        stepEn: 'Step 5 — Report PPT',
        promptKo: `결과보고서를 3분 발표용 PPT 구조로 바꿔 줘. 슬라이드별 핵심 메시지 포함.`,
        promptEn: `Turn the result report into a 3-minute PPT structure with per-slide messages.`,
        checkKo: '문서→발표로 핵심이 잘 압축됐는가?',
        checkEn: 'Is the essence well compressed for presentation?',
      },
    ],
  },

  'hr-documents': {
    titleKo: '채용 1건 문서로 완성하기 (A→Z)', titleEn: 'Complete One Hire via Documents (A→Z)',
    goalKo: '가상의(또는 실제) 채용 건 하나를 골라, 공고부터 발령까지 필요한 인사 문서를 순서대로 만듭니다.',
    goalEn: 'Pick one hire and create every HR document from posting to appointment.',
    steps: [
      {
        stepKo: '1단계 — 채용공고',
        stepEn: 'Step 1 — Job posting',
        promptKo: `[직무]에 대한 채용공고를 작성해 줘. 자격·근무조건·전형절차·접수방법 포함. 정보: [입력]`,
        promptEn: `Write a job posting for [role] with reqs/conditions/process/how-to-apply. Info: [enter]`,
        checkKo: '자격 요건과 전형 절차가 명확한가?',
        checkEn: 'Are requirements and process clear?',
      },
      {
        stepKo: '2단계 — 서류심사 안내',
        stepEn: 'Step 2 — Screening notice',
        promptKo: `지원자에게 서류심사 결과와 면접 안내를 통보하는 문서를 작성해 줘. 면접 일정 포함.`,
        promptEn: `Write a notice of screening result and interview info, including schedule.`,
        checkKo: '면접 일시·장소·준비물이 빠짐없는가?',
        checkEn: 'Are interview time/place/items complete?',
      },
      {
        stepKo: '3단계 — 합격 통보문',
        stepEn: 'Step 3 — Acceptance notice',
        promptKo: `최종 합격자에게 합격 사실과 임용 절차(제출 서류·출근일)를 안내하는 통보문을 작성해 줘.`,
        promptEn: `Write an acceptance notice with appointment steps (documents, start date).`,
        checkKo: '제출 서류와 출근일이 명확한가?',
        checkEn: 'Are documents and start date clear?',
      },
      {
        stepKo: '4단계 — 근로계약서 초안',
        stepEn: 'Step 4 — Contract draft',
        promptKo: `합격자의 근로계약서 초안을 작성해 줘. 기간·급여·근무시간·직무 등 필수 조항 포함. ※ 법무 검토 필요 문구 추가.`,
        promptEn: `Draft the employment contract with essential clauses. Add a "requires legal review" note.`,
        checkKo: '필수 조항이 근로기준법에 부합하는가? 법무 검토 표시했는가?',
        checkEn: 'Do clauses meet labor law? Legal-review noted?',
      },
      {
        stepKo: '5단계 — 인사발령 통보문',
        stepEn: 'Step 5 — Appointment notice',
        promptKo: `임용 확정에 따른 인사발령 통보문을 작성해 줘. 표(성명·소속·발령·사유) 포함.`,
        promptEn: `Write the appointment notice with a table (name/dept/appointment/reason).`,
        checkKo: '발령 정보와 발령일이 정확한가?',
        checkEn: 'Are appointment details and date correct?',
      },
    ],
  },

  'attendance-excel': {
    titleKo: '근태 분석 1건 완성하기 (A→Z)', titleEn: 'Complete One Attendance Analysis (A→Z)',
    goalKo: '한 달치 근태 데이터를 골라, 정리부터 대시보드용 요약까지 완성합니다.',
    goalEn: 'Take one month of attendance data from cleanup to a dashboard summary.',
    steps: [
      {
        stepKo: '1단계 — 데이터 점검',
        stepEn: 'Step 1 — Inspect data',
        promptKo: `근태 데이터의 열 구성을 확인하고, 분석 전에 정리해야 할 이상값(음수 시간, 24시간 초과, 빈 값)을 찾는 방법을 알려 줘. (데이터 설명 입력)`,
        promptEn: `Check the columns and how to find anomalies (negative hours, >24h, blanks) before analysis. (describe data)`,
        checkKo: '이상값 판별 기준이 명확한가?',
        checkEn: 'Are anomaly criteria clear?',
      },
      {
        stepKo: '2단계 — 집계 수식',
        stepEn: 'Step 2 — Aggregate',
        promptKo: `직원별·부서별 지각·결근·연차 건수를 집계하는 수식을 알려 줘.`,
        promptEn: `Formulas to count late/absent/leave per employee and per dept.`,
        checkKo: '집계 결과가 원자료 합계와 일치하는가?',
        checkEn: 'Do totals match the raw data?',
      },
      {
        stepKo: '3단계 — 피벗 요약',
        stepEn: 'Step 3 — Pivot summary',
        promptKo: `부서별·월별 근태 요약 피벗 테이블 구성(행/열/값/필터)을 알려 줘.`,
        promptEn: `Give the pivot layout (rows/cols/values/filter) for a dept/month summary.`,
        checkKo: '피벗이 원하는 요약을 보여주는가?',
        checkEn: 'Does the pivot show the intended summary?',
      },
      {
        stepKo: '4단계 — 지표·차트',
        stepEn: 'Step 4 — KPIs & charts',
        promptKo: `부서장이 볼 근태 핵심 지표(출근율·지각률·초과근무)를 정의하고, 각 지표에 맞는 차트를 추천해 줘.`,
        promptEn: `Define key attendance KPIs (attendance/late/overtime) and recommend a chart for each.`,
        checkKo: '지표가 관리 목적에 부합하는가?',
        checkEn: 'Do the KPIs fit the management goal?',
      },
      {
        stepKo: '5단계 — 요약 코멘트',
        stepEn: 'Step 5 — Summary comment',
        promptKo: `분석 결과를 보고용 3~4문장으로 요약하고, 관리가 필요한 부서와 제언을 한 줄 덧붙여 줘. (결과 수치 입력)`,
        promptEn: `Summarize in 3–4 report sentences and add a one-line dept-to-watch recommendation. (enter numbers)`,
        checkKo: '개인정보 없이 팀 단위로 서술했는가?',
        checkEn: 'Written at team level, no personal data?',
      },
    ],
  },

  'hr-practice': {
    titleKo: '인사 업무 1건 완성하기 (A→Z)', titleEn: 'Complete One HR Task (A→Z)',
    goalKo: '신규 채용 확정자 1명에 대해, 분석부터 문서·보고까지 인사 업무 흐름을 완성합니다.',
    goalEn: 'For one confirmed new hire, complete the HR flow from data to documents to report.',
    steps: [
      {
        stepKo: '1단계 — 배치 검토',
        stepEn: 'Step 1 — Placement review',
        promptKo: `아래 부서별 인력 현황을 보고 신규 직원을 어느 부서에 배치하면 좋을지 근거와 함께 제안해 줘. (인력 현황 입력)`,
        promptEn: `Given the headcount by dept, suggest where to place the new hire, with reasons. (enter data)`,
        checkKo: '배치 근거가 데이터에 기반하는가?',
        checkEn: 'Is the placement data-based?',
      },
      {
        stepKo: '2단계 — 합격·임용 문서',
        stepEn: 'Step 2 — Acceptance & appointment',
        promptKo: `합격 통보문과 인사발령 통보문을 공통 정보(성명·부서·출근일) 기반으로 일관되게 작성해 줘.`,
        promptEn: `Write the acceptance and appointment notices consistently from shared info (name/dept/start).`,
        checkKo: '두 문서의 정보가 서로 일치하는가?',
        checkEn: 'Is the info consistent across both?',
      },
      {
        stepKo: '3단계 — 온보딩 안내',
        stepEn: 'Step 3 — Onboarding guide',
        promptKo: `신규 직원 첫 주 온보딩 안내(제출 서류·계정·부서 소개·근무 규칙)를 체크리스트로 작성해 줘.`,
        promptEn: `Write a first-week onboarding checklist (documents/accounts/dept intro/rules).`,
        checkKo: '입사 초기에 필요한 항목이 빠짐없는가?',
        checkEn: 'Are all first-week items covered?',
      },
      {
        stepKo: '4단계 — 인력 현황 갱신',
        stepEn: 'Step 4 — Update headcount',
        promptKo: `신규 임용 반영 후 부서별 충원율을 다시 집계하는 Excel 수식을 알려 줘.`,
        promptEn: `Excel formula to recompute fill rate by dept after the new hire.`,
        checkKo: '충원율이 정확히 반영됐는가?',
        checkEn: 'Is the fill rate correctly updated?',
      },
      {
        stepKo: '5단계 — 인사 보고',
        stepEn: 'Step 5 — HR report',
        promptKo: `이번 임용을 포함한 이달 인사 현황을 경영진 보고용 한 페이지 요약으로 정리해 줘.`,
        promptEn: `Summarize this month's HR status incl. the hire into a 1-page executive brief.`,
        checkKo: '핵심 변동과 시사점이 담겼는가?',
        checkEn: 'Are key changes and implications included?',
      },
    ],
  },
};
