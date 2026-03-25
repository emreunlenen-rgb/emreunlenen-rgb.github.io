import { namesToPairRows } from '../utils/orchestraLayout';

interface OrchestraPartColumnProps {
  label: string;
  names: readonly string[];
}

function SeatCell({ name }: { name: string }) {
  return (
    <div className="rounded-lg bg-white/90 border border-wine-200/80 shadow-sm px-2.5 py-2.5 text-center text-xs sm:text-sm text-stone-800 min-h-[3rem] flex items-center justify-center leading-snug w-full max-w-[160px]">
      {name}
    </div>
  );
}

export default function OrchestraPartColumn({ label, names }: OrchestraPartColumnProps) {
  const rows = namesToPairRows([...names]);
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
            className="grid grid-cols-2 gap-2 w-full max-w-[340px] mx-auto justify-items-stretch"
          >
            {row.length === 2 ? (
              row.map((name, si) => <SeatCell key={`${label}-${ri}-${si}`} name={name} />)
            ) : (
              <div className="col-span-2 flex justify-center">
                <SeatCell name={row[0]!} />
              </div>
            )}
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
