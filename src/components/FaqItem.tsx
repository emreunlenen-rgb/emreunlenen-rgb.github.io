import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem as FaqItemType } from '../types';

interface FaqItemProps {
  item: FaqItemType;
}

export default function FaqItem({ item }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden transition-colors hover:border-stone-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-stone-800">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-stone-500 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}
