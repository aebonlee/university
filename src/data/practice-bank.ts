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
  ],
};
