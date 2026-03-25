import { namesToFanRows } from '../utils/orchestraLayout';

interface OrchestraPartColumnProps {
  label: string;
  names: readonly string[];
}

export default function OrchestraPartColumn({ label, names }: OrchestraPartColumnProps) {
  const rows = namesToFanRows([...names]);
  const backToFront = [...rows].reverse();

  return (
    <div className="flex flex-col items-stretch min-w-0">
      <p className="text-center text-xs font-semibold text-wine-800 uppercase tracking-wide mb-3">
        {label}
      </p>
      <div className="flex flex-col gap-2 flex-1">
        {backToFront.map((row, ri) => (
          <div
            key={ri}
            className="flex flex-wrap justify-center gap-2"
            style={{ gap: '0.5rem' }}
          >
            {row.map((name, si) => (
              <div
                key={`${label}-${ri}-${si}`}
                className="rounded-lg bg-white/90 border border-wine-200/80 shadow-sm px-2.5 py-2 text-center text-xs sm:text-sm text-stone-800 max-w-[140px] min-w-[72px] leading-snug"
              >
                {name}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t-2 border-dashed border-gold-400/60 text-center">
        <span className="text-[10px] sm:text-xs font-medium text-stone-500 uppercase tracking-widest">
          Şef
        </span>
      </div>
    </div>
  );
}
