import { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

/* ─── Types ─── */
interface TopicSection {
  titleKo: string;
  titleEn: string;
  contentKo: string;
  contentEn: string;
}
interface Topic {
  id: string;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  sections: TopicSection[];
}
interface Category {
  id: string;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  topics: Topic[];
}

/* ─── Category 1: 기본학습자료 ─── */
const BASIC_TOPICS: Topic[] = [
  {
    id: 'ai-basics',
    titleKo: '생성형 AI의 이해와 활용 전략',
    titleEn: 'Understanding Generative AI',
    descKo: 'AI 개념, 주요 서비스 비교, 대학 행정 활용 사례',
    descEn: 'AI concepts, major service comparison, university administration use cases',
    sections: [
      {
        titleKo: '생성형 AI란?',
        titleEn: 'What is Generative AI?',
        contentKo: `생성형 AI(Generative AI)는 텍스트, 이미지, 코드 등 새로운 콘텐츠를 생성할 수 있는 인공지능입니다.

**핵심 개념**
- **LLM (Large Language Model)**: 대규모 텍스트 데이터로 학습한 언어 모델
- **프롬프트(Prompt)**: AI에게 전달하는 입력 명령어
- **토큰(Token)**: AI가 처리하는 텍스트의 최소 단위
- **파인튜닝(Fine-tuning)**: 특정 목적에 맞게 모델을 추가 학습시키는 과정
- **멀티모달(Multimodal)**: 텍스트, 이미지, 음성 등 여러 형태의 데이터를 동시에 처리`,
        contentEn: `Generative AI creates new content such as text, images, and code using artificial intelligence.

**Key Concepts**
- **LLM (Large Language Model)**: Language model trained on massive text data
- **Prompt**: Input commands given to AI
- **Token**: Minimum unit of text AI processes
- **Fine-tuning**: Additional training of a model for specific purposes
- **Multimodal**: Processing multiple data types (text, images, audio) simultaneously`,
      },
      {
        titleKo: '주요 AI 서비스 비교',
        titleEn: 'Major AI Service Comparison',
        contentKo: `| 서비스 | 개발사 | 특징 | 추천 용도 |
|--------|--------|------|-----------|
| **ChatGPT** | OpenAI | 범용성, 다양한 플러그인, GPT-4o 지원 | 문서 작성, 코드 생성, 브레인스토밍 |
| **Gemini** | Google | 검색 연동, 멀티모달, Google Workspace 통합 | 정보 검색, 이미지 분석, 데이터 분석 |
| **Claude** | Anthropic | 긴 문맥(200K 토큰), 정확성, 안전성 | 장문 분석, 보고서 작성, 코드 리뷰 |

**무료 vs 유료 기능 비교**
- 무료 버전: 기본 대화, 간단한 문서 작성 가능
- 유료 버전: 더 긴 문맥, 고급 분석, 파일 업로드, 이미지 생성 등 지원`,
        contentEn: `| Service | Developer | Features | Recommended Use |
|---------|-----------|----------|-----------------|
| **ChatGPT** | OpenAI | Versatile, plugins, GPT-4o | Document writing, code, brainstorming |
| **Gemini** | Google | Search integration, multimodal | Information search, image analysis |
| **Claude** | Anthropic | Long context (200K), accuracy | Long document analysis, reports |

**Free vs Paid Features**
- Free: Basic conversation, simple document writing
- Paid: Longer context, advanced analysis, file upload, image generation`,
      },
      {
        titleKo: 'AI 활용 가능 업무 영역',
        titleEn: 'AI-Applicable Work Areas',
        contentKo: `**문서 행정**
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
- 차트 및 그래프 추천`,
        contentEn: `**Document Administration**
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
- Chart and graph recommendations`,
      },
    ],
  },
  {
    id: 'prompt-engineering',
    titleKo: '프롬프트 엔지니어링 기초',
    titleEn: 'Prompt Engineering Basics',
    descKo: '효과적인 프롬프트 작성법, 역할·맥락·형식 지정',
    descEn: 'Effective prompt writing, role/context/format specification',
    sections: [
      {
        titleKo: 'RCF 프레임워크',
        titleEn: 'RCF Framework',
        contentKo: `프롬프트 엔지니어링은 AI에게 원하는 결과를 얻기 위해 입력을 체계적으로 설계하는 기술입니다.

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
\`\`\``,
        contentEn: `Prompt engineering is the technique of systematically designing inputs to get desired results from AI.

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
\`\`\``,
      },
      {
        titleKo: '좋은 프롬프트의 조건',
        titleEn: 'Characteristics of Good Prompts',
        contentKo: `**1. 구체적(Specific)**
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
- "이전 결과에서 ~~을 추가/수정해 주세요"`,
        contentEn: `**1. Specific**
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
- "In the previous result, please add/modify ~~"`,
      },
      {
        titleKo: '프롬프트 템플릿 모음',
        titleEn: 'Prompt Template Collection',
        contentKo: `**공문서 작성 템플릿**
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
\`\`\``,
        contentEn: `**Official Document Template**
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
\`\`\``,
      },
    ],
  },
];

/* ─── Category 2: 문서행정 자동화 (Day 1) ─── */
const DOC_TOPICS: Topic[] = [
  {
    id: 'official-documents',
    titleKo: 'AI 활용 공문서 작성',
    titleEn: 'AI-Powered Official Document Writing',
    descKo: '공문서 초안, 기안문, 통보문 자동 생성 | 활용 도구: ChatGPT, Claude, HWP',
    descEn: 'Auto-generate official document drafts, proposals, and notices | Tools: ChatGPT, Claude, HWP',
    sections: [
      {
        titleKo: '대학 행정 공문서 유형',
        titleEn: 'University Administrative Document Types',
        contentKo: `| 유형 | 설명 | 예시 |
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
5. 검토 체크리스트로 최종 확인합니다`,
        contentEn: `| Type | Description | Example |
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
5. Final check with review checklist`,
      },
      {
        titleKo: 'AI 생성 문서 검토 체크리스트',
        titleEn: 'AI Document Review Checklist',
        contentKo: `AI가 생성한 문서는 반드시 아래 항목을 확인한 후 사용해야 합니다.

- [ ] **형식**: 문서 형식(기안문/통보문/협조문)이 올바른가?
- [ ] **수신처**: 수신처와 발신처가 정확한가?
- [ ] **사실 정보**: 날짜, 장소, 인원 등 사실 정보가 정확한가?
- [ ] **법률/규정**: 관련 법률이나 규정 인용이 정확한가?
- [ ] **어조/문체**: 공문서에 적합한 어조와 문체인가?
- [ ] **오탈자**: 오탈자나 문법 오류는 없는가?
- [ ] **첨부 파일**: 첨부 파일 목록이 누락되지 않았는가?
- [ ] **결재 라인**: 결재권자가 올바르게 지정되었는가?`,
        contentEn: `AI-generated documents must be verified with the following checklist before use:

- [ ] **Format**: Is the document type correct?
- [ ] **Recipients**: Are sender and recipient accurate?
- [ ] **Facts**: Are dates, locations, numbers accurate?
- [ ] **Regulations**: Are legal or regulatory references correct?
- [ ] **Tone**: Is the tone appropriate for official documents?
- [ ] **Typos**: Are there any spelling or grammar errors?
- [ ] **Attachments**: Is the attachment list complete?
- [ ] **Approval**: Is the approval chain correctly specified?`,
      },
    ],
  },
  {
    id: 'meeting-reports',
    titleKo: '회의록·보고서 자동화',
    titleEn: 'Meeting Minutes & Report Automation',
    descKo: '회의록 요약, 업무보고서, 결과보고서 작성 | 활용 도구: ChatGPT, Claude, HWP',
    descEn: 'Meeting minutes summary, work reports, result reports | Tools: ChatGPT, Claude, HWP',
    sections: [
      {
        titleKo: '회의록·보고서 작성 가이드',
        titleEn: 'Meeting Minutes & Report Guide',
        contentKo: `**회의록 작성 3단계**
1. 회의 내용 기록 (음성 메모, 메모장 활용)
2. AI에 구조화된 회의록 형태로 요약 요청
3. 검토 및 보완 (누락 내용 추가, 사실관계 확인)

**업무보고서 유형별 포인트**

| 보고서 유형 | 핵심 포인트 | AI 활용 방법 |
|-------------|------------|-------------|
| 주간 업무보고 | 실적/계획 명확 구분 | 표 형식으로 자동 정리 |
| 결과보고서 | 성과 수치 포함 | 데이터 기반 요약 생성 |
| 기획보고서 | 논리적 구조 | 목차 및 구조 자동 설계 |
| 출장보고서 | 일정별 정리 | 시간순 정리 및 시사점 도출 |`,
        contentEn: `**3 Steps for Meeting Minutes**
1. Record meeting content (voice memo, notepad)
2. Request AI to summarize in structured format
3. Review and supplement (add missing items, verify facts)

**Report Types and Key Points**

| Report Type | Key Points | AI Usage |
|-------------|-----------|----------|
| Weekly report | Clear results/plans | Auto-format in table |
| Result report | Include performance metrics | Data-based summary |
| Planning report | Logical structure | Auto-design outline |
| Trip report | Chronological order | Timeline and insights |`,
      },
      {
        titleKo: '보고서 작성 실습 프롬프트',
        titleEn: 'Report Writing Practice Prompts',
        contentKo: `**주간 업무보고서 프롬프트**
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
\`\`\``,
        contentEn: `**Weekly Work Report Prompt**
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
\`\`\``,
      },
    ],
  },
  {
    id: 'ppt-structure',
    titleKo: 'PPT 구조 설계와 슬라이드 생성',
    titleEn: 'PPT Structure Design & Slide Generation',
    descKo: 'AI 기반 PPT 구조 설계, 슬라이드 초안 생성 | 활용 도구: ChatGPT, Gamma, PowerPoint',
    descEn: 'AI-based PPT structure design, slide draft generation | Tools: ChatGPT, Gamma, PowerPoint',
    sections: [
      {
        titleKo: 'AI 기반 PPT 제작 도구',
        titleEn: 'AI-Based PPT Tools',
        contentKo: `**Gamma (gamma.app)**
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
- 데이터 시각화 방법 추천`,
        contentEn: `**Gamma (gamma.app)**
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
- Recommend data visualization methods`,
      },
      {
        titleKo: 'PPT 구조 설계 프롬프트',
        titleEn: 'PPT Structure Design Prompts',
        contentKo: `**업무보고 PPT 구조 설계 프롬프트**
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
6. PowerPoint에서 대학 서식에 맞게 최종 편집`,
        contentEn: `**Work Report PPT Structure Design Prompt**
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
6. Final editing in PowerPoint to match university format`,
      },
    ],
  },
  {
    id: 'ppt-design',
    titleKo: 'PPT 시각화와 디자인 완성',
    titleEn: 'PPT Visualization & Design Completion',
    descKo: '시각자료 생성, 데이터 시각화, 디자인 완성 | 활용 도구: Gamma, Canva, PowerPoint',
    descEn: 'Visual material creation, data visualization, design completion | Tools: Gamma, Canva, PowerPoint',
    sections: [
      {
        titleKo: 'PPT 디자인 원칙 & 시각화',
        titleEn: 'PPT Design Principles & Visualization',
        contentKo: `**4대 디자인 원칙**
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
| 구성 | 누적 막대 | 항목별 구성 비교 |`,
        contentEn: `**4 Design Principles**
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
| Composition | Stacked bar | Compare compositions |`,
      },
      {
        titleKo: 'Canva 활용 & 디자인 실습',
        titleEn: 'Canva Usage & Design Practice',
        contentKo: `**Canva PPT 제작 단계별 가이드**
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
\`\`\``,
        contentEn: `**Canva PPT Creation Step-by-Step**
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
\`\`\``,
      },
    ],
  },
  {
    id: 'excel-analysis',
    titleKo: 'Excel 데이터 분석 자동화',
    titleEn: 'Excel Data Analysis Automation',
    descKo: 'AI 활용 수식 생성, 데이터 정리·분석 | 활용 도구: ChatGPT, Claude, Excel',
    descEn: 'AI-powered formula generation, data cleaning & analysis | Tools: ChatGPT, Claude, Excel',
    sections: [
      {
        titleKo: 'AI 활용 수식 생성',
        titleEn: 'AI-Powered Formula Generation',
        contentKo: `AI에 Excel 작업을 설명하면 적합한 수식을 자동으로 생성해 줍니다.

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
\`\`\``,
        contentEn: `When you describe Excel tasks to AI, it automatically generates appropriate formulas.

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
\`\`\``,
      },
      {
        titleKo: '피벗 테이블 & VBA 매크로',
        titleEn: 'Pivot Tables & VBA Macros',
        contentKo: `**피벗 테이블 활용 가이드**

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
\`\`\``,
        contentEn: `**Pivot Table Usage Guide**

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
\`\`\``,
      },
    ],
  },
  {
    id: 'doc-practice',
    titleKo: '문서행정 종합 실습',
    titleEn: 'Document Administration Practice',
    descKo: '실제 업무 시나리오 기반 종합 실습 및 결과 공유 | 활용 도구: ChatGPT, Claude, HWP, Excel',
    descEn: 'Scenario-based comprehensive practice & result sharing | Tools: ChatGPT, Claude, HWP, Excel',
    sections: [
      {
        titleKo: '종합 실습 시나리오',
        titleEn: 'Comprehensive Practice Scenario',
        contentKo: `**실습 시나리오: "2024학년도 2학기 학과 평가 준비"**

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
- 결과 차트 생성`,
        contentEn: `**Practice Scenario: "2nd Semester Department Evaluation Preparation"**

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
- Generate result charts`,
      },
      {
        titleKo: '실습 체크리스트 & 결과물 양식',
        titleEn: 'Practice Checklist & Output Templates',
        contentKo: `**실습 완료 체크리스트**

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
- 제출: 공유 폴더 또는 LMS 업로드`,
        contentEn: `**Practice Completion Checklist**

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
- Submit: Shared folder or LMS upload`,
      },
    ],
  },
];

/* ─── Category 3: 인사행정 자동화 (Day 2) ─── */
const HR_TOPICS: Topic[] = [
  {
    id: 'hr-ai',
    titleKo: '인사·근태 관리 AI 활용',
    titleEn: 'HR & Attendance AI Application',
    descKo: 'AI 기반 인사 업무 효율화, 근태 데이터 분석 | 활용 도구: ChatGPT, Claude, Excel',
    descEn: 'AI-based HR efficiency, attendance data analysis | Tools: ChatGPT, Claude, Excel',
    sections: [
      {
        titleKo: '인사 업무 AI 활용 영역',
        titleEn: 'AI Applications in HR',
        contentKo: `| 업무 영역 | AI 활용 방안 | 예상 효과 |
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
\`\`\``,
        contentEn: `| Area | AI Application | Expected Effect |
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
\`\`\``,
      },
      {
        titleKo: '면접 질문 & 평가 기준 생성',
        titleEn: 'Interview Questions & Evaluation Criteria',
        contentKo: `**면접 질문 생성 프롬프트**
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
\`\`\``,
        contentEn: `**Interview Question Generation Prompt**
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
\`\`\``,
      },
    ],
  },
  {
    id: 'hr-documents',
    titleKo: '인사 관련 문서 작성',
    titleEn: 'HR Document Creation',
    descKo: '채용공고, 인사발령, 근로계약서 AI 작성 | 활용 도구: ChatGPT, Claude, HWP',
    descEn: 'Job postings, personnel appointments, employment contracts with AI | Tools: ChatGPT, Claude, HWP',
    sections: [
      {
        titleKo: '인사 문서 작성 & 근로계약서',
        titleEn: 'HR Documents & Employment Contracts',
        contentKo: `**인사발령 통보문 프롬프트**
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
- 최종본은 반드시 법무팀 또는 인사 담당자 검수`,
        contentEn: `**Personnel Appointment Notice Prompt**
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
- Final version must be reviewed by legal team`,
      },
      {
        titleKo: '인사 문서 유형별 AI 작성 실습',
        titleEn: 'HR Document Type AI Writing Practice',
        contentKo: `**인사발령 유형별 프롬프트**

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
- 담당자는 사실 확인 후 직인 날인`,
        contentEn: `**Personnel Appointment Type Prompts**

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
- Staff verifies facts and applies official seal`,
      },
    ],
  },
  {
    id: 'attendance-excel',
    titleKo: '근태 데이터 Excel 분석',
    titleEn: 'Attendance Data Excel Analysis',
    descKo: '출퇴근 데이터 정리, 통계 분석, 보고서 생성 | 활용 도구: ChatGPT, Claude, Excel',
    descEn: 'Attendance data organization, statistics, report generation | Tools: ChatGPT, Claude, Excel',
    sections: [
      {
        titleKo: '출퇴근 데이터 정리와 분석',
        titleEn: 'Attendance Data Organization & Analysis',
        contentKo: `**출퇴근 데이터 정리 프롬프트**
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
| 월별 지각 건수 | \`=COUNTIFS(D:D,">="&DATE(2024,9,1),H:H,"지각")\` | 월별 지각 집계 |
| 개인별 초과근무 합계 | \`=SUMIFS(I:I,B:B,"홍길동")\` | 개인 초과근무 합산 |
| 부서별 출근율 | \`=COUNTIFS(C:C,"교무처",H:H,"<>결근")/COUNTIF(C:C,"교무처")\` | 출근 비율 |`,
        contentEn: `**Attendance Data Organization Prompt**
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
| Monthly late count | \`=COUNTIFS(D:D,">="&DATE(2024,9,1),H:H,"Late")\` | Monthly late tally |
| Individual overtime | \`=SUMIFS(I:I,B:B,"Hong")\` | Individual overtime total |
| Dept attendance rate | \`=COUNTIFS(C:C,"Academic",H:H,"<>Absent")/COUNTIF(C:C,"Academic")\` | Attendance ratio |`,
      },
      {
        titleKo: '피벗 테이블과 근태 차트',
        titleEn: 'Pivot Tables & Attendance Charts',
        contentKo: `**피벗 테이블 설정 가이드**

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
| 시간대별 출근 분포 | 히스토그램 | 30분 단위 구간 설정 |`,
        contentEn: `**Pivot Table Setup Guide**

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
| Clock-in distribution | Histogram | 30-min intervals |`,
      },
    ],
  },
  {
    id: 'hr-report',
    titleKo: '인사행정 보고자료 제작',
    titleEn: 'HR Report Presentation',
    descKo: '인사 현황 PPT, 통계 시각화, 경영진 보고자료 | 활용 도구: ChatGPT, Gamma, PowerPoint',
    descEn: 'HR status PPT, statistics visualization, executive reports | Tools: ChatGPT, Gamma, PowerPoint',
    sections: [
      {
        titleKo: '인사 데이터 시각화 & 스토리텔링',
        titleEn: 'HR Data Visualization & Storytelling',
        contentKo: `**인사 데이터 시각화 매핑**

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
- 긍정적 결과는 녹색, 주의 필요는 빨간색`,
        contentEn: `**HR Data Visualization Mapping**

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
- Positive results in green, caution in red`,
      },
      {
        titleKo: '경영진 보고자료 PPT 구조',
        titleEn: 'Executive Report PPT Structure',
        contentKo: `**인사 현황 보고 PPT 구조 (7슬라이드)**

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
\`\`\``,
        contentEn: `**HR Status Report PPT Structure (7 Slides)**

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
\`\`\``,
      },
    ],
  },
  {
    id: 'work-template',
    titleKo: '업무 템플릿 설계',
    titleEn: 'Work Template Design',
    descKo: 'AI 활용 반복 업무 템플릿, 프롬프트 라이브러리 구축 | 활용 도구: ChatGPT, Claude',
    descEn: 'AI-powered work templates, prompt library building | Tools: ChatGPT, Claude',
    sections: [
      {
        titleKo: '프롬프트 라이브러리 & 가이드라인',
        titleEn: 'Prompt Library & Guidelines',
        contentKo: `**업무 템플릿 설계 원칙**
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
| 저장 | 유용한 프롬프트는 공유 라이브러리에 등록 |`,
        contentEn: `**Template Design Principles**
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
| Storage | Register useful prompts in shared library |`,
      },
      {
        titleKo: '업무별 프롬프트 템플릿 모음',
        titleEn: 'Work-Specific Prompt Template Collection',
        contentKo: `**행정 업무 프롬프트 라이브러리**

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
[버전] v3 (2024-09-15)
[변경 내용] 결재 라인 자동 포함 조건 추가
[개선 효과] 후속 수정 50% 감소
[작성자] 홍길동 (교무처)
\`\`\``,
        contentEn: `**Administrative Work Prompt Library**

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
[Version] v3 (2024-09-15)
[Changes] Added auto-include approval chain condition
[Effect] 50% reduction in follow-up edits
[Author] Hong (Academic Affairs)
\`\`\``,
      },
    ],
  },
  {
    id: 'work-automation',
    titleKo: '업무 자동화 워크플로우',
    titleEn: 'Work Automation Workflow',
    descKo: '반복 업무 자동화 설계, AI 연계 워크플로우 | 활용 도구: ChatGPT, Claude, Excel',
    descEn: 'Repetitive task automation design, AI-integrated workflow | Tools: ChatGPT, Claude, Excel',
    sections: [
      {
        titleKo: '워크플로우 설계 & ROI',
        titleEn: 'Workflow Design & ROI',
        contentKo: `**자동화 대상 업무 선정 기준**

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
\`\`\``,
        contentEn: `**Automation Target Selection Criteria**

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
\`\`\``,
      },
      {
        titleKo: '자동화 시나리오 실습',
        titleEn: 'Automation Scenario Practice',
        contentKo: `**자동화 설계 실습: 나의 반복 업무 분석**

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
| Perplexity | AI 검색 | 정보 수집, 벤치마킹 |`,
        contentEn: `**Automation Design Practice: Analyze My Repetitive Tasks**

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
| Perplexity | AI search | Info gathering, benchmarking |`,
      },
    ],
  },
  {
    id: 'hr-practice',
    titleKo: '인사행정 종합 실습',
    titleEn: 'HR Administration Practice',
    descKo: '인사행정 시나리오 종합 실습, 포트폴리오 완성 | 활용 도구: ChatGPT, Claude, HWP, Excel, PPT',
    descEn: 'HR scenario comprehensive practice, portfolio completion | Tools: ChatGPT, Claude, HWP, Excel, PPT',
    sections: [
      {
        titleKo: '인사행정 종합 실습 시나리오',
        titleEn: 'HR Administration Practice Scenario',
        contentKo: `**실습 시나리오: "2024년 하반기 인사행정 업무 자동화"**

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
- ROI 계산 포함`,
        contentEn: `**Practice Scenario: "2024 H2 HR Administration Automation"**

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
- Include ROI calculation`,
      },
      {
        titleKo: '포트폴리오 완성 가이드',
        titleEn: 'Portfolio Completion Guide',
        contentKo: `**포트폴리오 구성 요소**

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
- [ ] 파일명 규칙을 따랐는가?`,
        contentEn: `**Portfolio Components**

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
- [ ] Were file naming rules followed?`,
      },
    ],
  },
  {
    id: 'results-sharing',
    titleKo: '결과 공유 및 마무리',
    titleEn: 'Results Sharing & Wrap-up',
    descKo: '실습 결과 발표, 피드백, 향후 활용 계획',
    descEn: 'Practice result presentations, feedback, future application plans',
    sections: [
      {
        titleKo: '실습 결과 발표 가이드',
        titleEn: 'Practice Results Presentation Guide',
        contentKo: `**발표 구조 (5분 기준)**
1. **도입** (30초): 본인 소속/이름, 선택 업무 소개
2. **과정** (1분): AI 활용 과정, 사용한 도구와 프롬프트
3. **결과물** (2분): 주요 결과물 시연 (공문서, PPT, Excel 등)
4. **효과** (1분): 기존 방식 대비 개선 효과 (시간 절감, 품질 향상)
5. **마무리** (30초): 향후 적용 계획

**발표 팁**
- 핵심 결과물을 화면에 보여주면서 설명
- "기존 방식으로 2시간 → AI 활용 30분" 같은 비교 강조
- 실패 사례도 공유 (어떤 프롬프트가 잘 안 됐는지)
- 동료의 발표에서 배운 점 메모`,
        contentEn: `**Presentation Structure (5 minutes)**
1. **Introduction** (30s): Department/name, chosen task
2. **Process** (1min): AI usage process, tools and prompts used
3. **Results** (2min): Key deliverables demo (documents, PPT, Excel)
4. **Impact** (1min): Improvement vs traditional (time saved, quality)
5. **Wrap-up** (30s): Future application plans

**Presentation Tips**
- Show key deliverables on screen while explaining
- Emphasize comparisons like "2 hours traditional → 30 min with AI"
- Share failures too (which prompts didn't work well)
- Take notes on colleagues' presentations`,
      },
      {
        titleKo: 'AI 활용 향후 계획과 학습 체크리스트',
        titleEn: 'Future AI Plans & Learning Checklist',
        contentKo: `**AI 활용 향후 계획 수립**
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
- [ ] 업무에 AI를 적용할 구체적 계획을 수립했다`,
        contentEn: `**Future AI Application Planning**
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
- [ ] Have established a specific plan for applying AI to work`,
      },
    ],
  },
];

/* ─── 3 Categories ─── */
const CATEGORIES: Category[] = [
  {
    id: 'basic',
    titleKo: '기본학습자료',
    titleEn: 'Basic Materials',
    descKo: '생성형 AI 개념과 프롬프트 엔지니어링 기초',
    descEn: 'Generative AI concepts and prompt engineering basics',
    topics: BASIC_TOPICS,
  },
  {
    id: 'document',
    titleKo: '문서행정 자동화',
    titleEn: 'Document Automation',
    descKo: '1일차 - 공문서, PPT, Excel 자동화',
    descEn: 'Documents, PPT, Excel automation',
    topics: DOC_TOPICS,
  },
  {
    id: 'hr',
    titleKo: '인사행정 자동화',
    titleEn: 'HR Automation',
    descKo: '인사·근태, 보고자료, 업무자동화',
    descEn: 'HR, attendance, reports, workflow',
    topics: HR_TOPICS,
  },
];

/* ─── Component ─── */
export default function LearningMaterials() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const { category } = useParams<{ category: string }>();
  const location = useLocation();

  const cat = CATEGORIES.find(c => c.id === category) || CATEGORIES[0];

  // Hash-based scroll
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.hash, category]);

  return (
    <div className="learning-page">
      <SEOHead title={isKo ? cat.titleKo : cat.titleEn} />

      <div className="learning-layout">
        {/* ─── Left Sidebar ─── */}
        <aside className="learning-sidebar">
          <div className="sidebar-inner">
            <div className="sidebar-header">
              {isKo ? cat.titleKo : cat.titleEn}
            </div>

            {/* Topics */}
            <div className="sidebar-group">
              <div className="sidebar-group-title">{isKo ? '학습 주제' : 'Topics'}</div>
              {cat.topics.map(topic => (
                <a
                  key={topic.id}
                  href={`#${topic.id}`}
                  className="sidebar-item"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(topic.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  {isKo ? topic.titleKo : topic.titleEn}
                </a>
              ))}
            </div>

            {/* Quick Links */}
            <div className="sidebar-group">
              <div className="sidebar-group-title">{isKo ? '바로가기' : 'Quick Links'}</div>
              <Link to="/tools" className="sidebar-item">
                {isKo ? '도구 가이드' : 'Tool Guide'}
              </Link>
              <Link to="/community" className="sidebar-item">
                {isKo ? '커뮤니티' : 'Community'}
              </Link>
            </div>
          </div>
        </aside>

        {/* ─── Main Content (all expanded) ─── */}
        <div className="learning-content">
          <div className="learning-content-header">
            <h1>{isKo ? cat.titleKo : cat.titleEn}</h1>
            <p>{isKo ? cat.descKo : cat.descEn}</p>
          </div>

          {cat.topics.map(topic => (
            <section key={topic.id} id={topic.id} className="topic-section">
              <div className="topic-header">
                <div className="topic-header-text">
                  <h2>{isKo ? topic.titleKo : topic.titleEn}</h2>
                  <p>{isKo ? topic.descKo : topic.descEn}</p>
                </div>
              </div>

              {/* All sections expanded */}
              <div className="topic-content">
                {topic.sections.map((section, idx) => (
                  <div key={idx} className="section-block">
                    <h3 className="section-block-title">{isKo ? section.titleKo : section.titleEn}</h3>
                    <div className="section-block-body">
                      {renderContent(isKo ? section.contentKo : section.contentEn)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Render helpers ─── */
function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith('```')) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(<pre key={`code-${i}`} className="code-block"><code>{codeLines.join('\n')}</code></pre>);
      continue;
    }

    // Table rows
    if (line.startsWith('|')) {
      const tableRows: string[] = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        tableRows.push(lines[i]);
        i++;
      }
      elements.push(renderTable(tableRows, `tbl-${i}`));
      continue;
    }

    // Bold heading line
    if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(<h4 key={i} dangerouslySetInnerHTML={{ __html: fmt(line) }} />);
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith('>')) {
      elements.push(<blockquote key={i} dangerouslySetInnerHTML={{ __html: fmt(line.slice(1).trim()) }} />);
      i++;
      continue;
    }

    // Checklist
    if (line.startsWith('- [')) {
      elements.push(<div key={i} className="checklist-item" dangerouslySetInnerHTML={{ __html: fmt(line) }} />);
      i++;
      continue;
    }

    // Unordered list
    if (line.startsWith('- ') || line.startsWith('* ')) {
      elements.push(<li key={i} dangerouslySetInnerHTML={{ __html: fmt(line.slice(2)) }} />);
      i++;
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      elements.push(<li key={i} className="ol-item" dangerouslySetInnerHTML={{ __html: fmt(line.replace(/^\d+\.\s/, '')) }} />);
      i++;
      continue;
    }

    // Empty line
    if (!line.trim()) {
      i++;
      continue;
    }

    // Normal paragraph
    elements.push(<p key={i} dangerouslySetInnerHTML={{ __html: fmt(line) }} />);
    i++;
  }

  return elements;
}

function renderTable(rows: string[], key: string) {
  const parsed = rows
    .filter(r => !r.trim().match(/^\|[-:\s|]+\|$/))
    .map(r => r.split('|').filter(c => c.trim()).map(c => c.trim()));

  if (parsed.length === 0) return null;
  const header = parsed[0];
  const body = parsed.slice(1);

  return (
    <table key={key}>
      <thead>
        <tr>{header.map((h, i) => <th key={i} dangerouslySetInnerHTML={{ __html: fmt(h) }} />)}</tr>
      </thead>
      <tbody>
        {body.map((row, ri) => (
          <tr key={ri}>{row.map((cell, ci) => <td key={ci} dangerouslySetInnerHTML={{ __html: fmt(cell) }} />)}</tr>
        ))}
      </tbody>
    </table>
  );
}

function fmt(t: string): string {
  return t
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/- \[ \]/g, '<span class="check-box">&#9744;</span>')
    .replace(/- \[x\]/g, '<span class="check-box checked">&#9745;</span>');
}
