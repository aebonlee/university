import{j as e}from"./markdown-X-y-aifN.js";import{f as u,u as g,b as h,L as m}from"./vendor-j2q2Hh8J.js";import{u as A}from"./index-32h9D_zJ.js";import{C as f,S as y}from"./SEOHead-BkjqMOtS.js";import"./supabase-ClMXFR6t.js";const I=[{id:"ai-basics",titleKo:"생성형 AI 기초",titleEn:"Generative AI Basics",descKo:"생성형 AI의 개념, 동작 원리, 주요 서비스 비교 및 대학 행정 활용 전략",descEn:"Generative AI concepts, principles, service comparison, and university administration strategies",sessions:[{day:1,period:1,titleKo:"생성형 AI의 이해와 활용 전략",titleEn:"Understanding Generative AI"}],sections:[{titleKo:"생성형 AI란?",titleEn:"What is Generative AI?",contentKo:`생성형 AI(Generative AI)는 텍스트, 이미지, 코드 등 새로운 콘텐츠를 생성할 수 있는 인공지능입니다.

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
| **ChatGPT** | OpenAI | 범용성, 다양한 플러그인, GPT-4o 지원 | 문서 작성, 코드 생성, 브레인스토밍 |
| **Gemini** | Google | 검색 연동, 멀티모달, Google Workspace 통합 | 정보 검색, 이미지 분석, 데이터 분석 |
| **Claude** | Anthropic | 긴 문맥(200K 토큰), 정확성, 안전성 | 장문 분석, 보고서 작성, 코드 리뷰 |

**무료 vs 유료 기능 비교**
- 무료 버전: 기본 대화, 간단한 문서 작성 가능
- 유료 버전: 더 긴 문맥, 고급 분석, 파일 업로드, 이미지 생성 등 지원`,contentEn:`| Service | Developer | Features | Recommended Use |
|---------|-----------|----------|-----------------|
| **ChatGPT** | OpenAI | Versatile, plugins, GPT-4o | Document writing, code, brainstorming |
| **Gemini** | Google | Search integration, multimodal | Information search, image analysis |
| **Claude** | Anthropic | Long context (200K), accuracy | Long document analysis, reports |

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
- Chart and graph recommendations`}]},{id:"prompt-engineering",titleKo:"프롬프트 엔지니어링",titleEn:"Prompt Engineering",descKo:"RCF 프레임워크를 활용한 효과적인 프롬프트 작성법과 개선 기법",descEn:"Effective prompt writing using the RCF framework and improvement techniques",sessions:[{day:1,period:2,titleKo:"프롬프트 엔지니어링 기초",titleEn:"Prompt Engineering Basics"}],sections:[{titleKo:"RCF 프레임워크",titleEn:"RCF Framework",contentKo:`프롬프트 엔지니어링은 AI에게 원하는 결과를 얻기 위해 입력을 체계적으로 설계하는 기술입니다.

**R - Role (역할)**
AI에게 특정 전문가 역할을 부여합니다.
\`\`\`
당신은 대학교 행정 전문가로서 공문서 작성에 능통합니다.
\`\`\`

**C - Context (맥락)**
작업의 배경과 구체적인 조건을 제공합니다.
\`\`\`
전남대학교 교무처에서 2024학년도 2학기 수강 신청 안내 공문을 작성해야 합니다.
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
The Academic Affairs Office needs to write a course registration notice for the 2nd semester of 2024.
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
\`\`\``}]}],E=[{id:"document-automation",titleKo:"공문서·보고서 작성",titleEn:"Official Documents & Reports",descKo:"공문서, 회의록, 보고서를 AI로 빠르게 작성하고 검토하는 방법",descEn:"Quickly write and review official documents, meeting minutes, and reports with AI",sessions:[{day:1,period:3,titleKo:"AI 활용 공문서 작성",titleEn:"AI-Powered Official Document Writing"},{day:1,period:4,titleKo:"회의록·보고서 자동화",titleEn:"Meeting Minutes & Report Automation"}],sections:[{titleKo:"대학 행정 공문서 유형",titleEn:"University Administrative Document Types",contentKo:`| 유형 | 설명 | 예시 |
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
5. Final check with review checklist`},{titleKo:"AI 생성 문서 검토 체크리스트",titleEn:"AI Document Review Checklist",contentKo:`AI가 생성한 문서는 반드시 아래 항목을 확인한 후 사용해야 합니다.

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
- [ ] **Approval**: Is the approval chain correctly specified?`},{titleKo:"회의록·보고서 작성 가이드",titleEn:"Meeting Minutes & Report Guide",contentKo:`**회의록 작성 3단계**
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
| Trip report | Chronological order | Timeline and insights |`}]},{id:"ppt-creation",titleKo:"PPT 보고자료 제작",titleEn:"PPT Report Creation",descKo:"AI 기반 PPT 구조 설계, Gamma·Canva 활용, 데이터 시각화 기법",descEn:"AI-based PPT structure design, Gamma/Canva usage, data visualization",sessions:[{day:1,period:5,titleKo:"PPT 보고자료 제작 (1)",titleEn:"PPT Report Creation (1)"},{day:1,period:6,titleKo:"PPT 보고자료 제작 (2)",titleEn:"PPT Report Creation (2)"}],sections:[{titleKo:"AI 기반 PPT 제작 도구",titleEn:"AI-Based PPT Tools",contentKo:`**Gamma (gamma.app)**
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
- Recommend data visualization methods`},{titleKo:"PPT 디자인 원칙 & 시각화",titleEn:"PPT Design Principles & Visualization",contentKo:`**4대 디자인 원칙**
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
| Composition | Stacked bar | Compare compositions |`}]},{id:"excel-analysis",titleKo:"Excel 데이터 분석",titleEn:"Excel Data Analysis",descKo:"AI 활용 수식 생성, 데이터 정리, 피벗 테이블, VBA 매크로 기초",descEn:"AI-powered formula generation, data cleaning, pivot tables, VBA basics",sessions:[{day:1,period:7,titleKo:"Excel 데이터 분석 자동화",titleEn:"Excel Data Analysis Automation"}],sections:[{titleKo:"AI 활용 수식 생성",titleEn:"AI-Powered Formula Generation",contentKo:`AI에 Excel 작업을 설명하면 적합한 수식을 자동으로 생성해 줍니다.

**자주 사용하는 수식 유형**

| 작업 | Excel 수식 | 설명 |
|------|-----------|------|
| 조건부 개수 | \`=COUNTIF(A:A,"*전남대*")\` | 특정 텍스트 포함 행 수 |
| 조건부 합계 | \`=SUMIFS(C:C,B:B,">=100")\` | 조건에 맞는 합계 |
| 날짜 필터 | \`=FILTER(A:D,YEAR(D:D)=2024)\` | 특정 연도 데이터 |
| 중복 제거 | \`=UNIQUE(A2:A100)\` | 고유값 목록 |
| VLOOKUP | \`=VLOOKUP(A2,Sheet2!A:C,3,0)\` | 다른 시트에서 값 찾기 |

**수식 생성 프롬프트 예시**
\`\`\`
Excel에서 다음 작업을 수행하는 수식을 알려주세요:
1. A열에서 "전남대학교" 텍스트가 포함된 행의 수를 세기
2. B열의 값이 100 이상인 행만 C열의 합계 구하기
3. D열의 날짜가 2024년인 데이터만 필터링하기
각 수식에 대해 설명과 함께 알려주세요.
\`\`\``,contentEn:`When you describe Excel tasks to AI, it automatically generates appropriate formulas.

**Frequently Used Formula Types**

| Task | Excel Formula | Description |
|------|--------------|-------------|
| Conditional count | \`=COUNTIF(A:A,"*text*")\` | Count rows containing text |
| Conditional sum | \`=SUMIFS(C:C,B:B,">=100")\` | Sum meeting conditions |
| Date filter | \`=FILTER(A:D,YEAR(D:D)=2024)\` | Filter by year |
| Remove duplicates | \`=UNIQUE(A2:A100)\` | Unique value list |
| VLOOKUP | \`=VLOOKUP(A2,Sheet2!A:C,3,0)\` | Find value from another sheet |

**Formula Generation Prompt Example**
\`\`\`
Please provide Excel formulas for:
1. Count rows containing "University" in column A
2. Sum column C where column B >= 100
3. Filter data where column D dates are in 2024
Include explanations for each formula.
\`\`\``},{titleKo:"피벗 테이블 & VBA 매크로",titleEn:"Pivot Tables & VBA Macros",contentKo:`**피벗 테이블 활용 가이드**

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
\`\`\``}]}],v=[{id:"hr-administration",titleKo:"인사·근태 관리",titleEn:"HR & Attendance Management",descKo:"채용공고, 인사발령, 근태 관리, 근로계약서 등 인사 업무의 AI 활용",descEn:"AI usage for job postings, appointments, attendance, and employment contracts",sessions:[{day:2,period:1,titleKo:"인사·근태 관리 AI 활용",titleEn:"HR & Attendance AI Application"},{day:2,period:2,titleKo:"인사 관련 문서 작성",titleEn:"HR Document Creation"},{day:2,period:3,titleKo:"근태 데이터 Excel 분석",titleEn:"Attendance Data Excel Analysis"}],sections:[{titleKo:"인사 업무 AI 활용 영역",titleEn:"AI Applications in HR",contentKo:`| 업무 영역 | AI 활용 방안 | 예상 효과 |
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
\`\`\``},{titleKo:"인사 문서 작성 & 근로계약서",titleEn:"HR Documents & Employment Contracts",contentKo:`**인사발령 통보문 프롬프트**
\`\`\`
다음 인사 이동 정보로 인사발령 공문을 작성해 주세요:
[발령 정보]
1. 홍길동: 교무처 학사팀 → 기획처 기획팀 (전보)
2. 김영희: 입학처 입학팀 과원 → 팀장 (승진)
3. 이철수: 신규 채용 → 총무처 시설팀 (임용)
[형식] 공문서 인사발령 통보문, 표 형식 포함
[발령일] 2024년 9월 1일
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
[Effective Date] September 1, 2024
\`\`\`

**Employment Contract Precautions**
> AI-generated legal documents MUST undergo legal review.

- Verify compliance with labor laws
- Check essential clauses (period, salary, hours)
- Ensure consistency with internal regulations
- Final version must be reviewed by legal team`}]},{id:"hr-report",titleKo:"인사 보고자료 제작",titleEn:"HR Report Presentation",descKo:"인사 현황 PPT 시각화, 데이터 기반 스토리텔링, 경영진 보고자료",descEn:"HR status PPT visualization, data-driven storytelling, executive reports",sessions:[{day:2,period:4,titleKo:"인사행정 보고자료 제작",titleEn:"HR Report Presentation"}],sections:[{titleKo:"인사 데이터 시각화 & 스토리텔링",titleEn:"HR Data Visualization & Storytelling",contentKo:`**인사 데이터 시각화 매핑**

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
- Positive results in green, caution in red`}]},{id:"work-automation",titleKo:"업무 자동화 설계",titleEn:"Work Automation Design",descKo:"프롬프트 라이브러리 구축, 워크플로우 설계, ROI 계산",descEn:"Prompt library building, workflow design, ROI calculation",sessions:[{day:2,period:5,titleKo:"업무 템플릿 설계",titleEn:"Work Template Design"},{day:2,period:6,titleKo:"업무 자동화 워크플로우",titleEn:"Work Automation Workflow"}],sections:[{titleKo:"프롬프트 라이브러리 & 가이드라인",titleEn:"Prompt Library & Guidelines",contentKo:`**업무 템플릿 설계 원칙**
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
| Storage | Register useful prompts in shared library |`},{titleKo:"워크플로우 설계 & ROI",titleEn:"Workflow Design & ROI",contentKo:`**자동화 대상 업무 선정 기준**

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
\`\`\``}]}],p=[{id:"basic",titleKo:"기본학습자료",titleEn:"Basic Materials",descKo:"생성형 AI 개념과 프롬프트 엔지니어링 기초",descEn:"Generative AI concepts and prompt engineering basics",topics:I},{id:"document",titleKo:"문서행정 자동화",titleEn:"Document Automation",descKo:"1일차 - 공문서, PPT, Excel 자동화",descEn:"Day 1 - Documents, PPT, Excel automation",topics:E,day:1},{id:"hr",titleKo:"인사행정 자동화",titleEn:"HR Automation",descKo:"2일차 - 인사·근태, 보고자료, 업무자동화",descEn:"Day 2 - HR, attendance, reports, workflow",topics:v,day:2}];function w(){const{language:d}=A(),a=d==="ko",{category:s}=u(),n=g(),i=p.find(t=>t.id===s)||p[0],r=i.day?f.filter(t=>t.day===i.day):[];return h.useEffect(()=>{if(n.hash){const t=n.hash.slice(1);setTimeout(()=>{var o;return(o=document.getElementById(t))==null?void 0:o.scrollIntoView({behavior:"smooth",block:"start"})},150)}else window.scrollTo({top:0})},[n.hash,s]),e.jsxs("div",{className:"learning-page",children:[e.jsx(y,{title:a?i.titleKo:i.titleEn}),e.jsxs("div",{className:"learning-layout",children:[e.jsx("aside",{className:"learning-sidebar",children:e.jsxs("div",{className:"sidebar-inner",children:[e.jsx("div",{className:"sidebar-header",children:a?i.titleKo:i.titleEn}),e.jsxs("div",{className:"sidebar-group",children:[e.jsx("div",{className:"sidebar-group-title",children:a?"학습 주제":"Topics"}),i.topics.map(t=>e.jsx("a",{href:`#${t.id}`,className:"sidebar-item",onClick:o=>{var l;o.preventDefault(),(l=document.getElementById(t.id))==null||l.scrollIntoView({behavior:"smooth",block:"start"})},children:a?t.titleKo:t.titleEn},t.id))]}),r.length>0&&e.jsxs("div",{className:"sidebar-group",children:[e.jsx("div",{className:"sidebar-group-title",children:a?`${i.day}일차 교시별 상세`:`Day ${i.day} Sessions`}),r.map(t=>e.jsxs(m,{to:`/day${t.day}/${t.period}`,className:"sidebar-item sidebar-session",children:[e.jsx("span",{className:"sidebar-period",children:t.period}),e.jsx("span",{children:a?t.title:t.titleEn})]},t.id))]}),e.jsxs("div",{className:"sidebar-group",children:[e.jsx("div",{className:"sidebar-group-title",children:a?"바로가기":"Quick Links"}),e.jsx(m,{to:"/tools",className:"sidebar-item",children:a?"도구 가이드":"Tool Guide"}),e.jsx(m,{to:"/community",className:"sidebar-item",children:a?"커뮤니티":"Community"})]})]})}),e.jsxs("div",{className:"learning-content",children:[e.jsxs("div",{className:"learning-content-header",children:[e.jsx("h1",{children:a?i.titleKo:i.titleEn}),e.jsx("p",{children:a?i.descKo:i.descEn})]}),i.topics.map(t=>e.jsxs("section",{id:t.id,className:"topic-section",children:[e.jsx("div",{className:"topic-header",children:e.jsxs("div",{className:"topic-header-text",children:[e.jsx("h2",{children:a?t.titleKo:t.titleEn}),e.jsx("p",{children:a?t.descKo:t.descEn})]})}),t.sessions.length>0&&e.jsxs("div",{className:"topic-sessions",children:[e.jsxs("span",{className:"topic-sessions-label",children:[a?"관련 교시":"Sessions",":"]}),t.sessions.map((o,l)=>e.jsxs(m,{to:`/day${o.day}/${o.period}`,className:"topic-session-link",children:[a?`${o.day}일차 ${o.period}교시`:`Day ${o.day}-${o.period}`,e.jsxs("span",{className:"topic-session-title",children:[" ",a?o.titleKo:o.titleEn]})]},l))]}),e.jsx("div",{className:"topic-content",children:t.sections.map((o,l)=>e.jsxs("div",{className:"section-block",children:[e.jsx("h3",{className:"section-block-title",children:a?o.titleKo:o.titleEn}),e.jsx("div",{className:"section-block-body",children:P(a?o.contentKo:o.contentEn)})]},l))})]},t.id))]})]})]})}function P(d){const a=d.split(`
`),s=[];let n=0;for(;n<a.length;){const i=a[n];if(i.startsWith("```")){const r=[];for(n++;n<a.length&&!a[n].startsWith("```");)r.push(a[n]),n++;n++,s.push(e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:r.join(`
`)})},`code-${n}`));continue}if(i.startsWith("|")){const r=[];for(;n<a.length&&a[n].startsWith("|");)r.push(a[n]),n++;s.push(x(r,`tbl-${n}`));continue}if(i.startsWith("**")&&i.endsWith("**")){s.push(e.jsx("h4",{dangerouslySetInnerHTML:{__html:c(i)}},n)),n++;continue}if(i.startsWith(">")){s.push(e.jsx("blockquote",{dangerouslySetInnerHTML:{__html:c(i.slice(1).trim())}},n)),n++;continue}if(i.startsWith("- [")){s.push(e.jsx("div",{className:"checklist-item",dangerouslySetInnerHTML:{__html:c(i)}},n)),n++;continue}if(i.startsWith("- ")||i.startsWith("* ")){s.push(e.jsx("li",{dangerouslySetInnerHTML:{__html:c(i.slice(2))}},n)),n++;continue}if(/^\d+\.\s/.test(i)){s.push(e.jsx("li",{className:"ol-item",dangerouslySetInnerHTML:{__html:c(i.replace(/^\d+\.\s/,""))}},n)),n++;continue}if(!i.trim()){n++;continue}s.push(e.jsx("p",{dangerouslySetInnerHTML:{__html:c(i)}},n)),n++}return s}function x(d,a){const s=d.filter(r=>!r.trim().match(/^\|[-:\s|]+\|$/)).map(r=>r.split("|").filter(t=>t.trim()).map(t=>t.trim()));if(s.length===0)return null;const n=s[0],i=s.slice(1);return e.jsxs("table",{children:[e.jsx("thead",{children:e.jsx("tr",{children:n.map((r,t)=>e.jsx("th",{dangerouslySetInnerHTML:{__html:c(r)}},t))})}),e.jsx("tbody",{children:i.map((r,t)=>e.jsx("tr",{children:r.map((o,l)=>e.jsx("td",{dangerouslySetInnerHTML:{__html:c(o)}},l))},t))})]},a)}function c(d){return d.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`(.+?)`/g,"<code>$1</code>").replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>').replace(/- \[ \]/g,'<span class="check-box">&#9744;</span>').replace(/- \[x\]/g,'<span class="check-box checked">&#9745;</span>')}export{w as default};
