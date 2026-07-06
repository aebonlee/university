/** 부록 — 함께 공부할 자료 (문서·인사행정 과정 맞춤) */
export default {
  id: 'resources',
  icon: 'fa-graduation-cap',
  title: '함께 공부할 자료',
  titleEn: 'Study Together',
  sections: [
    {
      title: '추천 학습 순서',
      titleEn: 'Recommended Learning Path',
      content: `교육이 끝난 뒤에도 스스로 이어서 공부할 수 있도록 순서를 제안합니다.

### 1단계 — 기초 다지기
1. \`기본학습\`에서 생성형 AI 이해와 프롬프트(RCF) 기본 익히기
2. ChatGPT·Claude 등에 매일 1가지 업무를 맡겨보기(메일 다듬기, 요약 등)
3. \`프롬프트 실습\`에서 **작성 → 자동 채점(SCORE) → 개선**을 반복

### 2단계 — 업무별 심화
| 담당 | 다음에 해볼 것 |
|------|---------------|
| 문서행정 | 자주 쓰는 공문(기안·통보·협조·회신)을 프롬프트 템플릿으로 만들기 |
| 인사행정 | 채용·발령·근태 문서 1건을 AI로 작성하고 검토 체크리스트 적용 |
| 공통 | 반복 업무 1개를 골라 엑셀 수식·피벗까지 한 흐름으로 자동화 |

### 3단계 — 나만의 자산 만들기
- 효과 본 프롬프트를 **부서 공용 템플릿**으로 저장·공유
- 자주 하는 업무는 **맞춤 GPT**로 만들어 두기

> 가장 빠른 성장법은 **내 실제 업무를 소재로** 매일 조금씩 써보는 것입니다.`,
      contentEn: `A path to keep learning after the course ends.

**Stage 1 — Foundations**
1. Learn generative AI and the RCF prompt basics in Basics.
2. Give ChatGPT/Claude one daily task (polish an email, summarize, etc.).
3. In Prompt Lab, repeat write → auto-score (SCORE) → improve.

**Stage 2 — By duty**
| Role | Next step |
|------|-----------|
| Documents | Templatize your common documents (proposal/notice/cooperation/response). |
| HR | Write one HR document with AI and apply the review checklist. |
| Common | Automate one repetitive task end-to-end incl. Excel formulas/pivots. |

**Stage 3 — Build your assets**
- Save effective prompts as shared team templates.
- Turn frequent tasks into a Custom GPT.

> Fastest growth: practice a little every day on your real work.`,
    },
    {
      title: '분야별 더 알아보기',
      titleEn: 'Go Deeper by Topic',
      content: `더 공부하고 싶을 때 살펴볼 주제들입니다. (검색어로도 활용하세요)

### 프롬프트·생성형 AI
- 프롬프트 6원칙, 역할·맥락·형식(RCF), 사고연쇄(Chain of Thought), 맞춤 GPT 설계

### 공문서·보고서
- 공문 서식과 문체, 기안문·통보문·협조문·회신문 작성법, 보고서 구조화, HWP 편집

### 발표자료(PPT)
- 슬라이드 구조 설계, 스토리텔링, 시각화·차트 선택, Gamma·Canva 활용

### 엑셀·데이터 실무
- 조건부 집계 함수, 피벗 테이블, VLOOKUP/XLOOKUP, 조건부 서식, 데이터 정제

### 인사·근태 실무
- 채용·인사발령 문서, 근로계약 유의사항, 근태 집계·분석, 개인정보 보호

> 각 주제를 AI에게 "행정직원 초보자용 30분 학습 계획으로 짜줘"라고 부탁해보세요.`,
      contentEn: `Topics to explore further (also usable as search terms).

- **Prompting / GenAI:** 6 principles, RCF, chain-of-thought, custom GPTs
- **Documents & reports:** official formats & tone, proposal/notice/cooperation/response, HWP editing
- **Presentations:** slide structure, storytelling, chart choice, Gamma/Canva
- **Excel & data:** conditional aggregation, pivots, VLOOKUP/XLOOKUP, conditional formatting, cleaning
- **HR & attendance:** hiring/appointment docs, contract cautions, attendance analysis, privacy

> Ask AI to "make a 30-minute beginner study plan for an admin staff member" on any topic.`,
    },
    {
      title: '혼자서도 잘 하는 연습법',
      titleEn: 'How to Practice Solo',
      content: `- **하루 1프롬프트**: 오늘 한 업무 하나를 AI로 다시 해보기
- **비교 연습**: 막 쓴 프롬프트 vs RCF로 구조화한 프롬프트 결과를 나란히 비교
- **평가 습관**: 만든 결과를 "5점 척도로 평가하고 개선점 알려줘"로 점검(\`프롬프트 실습\` 활용)
- **동료와 공유**: 좋은 프롬프트·맞춤 GPT를 팀과 나누기
- **기록**: 효과 본 프롬프트를 메모해 두면 부서의 자산이 됩니다

> 막히면 언제든 \`부록 > 용어 해설\`과 \`실전 팁\`으로 돌아오세요.`,
      contentEn: `- **One prompt a day:** redo one task with AI.
- **Compare:** raw prompt vs RCF-structured prompt, side by side.
- **Evaluate:** ask AI to "score this 1–5 and suggest improvements" (use Prompt Lab).
- **Share:** good prompts/custom GPTs with your team.
- **Record:** keep prompts that worked — they become team assets.

> Stuck? Come back to Appendix → Glossary and Practical Tips.`,
    },
  ],
};
