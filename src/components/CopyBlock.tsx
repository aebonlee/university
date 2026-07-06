import { useState } from 'react';

/** 학습자료 프롬프트/코드 블록 — 복사 버튼 포함 */
export default function CopyBlock({ code, isKo = true }: { code: string; isKo?: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = code;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="prompt-block">
      <div className="prompt-block-header">
        <span className="prompt-block-label">
          <i className="fa-solid fa-wand-magic-sparkles" />
          {isKo ? '프롬프트' : 'Prompt'}
        </span>
        <button
          type="button"
          className={`prompt-copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
        >
          <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`} />
          {copied ? (isKo ? '복사됨' : 'Copied') : (isKo ? '복사' : 'Copy')}
        </button>
      </div>
      <pre className="prompt-block-body"><code>{code}</code></pre>
    </div>
  );
}
