/** 부록 — 용어 해설 (문서·인사행정 과정 맞춤) */
export default {
  id: 'glossary',
  icon: 'fa-book-bookmark',
  title: '용어 해설',
  titleEn: 'Glossary',
  sections: [
    {
      title: '생성형 AI 기본 용어',
      titleEn: 'Generative AI Basics',
      content: `교육에서 자주 등장하는 핵심 용어를 모았습니다. 모르는 말이 나오면 여기에서 찾아보세요.

| 용어 | 쉬운 설명 |
|------|-----------|
| **생성형 AI(Generative AI)** | 글·이미지·코드 등 새로운 결과물을 "만들어내는" 인공지능. 분류·예측 중심의 기존 AI와 달리 창작에 강합니다. |
| **LLM(거대 언어모델)** | 방대한 텍스트로 학습한 언어 AI. ChatGPT, Claude, Gemini의 두뇌에 해당합니다. |
| **프롬프트(Prompt)** | AI에게 주는 지시·질문. 좋은 프롬프트가 좋은 답을 만듭니다. |
| **토큰(Token)** | AI가 글을 처리하는 최소 단위(대략 단어 조각). 사용량·요금의 기준이 됩니다. |
| **환각(Hallucination)** | AI가 사실이 아닌 내용을 그럴듯하게 지어내는 현상. **항상 사실 확인이 필요**합니다. |
| **맥락창(Context Window)** | AI가 한 번에 기억할 수 있는 대화·문서의 분량. 너무 길면 앞부분을 잊습니다. |
| **멀티모달(Multimodal)** | 글뿐 아니라 이미지·표·파일까지 함께 이해하는 능력. |
| **맞춤 GPT** | 특정 업무(예: 공문 작성)에 맞게 지시문·서식을 미리 넣어 만든 전용 도우미. |

> 핵심 한 줄: AI는 **똑똑한 조수**일 뿐, 최종 판단과 사실 확인은 사람의 몫입니다.`,
      contentEn: `Key terms that appear throughout the training.

| Term | Plain explanation |
|------|-------------------|
| **Generative AI** | AI that *creates* new text, images, or code. |
| **LLM** | Large Language Model — the "brain" behind ChatGPT, Claude, Gemini. |
| **Prompt** | The instruction/question you give the AI. |
| **Token** | Smallest unit the AI processes; basis for usage/billing. |
| **Hallucination** | When AI confidently makes up false facts — always verify. |
| **Context Window** | How much the AI can remember at once. |
| **Multimodal** | Ability to understand images/tables/files, not just text. |
| **Custom GPT** | A dedicated assistant pre-loaded with instructions/templates (e.g., document writing). |

> One line: AI is a smart assistant — final judgment and fact-checking are up to you.`,
    },
    {
      title: '문서·엑셀 실무 용어',
      titleEn: 'Document & Excel Terms',
      content: `공문서 작성과 엑셀 데이터 실습에서 자주 쓰는 용어입니다.

| 용어 | 쉬운 설명 |
|------|-----------|
| **공문서** | 기관이 공식적으로 주고받는 문서. 기안문·통보문·협조문·회신문 등이 있습니다. |
| **기안문** | 업무를 기획·제안하며 결재를 올리는 문서. |
| **결재(전자결재)** | 문서에 대해 권한자가 순서대로 검토·승인하는 절차. |
| **HWP(한글)** | 공공기관 표준 문서 편집 프로그램. AI 초안을 HWP 서식으로 옮겨 마무리합니다. |
| **스필(Spill) 함수** | FILTER·UNIQUE처럼 결과가 여러 셀로 자동 확장되는 엑셀 함수(M365/2021+ 전용). |
| **피벗 테이블** | 표 데이터를 행·열·값으로 재구성해 집계하는 엑셀 도구. |
| **VLOOKUP / XLOOKUP** | 다른 표(시트)에서 값을 찾아오는 조회 함수. |
| **조건부 서식** | 조건에 맞는 셀을 색·아이콘으로 자동 강조하는 기능. |
| **결측치 / 이상치** | 비어 있는 값 / 다른 값과 동떨어진 극단값. 집계 전에 처리해야 합니다. |
| **데이터 정제** | 중복·공백·형식 불일치를 정리해 분석 가능한 상태로 만드는 일. |

> 표를 만들 땐 AI에게 "엑셀에 붙여넣게 탭으로 구분해줘"라고 하면 바로 옮길 수 있습니다.`,
      contentEn: `Terms used in official-document writing and Excel practice.

| Term | Plain explanation |
|------|-------------------|
| **Official document** | Documents an institution exchanges formally (proposal/notice/cooperation/response). |
| **Proposal (기안문)** | A document that plans/suggests work and goes up for approval. |
| **Approval line** | The ordered review/approval by authorized signers. |
| **HWP** | The standard document editor in public offices; finalize AI drafts here. |
| **Spill function** | FILTER/UNIQUE etc. that expand into multiple cells (M365/Excel 2021+). |
| **Pivot table** | Excel tool that reshapes/aggregates table data. |
| **VLOOKUP / XLOOKUP** | Lookup functions that pull values from another sheet. |
| **Conditional formatting** | Auto-highlights cells (color/icon) that meet a condition. |
| **Missing / outlier** | Empty value / extreme value; handle before aggregating. |
| **Data cleaning** | Removing duplicates/blanks/format issues to make data analyzable. |

> For tables, ask the AI to "use tab-separated output so I can paste into Excel."`,
    },
    {
      title: '인사·근태·행정 용어',
      titleEn: 'HR / Attendance / Admin',
      content: `인사행정 실습에서 등장하는 용어입니다.

| 용어 | 쉬운 설명 |
|------|-----------|
| **인사발령** | 임용·전보·승진 등 인사 이동을 공식화하는 조치. |
| **전보 / 승진 / 임용** | 부서 이동 / 상위 직급 이동 / 신규 채용. |
| **근태(勤怠)** | 출퇴근·지각·결근·연차 등 근무 상황 기록. |
| **초과근무** | 정규 근무시간을 넘겨 일한 시간(정산·수당의 기준). |
| **연차(연차유급휴가)** | 근로자에게 부여되는 유급 휴가일수. 사용률·잔여 관리 대상. |
| **위촉** | 위원회 등에 내·외부 인사를 임명하는 것(위촉장 발급). |
| **근로계약서** | 근로 조건(기간·급여·근무시간·직무)을 명시한 계약 문서. ※ 완성본은 반드시 법무 검토. |
| **산출 근거** | 예산·수당 금액이 왜 그 액수인지 설명하는 계산 근거. |
| **집행률** | 편성 예산 대비 실제로 쓴 비율. |
| **정산·증빙** | 집행한 내역을 영수증 등 증거와 함께 정리·보고하는 일. |

> 개인정보(주민번호·연락처 등)가 담긴 인사·근태 자료는 **가린 뒤** AI에 올리고, 교내 개인정보 정책을 따르세요.`,
      contentEn: `Terms that appear in HR-administration practice.

| Term | Plain explanation |
|------|-------------------|
| **Appointment (인사발령)** | Formalizing HR moves: hire, transfer, promotion. |
| **Transfer / Promotion / Hire** | Dept move / higher rank / new hiring. |
| **Attendance (근태)** | Records of arrival/lateness/absence/leave. |
| **Overtime** | Hours beyond standard work time (basis for settlement/allowance). |
| **Annual leave** | Paid leave days; manage usage rate and remaining. |
| **Commission (위촉)** | Appointing internal/external members to a committee. |
| **Employment contract** | Document stating terms (period/salary/hours/role). Final version needs legal review. |
| **Calculation basis** | Why a budget/allowance line is that exact amount. |
| **Execution rate** | Share of budget actually spent vs planned. |
| **Settlement/evidence** | Reporting spending with receipts and proof. |

> Mask personal data (ID numbers, contacts) in HR/attendance files before uploading; follow campus privacy policy.`,
    },
  ],
};
