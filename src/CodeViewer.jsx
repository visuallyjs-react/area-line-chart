
import React, { useState } from 'react';

const CodeViewer = ({ options, onClose }) => {
    const [copied, setCopied] = useState(false);
    if (!options) return null;

    const jsonString = JSON.stringify(options, null, 2);

    const handleCopy = () => {
        navigator.clipboard.writeText(jsonString).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    // Lightweight syntax highlighting logic for JSON
    const highlightedCode = jsonString
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
            let cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return `<span class="code-${cls}">${match}</span>`;
        });

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        }} onClick={onClose}>
            <div style={{
                backgroundColor: '#ffffff',
                color: '#333333',
                padding: '30px 20px 20px 20px',
                borderRadius: '8px',
                width:"80%",
                maxWidth: '800px',
                maxHeight: '80%',
                overflow: 'auto',
                position: 'relative',
                boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                border: '1px solid #ddd'
            }} onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '5px',
                        right: '10px',
                        background: 'transparent',
                        border: 'none',
                        color: '#999',
                        fontSize: '24px',
                        cursor: 'pointer',
                        lineHeight: '1'
                    }}
                >
                    &times;
                </button>
                <button
                    onClick={handleCopy}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '40px',
                        background: '#f0f0f0',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        fontSize: '12px',
                        cursor: 'pointer',
                        color: '#333'
                    }}
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
                <h3 style={{ marginTop: 0, marginBottom: '15px', color: '#0066cc', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    Chart Options
                </h3>
                <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '13px', lineHeight: '1.5' }}>
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
                <style>{`
          .code-key { color: #a31515; font-weight: bold; }
          .code-string { color: #0451a5; }
          .code-number { color: #098658; }
          .code-boolean { color: #0000ff; }
          .code-null { color: #0000ff; }
        `}</style>
            </div>
        </div>
    );
};

export default CodeViewer;
