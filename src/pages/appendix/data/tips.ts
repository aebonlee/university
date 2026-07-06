/** 부록 — 실전 팁 */
export default {
  id: 'tips',
  icon: 'fa-lightbulb',
  title: '실전 팁',
  titleEn: 'Practical Tips',
  sections: [
    {
      title: '좋은 답을 얻는 프롬프트 팁',
      titleEn: 'Tips for Better Prompts',
      content: `같은 AI라도 어떻게 묻느냐에 따라 결과가 크게 달라집니다.

### 1) 역할을 정해주기
"너는 대학 행정 25년 경력 전문가야"처럼 역할을 주면 답의 전문성이 올라갑니다.

### 2) 맥락을 충분히
누구에게, 어떤 상황에서, 왜 필요한지 함께 적으세요.

### 3) 출력 형식을 지정
"표로", "5단계 목록으로", "300자 이내로"처럼 형식을 못 박으면 정리된 답이 나옵니다.

### 4) 예시를 한두 개 보여주기(Few-shot)
원하는 스타일의 예시를 주면 AI가 그 결을 따라옵니다.

### 5) 한 번에 완성하려 하지 말기
초안 → "이 부분을 더 공손하게" → "표로 바꿔줘"처럼 **대화로 다듬는 것**이 가장 빠릅니다.

> 만능 템플릿: **[역할] + [맥락] + [요청] + [형식] + [조건]**`,
      contentEn: `The same AI gives very different results depending on how you ask.

1. **Assign a role** — "You are a 25-year admin expert."
2. **Give context** — who, when, why.
3. **Specify format** — "as a table", "5-step list", "under 300 chars".
4. **Show 1–2 examples (few-shot)**.
5. **Iterate** — draft → "make this more polite" → "turn into a table".

> Universal template: **[Role] + [Context] + [Request] + [Format] + [Constraints]**`,
    },
    {
      title: '조건을 한 줄로 조합하기',
      titleEn: 'Stack Conditions in One Line',
      content: `여러 요구사항(문체·표현·분량·형식)을 한 문장에 함께 넣으면, 여러 번 고칠 필요 없이 **한 번에** 원하는 결과가 나옵니다.

### 한 줄 조합 예시
> "이 내용을 격식 있는 **공문체(개조식·하십시오체)**로, **번역투 없이**, **공백 포함 500자 이내**로 정리해줘."

이 한 문장에는 4가지 조건이 들어 있습니다.

| 조건 유형 | 이 예시 | 바꿔 쓸 수 있는 표현 |
|-----------|---------|----------------------|
| **문체·어조** | 공문체(개조식·하십시오체) | 정중한 존댓말 / 보고체 / 안내문체 |
| **표현 품질** | 번역투 없이 | 자연스러운 한국어로 / 군더더기 없이 |
| **분량** | 공백 포함 500자 이내 | 3문장 이내 / A4 반 페이지 / 5개 항목으로 |
| **형식** | ('정리해줘') | 표로 / 번호 목록으로 / 개조식 불릿으로 |

### 공문서에 자주 쓰는 조합
- "위 내용을 **기안문 형식**으로, **개조식**으로, **핵심만** 정리해줘"
- "**정중한 통보문**으로, **수신 → 제목 → 본문 → 붙임** 순서로 작성해줘"
- "**표로**, **부서·항목·금액** 3열로, **합계 행 포함**해 정리해줘"

> 조건이 많아 헷갈리면 **[문체] → [표현] → [분량] → [형식]** 순서로 이어 붙이면 빠짐없이 지정할 수 있습니다.`,
      contentEn: `Stacking several requirements (tone, style, length, format) into one sentence gets you the result **in one shot** — no back-and-forth edits.

### One-line example
> "Rewrite this in a formal official tone (bullet-point, deferential), **without translationese**, **within 500 characters including spaces**."

This single sentence carries four conditions:

| Type | In the example | Alternatives |
|------|----------------|--------------|
| **Tone/style** | formal official (bullet/deferential) | polite / report style / notice style |
| **Quality** | no translationese | natural Korean / no filler |
| **Length** | ≤ 500 chars incl. spaces | ≤ 3 sentences / half A4 / 5 items |
| **Format** | ("summarize") | as a table / numbered list / bullets |

### Common stacks for official documents
- "Rewrite as a **proposal (기안문)**, bullet-point, essentials only."
- "As a **polite notice**, in order: recipient → title → body → attachments."
- "As a **table**, 3 columns (dept·item·amount), with a total row."

> When there are many, stack them in order **[tone] → [quality] → [length] → [format]** so nothing is missed.`,
    },
    {
      title: '환각(거짓 정보) 줄이기',
      titleEn: 'Reducing Hallucinations',
      content: `AI는 모르는 것도 자신 있게 답할 수 있습니다. 다음 습관으로 위험을 줄이세요.

- **"확실하지 않으면 모른다고 말해줘"** 를 프롬프트에 넣기
- 숫자·날짜·인용·규정은 **반드시 원문으로 재확인**
- 자료가 있으면 **파일을 첨부**하고 "첨부 내용에 근거해서만 답해줘"라고 지시
- "근거 조항/출처를 함께 보여줘"라고 요청
- 중요한 문서는 사람이 **최종 검토** 후 사용

> 규정·법령·통계 수치는 AI 답을 "초안"으로만 쓰고, 공식 출처로 검증하세요.`,
      contentEn: `AI can answer confidently even when wrong. Reduce risk with these habits.

- Add "say you don't know if unsure" to your prompt.
- Re-verify numbers, dates, quotes, and rules against the source.
- Attach files and say "answer only based on the attachment."
- Ask it to "show the supporting clause/source."
- Always do a final human review for important documents.`,
    },
    {
      title: '파일·데이터 활용 팁',
      titleEn: 'Working with Files & Data',
      content: `- 긴 PDF·한글 문서는 통째로 올리고 "OO 관련 조항만 요약해줘"
- 엑셀 표는 붙여넣고 "경향 3가지, 이상한 값 찾아줘"
- 표를 만들 땐 "엑셀에 붙여넣을 수 있게 탭으로 구분해줘"
- 코드를 받을 땐 "각 줄에 주석을 달아 초보도 이해하게"
- 결과가 길면 "핵심만 3줄로 먼저 요약하고 자세히"

> 개인정보·민감정보는 가능하면 **가린 뒤** 올리고, 교내 정책을 따르세요.`,
      contentEn: `- Upload long PDFs and ask "summarize only the clauses about X."
- Paste Excel tables and ask "find 3 trends and any odd values."
- For tables: "use tab-separated so I can paste into Excel."
- For code: "add comments on each line for beginners."
- For long output: "3-line summary first, then details."

> Mask personal/sensitive info before uploading; follow campus policy.`,
    },
    {
      title: 'AI가 만든 문서의 서식 기호 (한글·워드)',
      titleEn: 'Formatting Marks in AI-made Documents',
      content: `AI가 만들어 준 한글(HWP)·워드(DOCX) 문서를 열면 글자가 아닌 **서식 기호**가 보일 때가 있습니다. 대부분 **화면에만 보이고 인쇄되지 않는** 표시이니 당황하지 마세요.

### 무엇이라 부르나
| 화면에 보이는 것 | 이름(정식 명칭) | 인쇄 여부 |
|------------------|-----------------|-----------|
| ¶ · → (문단·공백·탭) | **편집 기호**(비인쇄 서식 기호) | 인쇄 안 됨 |
| 제목 왼쪽의 작은 **■** | "**다음 단락과 함께 / 줄 나눔 방지**" 단락 속성 표시 | 인쇄 안 됨 |
| 번호·제목 앞 회색 **[ ]** 또는 **⌶** | **숨은 책갈피**(목차·상호참조 앵커, _Toc·_Ref) | 인쇄 안 됨 |
| **□**(네모 안에 코드) | **두부 글자** = 글꼴이 표현 못 하는 특수·제어문자 | **인쇄에 남음** |

### 제거·정리 방법
- **편집 기호 켜고 끄기**: \`Ctrl+Shift+8\` (또는 홈 탭의 ¶ 버튼) — 전체 표시/숨김
- **제목 왼쪽 ■ 없애기**: 제목 스타일 수정 → 단락 → "줄 및 페이지 나눔"에서 **[다음과 함께]·[페이지 나눔 방지] 체크 해제**
- **숨은 책갈피 안 보이게**: \`파일 → 옵션 → 고급 → 책갈피 표시\` 체크 해제 (※ 자동 목차가 있으면 표시만 끄고 \`_Toc…\` 삭제는 금지 — 목차가 깨집니다)
- **□ 두부 글자 없애기**: \`Ctrl+H(바꾸기)\`로 해당 특수문자를 찾아 삭제, 또는 번호 서식을 정상 번호로 재지정

### AI에게 요청할 때 (예방)
- "**표식·제어문자 없이 깔끔한 서식**으로, 제목은 스타일만 쓰고 특수기호는 넣지 말아줘"
- 받은 뒤 \`Ctrl+Shift+8\`로 편집 기호를 한 번 확인하고, **인쇄 미리보기**로 실제 인쇄 모습을 점검

> 대부분은 인쇄에 안 나오는 화면 표시입니다. **인쇄에도 남는 건 □(두부 글자)뿐**이니, 그것만 찾아 지우면 됩니다.`,
      contentEn: `When you open an AI-made HWP/DOCX file, you may see **formatting marks** that aren't actual text. Most are **screen-only and don't print** — no need to worry.

### What they're called
| What you see | Name | Prints? |
|--------------|------|---------|
| ¶ · → (paragraph/space/tab) | **Formatting marks** (non-printing) | No |
| Small **■** left of a heading | "**Keep with next / Keep lines together**" paragraph property | No |
| Gray **[ ]** or **⌶** before number/heading | **Hidden bookmark** (TOC/cross-ref anchor, _Toc·_Ref) | No |
| **□** (box with a code) | **Tofu** = a special/control char the font can't render | **Yes** |

### How to remove
- **Toggle marks**: \`Ctrl+Shift+8\` (or the ¶ button) — show/hide all.
- **Remove ■**: edit the heading style → Paragraph → Line and Page Breaks → uncheck **Keep with next / Keep lines together**.
- **Hide bookmarks**: \`File → Options → Advanced → Show bookmarks\` off (if you have an auto TOC, only hide — don't delete \`_Toc…\`, it breaks the TOC).
- **Remove □ tofu**: use \`Ctrl+H\` to find/delete the special character, or reset the numbering format.

### Ask the AI (prevention)
- "Use **clean formatting with no marks or control characters**; use heading styles only, no special symbols."
- After receiving, toggle marks with \`Ctrl+Shift+8\` and check **Print Preview**.

> Most are screen-only. **Only □ (tofu) actually prints** — find and delete just those.`,
    },
    {
      title: '보안·윤리·저작권',
      titleEn: 'Security, Ethics, Copyright',
      content: `- 학생·직원 개인정보(주민번호·연락처·인사기록)는 교내 개인정보 정책에 맞게 신중히 다루기
- AI가 만든 공문·인사 자료도 **사실·규정 부합 여부를 검토**한 뒤 사용
- 대외로 나가는 문서는 기관의 **AI 활용·정보보안 지침**을 확인
- 생성 이미지·자료의 **저작권/라이선스** 확인
- 공공 AI 서비스에 입력한 내용은 외부로 나갈 수 있으니, **민감정보는 가리거나 최소화**한 뒤 활용

> "편리함"과 "책임"은 함께 갑니다. AI는 도구, 판단은 사람.`,
      contentEn: `- Handle student/staff PII (IDs, contacts, HR records) per campus privacy policy.
- Review AI-made documents for accuracy and compliance with regulations.
- Follow your institution's AI-use and information-security guidelines for outgoing documents.
- Check copyright/license of generated images/materials.
- Content entered into public AI may leave your org — mask or minimize sensitive data.`,
    },
  ],
};
