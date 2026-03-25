import { useState } from 'react';
import { Users, GraduationCap } from 'lucide-react';
import { studentPartRecordings, teacherPartRecordings } from '../data/partRecordings';
import PartRecordingPieceBlock from '../components/PartRecordingPieceBlock';
import type { PiecePartRecordings } from '../types';

type Tab = 'student' | 'teacher';

const TABS: {
  id: Tab;
  label: string;
  icon: typeof Users;
  description: string;
  pieces: PiecePartRecordings[];
}[] = [
  {
    id: 'student',
    label: 'Öğrenci Gitar Orkestrası',
    icon: Users,
    description:
      'Her eser için 1.–4. gitar partileri: çalışma ve prova kayıtları eser başlığı altında gruplanmıştır.',
    pieces: [...studentPartRecordings],
  },
  {
    id: 'teacher',
    label: 'GSL Gitar Eğitmenleri Orkestrası',
    icon: GraduationCap,
    description:
      'Eğitmen orkestrası için eser ve gitar partisi başlıklarıyla aynı düzende gömülü kayıtlar.',
    pieces: [...teacherPartRecordings],
  },
];

export default function VideosSection() {
  const [activeTab, setActiveTab] = useState<Tab>('student');
  const active = TABS.find((t) => t.id === activeTab)!;

  return (
    <section id="videolar" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-sm font-semibold text-gold-600 tracking-wider uppercase mb-3">
            Eğitim Videoları
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
            Şenliğe Hazırlık Videoları
          </h2>
          <p className="text-stone-500 leading-relaxed">
            İki farklı orkestra kategorisi için özel olarak hazırlanmış eğitim içeriklerimizi
            izleyerek şenliğe en iyi şekilde hazırlanın.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-10 max-w-2xl mx-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-wine-800 text-white shadow-lg shadow-wine-800/20'
                  : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="text-center mb-10">
          <p className="text-sm text-stone-500 max-w-xl mx-auto">{active.description}</p>
        </div>

        <div className="space-y-10">
          {active.pieces.map((piece) => (
            <PartRecordingPieceBlock key={piece.id} piece={piece} />
          ))}
        </div>
      </div>
    </section>
  );
}
