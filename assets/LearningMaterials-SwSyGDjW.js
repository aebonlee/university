import{j as e}from"./markdown-uD28ob7P.js";import{b as h,f as v,u as P,L as d}from"./vendor-j2q2Hh8J.js";import{u as A}from"./index-D4V6JNhf.js";import{S as E}from"./SEOHead-CXt37xNM.js";import"./supabase-ClMXFR6t.js";function f({code:s,isKo:a=!0}){const[i,r]=h.useState(!1),n=async()=>{try{await navigator.clipboard.writeText(s)}catch{const t=document.createElement("textarea");t.value=s,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}r(!0),setTimeout(()=>r(!1),2e3)};return e.jsxs("div",{className:"prompt-block",children:[e.jsxs("div",{className:"prompt-block-header",children:[e.jsxs("span",{className:"prompt-block-label",children:[e.jsx("i",{className:"fa-solid fa-wand-magic-sparkles"}),a?"프롬프트":"Prompt"]}),e.jsxs("button",{type:"button",className:`prompt-copy-btn ${i?"copied":""}`,onClick:n,children:[e.jsx("i",{className:`fa-solid ${i?"fa-check":"fa-copy"}`}),i?a?"복사됨":"Copied":a?"복사":"Copy"]})]}),e.jsx("pre",{className:"prompt-block-body",children:e.jsx("code",{children:s})})]})}const u={"meeting-reports":[{level:"basic",titleKo:"회의록 요약",titleEn:"Meeting Minutes Summary",promptKo:`[역할] 대학 행정 담당자
[맥락] 아래 회의 녹취 내용을 정리해 회의록으로 만들어 주세요.
- (여기에 녹취 텍스트를 붙여넣기)
[형식] 「회의 개요(일시·장소·참석자) → 안건별 논의 요약 → 결정사항 → 담당·기한」 표 포함. 간결한 공문체.`,promptEn:`[Role] University administrator
[Context] Turn the meeting transcript below into minutes.
- (paste transcript here)
[Format] Overview (time/place/attendees) → discussion summary → decisions → owner/deadline (table). Concise official tone.`},{level:"basic",titleKo:"주간 업무보고 작성",titleEn:"Weekly Work Report",promptKo:`[역할] 대학 교무처 담당자
[맥락] 이번 주 업무 내용을 주간 업무보고로 정리해 주세요.
- 완료: 강의계획서 취합, 수강신청 오류 처리
- 진행중: 계절학기 개설 협의
- 예정: 성적입력 안내 공지
[형식] 「완료 / 진행중 / 예정」 3구분 표. 각 항목 1~2줄 요약.`,promptEn:`[Role] Academic affairs staff
[Context] Summarize this week's work into a weekly report.
- Done: syllabi collection, registration error handling
- In progress: seasonal term consultation
- Planned: grade-entry notice
[Format] Table in 3 groups (Done / In progress / Planned), 1–2 lines each.`},{level:"applied",titleKo:"행사 결과보고서",titleEn:"Event Result Report",promptKo:`[역할] 대학 [우리 부서] 담당자
[맥락] 우리 부서가 진행한 [행사명] 결과보고서를 작성해 주세요.
- 개요: [일시·장소·참석 인원]
- 주요 성과: [ ]
- 개선점: [ ]
[형식] 「행사 개요 → 추진 경과 → 성과(정량·정성) → 개선점 → 향후 계획」. 표와 요약 병행.`,promptEn:`[Role] University [your dept] staff
[Context] Write a result report for [event] your dept ran.
- Overview: [time/place/attendance]
- Outcomes: [ ] / Improvements: [ ]
[Format] Overview → progress → outcomes (quant/qual) → improvements → next steps.`},{level:"applied",titleKo:"회의 안건·결정사항 추출",titleEn:"Extract Agenda & Decisions",promptKo:`[역할] 회의 서기
[맥락] 아래 긴 회의 내용에서 안건과 결정사항, 후속조치를 뽑아 주세요.
- (회의 내용 붙여넣기)
[형식] 「안건 목록 → 각 안건 결정사항 → 후속조치(담당/기한)」. 실행 항목은 체크리스트로.`,promptEn:`[Role] Meeting secretary
[Context] Extract agenda, decisions, and follow-ups from the discussion below.
- (paste discussion)
[Format] Agenda → decisions per item → follow-ups (owner/deadline) as a checklist.`},{level:"advanced",titleKo:"회의록 → 산출물 3종 동시 생성",titleEn:"Minutes → 3 Outputs at Once",promptKo:"[심화 과제] 하나의 회의 녹취를 입력하면 ① 공식 회의록 ② 참석자용 할 일 목록 ③ 전 직원 공지문 초안을 한 번에 일관되게 생성하는 프롬프트를 직접 설계해 실행하세요. 세 산출물의 형식·어조를 각각 지정하는 것이 핵심입니다.",promptEn:"[Advanced] Design a prompt that, from one transcript, produces ① formal minutes ② a to-do list for attendees ③ a staff announcement draft — consistently, in one pass. The key is specifying each output's format and tone."}],"ppt-structure":[{level:"basic",titleKo:"업무보고 PPT 목차 설계",titleEn:"Report PPT Outline",promptKo:`[역할] 대학 행정 담당자
[맥락] [주제] 업무보고 발표 PPT의 목차(슬라이드 구성)를 설계해 주세요.
- 발표 시간: 10분 / 청중: 부서장
[형식] 슬라이드 번호 → 제목 → 핵심 메시지 표. 표지·목차·본문·결론 흐름 포함.`,promptEn:`[Role] University administrator
[Context] Design a slide outline for a [topic] report PPT.
- Time: 10 min / Audience: dept head
[Format] Slide # → title → key message (table). Include cover, TOC, body, conclusion.`},{level:"basic",titleKo:"슬라이드별 핵심 문구 생성",titleEn:"Per-slide Key Lines",promptKo:`[역할] 발표 자료 담당자
[맥락] 아래 목차의 각 슬라이드에 들어갈 핵심 bullet 3개씩 작성해 주세요.
- (목차 붙여넣기)
[형식] 슬라이드별 제목 + 불릿 3개. 간결한 명사형 문구.`,promptEn:`[Role] Presentation staff
[Context] Write 3 key bullets per slide for the outline below.
- (paste outline)
[Format] Title + 3 bullets per slide, concise noun phrases.`},{level:"applied",titleKo:"발표 스토리라인 설계",titleEn:"Presentation Storyline",promptKo:`[역할] 대학 [우리 부서] 발표자
[맥락] [발표 주제]를 [청중]에게 [시간]분간 발표하려 합니다. 설득력 있는 스토리라인을 설계해 주세요.
- 핵심 메시지: [ ] / 원하는 결론: [ ]
[형식] 도입(문제 제기) → 전개(근거·데이터) → 결론(제안) 3막 구조로, 각 막의 슬라이드 구성 제시.`,promptEn:`[Role] University [your dept] presenter
[Context] Present [topic] to [audience] in [N] minutes. Design a persuasive storyline.
- Key message: [ ] / Desired conclusion: [ ]
[Format] Intro (problem) → body (evidence) → conclusion (proposal), with slides per act.`},{level:"applied",titleKo:"데이터 → 슬라이드 구조",titleEn:"Data → Slide Structure",promptKo:`[역할] 보고자료 담당자
[맥락] 아래 데이터를 바탕으로 현황을 설명하는 슬라이드 구조를 제안해 주세요.
- (데이터/수치 붙여넣기)
[형식] 어떤 슬라이드에 어떤 차트·표를 배치할지, 슬라이드별 메시지와 함께 제시.`,promptEn:`[Role] Report staff
[Context] Propose a slide structure explaining the situation from the data below.
- (paste data)
[Format] Which chart/table on which slide, with each slide's message.`},{level:"advanced",titleKo:"청중별 2버전 구조",titleEn:"Two Versions by Audience",promptKo:"[심화 과제] 같은 내용을 ① 경영진용(3분·핵심만) ② 실무진용(10분·상세)의 두 버전 PPT 구조로 동시에 설계하는 프롬프트를 만드세요. 청중에 따라 강조점과 슬라이드 수가 어떻게 달라지는지 명시하도록 지정하는 것이 핵심입니다.",promptEn:"[Advanced] Design a prompt that structures the same content in two versions — ① executives (3 min, essentials) ② staff (10 min, detailed). Specify how emphasis and slide count differ by audience."}],"ppt-design":[{level:"basic",titleKo:"슬라이드 시각화 아이디어",titleEn:"Slide Visualization Ideas",promptKo:`[역할] 발표 디자인 담당자
[맥락] 아래 슬라이드 내용을 시각적으로 표현할 아이디어를 제안해 주세요.
- (슬라이드 텍스트 붙여넣기)
[형식] 도표·아이콘·이미지 유형을 슬라이드별로 3안씩 추천, 이유 포함.`,promptEn:`[Role] Presentation designer
[Context] Suggest ways to visualize the slide content below.
- (paste slide text)
[Format] 3 options per slide (diagram/icon/image) with reasons.`},{level:"basic",titleKo:"텍스트 → 다이어그램 변환",titleEn:"Text → Diagram",promptKo:`[역할] 발표 자료 담당자
[맥락] 아래 절차 설명을 도식(다이어그램)으로 바꾸는 방법을 제안해 주세요.
- (절차/프로세스 텍스트)
[형식] 플로우차트/단계도/순환도 중 적합한 형태와 각 노드 라벨을 제시.`,promptEn:`[Role] Presentation staff
[Context] Suggest how to turn the process below into a diagram.
- (process text)
[Format] Pick flowchart/step/cycle and give node labels.`},{level:"applied",titleKo:"통계 데이터 → 차트 추천",titleEn:"Stats → Chart Recommendation",promptKo:`[역할] 보고자료 담당자
[맥락] 아래 데이터에 가장 적합한 차트 유형을 추천해 주세요.
- (데이터/수치 붙여넣기) / 강조하고 싶은 점: [ ]
[형식] 데이터 특성별로 추천 차트(막대·선·원·히트맵 등)와 사용 이유, 주의점 제시.`,promptEn:`[Role] Report staff
[Context] Recommend the best chart type for the data below.
- (paste data) / What to emphasize: [ ]
[Format] Recommended chart with reason and caveats.`},{level:"applied",titleKo:"Gamma/Canva 디자인 프롬프트",titleEn:"Gamma/Canva Design Prompt",promptKo:`[역할] 발표 디자인 담당자
[맥락] Gamma(또는 Canva)로 [주제] 발표자료를 만들 프롬프트를 작성해 주세요.
- 톤: [전문적/친근한] / 색상: [기관 색상] / 분량: [슬라이드 수]
[형식] AI 슬라이드 도구에 바로 입력할 수 있는 지시문(주제·구조·톤·색상 포함).`,promptEn:`[Role] Presentation designer
[Context] Write a prompt to build a [topic] deck in Gamma/Canva.
- Tone: [ ] / Color: [ ] / Length: [slides]
[Format] A ready-to-paste instruction (topic, structure, tone, color).`},{level:"advanced",titleKo:"브랜드 일관 디자인 세트",titleEn:"Consistent Brand Set",promptKo:"[심화 과제] 기관 브랜드 톤(색상·서체·여백 규칙)을 먼저 정의하고, 그 규칙에 맞춰 표지·간지·본문·마무리 슬라이드 디자인 가이드를 일관되게 생성하는 프롬프트를 설계하세요. 재사용 가능한 디자인 규칙을 산출하도록 지정하는 것이 핵심입니다.",promptEn:"[Advanced] First define a brand tone (color/type/spacing), then design a prompt that generates consistent cover/divider/body/closing slide guidelines to match. The key is producing reusable design rules."},{level:"basic",titleKo:"색상 팔레트 추천",titleEn:"Color Palette Recommendation",promptKo:`[역할] 발표 디자인 담당자
[맥락] [기관/주제]에 어울리는 발표자료 색상 팔레트를 추천해 주세요.
- 분위기: [신뢰감/활기참/차분함 등] / 기본 색상: [있으면 입력]
[형식] 메인·보조·강조·배경 색을 HEX 코드로 제시하고, 각 색의 용도와 대비 주의점 설명.`,promptEn:`[Role] Presentation designer
[Context] Recommend a deck color palette for [org/topic].
- Mood: [trustworthy/energetic/calm...] / Base color: [if any]
[Format] Main/secondary/accent/background as HEX, with each color's use and contrast caveats.`},{level:"basic",titleKo:"아이콘·픽토그램 선정",titleEn:"Icon/Pictogram Selection",promptKo:`[역할] 발표 디자인 담당자
[맥락] 아래 슬라이드 항목들에 어울리는 아이콘을 추천해 주세요.
- 항목: [예: 예산, 일정, 인력, 성과]
[형식] 항목별 추천 아이콘(개념)과 검색 키워드(Flaticon/Noun Project용), 배치 팁.`,promptEn:`[Role] Presentation designer
[Context] Recommend icons for the slide items below.
- Items: [e.g., budget, schedule, staff, outcome]
[Format] Icon concept + search keywords (Flaticon/Noun Project) + placement tip per item.`},{level:"applied",titleKo:"인포그래픽 설계",titleEn:"Infographic Design",promptKo:`[역할] 발표 디자인 담당자
[맥락] 아래 내용을 한 장의 인포그래픽으로 설계해 주세요.
- 전달 메시지: [ ] / 핵심 수치: [ ]
[형식] 레이아웃 구획(제목·핵심수치·흐름·결론), 각 구획의 시각 요소와 색상, 시선 흐름 제안.`,promptEn:`[Role] Presentation designer
[Context] Design a one-page infographic for the content below.
- Message: [ ] / Key numbers: [ ]
[Format] Layout zones (title/numbers/flow/conclusion), visuals and colors per zone, reading flow.`},{level:"applied",titleKo:"표를 시각적으로 개선",titleEn:"Improve a Table Visually",promptKo:`[역할] 발표 자료 담당자
[맥락] 아래 밋밋한 표를 발표에서 잘 보이게 개선하는 방법을 제안해 주세요.
- (표 데이터 붙여넣기)
[형식] 강조할 셀·색상 규칙, 불필요한 열 정리, 표 대신 차트로 바꿀지 여부와 이유.`,promptEn:`[Role] Presentation staff
[Context] Suggest how to make the plain table below presentation-ready.
- (paste table)
[Format] Cells/colors to emphasize, columns to trim, whether to switch to a chart and why.`},{level:"advanced",titleKo:"발표 노트 + 시각 강조 설계",titleEn:"Speaker Notes + Visual Emphasis",promptKo:"[심화 과제] 완성된 슬라이드마다 ① 발표 스크립트(노트)와 ② 청중 시선을 끌 시각 강조 포인트(애니메이션·하이라이트 위치)를 함께 생성하는 프롬프트를 설계하세요. 슬라이드 내용과 발표 흐름이 어긋나지 않도록 지정하는 것이 핵심입니다.",promptEn:"[Advanced] Design a prompt that, per finished slide, generates ① speaker notes and ② visual-emphasis points (animation/highlight placement) to draw the audience's eye. The key is keeping slide content and delivery flow aligned."}],"excel-analysis":[{level:"basic",titleKo:"조건부 집계 수식 생성",titleEn:"Conditional Aggregation Formula",promptKo:`[역할] 대학 행정 담당자
[맥락] 다음 작업을 위한 Excel 수식을 알려 주세요.
- A열 부서명이 "교무처"인 행의 C열 예산 합계
- B열 상태가 "완료"인 건수
[형식] 각 수식과 함께 한 줄 설명. (구버전 Excel도 쓸 수 있으면 대체 수식도)`,promptEn:`[Role] University administrator
[Context] Give Excel formulas for:
- Sum of C where A = "Academic Affairs"
- Count where B = "Done"
[Format] Each formula with a one-line note (add legacy-Excel alternative if any).`},{level:"basic",titleKo:"데이터 정리 프롬프트",titleEn:"Data Cleanup",promptKo:`[역할] 데이터 담당자
[맥락] 아래 지저분한 데이터를 정리하는 방법을 알려 주세요.
- (샘플 데이터 붙여넣기: 공백·중복·형식 불일치)
[형식] 정리 순서(중복 제거 → 공백 정리 → 형식 통일)와 각 단계 Excel 기능/수식 제시.`,promptEn:`[Role] Data staff
[Context] How to clean the messy data below.
- (paste sample: blanks, duplicates, mixed formats)
[Format] Steps (dedupe → trim → normalize) with the Excel function per step.`},{level:"applied",titleKo:"피벗 테이블 설계",titleEn:"Pivot Table Design",promptKo:`[역할] 통계 담당자
[맥락] 아래 데이터로 [분석 목적]을 위한 피벗 테이블을 설계해 주세요.
- (데이터 열 구성 붙여넣기)
[형식] 행/열/값/필터에 각각 어떤 필드를 넣을지와 기대 결과, 만드는 순서를 제시.`,promptEn:`[Role] Statistics staff
[Context] Design a pivot for [purpose] from the data below.
- (paste column layout)
[Format] Fields for rows/cols/values/filter, expected result, and steps.`},{level:"applied",titleKo:"오류 데이터 정제 규칙",titleEn:"Error-Cleaning Rules",promptKo:`[역할] 데이터 담당자
[맥락] 아래 데이터의 이상값·오류를 찾아내 정제 규칙을 제안해 주세요.
- (데이터 붙여넣기)
[형식] 발견한 오류 유형 → 판별 조건(수식) → 수정/제외 규칙 표.`,promptEn:`[Role] Data staff
[Context] Find anomalies/errors in the data and propose cleaning rules.
- (paste data)
[Format] Error type → detection (formula) → fix/exclude rule (table).`},{level:"advanced",titleKo:"다중 시트 통합 분석 설계",titleEn:"Multi-sheet Analysis Design",promptKo:"[심화 과제] 여러 시트(월별 데이터)를 통합해 분기 요약 리포트를 자동으로 만드는 절차를 프롬프트로 설계하세요. 통합 방법(수식/파워쿼리) → 요약 지표 → 최종 리포트 형식까지 단계별로 지정하는 것이 핵심입니다.",promptEn:"[Advanced] Design a prompt for a procedure that merges monthly sheets into a quarterly summary report. Specify the merge method (formula/Power Query) → summary metrics → final report format, step by step."}],"doc-practice":[{level:"basic",titleKo:"시나리오 공문 작성",titleEn:"Scenario Document",promptKo:`[역할] 대학 행정 담당자
[맥락] 아래 상황에 맞는 공문 1건을 작성해 주세요.
- 상황: 도서관 임시 휴관을 전 구성원에게 안내
- 기간: [ ] / 사유: 시설 점검
[형식] 공문 안내문. 제목 → 안내 내용 → 유의사항 → 문의처.`,promptEn:`[Role] University administrator
[Context] Write one official document for the situation.
- Situation: notify all of a temporary library closure
- Period: [ ] / Reason: maintenance
[Format] Notice: title → details → notes → contact.`},{level:"basic",titleKo:"공문 검토 체크",titleEn:"Document Review Check",promptKo:`[역할] 공문 검토자
[맥락] 아래 공문 초안을 검토해 수정할 점을 알려 주세요.
- (공문 초안 붙여넣기)
[형식] 형식·수신처·사실정보·어조·오탈자 항목별로 문제점과 수정안 제시.`,promptEn:`[Role] Document reviewer
[Context] Review the draft and list fixes.
- (paste draft)
[Format] By category (format/recipient/facts/tone/typos): issue and fix.`},{level:"applied",titleKo:"행사 문서 세트",titleEn:"Event Document Set",promptKo:`[역할] 대학 [우리 부서] 담당자
[맥락] [행사명]을 위한 문서 세트를 순서대로 작성해 주세요.
- ① 기획 기안문 ② 참가 안내 통보문 ③ 협조 요청 협조문
- 공통 정보: [일시·장소·대상]
[형식] 세 문서를 각각 공문 형식으로, 공통 정보는 일관되게 반영.`,promptEn:`[Role] University [your dept] staff
[Context] Write a document set for [event], in order.
- ① proposal ② participation notice ③ cooperation request
- Shared: [time/place/target]
[Format] Three official documents; keep shared info consistent.`},{level:"applied",titleKo:"반복 공문 템플릿화",titleEn:"Recurring Document Template",promptKo:`[역할] 행정 담당자
[맥락] 매달 반복하는 [공문 유형]을 재사용 가능한 템플릿으로 만들어 주세요.
- 매번 바뀌는 값: [날짜·대상·수치 등]
[형식] 고정 문구는 그대로, 바뀌는 부분은 [ ] 자리표시자로 표시한 템플릿.`,promptEn:`[Role] Administrator
[Context] Turn the monthly [document type] into a reusable template.
- Changing values: [dates, targets, numbers]
[Format] Fixed text as-is; variable parts as [ ] placeholders.`},{level:"advanced",titleKo:"업무 1건 End-to-End 설계",titleEn:"End-to-End Task Design",promptKo:"[심화 과제] 우리 부서 실제 업무 1건을 골라, 기안문 작성 → 보고 PPT 구조 → Excel 집계표까지 한 흐름으로 AI를 활용해 처리하는 프롬프트 세트를 직접 설계하세요. 각 단계의 입력·출력이 다음 단계로 자연스럽게 이어지도록 구성하는 것이 핵심입니다.",promptEn:"[Advanced] Pick one real task and design a prompt set to handle it end-to-end: proposal → report PPT structure → Excel summary. The key is chaining each step's output into the next."}],"hr-ai":[{level:"basic",titleKo:"근태 데이터 요약",titleEn:"Attendance Summary",promptKo:`[역할] 인사 담당자
[맥락] 아래 근태 데이터를 요약해 주세요.
- (출퇴근/지각/연차 데이터 붙여넣기)
[형식] 총원·평균 근무시간·지각/결근 건수·연차 사용률을 표로 요약.`,promptEn:`[Role] HR staff
[Context] Summarize the attendance data below.
- (paste attendance data)
[Format] Headcount, avg hours, late/absent counts, leave usage (table).`},{level:"basic",titleKo:"인사 FAQ 답변 생성",titleEn:"HR FAQ Answers",promptKo:`[역할] 인사 담당자
[맥락] 자주 묻는 인사 질문에 대한 표준 답변을 만들어 주세요.
- 질문: 연차 이월 규정 / 병가 신청 절차 / 육아휴직 기간
[형식] 질문별 간결한 답변(2~3문장) + 근거 규정 표시 자리.`,promptEn:`[Role] HR staff
[Context] Draft standard answers to common HR questions.
- Q: leave carryover / sick-leave process / parental leave
[Format] Concise answer (2–3 sentences) per Q + a slot for the basis.`},{level:"applied",titleKo:"근무 유형별 분석",titleEn:"Analysis by Work Type",promptKo:`[역할] 인사 담당자
[맥락] 아래 데이터로 [분석 목적]에 맞게 근무 유형별 분석을 해 주세요.
- (부서·직급·근무형태별 데이터)
[형식] 그룹별 비교표 + 눈에 띄는 특징 3가지 + 시사점.`,promptEn:`[Role] HR staff
[Context] Analyze by work type for [purpose] from the data.
- (data by dept/rank/type)
[Format] Comparison table + 3 notable findings + implications.`},{level:"applied",titleKo:"인사 규정 안내문",titleEn:"HR Policy Notice",promptKo:`[역할] 인사 담당자
[맥락] [규정/제도] 변경을 전 직원에게 쉽게 안내하는 문서를 작성해 주세요.
- 변경 전/후: [ ] / 시행일: [ ]
[형식] 핵심 변경 요약(표) → 자주 묻는 질문 3개 → 문의처. 이해하기 쉬운 어조.`,promptEn:`[Role] HR staff
[Context] Announce a [policy] change to all staff clearly.
- Before/after: [ ] / Effective: [ ]
[Format] Key changes (table) → 3 FAQs → contact. Plain, clear tone.`},{level:"advanced",titleKo:"근태 이상패턴 탐지 설계",titleEn:"Anomaly Detection Design",promptKo:"[심화 과제] 근태 데이터에서 이상 패턴(반복 지각, 특정 요일 결근, 과다 초과근무 등)을 자동으로 탐지하고 조치 방안까지 제안하는 프롬프트를 설계하세요. 판별 기준과 개인정보 유의사항을 함께 지정하는 것이 핵심입니다.",promptEn:"[Advanced] Design a prompt that auto-detects anomaly patterns in attendance (repeated lateness, weekday absences, excess overtime) and proposes actions. The key is specifying detection criteria and privacy caveats."}],"hr-documents":[{level:"basic",titleKo:"채용공고 작성",titleEn:"Job Posting",promptKo:`[역할] 인사 담당자
[맥락] 아래 조건으로 채용공고를 작성해 주세요.
- 직무: 행정직원(계약직) / 자격: 관련 경력 2년 이상
- 근무: [부서·기간] / 마감: [ ]
[형식] 「모집 개요 → 담당 업무 → 지원 자격 → 전형 절차 → 제출 서류」 순서.`,promptEn:`[Role] HR staff
[Context] Write a job posting.
- Role: admin (contract) / 2+ yrs exp
- Work: [dept/period] / Deadline: [ ]
[Format] Overview → duties → qualifications → process → documents.`},{level:"basic",titleKo:"인사발령 통보문",titleEn:"Appointment Notice",promptKo:`[역할] 인사 담당자
[맥락] 아래 인사 이동을 통보하는 공문을 작성해 주세요.
- 홍길동: 교무처 → 기획처 (전보) / 발령일: [ ]
[형식] 공문 인사발령 통보문, 표 형식(성명·현소속·발령·사유) 포함.`,promptEn:`[Role] HR staff
[Context] Write an appointment notice.
- Hong: Academic Affairs → Planning (transfer) / date: [ ]
[Format] Official appointment notice with a table (name/current/appt/reason).`},{level:"applied",titleKo:"근로계약서 초안",titleEn:"Employment Contract Draft",promptKo:`[역할] 인사 담당자
[맥락] 아래 조건의 근로계약서 초안을 작성해 주세요.
- 계약 기간: [ ] / 급여: [ ] / 근무시간: [ ] / 직무: [ ]
[형식] 필수 조항(근로기준법 기준) 포함. ※ 완성본은 반드시 법무 검토 필요 문구 추가.`,promptEn:`[Role] HR staff
[Context] Draft an employment contract.
- Period/salary/hours/role: [ ]
[Format] Include essential clauses (labor law). Add a "requires legal review" note.`},{level:"applied",titleKo:"위촉장·임명장",titleEn:"Appointment Letter",promptKo:`[역할] 인사 담당자
[맥락] [위원회/직책] 위촉장을 작성해 주세요.
- 대상: [성명·소속] / 위촉 기간: [ ] / 역할: [ ]
[형식] 격식 있는 위촉장 형식. 위촉 취지·기간·역할·기관장 직인 자리 포함.`,promptEn:`[Role] HR staff
[Context] Write an appointment letter for [committee/role].
- Appointee: [name/affiliation] / Term: [ ] / Role: [ ]
[Format] Formal letter: purpose, term, role, seal placeholder.`},{level:"advanced",titleKo:"채용 문서 세트 일관 생성",titleEn:"Consistent Hiring Document Set",promptKo:"[심화 과제] 하나의 채용 건에 대해 채용공고 + 서류심사 안내 + 최종 합격 통보문 3종을 공통 정보(직무·일정) 기반으로 일관되게 생성하는 프롬프트를 설계하세요. 문서 간 날짜·명칭이 어긋나지 않도록 지정하는 것이 핵심입니다.",promptEn:"[Advanced] Design a prompt that generates a hiring set — posting + screening notice + final acceptance — consistently from shared info (role/schedule). The key is keeping dates/names aligned across documents."}],"attendance-excel":[{level:"basic",titleKo:"지각·결근 집계 수식",titleEn:"Late/Absence Formula",promptKo:`[역할] 인사 담당자
[맥락] 근태 표에서 다음을 계산하는 Excel 수식을 알려 주세요.
- 직원별 지각 횟수 / 부서별 결근 합계
[형식] 각 수식 + 한 줄 설명. 구버전 대체 수식이 있으면 함께.`,promptEn:`[Role] HR staff
[Context] Excel formulas from an attendance table:
- Late count per employee / absence total per dept
[Format] Each formula + one-line note; legacy alternative if any.`},{level:"basic",titleKo:"월별 근태 요약표",titleEn:"Monthly Attendance Summary",promptKo:`[역할] 인사 담당자
[맥락] 아래 근태 원자료로 월별 요약표를 만드는 방법을 알려 주세요.
- (일자별 출퇴근 데이터)
[형식] 월별 정상/지각/결근/연차 집계표 구성과 필요한 수식/피벗 제시.`,promptEn:`[Role] HR staff
[Context] Build a monthly summary from raw attendance.
- (daily punch data)
[Format] Monthly table (normal/late/absent/leave) with formulas/pivot.`},{level:"applied",titleKo:"초과근무 분석",titleEn:"Overtime Analysis",promptKo:`[역할] 인사 담당자
[맥락] 아래 데이터로 초과근무 현황을 분석해 주세요.
- (일자·직원·근무시간 데이터) / 기준 근무시간: [ ]
[형식] 개인·부서별 초과근무 시간 집계, 상위 사례, 관리 시사점.`,promptEn:`[Role] HR staff
[Context] Analyze overtime from the data.
- (date/employee/hours) / Standard hours: [ ]
[Format] Overtime by person/dept, top cases, management implications.`},{level:"applied",titleKo:"근태 이상값 필터",titleEn:"Attendance Anomaly Filter",promptKo:`[역할] 데이터 담당자
[맥락] 근태 데이터에서 이상값(음수 근무시간, 24시간 초과 등)을 걸러내는 규칙을 만들어 주세요.
- (데이터 붙여넣기)
[형식] 이상 유형 → 판별 조건부 서식/수식 → 처리 방법 표.`,promptEn:`[Role] Data staff
[Context] Rules to filter anomalies (negative hours, >24h, etc.).
- (paste data)
[Format] Type → conditional format/formula → handling (table).`},{level:"advanced",titleKo:"근태 대시보드 지표 설계",titleEn:"Attendance Dashboard Design",promptKo:"[심화 과제] 부서장이 한눈에 보는 근태 대시보드에 넣을 핵심 지표(KPI)를 정의하고, 각 지표를 어떤 차트로 표현할지, 어떤 수식으로 계산할지까지 프롬프트로 설계하세요. 지표 선정 근거를 함께 지정하는 것이 핵심입니다.",promptEn:"[Advanced] Design a prompt defining key attendance KPIs for a manager dashboard, which chart shows each, and the formula behind it. The key is justifying the KPI selection."}],"hr-report":[{level:"basic",titleKo:"인사 현황 요약",titleEn:"HR Status Summary",promptKo:`[역할] 인사 담당자
[맥락] 아래 인사 데이터로 현황 요약을 만들어 주세요.
- (정원·현원·직급·근속 데이터)
[형식] 핵심 지표 요약(표) + 한 문단 총평.`,promptEn:`[Role] HR staff
[Context] Summarize HR status from the data.
- (quota/actual/rank/tenure)
[Format] Key metrics (table) + one-paragraph overview.`},{level:"basic",titleKo:"채용 결과 보고 문구",titleEn:"Hiring Result Lines",promptKo:`[역할] 인사 담당자
[맥락] 최근 채용 결과를 보고 슬라이드용 문구로 정리해 주세요.
- 지원 [ ]명 / 합격 [ ]명 / 경쟁률 [ ]
[형식] 슬라이드 제목 + 핵심 bullet 3개(명사형).`,promptEn:`[Role] HR staff
[Context] Turn recent hiring results into slide lines.
- Applied [ ] / Passed [ ] / Ratio [ ]
[Format] Slide title + 3 key bullets (noun phrases).`},{level:"applied",titleKo:"경영진 보고 PPT 구조",titleEn:"Executive Report PPT",promptKo:`[역할] 인사 담당자
[맥락] [보고 주제]를 경영진에게 보고할 PPT 구조를 설계해 주세요.
- 핵심 메시지: [ ] / 원하는 의사결정: [ ]
[형식] 요약(1장) → 현황 → 이슈 → 제안 → 결론 흐름, 슬라이드별 메시지 포함.`,promptEn:`[Role] HR staff
[Context] Design an executive report PPT for [topic].
- Key message: [ ] / Desired decision: [ ]
[Format] Summary(1) → status → issues → proposal → conclusion, per-slide message.`},{level:"applied",titleKo:"인사 통계 시각화 추천",titleEn:"HR Stats Visualization",promptKo:`[역할] 보고자료 담당자
[맥락] 아래 인사 통계를 효과적으로 보여줄 시각화를 추천해 주세요.
- (연령·성별·직급 분포 등 데이터)
[형식] 지표별 추천 차트와 배치, 강조 색상 가이드.`,promptEn:`[Role] Report staff
[Context] Recommend visuals for the HR stats below.
- (age/gender/rank distribution)
[Format] Chart per metric, layout, and accent-color guide.`},{level:"advanced",titleKo:"분기 인사보고 2버전 설계",titleEn:"Quarterly Report, Two Versions",promptKo:"[심화 과제] 분기 인사보고서를 ① 1페이지 요약본 ② 상세 보고본 두 버전으로, 동일 데이터에서 일관되게 생성하는 프롬프트를 설계하세요. 요약본은 의사결정 포인트만, 상세본은 근거까지 담도록 지정하는 것이 핵심입니다.",promptEn:"[Advanced] Design a prompt that generates a quarterly HR report in two versions — ① 1-page summary ② detailed — consistently from the same data. Summary carries decision points only; detailed adds the evidence."}],"work-template":[{level:"basic",titleKo:"반복 공문 템플릿",titleEn:"Recurring Doc Template",promptKo:`[역할] 행정 담당자
[맥락] 자주 쓰는 [공문 유형]의 재사용 템플릿을 만들어 주세요.
- 매번 바뀌는 값: [ ]
[형식] 고정 문구 + [ ] 자리표시자. 작성 시 유의사항 한 줄 첨부.`,promptEn:`[Role] Administrator
[Context] Build a reusable template for a common [document type].
- Changing values: [ ]
[Format] Fixed text + [ ] placeholders. Add one usage note.`},{level:"basic",titleKo:"프롬프트 라이브러리 항목",titleEn:"Prompt Library Entry",promptKo:`[역할] 업무 효율화 담당자
[맥락] 우리 부서가 자주 하는 업무 하나를 골라 재사용 프롬프트 1개를 정리해 주세요.
- 업무: [ ]
[형식] 「용도 / 프롬프트 본문 / 입력값 / 기대 결과」 카드 형식.`,promptEn:`[Role] Efficiency lead
[Context] Pick a frequent task and write one reusable prompt.
- Task: [ ]
[Format] Card: purpose / prompt / inputs / expected output.`},{level:"applied",titleKo:"내 업무용 템플릿 설계",titleEn:"My Task Template",promptKo:`[역할] [우리 부서] 담당자
[맥락] 내가 매주 반복하는 [업무]를 템플릿화하고 싶습니다. 어떤 부분을 고정/변수로 나눌지 함께 설계해 주세요.
- 업무 설명: [ ]
[형식] 고정 항목 / 변수 항목 구분표 + 완성 템플릿.`,promptEn:`[Role] [Your dept] staff
[Context] Templatize my weekly [task]. Help split fixed vs variable parts.
- Task: [ ]
[Format] Fixed/variable table + finished template.`},{level:"applied",titleKo:"체크리스트 템플릿",titleEn:"Checklist Template",promptKo:`[역할] 행정 담당자
[맥락] [업무 절차]의 누락을 막는 체크리스트를 만들어 주세요.
- 절차: [ ]
[형식] 단계별 체크 항목 + 담당/기한 열. 빠지기 쉬운 항목 표시.`,promptEn:`[Role] Administrator
[Context] Make a checklist to prevent misses in [procedure].
- Procedure: [ ]
[Format] Step checklist + owner/deadline; flag easy-to-miss items.`},{level:"advanced",titleKo:"부서 공용 프롬프트 가이드",titleEn:"Team Prompt Guide",promptKo:"[심화 과제] 부서원 누구나 같은 품질로 쓸 수 있는 공용 프롬프트 가이드라인을 설계하세요. 업무 유형 분류 → 유형별 표준 프롬프트 → 사용 규칙(개인정보·검토 절차)까지 포함하도록 지정하는 것이 핵심입니다.",promptEn:"[Advanced] Design a shared team prompt guideline anyone can use for consistent quality: task taxonomy → standard prompt per type → usage rules (privacy, review). The key is including the rules."}],"work-automation":[{level:"basic",titleKo:"반복 업무 단계 분해",titleEn:"Break Down a Task",promptKo:`[역할] 업무 개선 담당자
[맥락] 아래 반복 업무를 단계별로 분해하고, 각 단계에서 AI가 도울 수 있는 부분을 표시해 주세요.
- 업무: [ ]
[형식] 단계 → 현재 방식 → AI 활용 가능성(상/중/하) 표.`,promptEn:`[Role] Improvement lead
[Context] Break the recurring task into steps and mark where AI can help.
- Task: [ ]
[Format] Step → current way → AI potential (H/M/L) table.`},{level:"basic",titleKo:"자동화 후보 선정",titleEn:"Pick Automation Targets",promptKo:`[역할] 업무 개선 담당자
[맥락] 우리 부서 업무 목록 중 자동화 우선순위를 정해 주세요.
- 업무 목록: [ ]
[형식] 반복성·규칙성·소요시간 기준으로 점수화하고 우선순위 표 제시.`,promptEn:`[Role] Improvement lead
[Context] Prioritize tasks for automation.
- Task list: [ ]
[Format] Score by repetition/rule-based/time; priority table.`},{level:"applied",titleKo:"내 업무 워크플로우 설계",titleEn:"My Workflow Design",promptKo:`[역할] [우리 부서] 담당자
[맥락] [반복 업무]를 AI와 도구를 엮어 처리하는 워크플로우를 설계해 주세요.
- 사용 가능한 도구: [ChatGPT/Excel/HWP 등]
[형식] 입력 → 처리 단계(도구별) → 출력 흐름도. 각 단계 프롬프트 예시 포함.`,promptEn:`[Role] [Your dept] staff
[Context] Design a workflow chaining AI and tools for [recurring task].
- Tools: [ChatGPT/Excel/HWP...]
[Format] Input → steps (per tool) → output flow, with a prompt example per step.`},{level:"applied",titleKo:"AI 연계 절차 문서화",titleEn:"Document the AI Procedure",promptKo:`[역할] 업무 개선 담당자
[맥락] 아래 자동화 워크플로우를 다른 사람이 따라 할 수 있게 절차서로 정리해 주세요.
- (워크플로우 개요)
[형식] 준비물 → 단계별 실행 방법 → 확인 포인트 → 예외 처리.`,promptEn:`[Role] Improvement lead
[Context] Turn the workflow into a procedure others can follow.
- (workflow overview)
[Format] Prereqs → steps → checkpoints → exception handling.`},{level:"advanced",titleKo:"월간 자동화 파이프라인 + ROI",titleEn:"Monthly Pipeline + ROI",promptKo:"[심화 과제] 매달 반복되는 업무 하나를 골라 AI 자동화 파이프라인을 설계하고, 절감되는 시간과 ROI를 추정하는 프롬프트를 만드세요. 현재 소요시간 → 자동화 후 예상시간 → 월/연 절감 효과를 산출하도록 지정하는 것이 핵심입니다.",promptEn:"[Advanced] Pick a monthly recurring task, design an AI automation pipeline, and estimate time saved and ROI. Specify current time → post-automation time → monthly/yearly savings."}],"hr-practice":[{level:"basic",titleKo:"인사 시나리오 문서",titleEn:"HR Scenario Document",promptKo:`[역할] 인사 담당자
[맥락] 아래 상황에 맞는 인사 문서 1건을 작성해 주세요.
- 상황: 신규 직원 채용에 따른 인사발령
- 정보: [성명·부서·발령일]
[형식] 공문 인사발령 통보문(표 포함).`,promptEn:`[Role] HR staff
[Context] Write one HR document for the situation.
- Situation: appointment for a new hire
- Info: [name/dept/date]
[Format] Official appointment notice (with table).`},{level:"basic",titleKo:"근태 분석 요약",titleEn:"Attendance Analysis Summary",promptKo:`[역할] 인사 담당자
[맥락] 아래 근태 데이터를 분석해 한 페이지 요약을 만들어 주세요.
- (근태 데이터)
[형식] 핵심 지표(표) + 주목할 점 3가지 + 관리 제안 1가지.`,promptEn:`[Role] HR staff
[Context] Analyze the attendance data into a one-page summary.
- (attendance data)
[Format] Key metrics (table) + 3 findings + 1 management suggestion.`},{level:"applied",titleKo:"채용~발령 문서 세트",titleEn:"Hiring-to-Appointment Set",promptKo:`[역할] 인사 담당자
[맥락] 한 명의 채용 확정자에 대해 필요한 문서를 순서대로 작성해 주세요.
- ① 합격 통보문 ② 근로계약서 안내 ③ 인사발령 통보문
- 공통 정보: [성명·부서·시작일]
[형식] 세 문서를 공문 형식으로, 공통 정보 일관 반영.`,promptEn:`[Role] HR staff
[Context] Write documents for one confirmed hire, in order.
- ① acceptance ② contract guide ③ appointment notice
- Shared: [name/dept/start date]
[Format] Three official documents; keep shared info consistent.`},{level:"applied",titleKo:"인사보고 PPT+Excel 연계",titleEn:"HR Report PPT + Excel",promptKo:`[역할] 인사 담당자
[맥락] 아래 인사 데이터로 Excel 집계표와 보고 PPT 구조를 함께 만들어 주세요.
- (인사 데이터)
[형식] ① Excel 집계 방법(수식/피벗) ② 그 결과를 보여줄 PPT 슬라이드 구조.`,promptEn:`[Role] HR staff
[Context] Build an Excel summary and a report PPT structure from the HR data.
- (HR data)
[Format] ① Excel method (formula/pivot) ② PPT slide structure showing it.`},{level:"advanced",titleKo:"인사 업무 End-to-End 포트폴리오",titleEn:"HR End-to-End Portfolio",promptKo:"[심화 과제] 실제 인사 업무 1건을 골라, 데이터 분석 → 문서 작성 → 보고자료 제작까지 AI로 처리하는 전 과정을 프롬프트 세트로 설계하고, 결과물을 포트폴리오로 정리하세요. 각 단계 산출물이 다음 단계 입력으로 이어지도록 구성하는 것이 핵심입니다.",promptEn:"[Advanced] Pick one real HR task and design a prompt set covering the whole flow — data analysis → document writing → report — then compile the outputs as a portfolio. The key is chaining each step's output into the next."}]},m={basic:{ko:"🟢 기초 — 그대로 복사해 실행",en:"🟢 Basic — copy and run as-is",badge:"basic"},applied:{ko:"🟡 응용 — [  ]를 바꿔 실행",en:"🟡 Applied — change [  ] and run",badge:"applied"},advanced:{ko:"🔴 심화 — 직접 설계",en:"🔴 Advanced — design it yourself",badge:"advanced"}},C=[{id:"ai-basics",titleKo:"생성형 AI의 이해와 활용 전략",titleEn:"Understanding Generative AI",descKo:"AI 개념, 주요 서비스 비교, 대학 행정 활용 사례",descEn:"AI concepts, major service comparison, university administration use cases",sections:[{titleKo:"생성형 AI란?",titleEn:"What is Generative AI?",contentKo:`생성형 AI(Generative AI)는 텍스트, 이미지, 코드 등 새로운 콘텐츠를 생성할 수 있는 인공지능입니다.

**핵심 개념**
- **LLM (Large Language Model)**: 대규모 텍스트 데이터로 학습한 언어 모델
- **프롬프트(Prompt)**: AI에게 전달하는 입력 명령어
- **토큰(Token)**: AI가 처리하는 텍스트의 최소 단위
- **파인튜닝(Fine-tuning)**: 특정 목적에 맞게 모델을 추가 학습시키는 과정
- **멀티모달(Multimodal)**: 텍스트, 이미지, 음성 등 여러 형태의 데이터를 동시에 처리`,contentEn:`Generative AI creates new content such as text, images, and code using artificial intelligence.

**Key Concepts**
- **LLM (Large Language Model)**: Language model trained on massive text data
- **Prompt**: Input commands given to AI
- **Token**: Minimum unit of text AI processes
- **Fine-tuning**: Additional training of a model for specific purposes
- **Multimodal**: Processing multiple data types (text, images, audio) simultaneously`},{titleKo:"주요 AI 서비스 비교",titleEn:"Major AI Service Comparison",contentKo:`| 서비스 | 개발사 | 특징 | 추천 용도 |
|--------|--------|------|-----------|
| **ChatGPT** | OpenAI | 범용성, 다양한 플러그인, 최신 GPT 모델 지원 | 문서 작성, 코드 생성, 브레인스토밍 |
| **Gemini** | Google | 검색 연동, 멀티모달, Google Workspace 통합 | 정보 검색, 이미지 분석, 데이터 분석 |
| **Claude** | Anthropic | 긴 문맥(최대 100만 토큰), 정확성, 안전성 | 장문 분석, 보고서 작성, 코드 리뷰 |

**무료 vs 유료 기능 비교**
- 무료 버전: 기본 대화, 간단한 문서 작성 가능
- 유료 버전: 더 긴 문맥, 고급 분석, 파일 업로드, 이미지 생성 등 지원`,contentEn:`| Service | Developer | Features | Recommended Use |
|---------|-----------|----------|-----------------|
| **ChatGPT** | OpenAI | Versatile, plugins, latest GPT models | Document writing, code, brainstorming |
| **Gemini** | Google | Search integration, multimodal | Information search, image analysis |
| **Claude** | Anthropic | Long context (up to 1M tokens), accuracy | Long document analysis, reports |

**Free vs Paid Features**
- Free: Basic conversation, simple document writing
- Paid: Longer context, advanced analysis, file upload, image generation`},{titleKo:"AI 활용 가능 업무 영역",titleEn:"AI-Applicable Work Areas",contentKo:`**문서 행정**
- 공문서 초안 작성 (기안문, 통보문, 협조문)
- 회의록 요약 및 정리
- 보고서 구조화 및 작성

**인사 행정**
- 채용공고 작성 및 면접 질문 생성
- 인사발령 문서 작성
- 근태 데이터 분석 및 보고

**프레젠테이션**
- PPT 구조 설계 및 슬라이드 생성
- 데이터 시각화 제안
- 발표 스크립트 작성

**데이터 분석**
- Excel 수식 자동 생성
- 피벗 테이블 가이드
- 차트 및 그래프 추천`,contentEn:`**Document Administration**
- Draft official documents (proposals, notices, cooperation requests)
- Meeting minutes summarization
- Report structuring and writing

**HR Administration**
- Job posting creation and interview question generation
- Personnel appointment documents
- Attendance data analysis and reporting

**Presentations**
- PPT structure design and slide generation
- Data visualization suggestions
- Presentation script writing

**Data Analysis**
- Excel formula auto-generation
- Pivot table guidance
- Chart and graph recommendations`}]},{id:"prompt-engineering",titleKo:"프롬프트 엔지니어링 기초",titleEn:"Prompt Engineering Basics",descKo:"효과적인 프롬프트 작성법, 역할·맥락·형식 지정",descEn:"Effective prompt writing, role/context/format specification",sections:[{titleKo:"RCF 프레임워크",titleEn:"RCF Framework",contentKo:`프롬프트 엔지니어링은 AI에게 원하는 결과를 얻기 위해 입력을 체계적으로 설계하는 기술입니다.

**R - Role (역할)**
AI에게 특정 전문가 역할을 부여합니다.
\`\`\`
당신은 대학교 행정 전문가로서 공문서 작성에 능통합니다.
\`\`\`

**C - Context (맥락)**
작업의 배경과 구체적인 조건을 제공합니다.
\`\`\`
전남대학교 교무처에서 2026학년도 2학기 수강 신청 안내 공문을 작성해야 합니다.
수강 신청 기간은 8월 19일~23일이며, 대상은 재학생 전체입니다.
\`\`\`

**F - Format (형식)**
원하는 출력 형태를 지정합니다.
\`\`\`
다음 형식으로 작성해 주세요:
1. 제목  2. 수신처  3. 본문 (목적, 세부사항, 유의사항)  4. 첨부 목록
\`\`\``,contentEn:`Prompt engineering is the technique of systematically designing inputs to get desired results from AI.

**R - Role**
Assign a specific expert role to AI.
\`\`\`
You are a university administration expert proficient in official document writing.
\`\`\`

**C - Context**
Provide background and specific conditions.
\`\`\`
The Academic Affairs Office needs to write a course registration notice for the 2nd semester of 2026.
\`\`\`

**F - Format**
Specify the desired output format.
\`\`\`
Please write in the following format:
1. Title  2. Recipient  3. Body (purpose, details, notes)  4. Attachments
\`\`\``},{titleKo:"좋은 프롬프트의 조건",titleEn:"Characteristics of Good Prompts",contentKo:`**1. 구체적(Specific)**
추상적인 요청 대신 구체적인 조건을 명시합니다.
- (X) "안내문 써줘"
- (O) "전남대학교 교무처 명의로, 재학생 대상, 2학기 수강신청 안내 공문을 작성해 주세요"

**2. 구조적(Structured)**
역할, 맥락, 형식을 체계적으로 구성합니다.
- [역할] → [맥락/조건] → [형식/어조] 순서로 작성

**3. 단계적(Step-by-step)**
복잡한 작업은 단계별로 나누어 요청합니다.
- "먼저 목차를 작성하고, 그 다음 각 섹션의 내용을 작성해 주세요"

**4. 반복 개선(Iterative)**
첫 결과를 보고 프롬프트를 점진적으로 개선합니다.
- "이전 결과에서 ~~을 추가/수정해 주세요"`,contentEn:`**1. Specific**
Specify concrete conditions instead of abstract requests.
- (X) "Write a notice"
- (O) "Write a course registration notice for Chonnam National University students"

**2. Structured**
Organize role, context, and format systematically.
- [Role] → [Context/Conditions] → [Format/Tone]

**3. Step-by-step**
Break complex tasks into sequential steps.
- "First create an outline, then write content for each section"

**4. Iterative**
Gradually improve prompts based on initial results.
- "In the previous result, please add/modify ~~"`},{titleKo:"프롬프트 템플릿 모음",titleEn:"Prompt Template Collection",contentKo:`**공문서 작성 템플릿**
\`\`\`
[역할] 당신은 {기관명}의 {부서} 소속 행정 전문가입니다.
[작업] {문서 유형}을 작성해 주세요.
[조건]
- 수신: {수신처}
- 목적: {문서 목적}
- 주요 내용: {핵심 내용}
[형식] 공문서 표준 형식(제목, 수신, 본문, 첨부)
[어조] 공식적이고 간결한 행정 문체
\`\`\`

**회의록 정리 템플릿**
\`\`\`
[역할] 회의 기록 전문가
[작업] 아래 회의 내용을 공식 회의록으로 정리
[형식]
1. 회의 정보 (일시, 장소, 참석자)
2. 안건별 논의 내용
3. 결정 사항
4. 후속 조치 (담당, 기한)
[내용] {회의 내용}
\`\`\`

**보고서 작성 템플릿**
\`\`\`
[역할] {부서} 보고서 작성 전문가
[작업] {보고서 유형} 작성
[포함 사항] 현황 요약, 주요 성과, 문제점 및 개선방안, 향후 계획
[분량] {페이지 수}
[어조] {어조 지정}
\`\`\``,contentEn:`**Official Document Template**
\`\`\`
[Role] You are an administrative expert at {department} of {organization}.
[Task] Write a {document type}.
[Conditions]
- Recipient: {recipient}
- Purpose: {purpose}
- Key content: {main content}
[Format] Standard official document format
[Tone] Formal and concise administrative style
\`\`\`

**Meeting Minutes Template**
\`\`\`
[Role] Meeting recording expert
[Task] Organize meeting content into official minutes
[Format]
1. Meeting info (date, location, attendees)
2. Discussion by agenda item
3. Decisions made
4. Follow-up actions (person responsible, deadline)
[Content] {meeting content}
\`\`\`

**Report Writing Template**
\`\`\`
[Role] {department} report writing expert
[Task] Write a {report type}
[Include] Status summary, Key achievements, Issues and improvements, Future plans
[Length] {pages}
[Tone] {tone}
\`\`\``}]}],T=[{id:"official-documents",titleKo:"AI 활용 공문서 작성",titleEn:"AI-Powered Official Document Writing",descKo:"공문서 초안, 기안문, 통보문 자동 생성 | 활용 도구: ChatGPT, Claude, HWP",descEn:"Auto-generate official document drafts, proposals, and notices | Tools: ChatGPT, Claude, HWP",sections:[{titleKo:"대학 행정 공문서 유형",titleEn:"University Administrative Document Types",contentKo:`| 유형 | 설명 | 예시 |
|------|------|------|
| **기안문** | 업무를 기획·제안하는 문서 | 예산 신청, 행사 기획안 |
| **통보문** | 결정 사항을 알리는 문서 | 합격 통보, 일정 안내 |
| **협조문** | 타 부서 협력을 요청하는 문서 | 강의실 배정 요청, 자료 협조 |
| **회신문** | 질의에 대한 답변 문서 | 감사 회신, 질의 답변 |

**AI 활용 공문서 작성 절차**
1. 문서 유형과 목적을 정의합니다
2. RCF 프레임워크로 프롬프트를 작성합니다
3. AI가 생성한 초안을 검토합니다
4. HWP 표준 서식에 옮겨 편집합니다
5. 검토 체크리스트로 최종 확인합니다`,contentEn:`| Type | Description | Example |
|------|-------------|---------|
| **Proposal** | Documents planning or suggesting tasks | Budget requests, event plans |
| **Notice** | Documents announcing decisions | Acceptance notices, schedule announcements |
| **Cooperation** | Requests for cross-departmental cooperation | Room assignments, data requests |
| **Response** | Replies to inquiries | Audit responses, Q&A |

**AI-Assisted Document Writing Procedure**
1. Define document type and purpose
2. Write prompt using RCF framework
3. Review AI-generated draft
4. Transfer to standard HWP format
5. Final check with review checklist`},{titleKo:"문서 유형별 실습 프롬프트",titleEn:"Practice Prompts by Document Type",contentKo:`아래 프롬프트를 **복사** 버튼으로 복사해 ChatGPT·Claude 등에 붙여넣고 직접 실습해 보세요. \`[  ]\` 안의 정보를 우리 부서 상황에 맞게 바꾸면 바로 활용할 수 있습니다.

**① 기안문 — 예산 신청**
\`\`\`
[역할] 당신은 대학 교무처의 행정 담당자입니다.
[맥락] 아래 행사를 기획하고 필요한 예산을 신청하는 기안문을 작성해야 합니다.
- 행사명: 2026학년도 2학기 신입생 오리엔테이션
- 일시: 2026년 9월 2일(화) 10:00~16:00
- 장소: 대학본부 대강당
- 소요 예산: 총 500만 원 (강사료 200 / 다과 150 / 인쇄물 100 / 기타 50)
[형식] 공문서 기안문 형식으로, 「제목 → 기안 배경 → 세부 추진 내용 → 예산 내역(표) → 협조 요청」 순서로 작성해 주세요. 어조는 정중한 공문체로.
\`\`\`

**② 통보문 — 합격·등록 안내**
\`\`\`
[역할] 당신은 대학 입학처의 행정 담당자입니다.
[맥락] 편입학 전형 합격자에게 합격 사실과 등록 절차를 안내하는 통보문을 작성해야 합니다.
- 전형명: 2026학년도 일반편입학
- 등록 기간: 2026년 8월 12일(수)~14일(금)
- 납부 방법: 대학 지정 은행 가상계좌
- 문의: 입학처 (062-000-0000)
[형식] 공문서 통보문 형식으로, 「인사말 → 합격 안내 → 등록 절차(번호 목록) → 유의사항 → 문의처」 순서로 작성. 정중하고 축하하는 어조로.
\`\`\`

**③ 협조문 — 강의실·장비 협조 요청**
\`\`\`
[역할] 당신은 대학 교무처 학사팀 담당자입니다.
[맥락] 계절학기 운영을 위해 정보전산원에 강의실과 전산장비 협조를 요청하는 협조문을 작성해야 합니다.
- 요청 부서: 정보전산원
- 요청 내용: 컴퓨터실 2실(각 40석), 프로젝터·마이크 대여
- 사용 기간: 2026년 8월 3일(월)~21일(금), 평일 09:00~18:00
[형식] 공문서 협조문 형식으로, 「협조 배경 → 요청 사항(표) → 사용 기간 → 협조 요청 문구」 순서로 작성. 정중한 협조 요청 어조로.
\`\`\`

**④ 회신문 — 민원 질의 답변**
\`\`\`
[역할] 당신은 대학 학생지원처 담당자입니다.
[맥락] 재학생이 '휴학 중 장학금 수혜 가능 여부'를 질의한 민원에 회신문을 작성해야 합니다.
- 질의 요지: 일반휴학 상태에서 성적우수 장학금을 받을 수 있는지
- 회신 내용: 휴학 중에는 교내 장학금 수혜가 불가하며, 복학 학기부터 신청 가능
- 근거: 학칙 및 장학금 지급 규정
[형식] 공문서 회신문 형식으로, 「질의 요지 확인 → 회신 내용 → 근거 규정 → 추가 안내」 순서로 작성. 정중하고 명확한 안내 어조로.
\`\`\`

> 💡 **실습 팁**: AI가 만든 초안을 그대로 쓰지 말고, ① 사실 정보(날짜·금액·부서) 확인 → ② 기관 공문 서식에 맞게 편집 → ③ 검토 체크리스트로 최종 확인의 3단계를 꼭 거치세요.`,contentEn:`Copy each prompt with the **Copy** button, paste it into ChatGPT/Claude, and try it yourself. Replace the details in \`[  ]\` with your own department's situation.

**① Proposal — Budget Request**
\`\`\`
[Role] You are an administrator in a university's academic affairs office.
[Context] Write a proposal document requesting a budget for the event below.
- Event: Fall 2026 New Student Orientation
- Date: Sep 2, 2026 (Tue) 10:00–16:00
- Venue: Main Hall, University HQ
- Budget: KRW 5M total (Speakers 2.0 / Refreshments 1.5 / Printing 1.0 / Misc 0.5)
[Format] Official proposal format, in order: Title → Background → Details → Budget table → Cooperation request. Formal official tone.
\`\`\`

**② Notice — Admission & Registration**
\`\`\`
[Role] You are an administrator in a university admissions office.
[Context] Write a notice informing transfer-admission passers of their acceptance and registration steps.
- Program: 2026 General Transfer Admission
- Registration: Aug 12–14, 2026
- Payment: Virtual account at the designated bank
- Inquiries: Admissions Office (062-000-0000)
[Format] Official notice, in order: Greeting → Acceptance → Registration steps (numbered) → Notes → Contact. Warm, congratulatory tone.
\`\`\`

**③ Cooperation — Room & Equipment Request**
\`\`\`
[Role] You are a staff member in a university academic affairs team.
[Context] Write a cooperation request to the IT center for classrooms and equipment for the seasonal term.
- To: IT Center
- Request: 2 computer labs (40 seats each), projector & mic rental
- Period: Aug 3–21, 2026, weekdays 09:00–18:00
[Format] Official cooperation format, in order: Background → Requests (table) → Period → Cooperation request. Polite, cooperative tone.
\`\`\`

**④ Response — Reply to Inquiry**
\`\`\`
[Role] You are a staff member in a university student support office.
[Context] Write a reply to a student's inquiry about scholarship eligibility during a leave of absence.
- Inquiry: Whether a merit scholarship can be received during a general leave of absence
- Reply: Not eligible during leave; can apply from the semester of return
- Basis: University regulations and scholarship rules
[Format] Official response format, in order: Restate inquiry → Reply → Basis → Additional guidance. Clear, courteous tone.
\`\`\`

> 💡 **Practice tip**: Don't use the AI draft as-is. Always follow 3 steps: (1) verify facts (dates, amounts, departments) → (2) reformat to your institution's template → (3) final check with the review checklist.`},{titleKo:"추가 실습 문제 (난이도별)",titleEn:"More Practice (by Level)",contentKo:`진도에 맞춰 골라 연습하세요. **🟢 기초**는 그대로 복사해 실행, **🟡 응용**은 정보를 바꿔 실행, **🔴 심화**는 프롬프트를 직접 설계합니다. 먼저 끝낸 학습자는 심화로, 익숙하지 않은 학습자는 기초부터 충분히 연습하면 됩니다.

**🟢 기초 — 그대로 복사해 실행해 보세요**

*① 행사 안내문*
\`\`\`
[역할] 대학 총무처 담당자
[맥락] 전 교직원에게 '2026 하반기 소방 대피 훈련' 실시를 안내해야 합니다.
- 일시: 2026년 10월 15일(목) 14:00
- 장소: 각 건물 → 대운동장 집결
[형식] 공문 안내문. 인사말 → 훈련 개요 → 행동 요령(번호) → 협조 당부 순서로, 정중한 공문체.
\`\`\`

*② 회의 참석 요청 통보문*
\`\`\`
[역할] 대학 기획처 담당자
[맥락] 각 부서장에게 '2026학년도 2학기 학사운영 협의회' 참석을 요청하는 통보문을 작성하세요.
- 일시: 2026년 8월 20일(수) 15:00 / 장소: 본부 3층 회의실
- 안건: 학사일정 조정, 강의실 배정
[형식] 공문 통보문. 목적 → 일시·장소 → 안건 → 참석 요청 순서.
\`\`\`

*③ 자료 제출 협조문*
\`\`\`
[역할] 대학 교무처 담당자
[맥락] 각 학과에 '2026학년도 강의계획서 제출'을 요청하는 협조문을 작성하세요.
- 제출 기한: 2026년 8월 25일(월)
- 제출 방법: 학사시스템 업로드
[형식] 공문 협조문. 협조 배경 → 제출 대상·기한 → 방법 → 협조 당부 순서.
\`\`\`

**🟡 응용 — \`[  ]\`를 우리 부서 상황으로 바꿔 실행하세요**

*④ 출장 신청 기안문*
\`\`\`
[역할] 대학 [우리 부서] 담당자
[맥락] 아래 국내 출장을 신청하는 기안문을 작성하세요.
- 출장자: [이름/직급] / 목적: [연수·회의·현장점검 등]
- 기간: [출발일~도착일] / 장소: [기관·도시]
- 소요 경비: 교통비 [ ] / 숙박비 [ ] / 일비 [ ]
[형식] 공문 기안문. 제목 → 출장 목적 → 출장 개요(표) → 경비 내역 → 결재 요청 순서.
\`\`\`

*⑤ 규정 개정 통보문*
\`\`\`
[역할] 대학 [주관 부서] 담당자
[맥락] 전 교직원에게 '[규정명] 개정' 사항을 통보하는 공문을 작성하세요.
- 개정 사유: [ ] / 주요 변경: [기존] → [개정]
- 시행일: [ ]
[형식] 공문 통보문. 개정 배경 → 주요 개정 내용(표: 조항/기존/개정) → 시행일 → 문의처 순서.
\`\`\`

*⑥ 타 기관 협조 공문*
\`\`\`
[역할] 대학 [우리 부서] 담당자
[맥락] [상대 기관]에 [협조 내용]을 요청하는 대외 공문을 작성하세요.
- 요청 사항: [ ] / 필요 기간: [ ]
- 근거·배경: [ ]
[형식] 대외 공문 형식(수신·발신 포함). 인사말 → 협조 요청 배경 → 요청 사항 → 회신 요청 순서, 격식 있는 어조.
\`\`\`

**🔴 심화 — 프롬프트를 직접 설계해 보세요**

*⑦ 감사 지적사항 대응 공문 설계*
> RCF(역할–맥락–형식)를 스스로 적용해, '내부감사에서 지적된 [예: 예산 집행 절차 미비]에 대한 개선계획 보고 공문'을 만드는 프롬프트를 직접 작성해 실행하세요. 지적사항·원인·개선대책·이행일정이 포함되도록 형식을 지정하는 것이 핵심입니다.

*⑧ 문서 세트 한 번에 생성*
> '위원회 위촉'과 관련해 **위촉장 + 위촉 안내 통보문 + 회의 개최 협조문 3종**을 한 번의 대화로 일관되게 생성하도록 프롬프트를 설계하세요. 위원 명단·위촉 기간 등 공통 정보를 먼저 제시하고, 3개 문서의 형식을 각각 지정하는 것이 관건입니다.

*⑨ 회신문 + FAQ 자동화*
> 자주 들어오는 민원 유형([예: 증명서 발급, 등록금 분할납부])을 골라, 회신문 초안과 함께 **예상 추가질문 FAQ 5개**까지 한 번에 생성하는 프롬프트를 설계하세요.

> 💡 강사님께: 심화 과제는 정답 문서가 아니라 **'좋은 프롬프트를 설계했는가'**로 피드백하면 학습 효과가 큽니다.`,contentEn:`Pick by your pace. **🟢 Basic** — copy and run as-is; **🟡 Applied** — change the details and run; **🔴 Advanced** — design the prompt yourself. Early finishers move to Advanced; others practice Basic thoroughly.

**🟢 Basic — copy and run as-is**

*① Event Notice*
\`\`\`
[Role] University general affairs staff
[Context] Notify all staff of the "Fall 2026 Fire Evacuation Drill."
- When: Oct 15, 2026 (Thu) 14:00 / Assemble at the main field
[Format] Official notice: greeting → overview → action steps (numbered) → cooperation request. Formal tone.
\`\`\`

*② Meeting Attendance Request*
\`\`\`
[Role] University planning office staff
[Context] Request department heads to attend the "Fall 2026 Academic Operations Council."
- When: Aug 20, 2026 (Wed) 15:00 / HQ 3F meeting room
- Agenda: schedule adjustment, room assignment
[Format] Official notice: purpose → time/place → agenda → attendance request.
\`\`\`

*③ Document Submission Request*
\`\`\`
[Role] University academic affairs staff
[Context] Ask each department to submit "2026 course syllabi."
- Deadline: Aug 25, 2026 / Method: upload to the academic system
[Format] Cooperation request: background → target & deadline → method → request.
\`\`\`

**🟡 Applied — replace \`[  ]\` with your own situation**

*④ Business Trip Request*
\`\`\`
[Role] University [your dept] staff
[Context] Write a proposal requesting the domestic trip below.
- Traveler: [name/title] / Purpose: [training, meeting, inspection...]
- Period: [dates] / Place: [org/city]
- Costs: transport [ ] / lodging [ ] / per diem [ ]
[Format] Proposal: title → purpose → overview (table) → costs → approval request.
\`\`\`

*⑤ Regulation Amendment Notice*
\`\`\`
[Role] University [dept] staff
[Context] Notify all staff of the "[regulation]" amendment.
- Reason: [ ] / Change: [old] → [new] / Effective: [ ]
[Format] Notice: background → key changes (table: clause/old/new) → effective date → contact.
\`\`\`

*⑥ Inter-agency Cooperation Letter*
\`\`\`
[Role] University [your dept] staff
[Context] Request [cooperation] from [external org].
- Request: [ ] / Period: [ ] / Basis: [ ]
[Format] Formal external letter (with sender/recipient): greeting → background → request → reply request.
\`\`\`

**🔴 Advanced — design the prompt yourself**

*⑦ Audit Response Letter*
> Apply RCF yourself to create a prompt for an "improvement-plan report on an internal-audit finding [e.g., incomplete budget-execution process]." The key is specifying a format that includes the finding, cause, corrective action, and timeline.

*⑧ Generate a Document Set at Once*
> Design a prompt that generates **an appointment letter + notice + meeting-cooperation request (3 documents)** consistently in one conversation for a committee appointment. Provide shared info first, then specify each document's format.

*⑨ Response + FAQ Automation*
> Pick a common inquiry type [e.g., certificate issuance, tuition installment] and design a prompt that produces a reply draft **plus 5 anticipated follow-up FAQ**.

> 💡 For instructors: for advanced tasks, give feedback on **"was a good prompt designed?"** rather than on the output document — it's far more effective for learning.`},{titleKo:"AI 생성 문서 검토 체크리스트",titleEn:"AI Document Review Checklist",contentKo:`AI가 생성한 문서는 반드시 아래 항목을 확인한 후 사용해야 합니다.

- [ ] **형식**: 문서 형식(기안문/통보문/협조문)이 올바른가?
- [ ] **수신처**: 수신처와 발신처가 정확한가?
- [ ] **사실 정보**: 날짜, 장소, 인원 등 사실 정보가 정확한가?
- [ ] **법률/규정**: 관련 법률이나 규정 인용이 정확한가?
- [ ] **어조/문체**: 공문서에 적합한 어조와 문체인가?
- [ ] **오탈자**: 오탈자나 문법 오류는 없는가?
- [ ] **첨부 파일**: 첨부 파일 목록이 누락되지 않았는가?
- [ ] **결재 라인**: 결재권자가 올바르게 지정되었는가?`,contentEn:`AI-generated documents must be verified with the following checklist before use:

- [ ] **Format**: Is the document type correct?
- [ ] **Recipients**: Are sender and recipient accurate?
- [ ] **Facts**: Are dates, locations, numbers accurate?
- [ ] **Regulations**: Are legal or regulatory references correct?
- [ ] **Tone**: Is the tone appropriate for official documents?
- [ ] **Typos**: Are there any spelling or grammar errors?
- [ ] **Attachments**: Is the attachment list complete?
- [ ] **Approval**: Is the approval chain correctly specified?`}]},{id:"meeting-reports",titleKo:"회의록·보고서 자동화",titleEn:"Meeting Minutes & Report Automation",descKo:"회의록 요약, 업무보고서, 결과보고서 작성 | 활용 도구: ChatGPT, Claude, HWP",descEn:"Meeting minutes summary, work reports, result reports | Tools: ChatGPT, Claude, HWP",sections:[{titleKo:"회의록·보고서 작성 가이드",titleEn:"Meeting Minutes & Report Guide",contentKo:`**회의록 작성 3단계**
1. 회의 내용 기록 (음성 메모, 메모장 활용)
2. AI에 구조화된 회의록 형태로 요약 요청
3. 검토 및 보완 (누락 내용 추가, 사실관계 확인)

**업무보고서 유형별 포인트**

| 보고서 유형 | 핵심 포인트 | AI 활용 방법 |
|-------------|------------|-------------|
| 주간 업무보고 | 실적/계획 명확 구분 | 표 형식으로 자동 정리 |
| 결과보고서 | 성과 수치 포함 | 데이터 기반 요약 생성 |
| 기획보고서 | 논리적 구조 | 목차 및 구조 자동 설계 |
| 출장보고서 | 일정별 정리 | 시간순 정리 및 시사점 도출 |`,contentEn:`**3 Steps for Meeting Minutes**
1. Record meeting content (voice memo, notepad)
2. Request AI to summarize in structured format
3. Review and supplement (add missing items, verify facts)

**Report Types and Key Points**

| Report Type | Key Points | AI Usage |
|-------------|-----------|----------|
| Weekly report | Clear results/plans | Auto-format in table |
| Result report | Include performance metrics | Data-based summary |
| Planning report | Logical structure | Auto-design outline |
| Trip report | Chronological order | Timeline and insights |`},{titleKo:"보고서 작성 실습 프롬프트",titleEn:"Report Writing Practice Prompts",contentKo:`**주간 업무보고서 프롬프트**
\`\`\`
[역할] 대학교 행정 보고서 작성 전문가
[작업] 주간 업무보고서를 작성해 주세요.
[포함 사항]
1. 금주 실적 (완료 업무 목록)
2. 차주 계획 (예정 업무 목록)
3. 특이사항 및 건의사항
[형식] 표 형식, 항목별 간결하게 작성
[내용] {이번 주 업무 내용 입력}
\`\`\`

**결과보고서 프롬프트**
\`\`\`
[역할] 사업 결과보고서 작성 전문가
[작업] 다음 사업의 결과보고서를 작성해 주세요.
[포함 사항]
- 사업 개요 (목적, 기간, 예산)
- 추진 실적 (계획 대비 달성률)
- 성과 분석 (정량적·정성적)
- 문제점 및 개선방안
- 향후 계획
[형식] A4 3~5페이지 분량
[내용] {사업 내용 입력}
\`\`\`

**회의록 AI 정리 프롬프트**
\`\`\`
다음 회의 내용을 공식 회의록으로 정리해 주세요.
[형식]
1. 회의 정보: 일시, 장소, 참석자
2. 안건별 논의 내용 (발언자 포함)
3. 결정 사항 (표 형식)
4. 후속 조치 (담당자, 기한 포함)
[원본] {회의 메모/녹취 내용}
\`\`\``,contentEn:`**Weekly Work Report Prompt**
\`\`\`
[Role] University administrative report writing expert
[Task] Write a weekly work report.
[Include]
1. This week's results (completed tasks)
2. Next week's plan (upcoming tasks)
3. Special notes and suggestions
[Format] Table format, concise by item
[Content] {Enter this week's work}
\`\`\`

**Result Report Prompt**
\`\`\`
[Role] Project result report writing expert
[Task] Write a result report for the following project.
[Include]
- Project overview (purpose, period, budget)
- Performance (achievement vs plan)
- Analysis (quantitative & qualitative)
- Issues and improvements
- Future plans
[Format] A4 3-5 pages
[Content] {Enter project details}
\`\`\`

**Meeting Minutes AI Organization Prompt**
\`\`\`
Please organize the following meeting content into official minutes.
[Format]
1. Meeting info: date, location, attendees
2. Discussion by agenda (with speakers)
3. Decisions (table format)
4. Follow-up actions (person responsible, deadline)
[Source] {Meeting notes/transcript}
\`\`\``}]},{id:"ppt-structure",titleKo:"PPT 구조 설계와 슬라이드 생성",titleEn:"PPT Structure Design & Slide Generation",descKo:"AI 기반 PPT 구조 설계, 슬라이드 초안 생성 | 활용 도구: ChatGPT, Gamma, PowerPoint",descEn:"AI-based PPT structure design, slide draft generation | Tools: ChatGPT, Gamma, PowerPoint",sections:[{titleKo:"AI 기반 PPT 제작 도구",titleEn:"AI-Based PPT Tools",contentKo:`**Gamma (gamma.app)**
AI 기반 프레젠테이션 자동 생성 도구
1. gamma.app 접속 후 회원가입
2. "New AI" > "Presentation" 선택
3. 주제 입력 (한국어 가능)
4. AI가 자동으로 슬라이드 생성
5. 내용 수정 및 디자인 조정
6. PPT 파일로 내보내기

**Canva (canva.com)**
디자인 플랫폼으로 PPT 제작
1. "프레젠테이션" 템플릿 선택
2. AI 디자인 추천 활용
3. 브랜드 컬러(대학교 CI) 적용
4. 이미지/아이콘 검색 및 삽입
5. PPT 형식으로 다운로드

**ChatGPT/Claude**
PPT 구조 설계 및 콘텐츠 생성
- 슬라이드별 구조와 핵심 메시지 설계
- 각 슬라이드 상세 내용 및 발표자 노트 작성
- 데이터 시각화 방법 추천`,contentEn:`**Gamma (gamma.app)**
AI-based presentation auto-generation
1. Sign up at gamma.app
2. Select "New AI" > "Presentation"
3. Enter topic (Korean supported)
4. AI automatically generates slides
5. Edit content and adjust design
6. Export as PPT file

**Canva (canva.com)**
Design platform for PPT creation
1. Select "Presentation" template
2. Use AI design recommendations
3. Apply brand colors (university CI)
4. Search and insert images/icons
5. Download as PPT format

**ChatGPT/Claude**
PPT structure design and content generation
- Design structure and key messages per slide
- Write detailed content and speaker notes
- Recommend data visualization methods`},{titleKo:"PPT 구조 설계 프롬프트",titleEn:"PPT Structure Design Prompts",contentKo:`**업무보고 PPT 구조 설계 프롬프트**
\`\`\`
[역할] 대학 행정 PPT 기획 전문가
[작업] 다음 주제로 업무보고 PPT 구조를 설계해 주세요.
[주제] {보고 주제}
[형식]
- 전체 7~10슬라이드
- 슬라이드별 제목, 핵심 메시지, 포함할 내용 제시
- 데이터 시각화가 필요한 슬라이드 표시
- 각 슬라이드 발표자 노트(30초 분량) 포함
\`\`\`

**슬라이드 구조 예시**

| 슬라이드 | 제목 | 핵심 메시지 | 시각 요소 |
|----------|------|-----------|----------|
| 1 | 표지 | 제목, 발표자, 일자 | 대학 로고 |
| 2 | 목차 | 발표 흐름 안내 | 아이콘 목록 |
| 3 | 현황 요약 | 핵심 수치 3~4개 | 인포그래픽 |
| 4 | 상세 분석 | 데이터 기반 분석 | 차트/그래프 |
| 5 | 문제점 | 이슈 도출 | 표/다이어그램 |
| 6 | 개선 방안 | 해결책 제시 | 프로세스 흐름 |
| 7 | 실행 계획 | 일정·담당자 | 타임라인 |

**Gamma 활용 단계별 가이드**
1. gamma.app 접속 → "Generate" 클릭
2. 주제 입력: AI가 작성한 구조 텍스트 붙여넣기
3. 슬라이드 수, 언어 설정
4. 생성된 결과에서 내용 수정 및 이미지 교체
5. "Export" → PowerPoint 형식으로 내보내기
6. PowerPoint에서 대학 서식에 맞게 최종 편집`,contentEn:`**Work Report PPT Structure Design Prompt**
\`\`\`
[Role] University administrative PPT planning expert
[Task] Design a work report PPT structure for the following topic.
[Topic] {report topic}
[Format]
- Total 7-10 slides
- Include title, key message, and content per slide
- Mark slides needing data visualization
- Include speaker notes (30 seconds each)
\`\`\`

**Slide Structure Example**

| Slide | Title | Key Message | Visual Element |
|-------|-------|------------|---------------|
| 1 | Cover | Title, presenter, date | University logo |
| 2 | Contents | Presentation flow | Icon list |
| 3 | Summary | 3-4 key numbers | Infographic |
| 4 | Analysis | Data-based analysis | Charts/graphs |
| 5 | Issues | Problem identification | Table/diagram |
| 6 | Solutions | Proposed fixes | Process flow |
| 7 | Action Plan | Timeline & owners | Timeline |

**Gamma Step-by-Step Guide**
1. Visit gamma.app → Click "Generate"
2. Enter topic: Paste AI-generated structure text
3. Set slide count and language
4. Edit content and replace images in result
5. "Export" → Download as PowerPoint
6. Final editing in PowerPoint to match university format`}]},{id:"ppt-design",titleKo:"PPT 시각화와 디자인 완성",titleEn:"PPT Visualization & Design Completion",descKo:"시각자료 생성, 데이터 시각화, 디자인 완성 | 활용 도구: Gamma, Canva, PowerPoint",descEn:"Visual material creation, data visualization, design completion | Tools: Gamma, Canva, PowerPoint",sections:[{titleKo:"PPT 디자인 원칙 & 시각화",titleEn:"PPT Design Principles & Visualization",contentKo:`**4대 디자인 원칙**
- **일관성**: 같은 폰트, 같은 색상 체계 유지
- **간결성**: 슬라이드당 텍스트 50단어 이내
- **시각성**: 아이콘, 차트, 이미지로 메시지 전달
- **가독성**: 충분한 여백, 적절한 폰트 크기 (본문 18pt 이상)

**데이터 시각화 가이드**

| 데이터 유형 | 추천 차트 | 사용 시점 |
|-------------|----------|-----------|
| 비교 | 막대 차트 | 부서별/항목별 수치 비교 |
| 추이 | 꺾은선 차트 | 시간에 따른 변화 |
| 비율 | 원형/도넛 차트 | 전체 대비 비율 |
| 분포 | 히트맵/산점도 | 데이터 분포 패턴 |
| 구성 | 누적 막대 | 항목별 구성 비교 |`,contentEn:`**4 Design Principles**
- **Consistency**: Maintain same fonts and color scheme
- **Simplicity**: Under 50 words per slide
- **Visual**: Convey messages through icons, charts, images
- **Readability**: Sufficient margins, proper font size (body 18pt+)

**Data Visualization Guide**

| Data Type | Recommended Chart | When to Use |
|-----------|------------------|-------------|
| Comparison | Bar chart | Compare values by category |
| Trend | Line chart | Changes over time |
| Ratio | Pie/Donut chart | Proportions of whole |
| Distribution | Heatmap/Scatter | Data distribution patterns |
| Composition | Stacked bar | Compare compositions |`},{titleKo:"Canva 활용 & 디자인 실습",titleEn:"Canva Usage & Design Practice",contentKo:`**Canva PPT 제작 단계별 가이드**
1. canva.com 접속 → "프레젠테이션" 선택
2. 대학 보고서에 적합한 템플릿 검색 (비즈니스, 미니멀)
3. 브랜드 컬러 설정 (대학교 CI 색상 적용)
4. 슬라이드별 텍스트 입력 및 레이아웃 조정
5. Canva AI "Magic Design"으로 디자인 자동 추천
6. 이미지/아이콘 검색 및 삽입
7. "공유" → PPT 형식으로 다운로드

**색상 조합 가이드**

| 용도 | 추천 색상 조합 | 적용 위치 |
|------|-------------|----------|
| 메인 컬러 | 대학교 CI 메인 색상 | 제목, 강조, 헤더 |
| 서브 컬러 | 메인의 밝은 변형 | 배경, 보조 영역 |
| 포인트 컬러 | 보색 또는 대비색 | CTA, 핵심 수치 |
| 텍스트 | 진한 회색 (#333) | 본문 텍스트 |
| 배경 | 흰색 또는 연한 회색 | 슬라이드 배경 |

**시각 자료 생성 프롬프트**
\`\`\`
[역할] 데이터 시각화 전문가
[작업] 아래 데이터를 PPT에 적합한 시각 자료로 표현할 방법을 제안해 주세요.
[데이터] {데이터 내용}
[요청]
1. 추천 차트 유형과 이유
2. X축/Y축 설정 방법
3. 색상 사용 가이드 (강조, 비교)
4. 핵심 메시지를 부각하는 방법
\`\`\``,contentEn:`**Canva PPT Creation Step-by-Step**
1. Visit canva.com → Select "Presentation"
2. Search for suitable templates (business, minimal)
3. Set brand colors (university CI colors)
4. Input text and adjust layout per slide
5. Use Canva AI "Magic Design" for auto-recommendations
6. Search and insert images/icons
7. "Share" → Download as PPT format

**Color Combination Guide**

| Usage | Recommended Colors | Application |
|-------|-------------------|------------|
| Main color | University CI main | Titles, headers |
| Sub color | Light variant of main | Backgrounds, sub areas |
| Point color | Complementary/contrast | CTA, key figures |
| Text | Dark gray (#333) | Body text |
| Background | White or light gray | Slide background |

**Visual Material Generation Prompt**
\`\`\`
[Role] Data visualization expert
[Task] Suggest ways to visualize the following data for PPT.
[Data] {data content}
[Request]
1. Recommended chart type and reasoning
2. X-axis/Y-axis setup
3. Color usage guide (emphasis, comparison)
4. How to highlight key messages
\`\`\``}]},{id:"excel-analysis",titleKo:"Excel 데이터 분석 자동화",titleEn:"Excel Data Analysis Automation",descKo:"AI 활용 수식 생성, 데이터 정리·분석 | 활용 도구: ChatGPT, Claude, Excel",descEn:"AI-powered formula generation, data cleaning & analysis | Tools: ChatGPT, Claude, Excel",sections:[{titleKo:"AI 활용 수식 생성",titleEn:"AI-Powered Formula Generation",contentKo:'AI에 Excel 작업을 설명하면 적합한 수식을 자동으로 생성해 줍니다.\n\n**자주 사용하는 수식 유형**\n\n| 작업 | Excel 수식 | 설명 |\n|------|-----------|------|\n| 조건부 개수 | `=COUNTIF(A:A,"*전남대*")` | 특정 텍스트 포함 행 수 |\n| 조건부 합계 | `=SUMIFS(C:C,B:B,">=100")` | 조건에 맞는 합계 |\n| 날짜 필터 | `=FILTER(A:D,YEAR(D:D)=2026)` | 특정 연도 데이터 |\n| 중복 제거 | `=UNIQUE(A2:A100)` | 고유값 목록 |\n| VLOOKUP | `=VLOOKUP(A2,Sheet2!A:C,3,0)` | 다른 시트에서 값 찾기 |\n\n> ⚠️ `FILTER`·`UNIQUE` 등 스필(spill) 함수는 **Microsoft 365 / Excel 2021 이상**에서만 동작합니다. 관공서·대학의 구버전(2016·2019)에서는 `#NAME?` 오류가 나므로, AI에 "구버전 Excel에서 쓸 수 있는 배열수식으로 알려줘"라고 요청하세요.\n\n**수식 생성 프롬프트 예시**\n```\nExcel에서 다음 작업을 수행하는 수식을 알려주세요:\n1. A열에서 "전남대학교" 텍스트가 포함된 행의 수를 세기\n2. B열의 값이 100 이상인 행만 C열의 합계 구하기\n3. D열의 날짜가 2026년인 데이터만 필터링하기\n각 수식에 대해 설명과 함께 알려주세요.\n```',contentEn:'When you describe Excel tasks to AI, it automatically generates appropriate formulas.\n\n**Frequently Used Formula Types**\n\n| Task | Excel Formula | Description |\n|------|--------------|-------------|\n| Conditional count | `=COUNTIF(A:A,"*text*")` | Count rows containing text |\n| Conditional sum | `=SUMIFS(C:C,B:B,">=100")` | Sum meeting conditions |\n| Date filter | `=FILTER(A:D,YEAR(D:D)=2026)` | Filter by year |\n| Remove duplicates | `=UNIQUE(A2:A100)` | Unique value list |\n| VLOOKUP | `=VLOOKUP(A2,Sheet2!A:C,3,0)` | Find value from another sheet |\n\n> ⚠️ Spill functions like `FILTER` and `UNIQUE` require **Microsoft 365 / Excel 2021+**. Older versions (2016/2019) common in public offices return `#NAME?` — ask the AI for an "array formula that works in older Excel" instead.\n\n**Formula Generation Prompt Example**\n```\nPlease provide Excel formulas for:\n1. Count rows containing "University" in column A\n2. Sum column C where column B >= 100\n3. Filter data where column D dates are in 2026\nInclude explanations for each formula.\n```'},{titleKo:"피벗 테이블 & VBA 매크로",titleEn:"Pivot Tables & VBA Macros",contentKo:`**피벗 테이블 활용 가이드**

| 분석 목표 | 행(Row) | 열(Column) | 값(Value) |
|-----------|---------|-----------|-----------|
| 부서별 평균 근무시간 | 부서 | - | 근무시간(평균) |
| 월별·부서별 지각 현황 | 부서 | 월 | 지각건수(합계) |
| 직원별 연차 사용 현황 | 이름 | - | 연차일수(합계) |

**추천 차트 유형**
- 부서별 평균 근무시간 → **가로 막대 차트**
- 월별 지각률 추이 → **꺾은선 차트**
- 연차 사용 현황 → **원형 차트**

**VBA 매크로 기초**
\`\`\`
Excel VBA로 다음 작업을 자동화하는 매크로를 작성해 주세요:
1. Sheet1의 A열 데이터를 읽기
2. 중복 제거 후 가나다순 정렬
3. Sheet2에 결과 출력
주석 포함하여 초보자도 이해할 수 있도록 작성해 주세요.
\`\`\``,contentEn:`**Pivot Table Usage Guide**

| Analysis Goal | Row | Column | Value |
|--------------|-----|--------|-------|
| Avg work hours by dept | Department | - | Hours(Average) |
| Monthly tardiness by dept | Department | Month | Count(Sum) |
| Leave usage by employee | Name | - | Days(Sum) |

**Recommended Chart Types**
- Avg hours by department → **Horizontal bar chart**
- Monthly tardiness trend → **Line chart**
- Leave usage → **Pie chart**

**VBA Macro Basics**
\`\`\`
Write a VBA macro to:
1. Read data from Sheet1 column A
2. Remove duplicates and sort alphabetically
3. Output results to Sheet2
Include comments for beginners.
\`\`\``}]},{id:"doc-practice",titleKo:"문서행정 종합 실습",titleEn:"Document Administration Practice",descKo:"실제 업무 시나리오 기반 종합 실습 및 결과 공유 | 활용 도구: ChatGPT, Claude, HWP, Excel",descEn:"Scenario-based comprehensive practice & result sharing | Tools: ChatGPT, Claude, HWP, Excel",sections:[{titleKo:"종합 실습 시나리오",titleEn:"Comprehensive Practice Scenario",contentKo:`**실습 시나리오: "2026학년도 2학기 학과 평가 준비"**

다음 4개의 결과물을 AI를 활용하여 순서대로 완성해 보세요.

**과제 1: 공문서 작성**
- 학과 평가 일정 안내 공문(통보문) 작성
- RCF 프레임워크 적용
- 수신처: 각 학과장

**과제 2: 회의록 정리**
- 학과 평가 준비 회의 내용을 AI로 구조화
- 안건, 결정사항, 후속 조치 포함

**과제 3: PPT 보고자료**
- 학과 평가 현황 보고 PPT (5~7슬라이드)
- Gamma 또는 Canva 활용
- 데이터 시각화 1개 이상 포함

**과제 4: Excel 데이터 분석**
- 학과별 평가 점수 데이터 정리
- 피벗 테이블로 학과별/항목별 분석
- 결과 차트 생성`,contentEn:`**Practice Scenario: "2nd Semester Department Evaluation Preparation"**

Complete the following 4 deliverables using AI in order.

**Task 1: Official Document**
- Write a department evaluation schedule notice
- Apply RCF framework
- Recipients: Department heads

**Task 2: Meeting Minutes**
- Structure meeting content using AI
- Include agenda, decisions, follow-up actions

**Task 3: PPT Report**
- Department evaluation status report (5-7 slides)
- Use Gamma or Canva
- Include at least 1 data visualization

**Task 4: Excel Analysis**
- Organize department evaluation score data
- Pivot table analysis by department/item
- Generate result charts`},{titleKo:"실습 체크리스트 & 결과물 양식",titleEn:"Practice Checklist & Output Templates",contentKo:`**실습 완료 체크리스트**

- [ ] 공문서: 문서 형식이 올바르고 수신처가 정확한가?
- [ ] 공문서: AI 생성 문서 검토 체크리스트를 적용했는가?
- [ ] 회의록: 안건별 논의 내용과 결정 사항이 명확한가?
- [ ] 회의록: 후속 조치(담당자, 기한)가 포함되어 있는가?
- [ ] PPT: 4대 디자인 원칙(일관성, 간결성, 시각성, 가독성)을 준수했는가?
- [ ] PPT: 데이터 시각화가 적절한 차트 유형으로 표현되었는가?
- [ ] Excel: 수식이 정확히 작동하는가?
- [ ] Excel: 피벗 테이블 분석이 의미있는 인사이트를 제공하는가?

**결과물 제출 양식**
- 파일명 규칙: \`[이름]_과제번호_제목.확장자\`
- 예시: \`홍길동_01_학과평가안내공문.hwp\`
- 제출: 공유 폴더 또는 LMS 업로드`,contentEn:`**Practice Completion Checklist**

- [ ] Document: Is the format correct and recipients accurate?
- [ ] Document: Was the AI document review checklist applied?
- [ ] Minutes: Are discussions and decisions clear by agenda item?
- [ ] Minutes: Are follow-up actions (responsible person, deadline) included?
- [ ] PPT: Were 4 design principles followed?
- [ ] PPT: Is data visualization using appropriate chart types?
- [ ] Excel: Do formulas work correctly?
- [ ] Excel: Does pivot table analysis provide meaningful insights?

**Submission Format**
- File naming: \`[Name]_TaskNumber_Title.extension\`
- Example: \`HongGilDong_01_DeptEvalNotice.hwp\`
- Submit: Shared folder or LMS upload`}]}],b=[{id:"hr-ai",titleKo:"인사·근태 관리 AI 활용",titleEn:"HR & Attendance AI Application",descKo:"AI 기반 인사 업무 효율화, 근태 데이터 분석 | 활용 도구: ChatGPT, Claude, Excel",descEn:"AI-based HR efficiency, attendance data analysis | Tools: ChatGPT, Claude, Excel",sections:[{titleKo:"인사 업무 AI 활용 영역",titleEn:"AI Applications in HR",contentKo:`| 업무 영역 | AI 활용 방안 | 예상 효과 |
|-----------|-------------|-----------|
| **채용** | 공고 작성, 면접 질문 생성, 평가 기준 수립 | 작성 시간 70% 단축 |
| **인사발령** | 발령 문서 자동 생성, 표준화 | 오류 감소, 일관성 확보 |
| **근태 관리** | 데이터 분석, 이상 탐지, 보고서 생성 | 관리 효율화 |
| **교육** | 교육 계획 수립, 평가 분석 | 맞춤형 교육 설계 |
| **복리후생** | 제도 비교 분석, 만족도 조사 설계 | 데이터 기반 의사결정 |

**채용공고 작성 프롬프트**
\`\`\`
전남대학교 행정직원 채용공고를 작성해 주세요.
[채용 정보]
- 직종: 행정직 (일반행정), 인원: 2명
- 근무조건: 정규직, 주 40시간
- 자격요건: 학사 이상, 행정 경력 2년 이상 우대
[포함 사항]
기관 소개, 채용 직종, 주요 업무, 자격 요건, 근무 조건, 전형 절차, 제출 서류
[어조] 공식적이되 지원자에게 호감을 줄 수 있는 문체
\`\`\``,contentEn:`| Area | AI Application | Expected Effect |
|------|---------------|-----------------|
| **Recruitment** | Job posts, interview questions | 70% time reduction |
| **Appointments** | Auto-generate appointment docs | Error reduction |
| **Attendance** | Data analysis, anomaly detection | Management efficiency |
| **Training** | Plan creation, evaluation analysis | Customized training |
| **Benefits** | Comparative analysis, surveys | Data-driven decisions |

**Job Posting Prompt**
\`\`\`
Write a job posting for university administrative staff.
[Details]
- Position: Administrative (General), 2 positions
- Conditions: Full-time, 40 hours/week
- Qualifications: Bachelor's+, 2+ years preferred
[Include]
Organization intro, position, duties, qualifications, conditions, process, documents
[Tone] Official yet appealing to applicants
\`\`\``},{titleKo:"면접 질문 & 평가 기준 생성",titleEn:"Interview Questions & Evaluation Criteria",contentKo:`**면접 질문 생성 프롬프트**
\`\`\`
[역할] 대학교 행정직 채용 면접관
[작업] 행정직원 채용 면접 질문을 생성해 주세요.
[조건]
- 직무: 일반 행정 (교무처)
- 질문 수: 10개
- 유형: 직무역량 5개, 조직적합성 3개, 상황대처 2개
[형식] 질문 + 평가 포인트 + 우수 답변 예시
\`\`\`

**AI 생성 면접 질문 예시**

| 유형 | 질문 | 평가 포인트 |
|------|------|-----------|
| 직무역량 | 공문서 작성 경험을 설명해 주세요 | 문서 작성 능력, 표준 준수 |
| 직무역량 | Excel 데이터 분석 경험이 있으신가요? | 데이터 활용 역량 |
| 조직적합성 | 팀 내 갈등 해결 경험을 공유해 주세요 | 협업 능력, 소통 |
| 상황대처 | 마감이 겹칠 때 우선순위를 어떻게 정하나요? | 업무 관리, 판단력 |

**근태 관리 AI 분석 프롬프트**
\`\`\`
[역할] 인사 데이터 분석 전문가
[작업] 다음 근태 데이터의 이상 패턴을 분석해 주세요.
[데이터 설명]
- 총 직원: {인원} 명, 기간: {기간}
- 포함 정보: 출근시간, 퇴근시간, 부서, 직급
[분석 요청]
1. 지각 빈도가 높은 부서/직원 파악
2. 초과근무 패턴 분석
3. 요일별/시간대별 출근 분포
4. 개선 권고사항 제시
\`\`\``,contentEn:`**Interview Question Generation Prompt**
\`\`\`
[Role] University administrative hiring interviewer
[Task] Generate interview questions for administrative staff.
[Conditions]
- Position: General Administration (Academic Affairs)
- Questions: 10 total
- Types: Job competency 5, Organizational fit 3, Situational 2
[Format] Question + Evaluation points + Good answer examples
\`\`\`

**AI-Generated Interview Question Examples**

| Type | Question | Evaluation Points |
|------|----------|------------------|
| Competency | Describe your document writing experience | Writing ability, standards |
| Competency | Do you have Excel data analysis experience? | Data utilization |
| Org fit | Share a team conflict resolution experience | Collaboration, communication |
| Situational | How do you prioritize when deadlines overlap? | Task management, judgment |

**Attendance Management AI Analysis Prompt**
\`\`\`
[Role] HR data analysis expert
[Task] Analyze anomaly patterns in the following attendance data.
[Data Description]
- Total employees: {count}, Period: {period}
- Includes: Clock-in, clock-out, department, position
[Analysis Request]
1. Identify high-tardiness departments/employees
2. Overtime pattern analysis
3. Clock-in distribution by day/time
4. Improvement recommendations
\`\`\``}]},{id:"hr-documents",titleKo:"인사 관련 문서 작성",titleEn:"HR Document Creation",descKo:"채용공고, 인사발령, 근로계약서 AI 작성 | 활용 도구: ChatGPT, Claude, HWP",descEn:"Job postings, personnel appointments, employment contracts with AI | Tools: ChatGPT, Claude, HWP",sections:[{titleKo:"인사 문서 작성 & 근로계약서",titleEn:"HR Documents & Employment Contracts",contentKo:`**인사발령 통보문 프롬프트**
\`\`\`
다음 인사 이동 정보로 인사발령 공문을 작성해 주세요:
[발령 정보]
1. 홍길동: 교무처 학사팀 → 기획처 기획팀 (전보)
2. 김영희: 입학처 입학팀 과원 → 팀장 (승진)
3. 이철수: 신규 채용 → 총무처 시설팀 (임용)
[형식] 공문서 인사발령 통보문, 표 형식 포함
[발령일] 2026년 9월 1일
\`\`\`

**근로계약서 작성 시 주의사항**
> AI가 생성한 법률 문서는 반드시 법무 검토를 거쳐야 합니다.

- 근로기준법에 부합하는지 확인
- 계약 기간, 급여, 근무시간 등 필수 조항 누락 여부 확인
- 기관 내부 규정과의 일치 여부 확인
- 최종본은 반드시 법무팀 또는 인사 담당자 검수`,contentEn:`**Personnel Appointment Notice Prompt**
\`\`\`
Write a personnel appointment notice for:
[Appointment Info]
1. Hong: Academic Affairs → Planning (Transfer)
2. Kim: Admissions Staff → Team Lead (Promotion)
3. Lee: New Hire → General Affairs (Appointment)
[Format] Official appointment notice with table
[Effective Date] September 1, 2026
\`\`\`

**Employment Contract Precautions**
> AI-generated legal documents MUST undergo legal review.

- Verify compliance with labor laws
- Check essential clauses (period, salary, hours)
- Ensure consistency with internal regulations
- Final version must be reviewed by legal team`},{titleKo:"인사 문서 유형별 AI 작성 실습",titleEn:"HR Document Type AI Writing Practice",contentKo:`**인사발령 유형별 프롬프트**

| 발령 유형 | 프롬프트 핵심 | 포함 사항 |
|-----------|------------|----------|
| 전보 | 기존 부서 → 신규 부서 | 발령일, 사유 |
| 승진 | 현 직급 → 승진 직급 | 승진 근거, 발령일 |
| 신규임용 | 채용 결과 → 임용 | 직급, 배치 부서 |
| 파견 | 소속 기관 → 파견 기관 | 파견 기간, 업무 |

**직무기술서 AI 작성 프롬프트**
\`\`\`
[역할] 인사관리 전문가
[작업] 다음 직무의 직무기술서를 작성해 주세요.
[직무 정보]
- 직종: {직종명}
- 소속: {부서명}
- 직급: {직급}
[포함 사항]
1. 직무 목적 (1~2문장)
2. 주요 업무 (5~7항목)
3. 필요 역량 (기술적·행동적)
4. 자격 요건 (학력, 경력, 자격증)
5. 근무 조건 (근무시간, 복리후생)
\`\`\`

**재직증명서·경력증명서 발급 자동화**
- 신청 양식 표준화 → AI로 검토 포인트 자동 체크
- 발급 문서 초안을 AI가 자동 생성
- 담당자는 사실 확인 후 직인 날인`,contentEn:`**Personnel Appointment Type Prompts**

| Type | Prompt Key | Include |
|------|-----------|---------|
| Transfer | Current → New department | Effective date, reason |
| Promotion | Current → New position | Basis, effective date |
| New hire | Recruitment result → Appointment | Grade, department |
| Dispatch | Home org → Host org | Period, duties |

**Job Description AI Writing Prompt**
\`\`\`
[Role] HR management expert
[Task] Write a job description for the following position.
[Job Info]
- Position: {position name}
- Department: {department}
- Grade: {grade}
[Include]
1. Job purpose (1-2 sentences)
2. Key responsibilities (5-7 items)
3. Required competencies (technical & behavioral)
4. Qualifications (education, experience, certifications)
5. Working conditions (hours, benefits)
\`\`\`

**Certificate of Employment Automation**
- Standardize application forms → AI auto-checks review points
- AI generates draft issuance documents
- Staff verifies facts and applies official seal`}]},{id:"attendance-excel",titleKo:"근태 데이터 Excel 분석",titleEn:"Attendance Data Excel Analysis",descKo:"출퇴근 데이터 정리, 통계 분석, 보고서 생성 | 활용 도구: ChatGPT, Claude, Excel",descEn:"Attendance data organization, statistics, report generation | Tools: ChatGPT, Claude, Excel",sections:[{titleKo:"출퇴근 데이터 정리와 분석",titleEn:"Attendance Data Organization & Analysis",contentKo:`**출퇴근 데이터 정리 프롬프트**
\`\`\`
다음 출퇴근 기록 데이터를 Excel에서 분석할 수 있도록 정리해 주세요:
[데이터 형식]
- 열 구성: 사번, 이름, 부서, 날짜, 출근시간, 퇴근시간
- 계산 항목: 근무시간, 지각 여부, 초과근무 시간
[요청]
1. 데이터 정리용 Excel 수식 제안
2. 지각 판단 기준: 09:00 이후 출근
3. 초과근무 기준: 8시간 초과 근무
\`\`\`

**부서별·월별 통계 수식**

| 분석 항목 | Excel 수식 | 설명 |
|-----------|-----------|------|
| 부서별 평균 근무시간 | \`=AVERAGEIF(C:C,"기획처",G:G)\` | 특정 부서 평균 |
| 월별 지각 건수 | \`=COUNTIFS(D:D,">="&DATE(2026,9,1),H:H,"지각")\` | 월별 지각 집계 |
| 개인별 초과근무 합계 | \`=SUMIFS(I:I,B:B,"홍길동")\` | 개인 초과근무 합산 |
| 부서별 출근율 | \`=COUNTIFS(C:C,"교무처",H:H,"<>결근")/COUNTIF(C:C,"교무처")\` | 출근 비율 |`,contentEn:`**Attendance Data Organization Prompt**
\`\`\`
Please organize the following attendance data for Excel analysis:
[Data Format]
- Columns: Employee ID, Name, Department, Date, Clock-in, Clock-out
- Calculated fields: Work hours, Late status, Overtime hours
[Request]
1. Suggest Excel formulas for data organization
2. Late criteria: Clock-in after 09:00
3. Overtime criteria: Working more than 8 hours
\`\`\`

**Departmental/Monthly Statistics Formulas**

| Analysis Item | Excel Formula | Description |
|---------------|--------------|-------------|
| Avg hours by dept | \`=AVERAGEIF(C:C,"Planning",G:G)\` | Specific dept average |
| Monthly late count | \`=COUNTIFS(D:D,">="&DATE(2026,9,1),H:H,"Late")\` | Monthly late tally |
| Individual overtime | \`=SUMIFS(I:I,B:B,"Hong")\` | Individual overtime total |
| Dept attendance rate | \`=COUNTIFS(C:C,"Academic",H:H,"<>Absent")/COUNTIF(C:C,"Academic")\` | Attendance ratio |`},{titleKo:"피벗 테이블과 근태 차트",titleEn:"Pivot Tables & Attendance Charts",contentKo:`**피벗 테이블 설정 가이드**

| 분석 목표 | 행(Row) | 열(Column) | 값(Value) |
|-----------|---------|-----------|-----------|
| 부서별 평균 근무시간 | 부서 | - | 근무시간(평균) |
| 월별·부서별 지각 현황 | 부서 | 월 | 지각건수(합계) |
| 직원별 초과근무 현황 | 이름 | 월 | 초과근무시간(합계) |
| 요일별 지각 패턴 | 요일 | - | 지각건수(합계) |

**근태 분석 차트 추천**

| 분석 목적 | 추천 차트 | 활용 팁 |
|-----------|----------|---------|
| 부서별 근무시간 비교 | 가로 막대 차트 | 기준선(8시간) 추가 |
| 월별 지각률 추이 | 꺾은선 차트 | 목표선과 함께 표시 |
| 요일별 지각 패턴 | 세로 막대 차트 | 요일 순서대로 배치 |
| 부서별 결근율 비율 | 원형 차트 | 전체 대비 비율 표시 |
| 시간대별 출근 분포 | 히스토그램 | 30분 단위 구간 설정 |`,contentEn:`**Pivot Table Setup Guide**

| Analysis Goal | Row | Column | Value |
|--------------|-----|--------|-------|
| Avg hours by dept | Department | - | Hours(Average) |
| Monthly tardiness | Department | Month | Late count(Sum) |
| Overtime by employee | Name | Month | Overtime hours(Sum) |
| Tardiness by day | Day of week | - | Late count(Sum) |

**Attendance Analysis Chart Recommendations**

| Analysis Purpose | Recommended Chart | Tips |
|-----------------|-------------------|------|
| Hours by dept | Horizontal bar | Add baseline (8h) |
| Monthly late trend | Line chart | Show with target line |
| Late pattern by day | Column chart | Arrange by day order |
| Absence rate by dept | Pie chart | Show whole ratio |
| Clock-in distribution | Histogram | 30-min intervals |`}]},{id:"hr-report",titleKo:"인사행정 보고자료 제작",titleEn:"HR Report Presentation",descKo:"인사 현황 PPT, 통계 시각화, 경영진 보고자료 | 활용 도구: ChatGPT, Gamma, PowerPoint",descEn:"HR status PPT, statistics visualization, executive reports | Tools: ChatGPT, Gamma, PowerPoint",sections:[{titleKo:"인사 데이터 시각화 & 스토리텔링",titleEn:"HR Data Visualization & Storytelling",contentKo:`**인사 데이터 시각화 매핑**

| 데이터 | 추천 차트 | 핵심 포인트 |
|--------|----------|------------|
| 인력 현황 | 인포그래픽 숫자 | 전체 인원, 신규, 퇴직, 순증감 |
| 부서별 인원 | 트리맵/막대 | 비율과 규모 동시 표현 |
| 채용 달성률 | 도넛 차트 | 목표 대비 달성 % |
| 이직 추이 | 꺾은선 차트 | 월별/분기별 트렌드 |
| 근태 현황 | 히트맵/막대 | 부서별 비교 |

**보고서 스토리라인 구조**
1. **현황 제시**: 숫자로 현재 상태 요약
2. **트렌드 분석**: 시간에 따른 변화 추이
3. **원인 진단**: 주요 이슈의 원인 분석
4. **개선 방안**: 데이터 기반 해결책 제시
5. **실행 계획**: 구체적 액션 아이템과 일정

**효과적인 데이터 발표 팁**
- "숫자 → 의미 → 시사점" 순서로 설명
- 비교 기준 명시 (전년 대비, 목표 대비)
- 핵심 수치는 크게, 보조 수치는 작게
- 긍정적 결과는 녹색, 주의 필요는 빨간색`,contentEn:`**HR Data Visualization Mapping**

| Data | Chart Type | Key Points |
|------|-----------|------------|
| Workforce | Infographic numbers | Total, new, resigned, net change |
| By department | Treemap/Bar | Ratio and scale |
| Hiring rate | Donut chart | Target vs actual % |
| Turnover trend | Line chart | Monthly/quarterly |
| Attendance | Heatmap/Bar | Department comparison |

**Report Storyline Structure**
1. **Present status**: Summarize with numbers
2. **Trend analysis**: Changes over time
3. **Root cause**: Analyze key issues
4. **Solutions**: Data-driven proposals
5. **Action plan**: Specific items and timeline

**Effective Data Presentation Tips**
- Explain: "Number → Meaning → Implications"
- Specify comparison basis (vs last year, vs target)
- Key figures large, supplementary figures small
- Positive results in green, caution in red`},{titleKo:"경영진 보고자료 PPT 구조",titleEn:"Executive Report PPT Structure",contentKo:`**인사 현황 보고 PPT 구조 (7슬라이드)**

| 슬라이드 | 제목 | 포함 내용 | 시각 요소 |
|----------|------|---------|----------|
| 1 | 표지 | 보고 제목, 부서, 일자 | 대학 로고 |
| 2 | 인력 현황 | 전체/부서별 인원, 증감 | 인포그래픽 숫자 |
| 3 | 채용 현황 | 채용 계획 대비 달성률 | 도넛 차트 |
| 4 | 근태 분석 | 부서별 출근율, 지각률 | 막대+꺾은선 |
| 5 | 이직 분석 | 이직률 추이, 사유 분석 | 꺾은선+원형 |
| 6 | 핵심 이슈 | 개선 필요 사항 3가지 | 아이콘 리스트 |
| 7 | 개선 계획 | 실행 일정, 담당자 | 타임라인 |

**경영진 보고 PPT 프롬프트**
\`\`\`
[역할] 인사 데이터 분석 및 보고서 작성 전문가
[작업] 다음 인사 데이터를 바탕으로 경영진 보고용 PPT 콘텐츠를 작성해 주세요.
[데이터]
- 총 직원: {인원}명
- 신규 채용: {채용}명 / 퇴직: {퇴직}명
- 평균 출근율: {출근율}%
- 평균 초과근무: 월 {초과근무}시간
[요청]
1. 슬라이드별 제목과 핵심 메시지
2. 각 슬라이드에 적합한 차트 유형 추천
3. 주요 수치 강조 포인트
4. 발표자 노트 (슬라이드당 30초)
\`\`\``,contentEn:`**HR Status Report PPT Structure (7 Slides)**

| Slide | Title | Content | Visual |
|-------|-------|---------|--------|
| 1 | Cover | Report title, department, date | University logo |
| 2 | Workforce | Total/departmental headcount, changes | Infographic numbers |
| 3 | Recruitment | Hiring plan vs achievement | Donut chart |
| 4 | Attendance | Dept attendance rate, tardiness | Bar+line combo |
| 5 | Turnover | Turnover trend, reason analysis | Line+pie combo |
| 6 | Key Issues | Top 3 improvement needs | Icon list |
| 7 | Action Plan | Execution timeline, owners | Timeline |

**Executive Report PPT Prompt**
\`\`\`
[Role] HR data analysis and report writing expert
[Task] Create executive-level PPT content based on the following HR data.
[Data]
- Total employees: {count}
- New hires: {hires} / Departures: {departures}
- Average attendance rate: {rate}%
- Average overtime: {overtime} hours/month
[Request]
1. Slide titles and key messages
2. Recommended chart types per slide
3. Key figure emphasis points
4. Speaker notes (30 seconds per slide)
\`\`\``}]},{id:"work-template",titleKo:"업무 템플릿 설계",titleEn:"Work Template Design",descKo:"AI 활용 반복 업무 템플릿, 프롬프트 라이브러리 구축 | 활용 도구: ChatGPT, Claude",descEn:"AI-powered work templates, prompt library building | Tools: ChatGPT, Claude",sections:[{titleKo:"프롬프트 라이브러리 & 가이드라인",titleEn:"Prompt Library & Guidelines",contentKo:`**업무 템플릿 설계 원칙**
1. **재사용성**: 다양한 상황에 적용 가능하도록 변수({변수}) 활용
2. **커스터마이징**: 변수 부분만 수정하면 완성
3. **표준화**: 일관된 형식과 품질 보장
4. **공유 가능**: 팀원과 쉽게 공유

**AI 활용 가이드라인**

| 항목 | 가이드라인 |
|------|-----------|
| 개인정보 | 실명, 주민번호 등 개인정보 입력 금지 |
| 기밀정보 | 내부 기밀 사항 AI 입력 제한 |
| 검증 | AI 생성물은 반드시 사실 확인 후 사용 |
| 출처 | AI 활용 사실을 필요시 명시 |
| 저장 | 유용한 프롬프트는 공유 라이브러리에 등록 |`,contentEn:`**Template Design Principles**
1. **Reusability**: Use variables ({variable}) for different situations
2. **Customization**: Just modify variable parts to complete
3. **Standardization**: Ensure consistent format and quality
4. **Shareable**: Easy to share with team members

**AI Usage Guidelines**

| Item | Guideline |
|------|-----------|
| Personal info | Never input names, SSN, etc. |
| Confidential | Restrict inputting internal secrets |
| Verification | Always fact-check AI outputs |
| Attribution | Disclose AI usage when needed |
| Storage | Register useful prompts in shared library |`},{titleKo:"업무별 프롬프트 템플릿 모음",titleEn:"Work-Specific Prompt Template Collection",contentKo:`**행정 업무 프롬프트 라이브러리**

| 업무 | 템플릿 핵심 | 변수 |
|------|-----------|------|
| 공문서 작성 | [역할]+[문서유형]+[수신처]+[형식] | {기관명}, {부서}, {목적} |
| 회의록 정리 | [역할]+[형식]+[원본내용] | {회의일시}, {참석자} |
| 보고서 작성 | [역할]+[보고서유형]+[포함사항] | {주제}, {기간}, {분량} |
| 채용공고 | [역할]+[채용정보]+[포함사항] | {직종}, {인원}, {조건} |
| 데이터분석 | [역할]+[데이터설명]+[분석요청] | {데이터}, {분석항목} |

**템플릿 관리 시스템 구축**
1. **폴더 구조**: 업무 영역별 폴더 (문서행정, 인사행정, 데이터분석)
2. **파일명 규칙**: \`[업무영역]_[작업유형]_v[버전].txt\`
3. **버전 관리**: 개선할 때마다 버전 번호 증가
4. **공유 방법**: 팀 공유 드라이브 또는 노션/위키

**프롬프트 개선 기록 양식**
\`\`\`
[프롬프트 ID] DOC-001
[작업] 기안문 작성
[버전] v3 (2026-09-15)
[변경 내용] 결재 라인 자동 포함 조건 추가
[개선 효과] 후속 수정 50% 감소
[작성자] 홍길동 (교무처)
\`\`\``,contentEn:`**Administrative Work Prompt Library**

| Task | Template Core | Variables |
|------|-------------|-----------|
| Documents | [Role]+[DocType]+[Recipient]+[Format] | {org}, {dept}, {purpose} |
| Minutes | [Role]+[Format]+[SourceContent] | {date}, {attendees} |
| Reports | [Role]+[ReportType]+[IncludeItems] | {topic}, {period}, {length} |
| Job Posts | [Role]+[HiringInfo]+[IncludeItems] | {position}, {count}, {conditions} |
| Analysis | [Role]+[DataDesc]+[AnalysisReq] | {data}, {analysis items} |

**Template Management System**
1. **Folder structure**: By work area (Documents, HR, Data Analysis)
2. **File naming**: \`[WorkArea]_[TaskType]_v[Version].txt\`
3. **Version control**: Increment version with each improvement
4. **Sharing**: Team shared drive or Notion/Wiki

**Prompt Improvement Record Template**
\`\`\`
[Prompt ID] DOC-001
[Task] Proposal document writing
[Version] v3 (2026-09-15)
[Changes] Added auto-include approval chain condition
[Effect] 50% reduction in follow-up edits
[Author] Hong (Academic Affairs)
\`\`\``}]},{id:"work-automation",titleKo:"업무 자동화 워크플로우",titleEn:"Work Automation Workflow",descKo:"반복 업무 자동화 설계, AI 연계 워크플로우 | 활용 도구: ChatGPT, Claude, Excel",descEn:"Repetitive task automation design, AI-integrated workflow | Tools: ChatGPT, Claude, Excel",sections:[{titleKo:"워크플로우 설계 & ROI",titleEn:"Workflow Design & ROI",contentKo:`**자동화 대상 업무 선정 기준**

| 기준 | 설명 |
|------|------|
| 반복 빈도 | 주 1회 이상 반복되는 업무 |
| 규칙성 | 정해진 절차와 규칙이 있는 업무 |
| 시간 소요 | 1건당 30분 이상 소요되는 업무 |
| 오류 가능성 | 수작업 시 오류가 빈번한 업무 |

**워크플로우 예시: 월말 근태 보고 자동화**

| 단계 | 기존 (수작업) | AI 활용 (자동화) |
|------|-------------|---------------|
| 데이터 다운로드 | 10분 | 10분 |
| 데이터 정리 | 30분 | AI 분석 요청 5분 |
| 통계 계산 | 20분 | (AI가 자동 처리) |
| 보고서 작성 | 20분 | AI 생성 검토 15분 |
| PPT 업데이트 | 30분 | AI 생성 검토 10분 |
| 상급자 검토 | 20분 | 최종 확인 10분 |
| **합계** | **2시간 30분** | **50분 (67% 단축)** |

**ROI 계산**
\`\`\`
월간 절감 시간 = (기존 - 자동화) x 월 반복 횟수
연간 절감 시간 = 월간 절감 x 12
인건비 절감 = 연간 절감 시간 x 시간당 인건비

예시: (2.5h - 0.8h) x 4회 x 12개월 x 30,000원 = 연간 2,448,000원 절감
\`\`\``,contentEn:`**Automation Target Selection Criteria**

| Criterion | Description |
|-----------|-------------|
| Frequency | Tasks repeated weekly or more |
| Regularity | Tasks with defined procedures |
| Time required | Tasks taking 30+ minutes each |
| Error risk | Tasks prone to manual errors |

**Workflow Example: Monthly Attendance Report**

| Step | Manual | AI-Automated |
|------|--------|-------------|
| Data download | 10min | 10min |
| Data cleaning | 30min | AI request 5min |
| Statistics | 20min | (Auto-processed) |
| Report writing | 20min | AI review 15min |
| PPT update | 30min | AI review 10min |
| Manager review | 20min | Final check 10min |
| **Total** | **2h 30min** | **50min (67% reduction)** |

**ROI Calculation**
\`\`\`
Monthly savings = (Manual - Automated) x Monthly frequency
Annual savings = Monthly savings x 12
Cost savings = Annual hours saved x Hourly rate

Example: (2.5h - 0.8h) x 4 x 12 x 30,000 KRW = 2,448,000 KRW/year
\`\`\``},{titleKo:"자동화 시나리오 실습",titleEn:"Automation Scenario Practice",contentKo:`**자동화 설계 실습: 나의 반복 업무 분석**

| 단계 | 작업 | 산출물 |
|------|------|--------|
| 1 | 반복 업무 3개 목록 작성 | 업무 목록표 |
| 2 | 각 업무의 현재 소요 시간 측정 | 시간 기록표 |
| 3 | AI 활용 가능 단계 식별 | 자동화 가능 영역 |
| 4 | 자동화 워크플로우 설계 | 프로세스 흐름도 |
| 5 | ROI 계산 | 비용 절감 예상표 |

**자동화 제안서 작성 프롬프트**
\`\`\`
[역할] 업무 프로세스 개선 컨설턴트
[작업] 다음 반복 업무의 AI 자동화 제안서를 작성해 주세요.
[업무 정보]
- 업무명: {업무명}
- 현재 소요 시간: {시간}
- 반복 빈도: {빈도}
- 현재 절차: {단계별 설명}
[포함 사항]
1. 현황 분석 (As-Is)
2. 개선 방안 (To-Be): AI 활용 단계 명시
3. 기대 효과: 시간 절감, 품질 향상
4. ROI 계산
5. 실행 계획: 단계별 일정
\`\`\`

**AI 연계 워크플로우 도구 비교**

| 도구 | 특징 | 적합 업무 |
|------|------|----------|
| ChatGPT | 범용 텍스트 생성 | 문서 작성, 번역, 요약 |
| Claude | 긴 문서 분석 | 보고서 검토, 대량 데이터 |
| Excel + AI | 수식·분석 자동화 | 데이터 정리, 통계 |
| Gamma/Canva | PPT 자동 생성 | 보고자료, 발표자료 |
| Perplexity | AI 검색 | 정보 수집, 벤치마킹 |`,contentEn:`**Automation Design Practice: Analyze My Repetitive Tasks**

| Step | Task | Deliverable |
|------|------|------------|
| 1 | List 3 repetitive tasks | Task list |
| 2 | Measure current time per task | Time log |
| 3 | Identify AI-applicable steps | Automation opportunities |
| 4 | Design automation workflow | Process flow diagram |
| 5 | Calculate ROI | Cost savings projection |

**Automation Proposal Writing Prompt**
\`\`\`
[Role] Business process improvement consultant
[Task] Write an AI automation proposal for the following task.
[Task Info]
- Task name: {task name}
- Current time required: {time}
- Frequency: {frequency}
- Current procedure: {step-by-step description}
[Include]
1. Current state analysis (As-Is)
2. Improvement plan (To-Be): Specify AI steps
3. Expected benefits: Time savings, quality improvement
4. ROI calculation
5. Implementation plan: Phased timeline
\`\`\`

**AI-Integrated Workflow Tool Comparison**

| Tool | Features | Best For |
|------|----------|----------|
| ChatGPT | General text generation | Documents, translation, summary |
| Claude | Long document analysis | Report review, large data |
| Excel + AI | Formula/analysis automation | Data cleanup, statistics |
| Gamma/Canva | Auto PPT generation | Reports, presentations |
| Perplexity | AI search | Info gathering, benchmarking |`}]},{id:"hr-practice",titleKo:"인사행정 종합 실습",titleEn:"HR Administration Practice",descKo:"인사행정 시나리오 종합 실습, 포트폴리오 완성 | 활용 도구: ChatGPT, Claude, HWP, Excel, PPT",descEn:"HR scenario comprehensive practice, portfolio completion | Tools: ChatGPT, Claude, HWP, Excel, PPT",sections:[{titleKo:"인사행정 종합 실습 시나리오",titleEn:"HR Administration Practice Scenario",contentKo:`**실습 시나리오: "2026년 하반기 인사행정 업무 자동화"**

다음 5개의 결과물을 AI를 활용하여 순서대로 완성해 보세요.

**과제 1: 채용공고 작성**
- 신규 행정직원 채용공고 작성 (RCF 프레임워크 적용)
- 직무기술서 포함
- 면접 질문 5개 생성

**과제 2: 인사발령 문서**
- 부서 이동/승진/신규임용 인사발령 통보문 작성
- 표 형식 포함, 공문서 규격 준수

**과제 3: 근태 데이터 분석**
- 제공된 근태 데이터를 Excel로 분석
- 부서별 평균 근무시간, 지각률, 초과근무 통계
- 피벗 테이블과 차트 생성

**과제 4: 인사 보고자료 PPT**
- 분석 결과를 PPT 보고자료로 제작 (5~7슬라이드)
- 데이터 시각화 2개 이상 포함
- 개선 방안과 실행 계획 포함

**과제 5: 업무 자동화 제안서**
- 반복 업무 1개를 선정하여 자동화 워크플로우 설계
- ROI 계산 포함`,contentEn:`**Practice Scenario: "2026 H2 HR Administration Automation"**

Complete the following 5 deliverables using AI in order.

**Task 1: Job Posting**
- Write a new staff recruitment posting (RCF framework)
- Include job description
- Generate 5 interview questions

**Task 2: Personnel Appointment**
- Write transfer/promotion/appointment notice
- Include table format, official document standards

**Task 3: Attendance Analysis**
- Analyze provided attendance data in Excel
- Department averages, tardiness rate, overtime statistics
- Create pivot tables and charts

**Task 4: HR Report PPT**
- Create PPT report from analysis (5-7 slides)
- Include 2+ data visualizations
- Include improvement plans and action items

**Task 5: Automation Proposal**
- Select 1 repetitive task for automation workflow
- Include ROI calculation`},{titleKo:"포트폴리오 완성 가이드",titleEn:"Portfolio Completion Guide",contentKo:`**포트폴리오 구성 요소**

| 항목 | 내용 | 파일 형식 |
|------|------|----------|
| 채용공고 | AI 작성 채용공고 + 면접 질문 | HWP/Word |
| 인사발령문 | AI 작성 인사발령 통보문 | HWP/Word |
| 근태 분석 | Excel 분석 결과 + 차트 | Excel |
| 보고자료 | PPT 프레젠테이션 | PPT |
| 자동화 제안 | 워크플로우 + ROI 계산 | Word/PPT |

**제출 체크리스트**
- [ ] 모든 문서에 AI 프롬프트 기록이 포함되어 있는가?
- [ ] AI 생성물 검토 체크리스트를 적용했는가?
- [ ] Excel 수식이 정상 작동하는가?
- [ ] PPT 디자인 원칙을 준수했는가?
- [ ] 파일명 규칙을 따랐는가?`,contentEn:`**Portfolio Components**

| Item | Content | File Format |
|------|---------|-------------|
| Job Posting | AI-written posting + questions | HWP/Word |
| Appointment | AI-written appointment notice | HWP/Word |
| Attendance | Excel analysis + charts | Excel |
| Report | PPT presentation | PPT |
| Automation | Workflow + ROI calculation | Word/PPT |

**Submission Checklist**
- [ ] Do all documents include AI prompt records?
- [ ] Was the AI output review checklist applied?
- [ ] Do Excel formulas work correctly?
- [ ] Were PPT design principles followed?
- [ ] Were file naming rules followed?`}]},{id:"results-sharing",titleKo:"결과 공유 및 마무리",titleEn:"Results Sharing & Wrap-up",descKo:"실습 결과 발표, 피드백, 향후 활용 계획",descEn:"Practice result presentations, feedback, future application plans",sections:[{titleKo:"실습 결과 발표 가이드",titleEn:"Practice Results Presentation Guide",contentKo:`**발표 구조 (5분 기준)**
1. **도입** (30초): 본인 소속/이름, 선택 업무 소개
2. **과정** (1분): AI 활용 과정, 사용한 도구와 프롬프트
3. **결과물** (2분): 주요 결과물 시연 (공문서, PPT, Excel 등)
4. **효과** (1분): 기존 방식 대비 개선 효과 (시간 절감, 품질 향상)
5. **마무리** (30초): 향후 적용 계획

**발표 팁**
- 핵심 결과물을 화면에 보여주면서 설명
- "기존 방식으로 2시간 → AI 활용 30분" 같은 비교 강조
- 실패 사례도 공유 (어떤 프롬프트가 잘 안 됐는지)
- 동료의 발표에서 배운 점 메모`,contentEn:`**Presentation Structure (5 minutes)**
1. **Introduction** (30s): Department/name, chosen task
2. **Process** (1min): AI usage process, tools and prompts used
3. **Results** (2min): Key deliverables demo (documents, PPT, Excel)
4. **Impact** (1min): Improvement vs traditional (time saved, quality)
5. **Wrap-up** (30s): Future application plans

**Presentation Tips**
- Show key deliverables on screen while explaining
- Emphasize comparisons like "2 hours traditional → 30 min with AI"
- Share failures too (which prompts didn't work well)
- Take notes on colleagues' presentations`},{titleKo:"AI 활용 향후 계획과 학습 체크리스트",titleEn:"Future AI Plans & Learning Checklist",contentKo:`**AI 활용 향후 계획 수립**
\`\`\`
[향후 계획 작성 가이드]
1. 즉시 적용 가능한 업무 (1주 이내)
   - 예: 주간 업무보고서 AI 초안 작성
2. 단기 적용 업무 (1개월 이내)
   - 예: 부서 회의록 AI 정리 체계 구축
3. 중기 적용 업무 (3개월 이내)
   - 예: 분기 보고자료 자동화 워크플로우
\`\`\`

**2일 교육 학습 체크리스트**

- [ ] 생성형 AI의 개념과 주요 서비스 차이를 설명할 수 있다
- [ ] RCF 프레임워크로 프롬프트를 작성할 수 있다
- [ ] AI를 활용해 공문서 초안을 작성할 수 있다
- [ ] AI 생성 문서의 검토 포인트를 알고 있다
- [ ] AI 도구(Gamma, Canva)로 PPT를 제작할 수 있다
- [ ] Excel 수식을 AI에 요청하여 생성할 수 있다
- [ ] 인사 관련 문서를 AI로 작성할 수 있다
- [ ] 근태 데이터를 Excel로 분석할 수 있다
- [ ] 데이터를 시각화하여 보고자료를 만들 수 있다
- [ ] 반복 업무 자동화 워크플로우를 설계할 수 있다
- [ ] AI 활용 시 개인정보 보호 원칙을 이해하고 있다
- [ ] 업무에 AI를 적용할 구체적 계획을 수립했다`,contentEn:`**Future AI Application Planning**
\`\`\`
[Future Plan Guide]
1. Immediately applicable tasks (within 1 week)
   - e.g., AI draft for weekly work reports
2. Short-term tasks (within 1 month)
   - e.g., AI meeting minutes system for department
3. Mid-term tasks (within 3 months)
   - e.g., Quarterly report automation workflow
\`\`\`

**2-Day Training Learning Checklist**

- [ ] Can explain generative AI concepts and service differences
- [ ] Can write prompts using the RCF framework
- [ ] Can draft official documents using AI
- [ ] Know review points for AI-generated documents
- [ ] Can create PPT using AI tools (Gamma, Canva)
- [ ] Can request AI to generate Excel formulas
- [ ] Can write HR documents using AI
- [ ] Can analyze attendance data in Excel
- [ ] Can visualize data for report materials
- [ ] Can design automation workflows for repetitive tasks
- [ ] Understand privacy principles when using AI
- [ ] Have established a specific plan for applying AI to work`}]}],g=[{id:"basic",titleKo:"기본학습자료",titleEn:"Basic Materials",descKo:"생성형 AI 개념과 프롬프트 엔지니어링 기초",descEn:"Generative AI concepts and prompt engineering basics",topics:C},{id:"document",titleKo:"문서행정 자동화",titleEn:"Document Automation",descKo:"1일차 - 공문서, PPT, Excel 자동화",descEn:"Documents, PPT, Excel automation",topics:T},{id:"hr",titleKo:"인사행정 자동화",titleEn:"HR Automation",descKo:"인사·근태, 보고자료, 업무자동화",descEn:"HR, attendance, reports, workflow",topics:b}];function S(){const{language:s}=A(),a=s==="ko",{category:i}=v(),r=P(),n=g.find(t=>t.id===i)||g[0];return h.useEffect(()=>{if(r.hash){const t=r.hash.slice(1);setTimeout(()=>{var o;return(o=document.getElementById(t))==null?void 0:o.scrollIntoView({behavior:"smooth",block:"start"})},150)}else window.scrollTo({top:0})},[r.hash,i]),e.jsxs("div",{className:"learning-page",children:[e.jsx(E,{title:a?n.titleKo:n.titleEn}),e.jsxs("div",{className:"learning-layout",children:[e.jsx("aside",{className:"learning-sidebar",children:e.jsxs("div",{className:"sidebar-inner",children:[e.jsx("div",{className:"sidebar-header",children:a?n.titleKo:n.titleEn}),e.jsxs("div",{className:"sidebar-group",children:[e.jsx("div",{className:"sidebar-group-title",children:a?"학습 주제":"Topics"}),n.topics.map(t=>e.jsx("a",{href:`#${t.id}`,className:"sidebar-item",onClick:o=>{var l;o.preventDefault(),(l=document.getElementById(t.id))==null||l.scrollIntoView({behavior:"smooth",block:"start"})},children:a?t.titleKo:t.titleEn},t.id))]}),e.jsxs("div",{className:"sidebar-group",children:[e.jsx("div",{className:"sidebar-group-title",children:a?"바로가기":"Quick Links"}),e.jsx(d,{to:"/tools",className:"sidebar-item",children:a?"도구 가이드":"Tool Guide"}),e.jsx(d,{to:"/community",className:"sidebar-item",children:a?"커뮤니티":"Community"})]})]})}),e.jsxs("div",{className:"learning-content",children:[e.jsxs("div",{className:"learning-content-header",children:[e.jsx("h1",{children:a?n.titleKo:n.titleEn}),e.jsx("p",{children:a?n.descKo:n.descEn})]}),n.topics.map(t=>e.jsxs("section",{id:t.id,className:"topic-section",children:[e.jsx("div",{className:"topic-header",children:e.jsxs("div",{className:"topic-header-text",children:[e.jsx("h2",{children:a?t.titleKo:t.titleEn}),e.jsx("p",{children:a?t.descKo:t.descEn})]})}),e.jsxs("div",{className:"topic-content",children:[t.sections.map((o,l)=>e.jsxs("div",{className:"section-block",children:[e.jsx("h3",{className:"section-block-title",children:a?o.titleKo:o.titleEn}),e.jsx("div",{className:"section-block-body",children:I(a?o.contentKo:o.contentEn,a)})]},l)),u[t.id]&&e.jsxs("div",{className:"section-block",children:[e.jsxs("h3",{className:"section-block-title",children:[e.jsx("i",{className:"fa-solid fa-dumbbell",style:{marginRight:8,color:"var(--primary-blue)"}}),a?"실습 문제 (난이도별)":"Practice (by Level)"]}),e.jsxs("div",{className:"section-block-body",children:[e.jsx("p",{className:"practice-bank-intro",children:a?"진도에 맞춰 골라 연습하세요. 각 프롬프트는 복사 버튼으로 복사해 ChatGPT·Claude 등에 붙여넣고 실습할 수 있습니다.":"Pick by your pace. Copy each prompt and paste it into ChatGPT/Claude to practice."}),["basic","applied","advanced"].map(o=>{const l=u[t.id].filter(c=>c.level===o);return l.length===0?null:e.jsxs("div",{className:"practice-bank-level",children:[e.jsx("h4",{className:`practice-bank-level-title ${m[o].badge}`,children:a?m[o].ko:m[o].en}),l.map((c,y)=>e.jsxs("div",{className:"practice-bank-item",children:[e.jsx("div",{className:"practice-bank-item-title",children:a?c.titleKo:c.titleEn}),e.jsx(f,{code:a?c.promptKo:c.promptEn,isKo:a})]},y))]},o)})]})]})]})]},t.id))]})]})]})}function I(s,a=!0){const i=s.split(`
`),r=[];let n=0;for(;n<i.length;){const t=i[n];if(t.startsWith("```")){const o=[];for(n++;n<i.length&&!i[n].startsWith("```");)o.push(i[n]),n++;n++,r.push(e.jsx(f,{code:o.join(`
`),isKo:a},`code-${n}`));continue}if(t.startsWith("|")){const o=[];for(;n<i.length&&i[n].startsWith("|");)o.push(i[n]),n++;r.push(x(o,`tbl-${n}`));continue}if(t.startsWith("**")&&t.endsWith("**")){r.push(e.jsx("h4",{dangerouslySetInnerHTML:{__html:p(t)}},n)),n++;continue}if(t.startsWith(">")){r.push(e.jsx("blockquote",{dangerouslySetInnerHTML:{__html:p(t.slice(1).trim())}},n)),n++;continue}if(t.startsWith("- [")){r.push(e.jsx("div",{className:"checklist-item",dangerouslySetInnerHTML:{__html:p(t)}},n)),n++;continue}if(t.startsWith("- ")||t.startsWith("* ")){r.push(e.jsx("li",{dangerouslySetInnerHTML:{__html:p(t.slice(2))}},n)),n++;continue}if(/^\d+\.\s/.test(t)){r.push(e.jsx("li",{className:"ol-item",dangerouslySetInnerHTML:{__html:p(t.replace(/^\d+\.\s/,""))}},n)),n++;continue}if(!t.trim()){n++;continue}r.push(e.jsx("p",{dangerouslySetInnerHTML:{__html:p(t)}},n)),n++}return r}function x(s,a){const i=s.filter(t=>!t.trim().match(/^\|[-:\s|]+\|$/)).map(t=>t.split("|").filter(o=>o.trim()).map(o=>o.trim()));if(i.length===0)return null;const r=i[0],n=i.slice(1);return e.jsxs("table",{children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map((t,o)=>e.jsx("th",{dangerouslySetInnerHTML:{__html:p(t)}},o))})}),e.jsx("tbody",{children:n.map((t,o)=>e.jsx("tr",{children:t.map((l,c)=>e.jsx("td",{dangerouslySetInnerHTML:{__html:p(l)}},c))},o))})]},a)}function p(s){return s.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`(.+?)`/g,"<code>$1</code>").replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>').replace(/- \[ \]/g,'<span class="check-box">&#9744;</span>').replace(/- \[x\]/g,'<span class="check-box checked">&#9745;</span>')}export{S as default};
