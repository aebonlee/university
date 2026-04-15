import{j as e}from"./markdown-X-y-aifN.js";import{u as S,b as m,L as c}from"./vendor-j2q2Hh8J.js";import{u as N}from"./index-CQ3VucV8.js";import{C as b,S as D}from"./SEOHead-BkjqMOtS.js";import"./supabase-ClMXFR6t.js";const h=[{id:"ai-basics",icon:"fa-brain",titleKo:"생성형 AI 기초",titleEn:"Generative AI Basics",descKo:"생성형 AI의 개념, 동작 원리, 주요 서비스 비교 및 대학 행정 활용 전략",descEn:"Generative AI concepts, principles, service comparison, and university administration strategies",sessions:[{day:1,period:1,titleKo:"생성형 AI의 이해와 활용 전략",titleEn:"Understanding Generative AI"}],sections:[{titleKo:"생성형 AI란?",titleEn:"What is Generative AI?",contentKo:`생성형 AI(Generative AI)는 텍스트, 이미지, 코드 등 새로운 콘텐츠를 생성할 수 있는 인공지능입니다.

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
- Chart and graph recommendations`}]},{id:"prompt-engineering",icon:"fa-pen-fancy",titleKo:"프롬프트 엔지니어링",titleEn:"Prompt Engineering",descKo:"RCF 프레임워크를 활용한 효과적인 프롬프트 작성법과 개선 기법",descEn:"Effective prompt writing using the RCF framework and improvement techniques",sessions:[{day:1,period:2,titleKo:"프롬프트 엔지니어링 기초",titleEn:"Prompt Engineering Basics"}],sections:[{titleKo:"RCF 프레임워크",titleEn:"RCF Framework",contentKo:`프롬프트 엔지니어링은 AI에게 원하는 결과를 얻기 위해 입력을 체계적으로 설계하는 기술입니다.

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
The Academic Affairs Office of Chonnam National University needs to write a course registration notice for the 2nd semester of 2024.
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
[포함 사항]
- 현황 요약
- 주요 성과 (수치 포함)
- 문제점 및 개선방안
- 향후 계획
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
[Include]
- Status summary
- Key achievements (with numbers)
- Issues and improvements
- Future plans
[Length] {pages}
[Tone] {tone}
\`\`\``}]},{id:"document-automation",icon:"fa-file-lines",titleKo:"문서 작성 자동화",titleEn:"Document Writing Automation",descKo:"공문서, 회의록, 보고서를 AI로 빠르게 작성하고 검토하는 방법",descEn:"Quickly write and review official documents, meeting minutes, and reports with AI",sessions:[{day:1,period:3,titleKo:"AI 활용 공문서 작성",titleEn:"AI-Powered Official Document Writing"},{day:1,period:4,titleKo:"회의록·보고서 자동화",titleEn:"Meeting Minutes & Report Automation"}],sections:[{titleKo:"대학 행정 공문서 유형",titleEn:"University Administrative Document Types",contentKo:`| 유형 | 설명 | 예시 |
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
| Trip report | Chronological order | Timeline and insights |`}]},{id:"ppt-creation",icon:"fa-presentation-screen",titleKo:"PPT 보고자료 제작",titleEn:"PPT Report Creation",descKo:"AI 기반 PPT 구조 설계, Gamma·Canva 활용, 데이터 시각화 기법",descEn:"AI-based PPT structure design, Gamma/Canva usage, and data visualization techniques",sessions:[{day:1,period:5,titleKo:"PPT 보고자료 제작 (1)",titleEn:"PPT Report Creation (1)"},{day:1,period:6,titleKo:"PPT 보고자료 제작 (2)",titleEn:"PPT Report Creation (2)"},{day:2,period:4,titleKo:"인사행정 보고자료 제작",titleEn:"HR Report Presentation"}],sections:[{titleKo:"AI 기반 PPT 제작 도구",titleEn:"AI-Based PPT Tools",contentKo:`**Gamma (gamma.app)**
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
- Recommend data visualization methods`},{titleKo:"PPT 디자인 원칙",titleEn:"PPT Design Principles",contentKo:`**4대 디자인 원칙**
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
| 구성 | 누적 막대 | 항목별 구성 비교 |

**PPT 최종 점검 체크리스트**
- [ ] 전체 스토리라인이 논리적인가?
- [ ] 각 슬라이드의 핵심 메시지가 명확한가?
- [ ] 데이터 출처가 모두 표기되었는가?
- [ ] 폰트/색상이 일관적인가?
- [ ] 발표 시간에 적합한 분량인가?`,contentEn:`**4 Design Principles**
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
| Composition | Stacked bar | Compare compositions |

**PPT Final Checklist**
- [ ] Is the overall storyline logical?
- [ ] Is each slide's key message clear?
- [ ] Are all data sources cited?
- [ ] Are fonts/colors consistent?
- [ ] Is the volume suitable for presentation time?`}]},{id:"excel-analysis",icon:"fa-table",titleKo:"Excel 데이터 분석",titleEn:"Excel Data Analysis",descKo:"AI 활용 수식 생성, 데이터 정리, 피벗 테이블, VBA 매크로 기초",descEn:"AI-powered formula generation, data cleaning, pivot tables, and VBA macro basics",sessions:[{day:1,period:7,titleKo:"Excel 데이터 분석 자동화",titleEn:"Excel Data Analysis Automation"},{day:2,period:3,titleKo:"근태 데이터 Excel 분석",titleEn:"Attendance Data Excel Analysis"}],sections:[{titleKo:"AI 활용 수식 생성",titleEn:"AI-Powered Formula Generation",contentKo:`AI에 Excel 작업을 설명하면 적합한 수식을 자동으로 생성해 줍니다.

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
\`\`\``},{titleKo:"피벗 테이블 & 차트",titleEn:"Pivot Tables & Charts",contentKo:`**피벗 테이블 활용 가이드**

AI에 데이터 분석 목표를 설명하면 피벗 테이블 설정 방법을 안내받을 수 있습니다.

| 분석 목표 | 행(Row) | 열(Column) | 값(Value) |
|-----------|---------|-----------|-----------|
| 부서별 평균 근무시간 | 부서 | - | 근무시간(평균) |
| 월별·부서별 지각 현황 | 부서 | 월 | 지각건수(합계) |
| 직원별 연차 사용 현황 | 이름 | - | 연차일수(합계) |

**추천 차트 유형**
- 부서별 평균 근무시간 → **가로 막대 차트**
- 월별 지각률 추이 → **꺾은선 차트**
- 연차 사용 현황 → **원형 차트**
- 초과근무 Top 10 → **세로 막대 차트**

**VBA 매크로 기초**
반복 작업은 AI에 요청하여 VBA 코드를 생성할 수 있습니다.
\`\`\`
Excel VBA로 다음 작업을 자동화하는 매크로를 작성해 주세요:
1. Sheet1의 A열 데이터를 읽기
2. 중복 제거 후 가나다순 정렬
3. Sheet2에 결과 출력
주석 포함하여 초보자도 이해할 수 있도록 작성해 주세요.
\`\`\``,contentEn:`**Pivot Table Usage Guide**

Explain your data analysis goals to AI and get pivot table setup guidance.

| Analysis Goal | Row | Column | Value |
|--------------|-----|--------|-------|
| Avg work hours by dept | Department | - | Hours(Average) |
| Monthly tardiness by dept | Department | Month | Count(Sum) |
| Leave usage by employee | Name | - | Days(Sum) |

**Recommended Chart Types**
- Avg hours by department → **Horizontal bar chart**
- Monthly tardiness trend → **Line chart**
- Leave usage → **Pie chart**
- Overtime Top 10 → **Vertical bar chart**

**VBA Macro Basics**
AI can generate VBA code for repetitive tasks.
\`\`\`
Write a VBA macro to:
1. Read data from Sheet1 column A
2. Remove duplicates and sort alphabetically
3. Output results to Sheet2
Include comments for beginners.
\`\`\``}]},{id:"hr-administration",icon:"fa-users-gear",titleKo:"인사행정 AI 활용",titleEn:"HR Administration with AI",descKo:"채용공고, 인사발령, 근태 관리, 근로계약서 등 인사 업무의 AI 활용",descEn:"AI usage for job postings, appointments, attendance management, and employment contracts",sessions:[{day:2,period:1,titleKo:"인사·근태 관리 AI 활용",titleEn:"HR & Attendance AI Application"},{day:2,period:2,titleKo:"인사 관련 문서 작성",titleEn:"HR Document Creation"}],sections:[{titleKo:"인사 업무 AI 활용 영역",titleEn:"AI Applications in HR",contentKo:`| 업무 영역 | AI 활용 방안 | 예상 효과 |
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
\`\`\``},{titleKo:"인사 문서 작성",titleEn:"HR Document Writing",contentKo:`**인사발령 통보문 프롬프트**
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
- Final version must be reviewed by legal team`}]},{id:"work-automation",icon:"fa-gears",titleKo:"업무 자동화 설계",titleEn:"Work Automation Design",descKo:"반복 업무 자동화 워크플로우 설계, 프롬프트 라이브러리 구축, ROI 계산",descEn:"Repetitive task automation workflow design, prompt library building, and ROI calculation",sessions:[{day:2,period:5,titleKo:"업무 템플릿 설계",titleEn:"Work Template Design"},{day:2,period:6,titleKo:"업무 자동화 워크플로우",titleEn:"Work Automation Workflow"}],sections:[{titleKo:"프롬프트 라이브러리 구축",titleEn:"Building a Prompt Library",contentKo:`**업무 템플릿 설계 원칙**
1. **재사용성**: 다양한 상황에 적용 가능하도록 변수({변수}) 활용
2. **커스터마이징**: 변수 부분만 수정하면 완성
3. **표준화**: 일관된 형식과 품질 보장
4. **공유 가능**: 팀원과 쉽게 공유

**프롬프트 관리 시스템**
1. 공유 문서에 프롬프트 모음 관리
2. 카테고리 분류: 공문서 / 보고서 / 데이터분석 / 인사 / 기타
3. 버전 관리: 프롬프트 개선 이력 기록
4. 효과성 평가: 주기적으로 프롬프트 품질 평가

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

**Prompt Management System**
1. Manage prompt collection in shared documents
2. Category classification: Documents / Reports / Data Analysis / HR / Other
3. Version control: Record prompt improvement history
4. Effectiveness evaluation: Periodic quality assessment

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
\`\`\``}]}];function U(){const{language:p}=N(),n=p==="ko",u=S(),[f,y]=m.useState({}),[P,v]=m.useState(h[0].id),[A,r]=m.useState(!1),C=m.useRef(null),T=b.filter(t=>t.day===1),R=b.filter(t=>t.day===2);m.useEffect(()=>{if(u.hash){const t=u.hash.slice(1);v(t),setTimeout(()=>{var i;(i=document.getElementById(t))==null||i.scrollIntoView({behavior:"smooth",block:"start"})},100)}},[u.hash]),m.useEffect(()=>{function t(){const i=h.map(s=>document.getElementById(s.id)).filter(Boolean);for(let s=i.length-1;s>=0;s--){const d=i[s];if(d&&d.getBoundingClientRect().top<=150){v(h[s].id);break}}}return window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]);function K(t){y(i=>({...i,[t]:!i[t]}))}function j(t){var i;v(t),r(!1),(i=document.getElementById(t))==null||i.scrollIntoView({behavior:"smooth",block:"start"})}return e.jsxs("div",{className:"learning-page",children:[e.jsx(D,{title:n?"학습자료":"Learning Materials"}),e.jsxs("button",{className:"sidebar-toggle",onClick:()=>r(!A),children:[e.jsx("i",{className:`fa-solid ${A?"fa-xmark":"fa-bars"}`}),e.jsx("span",{children:n?"학습자료 목차":"Contents"})]}),e.jsxs("div",{className:"learning-layout",children:[e.jsx("aside",{className:`learning-sidebar ${A?"open":""}`,children:e.jsxs("div",{className:"sidebar-inner",children:[e.jsxs("div",{className:"sidebar-header",children:[e.jsx("i",{className:"fa-solid fa-book"}),e.jsx("span",{children:n?"학습자료":"Materials"})]}),e.jsxs("div",{className:"sidebar-group",children:[e.jsx("div",{className:"sidebar-group-title",children:n?"주제별 학습":"By Topic"}),h.map(t=>e.jsxs("button",{className:`sidebar-item ${P===t.id?"active":""}`,onClick:()=>j(t.id),children:[e.jsx("i",{className:`fa-solid ${t.icon}`}),e.jsx("span",{children:n?t.titleKo:t.titleEn})]},t.id))]}),e.jsxs("div",{className:"sidebar-group",children:[e.jsx("div",{className:"sidebar-group-title",children:n?"1일차: 문서행정 자동화":"Day 1: Document Automation"}),T.map(t=>e.jsxs(c,{to:`/day1/${t.period}`,className:"sidebar-item sidebar-session",onClick:()=>r(!1),children:[e.jsx("span",{className:"sidebar-period",children:t.period}),e.jsx("span",{children:n?t.title:t.titleEn})]},t.id))]}),e.jsxs("div",{className:"sidebar-group",children:[e.jsx("div",{className:"sidebar-group-title",children:n?"2일차: 인사행정 자동화":"Day 2: HR Automation"}),R.map(t=>e.jsxs(c,{to:`/day2/${t.period}`,className:"sidebar-item sidebar-session",onClick:()=>r(!1),children:[e.jsx("span",{className:"sidebar-period",children:t.period}),e.jsx("span",{children:n?t.title:t.titleEn})]},t.id))]}),e.jsxs("div",{className:"sidebar-group",children:[e.jsx("div",{className:"sidebar-group-title",children:n?"바로가기":"Quick Links"}),e.jsxs(c,{to:"/tools",className:"sidebar-item",onClick:()=>r(!1),children:[e.jsx("i",{className:"fa-solid fa-wrench"}),e.jsx("span",{children:n?"도구 가이드":"Tool Guide"})]}),e.jsxs(c,{to:"/community",className:"sidebar-item",onClick:()=>r(!1),children:[e.jsx("i",{className:"fa-solid fa-comments"}),e.jsx("span",{children:n?"커뮤니티":"Community"})]})]})]})}),A&&e.jsx("div",{className:"sidebar-overlay",onClick:()=>r(!1)}),e.jsxs("div",{className:"learning-content",ref:C,children:[e.jsxs("div",{className:"learning-content-header",children:[e.jsx("h1",{children:n?"학습자료":"Learning Materials"}),e.jsx("p",{children:n?"2일 16교시 교육 내용을 주제별로 정리한 핵심 학습자료입니다. 왼쪽 메뉴에서 주제를 선택하거나 교시별 상세 페이지로 이동할 수 있습니다.":"Key learning materials organized by topic. Select a topic from the left menu or navigate to detailed session pages."})]}),h.map(t=>e.jsxs("section",{id:t.id,className:"topic-section",children:[e.jsxs("div",{className:"topic-header",children:[e.jsx("div",{className:"topic-icon",children:e.jsx("i",{className:`fa-solid ${t.icon}`})}),e.jsxs("div",{className:"topic-header-text",children:[e.jsx("h2",{children:n?t.titleKo:t.titleEn}),e.jsx("p",{children:n?t.descKo:t.descEn})]})]}),e.jsxs("div",{className:"topic-sessions",children:[e.jsxs("span",{className:"topic-sessions-label",children:[e.jsx("i",{className:"fa-solid fa-book-open"})," ",n?"관련 교시":"Related Sessions",":"]}),t.sessions.map((i,s)=>e.jsxs(c,{to:`/day${i.day}/${i.period}`,className:"topic-session-link",children:[n?`${i.day}일차 ${i.period}교시`:`Day ${i.day} Session ${i.period}`,e.jsxs("span",{className:"topic-session-title",children:[" - ",n?i.titleKo:i.titleEn]})]},s))]}),e.jsx("div",{className:"topic-content",children:t.sections.map((i,s)=>{const d=`${t.id}-${s}`,x=f[d];return e.jsxs("div",{className:`accordion-item ${x?"open":""}`,children:[e.jsxs("button",{className:"accordion-header",onClick:()=>K(d),children:[e.jsx("span",{children:n?i.titleKo:i.titleEn}),e.jsx("i",{className:`fa-solid fa-chevron-${x?"up":"down"}`})]}),x&&e.jsx("div",{className:"accordion-body",children:e.jsxs("div",{className:"accordion-content markdown-content",children:[(n?i.contentKo:i.contentEn).split(`
`).map((a,o)=>{var I;if(a.startsWith("|")){const E=a.split("|").filter(g=>g.trim());if(E.every(g=>/^[-:\s]+$/.test(g.trim())))return null;const w=o>0&&((I=(n?i.contentKo:i.contentEn).split(`
`)[o+1])==null?void 0:I.trim().startsWith("|---"))?"th":"td";return e.jsx("table",{children:e.jsx("tbody",{children:e.jsx("tr",{children:E.map((g,k)=>e.jsx(w,{dangerouslySetInnerHTML:{__html:l(g.trim())}},k))})})},o)}return a.startsWith("```")?null:a.startsWith("**")&&a.endsWith("**")?e.jsx("h4",{dangerouslySetInnerHTML:{__html:l(a)}},o):a.trim()?a.startsWith(">")?e.jsx("blockquote",{dangerouslySetInnerHTML:{__html:l(a.slice(1).trim())}},o):a.startsWith("- [")?e.jsx("div",{className:"checklist-item",dangerouslySetInnerHTML:{__html:l(a)}},o):a.startsWith("- ")||a.startsWith("* ")?e.jsx("li",{dangerouslySetInnerHTML:{__html:l(a.slice(2))}},o):/^\d+\.\s/.test(a)?e.jsx("li",{className:"ol-item",dangerouslySetInnerHTML:{__html:l(a.replace(/^\d+\.\s/,""))}},o):e.jsx("p",{dangerouslySetInnerHTML:{__html:l(a)}},o):e.jsx("br",{},o)}),M(n?i.contentKo:i.contentEn)]})})]},d)})})]},t.id)),e.jsxs("div",{className:"learning-cta",children:[e.jsx("h3",{children:n?"실습을 통해 학습을 완성하세요":"Complete Your Learning Through Practice"}),e.jsx("p",{children:n?"학습자료를 참고하여 각 교시의 실습 과제를 수행해 보세요":"Refer to these materials while completing practice assignments"}),e.jsxs("div",{className:"learning-cta-buttons",children:[e.jsxs(c,{to:"/tools",className:"btn btn-primary",children:[e.jsx("i",{className:"fa-solid fa-wrench"})," ",n?"도구 가이드":"Tool Guide"]}),e.jsxs(c,{to:"/community",className:"btn btn-secondary",children:[e.jsx("i",{className:"fa-solid fa-comments"})," ",n?"커뮤니티":"Community"]})]})]})]})]})]})}function l(p){return p.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`(.+?)`/g,"<code>$1</code>").replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>').replace(/- \[ \]/g,'<span class="check-box">&#9744;</span>').replace(/- \[x\]/g,'<span class="check-box checked">&#9745;</span>')}function M(p){const n=[],u=/```(?:\w*)\n([\s\S]*?)```/g;let f,y=0;for(;(f=u.exec(p))!==null;)n.push(e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:f[1].trim()})},`code-${y++}`));return n}export{U as default};
