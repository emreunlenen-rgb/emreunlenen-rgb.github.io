import { useState } from 'react';
import { Film, Users, GraduationCap } from 'lucide-react';
import { getYouTubeEmbedUrl } from '../utils/youtube';
import { studentPartRecordings, teacherPartRecordings } from '../data/partRecordings';
import type { PiecePartRecordings } from '../types';

type Tab = 'student' | 'teacher';

function PieceBlock({ piece }: { piece: PiecePartRecordings }) {
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

const TABS: { id: Tab; label: string; icon: typeof Users; data: PiecePartRecordings[] }[] = [
  { id: 'student', label: 'Öğrenci Gitar Orkestrası', icon: Users, data: studentPartRecordings },
  { id: 'teacher', label: 'GSL Gitar Eğitmenleri Orkestrası', icon: GraduationCap, data: teacherPartRecordings },
];

export default function PartRecordingsSection() {
  const [tab, setTab] = useState<Tab>('student');
  const active = TABS.find((t) => t.id === tab)!;

  return (
    <section id="parti-kayitlari" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-block text-sm font-semibold text-gold-600 tracking-wider uppercase mb-3">
            Kayıtlar
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4 flex items-center justify-center gap-2 flex-wrap">
            <Film className="w-8 h-8 text-wine-700 hidden sm:block" />
            Parti kayıt videoları
          </h2>
          <p className="text-stone-500 leading-relaxed text-sm sm:text-base">
            Eser ve gitar partisi başlıklarıyla YouTube kayıtları. Çalışma ve prova için referans olarak
            kullanılabilir.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-10 max-w-2xl mx-auto">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`flex-1 flex items-center justify-center gap-2.5 px-5 py-4 rounded-xl text-sm font-medium transition-all ${
                tab === t.id
                  ? 'bg-wine-800 text-white shadow-lg shadow-wine-800/20'
                  : 'bg-cream text-stone-600 hover:bg-stone-50 border border-stone-200'
              }`}
            >
              <t.icon className="w-5 h-5 shrink-0" />
              {t.label}
            </button>
          ))}
        </div>

        <div className="space-y-10">
          {active.data.map((piece) => (
            <PieceBlock key={piece.id} piece={piece} />
          ))}
        </div>
      </div>
    </section>
  );
}
