import { Users } from 'lucide-react';
import { seatingThreeGuitar, seatingFourGuitar } from '../data/orchestraSeating';
import OrchestraPartColumn from '../components/OrchestraPartColumn';

export default function OrchestraSeatingSection() {
  return (
    <section id="oturus" className="py-24 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-sm font-semibold text-gold-600 tracking-wider uppercase mb-3">
            Öğrenci orkestrası
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4 flex items-center justify-center gap-2 flex-wrap">
            <Users className="w-8 h-8 text-wine-700 hidden sm:block" />
            Oturma planı
          </h2>
          <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
            Yalnızca isimler gösterilir. Ön sıralar şefe en yakın bölümde ikişer koltukla başlar; arkaya
            doğru klasik orkestra düzenine benzer şekilde sıra genişliği artar.
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-wine-900 text-center mb-8">
              {seatingThreeGuitar.title}
            </h3>
            <div className="rounded-2xl bg-gradient-to-b from-wine-900/5 to-wine-900/10 border border-wine-200/50 p-4 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
                {seatingThreeGuitar.parts.map((p) => (
                  <OrchestraPartColumn key={p.label} label={p.label} names={p.names} />
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-wine-900 text-center mb-8">
              {seatingFourGuitar.title}
            </h3>
            <div className="rounded-2xl bg-gradient-to-b from-wine-900/5 to-wine-900/10 border border-wine-200/50 p-4 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-4">
                {seatingFourGuitar.parts.map((p) => (
                  <OrchestraPartColumn key={p.label} label={p.label} names={p.names} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
