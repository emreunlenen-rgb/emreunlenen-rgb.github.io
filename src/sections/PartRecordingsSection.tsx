import { Film, GraduationCap } from 'lucide-react';
import { teacherPartRecordings } from '../data/partRecordings';
import PartRecordingPieceBlock from '../components/PartRecordingPieceBlock';

export default function PartRecordingsSection() {
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
          <p className="text-stone-500 leading-relaxed text-sm sm:text-base flex items-center justify-center gap-2 flex-wrap">
            <GraduationCap className="w-5 h-5 text-wine-600 shrink-0 hidden sm:block" />
            Güzel Sanatlar Liseleri gitar eğitmenleri orkestrası — eser ve gitar partisi başlıklarıyla
            YouTube kayıtları.
          </p>
        </div>

        <div className="space-y-10">
          {teacherPartRecordings.map((piece) => (
            <PartRecordingPieceBlock key={piece.id} piece={piece} />
          ))}
        </div>
      </div>
    </section>
  );
}
