import { Users, Lock } from 'lucide-react';
import { seatingThreeGuitar, seatingFourthPartOnly } from '../data/orchestraSeating';
import OrchestraPartColumn from '../components/OrchestraPartColumn';

export default function OrchestraSeatingSection() {
  return (
    <section id="oturus" className="py-24 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-block text-sm font-semibold text-gold-600 tracking-wider uppercase mb-3">
            Öğrenci orkestrası
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4 flex items-center justify-center gap-2 flex-wrap">
            <Users className="w-8 h-8 text-wine-700 hidden sm:block" />
            Oturma planı
          </h2>
          <p className="text-stone-600 leading-relaxed text-sm sm:text-base mb-4">
            Her sırada <strong>iki öğrenci</strong> olacak şekilde, listedeki isim sırasına göre önden arkaya
            dizilim gösterilir (şefe en yakın sıra, listedeki ilk çifttir). Üç ve dört gitarlı eser
            listeleri arasında fark olduğunda <strong>üç gitarlı eserdeki 1.–3. parti sırası esas alınır</strong>;
            dört gitarlı parçalarda <strong>4. parti</strong> ayrı sütundadır.
          </p>
          <div className="inline-flex items-start gap-2 rounded-xl bg-wine-900/5 border border-wine-200/60 px-4 py-3 text-left text-sm text-stone-700 max-w-xl mx-auto">
            <Lock className="w-4 h-4 text-wine-700 shrink-0 mt-0.5" aria-hidden />
            <span>
              Oturma yerleri sabittir; prova ve konserde <strong>yer değişikliği yapılamaz</strong>.
            </span>
          </div>
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-bold text-wine-900 text-center mb-8">
          {seatingThreeGuitar.title}
        </h3>
        <div className="rounded-2xl bg-gradient-to-b from-wine-900/5 to-wine-900/10 border border-wine-200/50 p-4 sm:p-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
            {seatingThreeGuitar.parts.map((p) => (
              <OrchestraPartColumn key={p.label} label={p.label} names={p.names} />
            ))}
          </div>
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-bold text-wine-900 text-center mb-2">
          Dört gitarlı eserler — {seatingFourthPartOnly.label}
        </h3>
        <p className="text-center text-sm text-stone-600 mb-8 max-w-2xl mx-auto">
          {seatingFourthPartOnly.description} Yukarıdaki 1.–3. parti düzeni aynen geçerlidir; aşağıdaki sıra
          yalnızca dört partili yapıtlar için eklenir.
        </p>
        <div className="rounded-2xl bg-gradient-to-b from-wine-900/5 to-wine-900/10 border border-wine-200/50 p-4 sm:p-8">
          <div className="max-w-sm mx-auto">
            <OrchestraPartColumn
              label={seatingFourthPartOnly.label}
              names={seatingFourthPartOnly.names}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
