import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import './CopyBlock.scss';
import { useLanguage } from '../../i18n/LanguageContext';

export default function CopyBlock({ lines, title }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const code = Array.isArray(lines) ? lines.join('\n') : lines;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — ignore silently.
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="copy-block">
      <div className="copy-block-header">
        {title && <span className="title">{title}</span>}
        <button onClick={handleCopy} className="copy-btn">
          {copied ? <FaCheck /> : <FaCopy />}
          {copied ? t.download.copied : t.download.copy}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
