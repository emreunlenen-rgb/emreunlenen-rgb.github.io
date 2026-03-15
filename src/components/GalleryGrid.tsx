import { useState } from 'react';
import { X, ImageOff } from 'lucide-react';
import clsx from 'clsx';
import type { GalleryItem } from '../types';

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (id: string) => {
    setFailedImages((prev) => new Set(prev).add(id));
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {items.map((item) => {
          const failed = failedImages.has(item.id);

          return (
            <button
              key={item.id}
              onClick={() => !failed && setSelected(item)}
              className={clsx(
                'relative group aspect-[4/3] rounded-xl overflow-hidden',
                failed
                  ? 'bg-stone-100 cursor-default'
                  : 'cursor-pointer',
              )}
            >
              {failed ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-300 gap-2">
                  <ImageOff className="w-8 h-8" />
                  <span className="text-xs">Görsel bulunamadı</span>
                </div>
              ) : (
                <>
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    onError={() => handleImageError(item.id)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-xs leading-snug">{item.caption}</p>
                    </div>
                  )}
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Kapat"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            {(selected.caption || selected.credit) && (
              <div className="mt-4 text-center">
                {selected.caption && (
                  <p className="text-white/90 text-sm">{selected.caption}</p>
                )}
                {selected.credit && (
                  <p className="text-white/50 text-xs mt-1">Fotoğraf: {selected.credit}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
