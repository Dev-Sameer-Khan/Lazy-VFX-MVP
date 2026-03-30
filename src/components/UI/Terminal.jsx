import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function Terminal({title, copyText, terminal,width}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText);
    setCopied(true);
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative w-full ${width ? "w-full" : "max-w-lg"}`}>
      {/* Terminal UI */}
      <div className="relative z-10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-2xl">
        <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="mx-auto text-xs font-mono text-white/40">{title}</div>
        </div>
        <div className="p-6 flex items-center justify-between font-mono text-sm md:text-base">
         <div className="flex items-center gap-4">
         {terminal && <span className="text-pink-500">~</span>}
         {terminal &&  <span className="text-white/60">$</span>}
            <span className="text-white font-medium">{copyText}</span>
          </div>
          <button 
            onClick={handleCopy}
            className="p-2 hover:bg-white/10 rounded-md transition-colors"
            aria-label="Copy to clipboard"
          >
            {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-white/60" />}
          </button>
        </div>
      </div>
    </div>
  );
}