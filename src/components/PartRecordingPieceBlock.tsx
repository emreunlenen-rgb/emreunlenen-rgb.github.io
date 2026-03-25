import { getYouTubeEmbedUrl } from '../utils/youtube';
import type { PiecePartRecordings } from '../types';

export default function PartRecordingPieceBlock({ piece }: { piece: PiecePartRecordings }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-sm">
      <h3 className="font-display text-lg sm:text-xl font-bold text-wine-900 mb-5 text-center sm:text-left">
        {piece.title}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {piece.slots.map((slot) => {
          const embed = slot.youtubeUrl ? getYouTubeEmbedUrl(slot.youtubeUrl) : null;
          const subtitle = [slot.partLabel, slot.performer].filter(Boolean).join(' · ');

          return (
            <div key={`${piece.id}-${slot.partLabel}`} className="space-y-2">
              <p className="text-sm font-medium text-stone-700">{subtitle}</p>
              {embed ? (
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-stone-900 border border-stone-200">
                  <iframe
                    src={embed}
                    title={subtitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="aspect-video w-full rounded-xl border border-dashed border-stone-300 bg-stone-50 flex items-center justify-center px-4">
                  <p className="text-sm text-stone-500 text-center">
                    Kayıt bağlantısı eklendiğinde burada görünecek.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
