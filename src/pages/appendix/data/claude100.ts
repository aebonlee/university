/** 부록 — 클로드 활용 100가지 */
export default {
  id: 'claude-100',
  icon: 'fa-wand-magic-sparkles',
  title: '클로드 활용 100가지',
  titleEn: '100 Claude Tips',
  sections: [
    {
      title: '프롬프트 기본기 (01–15)',
      titleEn: 'Prompt Basics (01–15)',
      content: `> 클로드를 잘 쓰는 사람들의 공통점은 첫 문장부터 다릅니다. 기본기가 쌓이면 나머지는 자연스럽게 따라옵니다.

#### 01. 역할 먼저 선언하기
"너는 마케팅 전문가야"처럼 역할을 먼저 선언하면 답변의 깊이와 톤이 확연히 달라집니다. 그냥 질문하는 것과 역할을 주고 질문하는 것은 결과물 품질 차이가 납니다.<br>**예시:** "너는 20년 경력의 브랜드 마케터야. 신제품 출시 보도자료를 정중한 톤으로 400자 이내로 써줘."

#### 02. 출력 형식 미리 지정하기
"표로 정리해줘", "번호 매겨서 써줘", "불릿 포인트로"처럼 원하는 형식을 먼저 말하세요. 나중에 다시 요청하는 수고를 덜 수 있습니다.<br>**예시:** "우리 부서 3개 팀의 올해 목표를 팀명·목표·담당자 3열 표로 정리해줘."

#### 03. 길이를 명시하기
"3줄로 요약해줘", "500자 이내로", "1페이지 분량으로"처럼 길이 기준을 주면 불필요하게 길거나 짧은 답변을 피할 수 있습니다.<br>**예시:** "이 논문 초록을 핵심만 3문장으로 요약해줘."

#### 04. 예시 하나 보여주기
원하는 결과물의 샘플을 하나만 보여줘도 정확도가 크게 오릅니다. 말로 설명하기 어려운 뉘앙스나 구조는 예시가 훨씬 빠릅니다.<br>**예시:** "이런 느낌으로 써줘 — '오늘도 수고했어요, 딱 5분만 볼까요?' 이 톤으로 공지 3개 만들어줘."

#### 05. "모르면 모른다고 해" 명령어
클로드는 모르는 내용도 그럴듯하게 답하는 경향이 있습니다. "확실하지 않으면 모른다고 표시해줘"를 붙이면 환각(hallucination) 위험을 줄일 수 있습니다.<br>**예시:** "이 수치의 출처를 알려주되, 확실하지 않으면 '불확실'이라고 먼저 표시해줘."

#### 06. 단계별로 쪼개기
복잡한 요청은 한 번에 다 물어보지 말고 "1단계에서는 이것만, 2단계에서는 저것만"처럼 분리해서 지시하세요. 한 번에 너무 많은 걸 요청하면 품질이 떨어집니다.<br>**예시:** "먼저 목차만 잡아줘. 목차가 확정되면 그다음에 본문을 쓸게."

#### 07. 제약 조건 명확히
"~는 빼고", "~만 써서", "전문 용어 없이"처럼 제약을 앞에 명시할수록 원하지 않는 방향을 미리 차단할 수 있습니다.<br>**예시:** "전문 용어 없이, 중학생도 이해할 단어만 써서 설명해줘."

#### 08. 톤 & 타겟 설정
"초등학생도 이해할 수 있게", "임원 보고용으로", "20대 직장인 대상으로"처럼 독자와 톤을 지정하면 같은 내용도 완전히 다르게 나옵니다.<br>**예시:** "이 안내문을 신입사원 대상으로 친근하고 부담 없는 말투로 바꿔줘."

#### 09. 재시도 전 피드백 주기
"틀렸어"라고만 하면 클로드는 어디가 문제인지 모릅니다. "이 부분을 더 구체적으로", "전체 구조는 좋은데 마지막 문단이 약해"처럼 방향을 주고 재시도하세요.<br>**예시:** "전체 구조는 좋은데 마지막 문단이 약해. 결론을 더 강하게 다시 써줘."

#### 10. 여러 옵션 동시 요청
"3가지 버전으로 만들어줘"처럼 옵션을 여러 개 받으면 그중 가장 좋은 것을 고르거나 조합할 수 있습니다. 한 번 요청으로 선택지가 생깁니다.<br>**예시:** "이 제목을 자극형·정보형·공감형 3가지 버전으로 만들어줘."

#### 11. 컨텍스트 먼저 넣기
배경 설명을 먼저 해야 답변이 상황에 맞게 바뀝니다. "지금 상황은 이렇고, 이런 목적으로 물어보는데…"로 시작하면 훨씬 맥락 있는 답변이 나옵니다.<br>**예시:** "우리는 작은 동네 카페야. 단골 확보가 목적인데, 인스타 문구를 추천해줘."

#### 12. 체인 오브 소트 활용
"단계별로 생각해줘", "결론을 내리기 전에 근거를 먼저 나열해줘"를 붙이면 추론 오류가 줄어들고 복잡한 문제에서 훨씬 정확한 답변이 나옵니다.<br>**예시:** "결론을 내리기 전에 근거를 단계별로 먼저 나열하고, 그다음 판단해줘."

#### 13. 출력 후 검토 지시
"작성 후 오류나 어색한 부분이 있는지 스스로 한 번 확인해줘"를 붙이면 클로드가 자가 검수를 거친 결과물을 줍니다. 완성도가 눈에 띄게 올라갑니다.<br>**예시:** "작성 후 어색한 문장이나 오류가 있는지 스스로 한 번 점검해서 알려줘."

#### 14. 부정문 대신 긍정문
"~하지 마"보다 "~만 써줘"가 훨씬 잘 따라집니다. "전문 용어 쓰지 마"보다 "중학생 수준의 쉬운 단어만 써줘"가 더 명확합니다.<br>**예시:** "'전문 용어 쓰지 마' 대신 → '초등학생도 아는 쉬운 단어만 써줘'."

#### 15. 프롬프트 개선 요청
"내 프롬프트를 더 잘 쓰는 방법 알려줘"라고 물어보면 클로드가 내 요청 방식 자체를 고도화해줍니다. 프롬프트를 프롬프트로 개선하는 루프입니다.<br>**예시:** "내가 방금 쓴 이 프롬프트, 더 좋은 결과가 나오게 다시 써준다면 어떻게 바꿀래?"`,
      contentEn: `> People who use Claude well start differently from the very first sentence. Master the basics and the rest follows naturally.

**01. Declare the role first** — "You are a marketing expert." Assigning a role changes the depth and tone of the answer.

**02. Specify the output format up front** — "as a table", "numbered", "bullet points". Saves you from re-asking later.

**03. State the length** — "summarize in 3 lines", "under 500 chars", "one page". Avoids answers that are too long or too short.

**04. Show one example** — A single sample of the desired result greatly improves accuracy, especially for nuance and structure.

**05. "Say you don't know" command** — Claude may answer plausibly even when unsure. Add "flag anything you're not sure about" to reduce hallucination.

**06. Break it into steps** — Don't ask everything at once; split into "step 1 does this, step 2 does that."

**07. State constraints clearly** — "exclude X", "use only Y", "no jargon" up front blocks unwanted directions.

**08. Set tone & audience** — "so a child understands", "for an executive report", "for 20-something professionals" changes the same content entirely.

**09. Give feedback before retrying** — "It's wrong" tells Claude nothing. Point to the issue: "make this part more specific."

**10. Request multiple options at once** — "make 3 versions" gives you choices to pick or combine.

**11. Provide context first** — Start with "here's the situation and why I'm asking" for far more relevant answers.

**12. Use chain-of-thought** — "think step by step", "list the reasoning before concluding" reduces reasoning errors.

**13. Ask it to review its output** — "check your own work for errors or awkward parts" noticeably raises quality.

**14. Positive over negative** — "use only Y" works better than "don't use X".

**15. Ask it to improve your prompt** — "tell me how to write this prompt better" upgrades your requests themselves.`,
    },
    {
      title: '글쓰기 & 콘텐츠 (16–30)',
      titleEn: 'Writing & Content (16–30)',
      content: `> 콘텐츠 작업에서 클로드를 쓸 때 가장 중요한 건 처음부터 구조를 잡는 것입니다. 쓰고 나서 수정하는 것보다 훨씬 빠릅니다.

#### 16. 글 목적 한 문장으로
블로그 포스팅인지, 보고서인지, 유튜브 대본인지 목적을 먼저 한 문장으로 선언하세요. 같은 내용도 목적에 따라 구조가 완전히 달라집니다.<br>**예시:** "이건 사내 보고서용이야. 핵심 결론이 맨 앞에 오게 구조를 잡아줘."

#### 17. 독자 페르소나 설정
"이 글을 읽을 사람은 AI에 관심 있는 30대 직장인이야"처럼 독자를 구체적으로 정의하면 어휘 수준, 예시 선택, 문장 길이가 자동으로 최적화됩니다.<br>**예시:** "독자는 AI를 처음 접하는 50대 직원이야. 이 글을 그 눈높이로 바꿔줘."

#### 18. 아웃라인 먼저 받기
본문 작성 전에 목차와 구조만 먼저 뽑아서 검토하세요. 방향이 맞으면 그때 본문을 작성하는 게 훨씬 효율적입니다. 중간에 방향을 바꾸는 것보다 처음에 구조를 잡는 게 빠릅니다.<br>**예시:** "본문 쓰기 전에 목차와 각 소제목만 먼저 뽑아줘."

#### 19. 도입부 3종 세트 뽑기
질문형, 충격적인 통계, 공감형 스토리 — 세 가지 도입부를 동시에 받아서 가장 좋은 걸 고르세요. 도입부는 글의 성패를 좌우하는 가장 중요한 부분입니다.<br>**예시:** "이 글 도입부를 질문형·통계형·스토리형 3가지로 써줘."

#### 20. 제목 10개 뽑기
본문을 완성한 후 클릭률 높은 제목 10개를 한 번에 뽑으세요. 그중 2~3개를 조합하거나 골라 쓰면 됩니다. 제목 하나로 오래 고민하는 것보다 훨씬 빠릅니다.<br>**예시:** "이 블로그 글에 어울리는, 클릭률 높은 제목 10개 뽑아줘."

#### 21. 유튜브 대본 → 숏폼 변환
긴 유튜브 대본을 "60초 릴스 버전으로 압축해줘"라고 하면 핵심만 남긴 숏폼 스크립트가 나옵니다. 콘텐츠 하나로 여러 플랫폼을 커버할 수 있습니다.<br>**예시:** "이 5분짜리 유튜브 대본을 60초 릴스 버전으로 압축해줘."

#### 22. 해시태그 자동 생성
글이나 영상 내용을 주고 "인스타그램/유튜브/링크드인 최적 해시태그 뽑아줘"라고 하면 플랫폼별로 맞는 태그를 바로 받을 수 있습니다.<br>**예시:** "이 게시물 내용에 맞는 인스타그램 해시태그 15개 추천해줘."

#### 23. 카피라이팅 공식 적용
AIDA(주목-흥미-욕구-행동), PAS(문제-공감-해결), 4U(유용-긴급-독특-초구체) 같은 공식을 지정해서 카피를 작성하면 설득력이 높아집니다.<br>**예시:** "PAS(문제-공감-해결) 공식으로 이 제품 광고 문구를 써줘."

#### 24. 브랜드 톤 가이드 심기
프로젝트 지침에 "우리 브랜드는 이런 톤으로 말한다"는 규칙을 한 번 저장해두면 이후 모든 콘텐츠 작업에서 일관된 목소리가 유지됩니다.<br>**예시:** "우리 브랜드는 '따뜻하고 솔직한' 톤이야. 앞으로 이 규칙으로 계속 써줘."

#### 25. 긴 글 → 카드뉴스 3단 압축
원본 글을 주고 "요약 → 핵심 문장 3개 → 카드뉴스 텍스트" 순서로 압축해달라고 하면 SNS용 콘텐츠가 한 번에 나옵니다.<br>**예시:** "이 글을 요약 → 핵심 문장 3개 → 카드뉴스 8장 텍스트 순으로 압축해줘."

#### 26. 댓글/리뷰 분석 → 콘텐츠
댓글이나 리뷰를 모아 붙이고 "반복되는 불만이나 니즈를 정리해줘"라고 하면 시청자가 정말 원하는 콘텐츠 아이디어가 나옵니다.<br>**예시:** "이 리뷰 50개에서 반복되는 불만과 니즈를 정리해줘. (리뷰 붙여넣기)"

#### 27. 경쟁사 콘텐츠 분석
경쟁 채널이나 브랜드의 콘텐츠를 보여주고 "우리가 달라야 할 차별화 포인트는 뭐야?"라고 하면 포지셔닝 전략에 도움이 됩니다.<br>**예시:** "이 경쟁 채널 콘텐츠를 보고 우리가 차별화할 포인트를 알려줘."

#### 28. SEO 키워드 구조화
주제를 주면 메인 키워드, 서브 키워드, 롱테일 키워드를 표로 정리해줍니다. 글 뼈대를 잡기 전에 키워드 구조를 먼저 설계하면 검색 노출에 유리합니다.<br>**예시:** "'홈카페'를 주제로 메인·서브·롱테일 키워드를 표로 정리해줘."

#### 29. 인터뷰 질문 세트 만들기
인터뷰 대상, 목적, 예상 시간을 주면 심층 인터뷰용 질문 20개를 생성해줍니다. 중복 없이 깊이 있는 질문들이 나옵니다.<br>**예시:** "창업 3년차 대표 인터뷰용 심층 질문 20개를 만들어줘."

#### 30. 에디터 역할 요청
"작가가 아닌 편집자 입장에서 이 글의 문제점만 짚어줘"라고 하면 구조, 흐름, 설득력 측면에서 냉정한 피드백을 받을 수 있습니다.<br>**예시:** "작가가 아니라 냉정한 편집자 입장에서 이 글의 문제점만 짚어줘."`,
      contentEn: `> In content work, the most important thing is to lock the structure from the start — far faster than fixing after writing.

**16. State the purpose in one sentence** — blog, report, or YouTube script; the structure changes entirely by purpose.

**17. Define the reader persona** — "a 30-something professional interested in AI" auto-optimizes vocabulary, examples, and sentence length.

**18. Get the outline first** — Review the table of contents before writing the body; locking structure early beats changing direction midway.

**19. Three intro options** — question, striking stat, empathetic story. Pick the best; the intro decides the piece's success.

**20. Ten title options** — after writing, generate 10 click-worthy titles and combine/pick 2–3.

**21. YouTube script → short-form** — "compress into a 60-sec Reels version" covers multiple platforms from one piece.

**22. Auto hashtags** — get platform-optimized tags for Instagram/YouTube/LinkedIn.

**23. Apply copywriting formulas** — AIDA, PAS, 4U for more persuasive copy.

**24. Embed a brand tone guide** — save "our brand speaks like this" in project instructions for consistent voice.

**25. Long text → 3-step card news** — "summary → 3 key sentences → card-news text" for instant SNS content.

**26. Comments/reviews → content** — "organize recurring complaints and needs" surfaces what the audience really wants.

**27. Competitor content analysis** — "what should be our differentiation?" helps positioning.

**28. Structure SEO keywords** — main, sub, and long-tail keywords in a table before drafting.

**29. Build interview question sets** — 20 in-depth, non-overlapping questions from the target/purpose/time.

**30. Ask for the editor's role** — "point out only the problems as an editor" gives cold, structural feedback.`,
    },
    {
      title: '리서치 & 분석 (31–45)',
      titleEn: 'Research & Analysis (31–45)',
      content: `> 클로드를 리서치에 쓸 때 핵심은 질문 구조를 잘 짜는 것입니다. 막연하게 "알려줘"가 아니라 프레임을 먼저 잡으면 훨씬 쓸 수 있는 결과가 나옵니다.

#### 31. 리서치 질문 트리 만들기
큰 주제를 주면 "이 주제를 제대로 이해하려면 알아야 할 하위 질문 20개"를 뽑아줍니다. 무엇을 조사해야 할지 막막할 때 출발점이 됩니다.<br>**예시:** "'전기차 시장'을 제대로 이해하려면 알아야 할 하위 질문 20개를 뽑아줘."

#### 32. 논문/보고서 1페이지 요약
파일을 올리고 "핵심 주장, 근거, 한계, 시사점 순서로 요약해줘"라고 하면 긴 문서를 빠르게 소화할 수 있습니다.<br>**예시:** "이 보고서를 핵심 주장·근거·한계·시사점 순으로 요약해줘. (파일 첨부)"

#### 33. 찬반 양쪽 논리 뽑기
주제를 주고 "찬성 5개, 반대 5개 논거를 같은 강도로 뽑아줘"라고 하면 편향 없이 전체 그림을 볼 수 있습니다. 의사결정 전 선입견을 점검하는 데 유용합니다.<br>**예시:** "'주 4일제 도입'에 대해 찬성 5개·반대 5개 논거를 같은 강도로 정리해줘."

#### 34. 트렌드 → 비즈니스 기회
시장 트렌드를 정리해주고 "우리 업종에 적용 가능한 기회는 뭐가 있어?"라고 연결하면 인사이트가 아닌 실행 가능한 기회 목록이 나옵니다.<br>**예시:** "이 시장 트렌드를 우리 카페 업종에 적용할 기회로 연결해줘."

#### 35. 인물/기업 프로파일링
공개된 정보를 기반으로 특정 인물이나 기업의 배경, 강점, 약점, 최근 동향을 정리해달라고 하면 미팅 준비나 경쟁사 분석에 빠르게 쓸 수 있습니다.<br>**예시:** "이 회사의 배경·강점·약점·최근 동향을 공개 정보 기준으로 정리해줘."

#### 36. 데이터 해석 요청
숫자 표를 주고 "이 수치에서 보이는 패턴 3개와 이상치는?"이라고 하면 단순 수치를 인사이트로 바꿔줍니다.<br>**예시:** "이 매출 표에서 보이는 패턴 3개와 이상치를 찾아줘. (표 붙여넣기)"

#### 37. 가설 검증 프레임 짜기
"이 가설이 맞으려면 확인해야 할 조건들을 정리해줘"라고 하면 어디서부터 검증을 시작해야 할지 체계적으로 정리됩니다.<br>**예시:** "'가격을 낮추면 재구매가 는다'는 가설을 검증하려면 무엇을 확인해야 해?"

#### 38. SWOT 자동 생성
제품이나 프로젝트를 설명하면 강점, 약점, 기회, 위협을 표로 정리해줍니다. 출발점으로 쓰고 직접 다듬는 방식이 가장 효율적입니다.<br>**예시:** "우리 온라인 클래스 서비스의 SWOT을 표로 정리해줘."

#### 39. 벤치마킹 기준 설계
비교 대상과 비교 항목을 주면 동일한 기준으로 비교표를 만들어줍니다. 항목 정의를 먼저 맞추는 게 의미 있는 비교의 핵심입니다.<br>**예시:** "A·B·C 3개 서비스를 가격·기능·고객지원 기준으로 비교표 만들어줘."

#### 40. 시장 규모 추정 (TAM/SAM/SOM)
가정과 공개된 데이터를 주면 TAM-SAM-SOM 단계별 시장 규모를 추정해줍니다. 숫자보다 추정 논리를 검토하는 데 더 유용합니다.<br>**예시:** "국내 반려동물 간식 시장을 TAM-SAM-SOM 단계로 추정해줘."

#### 41. 고객 인터뷰 → 인사이트
인터뷰 내용을 붙이고 "반복되는 키워드와 숨은 니즈를 추출해줘"라고 하면 발화된 내용 너머의 진짜 문제를 찾아줍니다.<br>**예시:** "이 고객 인터뷰에서 반복되는 키워드와 숨은 니즈를 뽑아줘."

#### 42. 경쟁 분석 매트릭스
경쟁사별 강점, 약점, 포지셔닝을 한 표로 정리해달라고 하면 전략 회의 자료로 바로 쓸 수 있는 형태가 나옵니다.<br>**예시:** "경쟁사 4곳의 강점·약점·포지셔닝을 한 표로 정리해줘."

#### 43. 규제/법률 요약
복잡한 법률 조항을 붙이고 "실무자가 알아야 할 핵심만 쉽게 요약해줘"라고 하면 법무 검토 전 빠른 파악이 가능합니다. 단, 최종 판단은 전문가에게 확인하세요.<br>**예시:** "이 개인정보보호 조항에서 실무자가 알아야 할 핵심만 쉽게 요약해줘."

#### 44. 리스크 목록 자동화
프로젝트 설명을 주면 예상 리스크 목록과 대응 방안을 표로 만들어줍니다. 직접 생각하지 못한 리스크를 미리 확인하는 데 유용합니다.<br>**예시:** "이 신제품 출시 계획의 예상 리스크와 대응책을 표로 만들어줘."

#### 45. 검색 쿼리 설계
"이 주제를 조사하려면 구글에서 뭐라고 검색해야 해?"라고 하면 효과적인 검색 쿼리 목록이 나옵니다. 리서치 시작 전 검색 전략을 세우는 데 씁니다.<br>**예시:** "'ESG 경영 사례'를 조사하려면 구글에 뭐라고 검색하면 좋을까?"`,
      contentEn: `> For research, the key is structuring the question. Frame it first instead of a vague "tell me" for far more usable results.

**31. Build a research question tree** — "list 20 sub-questions I must answer to understand this" gives a starting point.

**32. One-page summary of a paper/report** — "summarize as claim, evidence, limits, implications."

**33. Both sides of the argument** — "5 for and 5 against at equal strength" reveals the whole picture without bias.

**34. Trend → business opportunity** — connect trends to "what opportunities apply to our industry?"

**35. Person/company profiling** — background, strengths, weaknesses, recent moves for meeting prep.

**36. Ask for data interpretation** — "3 patterns and any outliers in these numbers" turns figures into insight.

**37. Frame hypothesis testing** — "list the conditions that must hold if this hypothesis is true."

**38. Auto SWOT** — strengths, weaknesses, opportunities, threats as a table; refine from there.

**39. Design benchmarking criteria** — a comparison table on identical criteria; agree on definitions first.

**40. Market sizing (TAM/SAM/SOM)** — estimate step by step; review the logic more than the numbers.

**41. Customer interviews → insight** — "extract recurring keywords and hidden needs" finds the real problem.

**42. Competitive analysis matrix** — strengths, weaknesses, positioning per competitor in one table.

**43. Regulatory/legal summary** — "summarize only what a practitioner needs" for a quick read (confirm final calls with an expert).

**44. Automate a risk list** — expected risks and mitigations as a table.

**45. Design search queries** — "what should I search on Google for this topic?" sets a search strategy.`,
    },
    {
      title: '업무 & 비즈니스 (46–60)',
      titleEn: 'Work & Business (46–60)',
      content: `> 실무에서 클로드를 쓸 때 가장 빠르게 효과를 보는 영역입니다. 반복되는 문서 작업과 커뮤니케이션에서 시간을 크게 아낄 수 있습니다.

#### 46. 회의 아젠다 자동 작성
회의 목적, 참석자, 시간을 주면 시간 배분이 된 아젠다를 만들어줍니다. 회의 전 10분을 아낄 수 있습니다.<br>**예시:** "1시간짜리 신제품 킥오프 회의 아젠다를 시간 배분까지 짜줘."

#### 47. 회의록 → 액션아이템
회의 내용을 붙이고 "담당자와 기한이 포함된 액션아이템만 추출해줘"라고 하면 회의록 정리가 5분 안에 끝납니다.<br>**예시:** "이 회의록에서 담당자와 기한이 있는 액션아이템만 뽑아줘."

#### 48. 이메일 3가지 톤 비교
같은 내용으로 정중한 버전, 단호한 버전, 친근한 버전을 나란히 만들어달라고 하면 상황에 맞는 걸 골라 쓸 수 있습니다.<br>**예시:** "이 거절 메일을 정중한·단호한·친근한 3가지 버전으로 써줘."

#### 49. 제안서 목차 설계
제안 목적과 상대방 정보를 주면 설득력 있는 목차 구조를 설계해줍니다. 빈 페이지 앞에서 막막할 때 출발점이 됩니다.<br>**예시:** "중소기업 대상 IT 컨설팅 제안서 목차를 설득력 있게 설계해줘."

#### 50. OKR 초안 만들기
팀, 분기, 목표 방향을 주면 O(목표) 1개와 KR(핵심 결과) 3개 초안을 바로 만들어줍니다. 초안을 두고 팀이 함께 다듬는 방식이 효율적입니다.<br>**예시:** "마케팅팀 3분기 OKR 초안을 목표 1개·핵심결과 3개로 만들어줘."

#### 51. 업무 SOP 문서화
반복적으로 하는 업무를 설명하면 체크리스트와 주의사항이 담긴 SOP 문서로 변환해줍니다. 인수인계나 팀 온보딩에 바로 씁니다.<br>**예시:** "매일 하는 재고 확인 업무를 체크리스트형 SOP 문서로 만들어줘."

#### 52. 성과 보고서 코멘터리
숫자 표를 주고 "경영진용 한 줄 해석 코멘트를 달아줘"라고 하면 숫자가 문장으로 바뀝니다. 데이터를 스토리로 만드는 데 효과적입니다.<br>**예시:** "이 실적 표에 경영진용 한 줄 해석 코멘트를 달아줘."

#### 53. 채용 공고 최적화
JD를 붙이고 "지원자 입장에서 어색하거나 매력 없어 보이는 부분과 개선안을 알려줘"라고 하면 채용 공고 품질을 높일 수 있습니다.<br>**예시:** "이 개발자 채용공고에서 지원자에게 매력 없어 보이는 부분과 개선안을 알려줘."

#### 54. 협상 시나리오 준비
협상 상황을 설명하면 상대방의 예상 반론과 그에 대한 대응 논리를 미리 정리해줍니다. 준비된 협상과 그렇지 않은 협상의 차이는 큽니다.<br>**예시:** "납품가 인하 협상인데, 상대의 예상 반론과 대응 논리를 미리 정리해줘."

#### 55. KPI 대시보드 설계
업무나 팀 목표를 설명하면 지표, 계산식, 시각화 방법까지 제안해줍니다. 처음 대시보드를 설계할 때 방향을 잡는 데 씁니다.<br>**예시:** "온라인 쇼핑몰 운영팀 KPI 대시보드를 지표·계산식·시각화 방법으로 제안해줘."

#### 56. 프로젝트 리스크 리뷰
계획서를 주고 "간과하기 쉬운 리스크 5개와 대비책을 알려줘"라고 하면 실행 전 사각지대를 미리 점검할 수 있습니다.<br>**예시:** "이 프로젝트 계획서에서 간과하기 쉬운 리스크 5개와 대비책을 알려줘."

#### 57. 고객 이메일 초안
상황, 목적, 원하는 톤을 주면 전송 가능한 수준의 이메일 초안이 즉시 나옵니다. 민감한 이메일일수록 초안을 받아두고 다듬는 게 안전합니다.<br>**예시:** "환불 문의에 대한 정중하고 신뢰감 있는 답변 초안을 써줘."

#### 58. 사내 공지 문구 최적화
딱딱한 공지문을 붙이고 "임직원이 실제로 읽을 언어로 바꿔줘"라고 하면 읽히는 공지가 됩니다.<br>**예시:** "이 딱딱한 사내 공지를 직원들이 실제로 읽을 말투로 바꿔줘."

#### 59. 결재 문서 간결화
긴 보고서를 "의사결정자가 1분 안에 판단할 수 있게 핵심만 압축해줘"라고 하면 보고 효율이 높아집니다.<br>**예시:** "이 5장짜리 보고서를 의사결정자가 1분 안에 판단할 핵심만 압축해줘."

#### 60. 인수인계 문서 자동화
업무를 설명하면 새 담당자가 바로 시작할 수 있는 인수인계 문서 구조를 만들어줍니다.<br>**예시:** "이 업무를 새 담당자가 바로 시작할 수 있는 인수인계 문서로 만들어줘."`,
      contentEn: `> The fastest area to see results at work — saving big time on repetitive documents and communication.

**46. Auto meeting agenda** — a time-boxed agenda from purpose, attendees, and duration.

**47. Minutes → action items** — "extract only action items with owner and due date" in 5 minutes.

**48. Email in 3 tones** — polite, firm, friendly side by side to pick the right one.

**49. Proposal outline** — a persuasive structure from the goal and audience; a start against the blank page.

**50. Draft OKRs** — one Objective and three Key Results to refine together as a team.

**51. Document an SOP** — turn a repetitive task into a checklist-and-cautions SOP for handovers/onboarding.

**52. Performance report commentary** — "add a one-line executive interpretation" turns numbers into sentences.

**53. Optimize a job posting** — "what looks awkward or unappealing to applicants, and how to fix it?"

**54. Prepare negotiation scenarios** — likely objections and your counter-logic in advance.

**55. Design a KPI dashboard** — metrics, formulas, and visualization suggestions.

**56. Project risk review** — "5 easily overlooked risks and countermeasures" before execution.

**57. Customer email draft** — a send-ready draft from situation, goal, and tone; refine sensitive ones.

**58. Optimize internal notices** — "rewrite so employees actually read it."

**59. Condense approval docs** — "compress so a decision-maker judges in 1 minute."

**60. Automate handover docs** — a structure a new owner can start from immediately.`,
    },
    {
      title: '코딩 & 자동화 (61–72)',
      titleEn: 'Coding & Automation (61–72)',
      content: `> 개발자가 아니어도 클로드로 간단한 자동화를 구현할 수 있습니다. 코딩 배경 없이도 시작할 수 있는 팁 위주로 골랐습니다.

#### 61. 기능 설명 → 코드 변환
"이런 기능을 만들어줘"라고 말로 설명하면 코드를 만들어줍니다. 처음에는 작은 기능부터 시작하는 게 좋습니다.<br>**예시:** "구글 시트에서 부서별 지출 합계를 자동 계산하는 수식을 만들어줘."

#### 62. 코드 오류 복붙 + 설명
에러 메시지를 그대로 붙이고 "원인과 수정 코드를 알려줘"라고 하면 디버깅 시간이 크게 줄어듭니다.<br>**예시:** "이 에러 메시지의 원인과 수정 코드를 알려줘. (에러 붙여넣기)"

#### 63. 코드 리뷰 요청
"성능, 가독성, 보안 관점에서 이 코드의 문제점을 찾아줘"라고 하면 사람이 놓치기 쉬운 부분을 짚어줍니다.<br>**예시:** "이 코드를 성능·가독성·보안 관점에서 문제점을 찾아줘."

#### 64. 함수 단위로 리팩토링
긴 코드를 "재사용 가능한 함수 단위로 쪼개줘"라고 하면 유지보수하기 좋은 구조로 정리해줍니다.<br>**예시:** "이 긴 함수를 재사용 가능한 작은 함수 단위로 쪼개줘."

#### 65. 정규식 생성기
"이런 패턴을 찾고 싶어"라고 말로 설명하면 정규식과 테스트 케이스까지 만들어줍니다. 정규식 문법을 몰라도 됩니다.<br>**예시:** "이메일 주소만 골라내는 정규식과 테스트 케이스를 만들어줘."

#### 66. API 명세 → 코드 생성
Swagger나 API 문서를 붙이면 연동 코드 초안을 즉시 만들어줍니다. 새 API를 처음 연결할 때 출발점으로 씁니다.<br>**예시:** "이 API 문서를 보고 연동 코드 초안을 만들어줘. (문서 붙여넣기)"

#### 67. 구글 스프레드시트 자동화
"이런 자동화가 필요해"라고 설명하면 Google Apps Script 코드를 만들어줍니다. 반복적인 스프레드시트 작업을 자동화하는 데 효과적입니다.<br>**예시:** "매일 아침 특정 시트를 자동 정리하는 구글 Apps Script를 만들어줘."

#### 68. 노션 자동화 설계
노션 구조를 설명하고 "이 흐름을 자동화하는 방법을 알려줘"라고 하면 구현 방법을 단계별로 설계해줍니다.<br>**예시:** "노션 할 일 DB에서 완료 항목을 자동 보관하는 방법을 단계별로 알려줘."

#### 69. SQL 쿼리 자동 생성
테이블 구조와 원하는 결과를 설명하면 SQL을 만들어줍니다. 쿼리 최적화도 함께 요청할 수 있습니다.<br>**예시:** "회원 테이블에서 최근 30일 가입자를 지역별로 집계하는 SQL을 만들어줘."

#### 70. 테스트 케이스 자동 생성
함수나 기능을 설명하면 엣지케이스를 포함한 테스트 케이스 목록을 만들어줍니다.<br>**예시:** "이 로그인 함수의 엣지케이스를 포함한 테스트 케이스 목록을 만들어줘."

#### 71. 노코드 툴 연동 설계
Zapier나 Make 같은 노코드 툴로 구현하고 싶은 자동화를 설명하면 단계별 시나리오를 설계해줍니다.<br>**예시:** "폼 응답이 오면 슬랙으로 알림 보내는 Zapier 시나리오를 설계해줘."

#### 72. 데이터 파이프라인 설계
소스에서 정제, 저장, 시각화까지의 흐름을 설계해달라고 하면 전체 구조를 한눈에 볼 수 있게 정리해줍니다.<br>**예시:** "설문 원본 → 정제 → 저장 → 시각화까지 데이터 흐름을 설계해줘."`,
      contentEn: `> You don't need to be a developer to build simple automation with Claude. These tips start from zero coding background.

**61. Feature description → code** — describe "make this feature" in words; start small.

**62. Paste the error + ask** — "give me the cause and fixed code" cuts debugging time.

**63. Request a code review** — "find issues from performance, readability, and security angles."

**64. Refactor into functions** — "split into reusable functions" for maintainable structure.

**65. Regex generator** — describe the pattern; get the regex and test cases without knowing syntax.

**66. API spec → code** — paste Swagger/API docs for an integration code draft.

**67. Google Sheets automation** — describe the need; get Google Apps Script.

**68. Notion automation design** — describe the structure; get a step-by-step implementation plan.

**69. SQL query generation** — describe tables and desired result; ask for optimization too.

**70. Auto test cases** — get a test-case list including edge cases from a function description.

**71. No-code tool design** — describe the automation for Zapier/Make; get a step-by-step scenario.

**72. Data pipeline design** — from source to cleaning, storage, and visualization at a glance.`,
    },
    {
      title: '학습 & 정리 (73–83)',
      titleEn: 'Learning & Organizing (73–83)',
      content: `> 공부할 때 클로드를 쓰면 속도가 달라집니다. 읽는 것에서 이해하고 적용하는 것으로 넘어가는 과정을 도와줍니다.

#### 73. 개념 ELI5 (쉬운 설명)
"초등학생한테 설명하듯 이 개념을 설명해줘"라고 하면 핵심 원리만 남겨서 설명해줍니다. 복잡한 개념을 처음 접할 때 먼저 큰 그림을 잡는 데 씁니다.<br>**예시:** "'블록체인'을 초등학생에게 설명하듯 쉽게 설명해줘."

#### 74. 학습 로드맵 생성
목표, 현재 수준, 가용 시간을 주면 단계별 학습 커리큘럼을 만들어줍니다. 무엇부터 시작해야 할지 모를 때 방향을 잡아줍니다.<br>**예시:** "파이썬 초보인데 하루 1시간씩 3개월 학습 로드맵을 짜줘."

#### 75. 암기 카드(플래시카드) 만들기
공부할 내용을 주면 앞/뒤 형식의 퀴즈 카드를 만들어줍니다. Anki 같은 도구에 바로 넣어 쓸 수 있습니다.<br>**예시:** "이 마케팅 용어 정리 자료로 앞/뒤 형식의 암기카드를 만들어줘."

#### 76. 독서 노트 구조화
책 내용이나 메모를 주고 "핵심 개념, 인사이트, 적용 아이디어로 정리해줘"라고 하면 읽은 내용이 실행 가능한 형태로 바뀝니다.<br>**예시:** "이 책 내용을 핵심 개념·인사이트·적용 아이디어로 정리해줘."

#### 77. 강의/유튜브 자막 → 요약
자막 텍스트를 붙이고 "핵심 포인트 5개와 내가 적용할 수 있는 것"으로 정리해달라고 하면 긴 영상을 빠르게 소화할 수 있습니다.<br>**예시:** "이 강의 자막에서 핵심 5개와 내가 적용할 것을 뽑아줘. (자막 붙여넣기)"

#### 78. 개념 간 연결 지도
"이 개념들이 어떻게 연결되는지 관계도처럼 설명해줘"라고 하면 파편화된 지식을 하나의 구조로 엮어줍니다.<br>**예시:** "'수요·공급·가격' 개념이 어떻게 연결되는지 관계도처럼 설명해줘."

#### 79. 틀린 이유 분석
틀린 문제와 내 답을 주고 "왜 틀렸는지, 올바른 사고 흐름은 어떤 건지 설명해줘"라고 하면 단순히 정답을 아는 것이 아니라 사고 방식을 교정할 수 있습니다.<br>**예시:** "이 문제에서 내 답이 왜 틀렸는지, 올바른 사고 흐름을 설명해줘."

#### 80. 질문 생성기
주제를 주면 "이 분야 전문가에게 물어볼 핵심 질문 10개"를 만들어줍니다. 인터뷰 준비나 심화 학습 방향 설정에 씁니다.<br>**예시:** "'생성형 AI 도입'에 대해 전문가에게 물어볼 핵심 질문 10개를 만들어줘."

#### 81. 용어 사전 자동 생성
문서나 강의 자료를 주면 모르는 용어를 찾아서 표로 정리해 설명해줍니다. 새 분야를 시작할 때 기초 어휘를 빠르게 쌓는 데 유용합니다.<br>**예시:** "이 강의 자료에서 모르는 용어를 찾아 표로 정리해 설명해줘."

#### 82. 개인화 요약
"내 배경은 ~야, 이 내용을 나한테 맞게 요약해줘"라고 하면 일반적인 요약이 아닌 내 상황에 맞는 요약이 나옵니다.<br>**예시:** "나는 비전공 기획자야. 이 기술 문서를 내 눈높이에 맞게 요약해줘."

#### 83. 복잡한 문서 → 1페이지
긴 계약서, 정책 문서, 보고서를 "비전문가가 알아야 할 핵심만 1페이지로 압축해줘"라고 하면 빠르게 파악이 가능합니다. 단, 중요한 결정 전에는 원문도 꼭 확인하세요.<br>**예시:** "이 계약서를 비전문가가 알아야 할 핵심만 1페이지로 압축해줘."`,
      contentEn: `> Studying with Claude changes your pace — it helps you move from reading to understanding and applying.

**73. ELI5 (explain simply)** — "explain this like I'm a child" keeps only the core idea for the big picture first.

**74. Learning roadmap** — a step-by-step curriculum from goal, current level, and available time.

**75. Flashcards** — front/back quiz cards ready for tools like Anki.

**76. Structure reading notes** — "organize as key concepts, insights, and applications" makes reading actionable.

**77. Lecture/YouTube captions → summary** — "5 key points and what I can apply" digests long videos fast.

**78. Concept connection map** — "explain how these concepts relate" ties fragmented knowledge together.

**79. Analyze why you were wrong** — "why is this wrong and what's the correct reasoning?" fixes your thinking, not just the answer.

**80. Question generator** — "10 key questions to ask an expert" for interview prep or deeper study.

**81. Auto glossary** — find unknown terms in a document and explain them in a table.

**82. Personalized summary** — "my background is X; summarize this for me" fits your situation.

**83. Complex document → one page** — "compress to one page of what a non-expert needs" (still check the original before big decisions).`,
    },
    {
      title: '고급 테크닉 (84–100)',
      titleEn: 'Advanced Techniques (84–100)',
      content: `> 기본기를 익혔다면 이제 클로드를 더 정교하게 쓰는 방법입니다. 여기서부터는 클로드를 단순 도구가 아닌 작업 파트너처럼 쓰는 영역입니다.

#### 84. 시스템 프롬프트 설계
프로젝트 지침에 역할, 규칙, 출력 형식을 한 번에 박제해두면 매번 설명하지 않아도 일관된 결과가 나옵니다. 반복 작업에서 효과가 가장 큽니다.<br>**예시:** "프로젝트 지침에 '항상 존댓말·표 형식·근거 포함' 규칙을 저장해줘."

#### 85. 메타 프롬프팅
"이 목적에 맞는 최적의 프롬프트를 만들어줘"라고 하면 클로드가 프롬프트를 설계해줍니다. 좋은 프롬프트를 직접 만들기 어려울 때 씁니다.<br>**예시:** "블로그 글쓰기에 가장 좋은 프롬프트를 네가 직접 설계해줘."

#### 86. 페르소나 고정 + 이어받기
"너는 ~야, 이 역할로 계속 대화하자"라고 페르소나를 고정하면 대화 전반에 걸쳐 일관된 관점과 전문성이 유지됩니다.<br>**예시:** "너는 깐깐한 논문 심사위원이야. 이 역할로 계속 대화하자."

#### 87. 구조화 출력 (JSON/XML)
"JSON 형식으로만 출력해줘"라고 하면 다른 시스템에 바로 넣을 수 있는 파싱 가능한 데이터 형태로 결과가 나옵니다.<br>**예시:** "이 제품 목록을 name·price·stock 키를 가진 JSON으로만 출력해줘."

#### 88. 역할극으로 약점 발견
"이 아이디어에 가장 비판적인 입장에서 공격해줘"라고 하면 직접 생각하지 못한 치명적 약점을 미리 발견할 수 있습니다. 발표나 제안 전 사전 점검에 효과적입니다.<br>**예시:** "이 사업 아이디어에 가장 비판적인 투자자 입장에서 공격해줘."

#### 89. 다중 관점 분석
"전략가, 현장 직원, 고객, 투자자 각각의 입장에서 평가해줘"라고 하면 하나의 아이디어를 여러 시각에서 동시에 검토할 수 있습니다.<br>**예시:** "이 정책을 전략가·현장 직원·고객·투자자 입장에서 각각 평가해줘."

#### 90. 단계별 검증 루프
"생성 → 검토 → 수정"을 한 프롬프트 안에서 구조화하면 결과물 완성도가 높아집니다. "작성하고, 스스로 검토하고, 수정해줘"를 한 번에 지시합니다.<br>**예시:** "초안을 쓰고, 스스로 검토하고, 개선한 최종본까지 한 번에 줘."

#### 91. 아티팩트로 프로토타입
대시보드, 앱, 문서를 클릭 가능한 시제품으로 즉시 만들어달라고 하면 아이디어를 빠르게 구체화할 수 있습니다. 피드백 받기 전에 실물을 보여주는 방식이 훨씬 효과적입니다.<br>**예시:** "간단한 할 일 관리 앱을 클릭 가능한 시제품으로 만들어줘."

#### 92. 긴 문서 분할 처리
매우 큰 파일은 청크로 나눠서 순서대로 처리하고 마지막에 통합 요약을 요청하세요. 한 번에 넣는 것보다 처리 품질이 높아집니다.<br>**예시:** "이 200페이지 문서를 5개로 나눠 순서대로 요약하고, 마지막에 통합 요약해줘."

#### 93. 비교 평가 매트릭스
"A안과 B안을 5개 기준으로 1~10점 점수표로 비교해줘"라고 하면 주관적인 선택을 객관화할 수 있습니다.<br>**예시:** "A안·B안을 비용·속도·리스크 등 5개 기준으로 10점 척도 비교해줘."

#### 94. 결과 재현성 확보
"이 프롬프트를 언제 써도 같은 품질이 나오게 정교화해줘"라고 하면 프롬프트를 견고하게 다듬어줍니다. 팀에서 공유할 프롬프트를 만들 때 씁니다.<br>**예시:** "이 프롬프트를 언제 써도 같은 품질이 나오게 더 견고하게 다듬어줘."

#### 95. 웹검색 + 내부 자료 결합
웹 최신 정보와 내가 올린 파일을 함께 분석하도록 요청하면 외부 데이터와 내부 맥락이 결합된 분석이 나옵니다.<br>**예시:** "최신 웹 정보와 내가 올린 이 보고서를 함께 분석해줘."

#### 96. 클로드 인 클로드 활용
아티팩트 안에 Anthropic API를 연결하면 인터랙티브 AI 툴을 직접 구현할 수 있습니다. 프롬프트 테스터, 콘텐츠 생성기 같은 도구를 내가 만들어 쓸 수 있습니다.<br>**예시:** "아티팩트 안에 API를 연결해 나만의 프롬프트 테스터 도구를 만들어줘."

#### 97. 언어 경계 넘기
영어 원문 자료를 넣고 한국어로 분석해달라고 하면 됩니다. 언어 장벽 없이 전 세계 자료를 활용할 수 있습니다.<br>**예시:** "이 영어 논문을 한국어로 분석하고 핵심을 정리해줘."

#### 98. 에이전트 체인 설계
"조사 → 분석 → 작성 → 검수" 각 단계를 별도 프롬프트로 분리해서 순서대로 처리하면 복잡한 작업도 체계적으로 처리됩니다.<br>**예시:** "조사 → 분석 → 초안 → 검수 각 단계를 순서대로 진행하자. 1단계부터 시작해줘."

#### 99. 배치 처리 설계
100개 항목을 한 번에 처리하는 일괄 프롬프트 구조를 설계해달라고 하면 반복 작업을 한 번에 처리할 수 있습니다.<br>**예시:** "이 상품명 100개를 한 번에 카테고리별로 분류하는 프롬프트를 설계해줘."

#### 100. 나만의 꿀팁 시스템 구축
효과 좋은 프롬프트를 프로젝트에 저장해두세요. 매번 새로 만드는 것이 아니라 쌓아가는 것이 장기적으로 훨씬 효율적입니다. 내 업무에 맞게 최적화된 프롬프트 라이브러리가 곧 경쟁력이 됩니다.<br>**예시:** "지금까지 효과 좋았던 이 프롬프트를 프로젝트에 저장할 양식으로 정리해줘."`,
      contentEn: `> Once you have the basics, here's how to use Claude more precisely — as a work partner, not just a tool.

**84. Design a system prompt** — pin role, rules, and output format in project instructions for consistent results.

**85. Meta-prompting** — "make the optimal prompt for this goal" lets Claude design the prompt.

**86. Fix and carry a persona** — "you are X; keep this role" maintains consistent perspective across the chat.

**87. Structured output (JSON/XML)** — "output only JSON" gives parseable data for other systems.

**88. Find weaknesses by role-play** — "attack this idea as the harshest critic" surfaces fatal flaws before a pitch.

**89. Multi-perspective analysis** — evaluate as strategist, staff, customer, investor at once.

**90. Step-by-step verification loop** — structure "generate → review → revise" in one prompt.

**91. Prototype with Artifacts** — instant clickable dashboards/apps/docs make ideas concrete before feedback.

**92. Chunk long documents** — process very large files in chunks, then ask for an integrated summary.

**93. Comparison matrix** — "score A vs B on 5 criteria, 1–10" objectifies subjective choices.

**94. Ensure reproducibility** — "refine so this prompt gives the same quality every time" for team-shared prompts.

**95. Combine web search + internal files** — analyze latest web info together with your uploaded files.

**96. Claude-in-Claude** — connect the Anthropic API inside an Artifact to build interactive AI tools yourself.

**97. Cross language boundaries** — feed English sources and ask for Korean analysis; no language barrier.

**98. Design an agent chain** — split "research → analyze → write → review" into ordered prompts.

**99. Batch processing** — design a bulk prompt structure to handle 100 items at once.

**100. Build your own tips system** — save effective prompts in your project; a personalized prompt library becomes your edge.`,
    },
  ],
};
