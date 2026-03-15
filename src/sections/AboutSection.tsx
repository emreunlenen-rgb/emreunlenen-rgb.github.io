import { GraduationCap, Music2, Users, Sparkles } from 'lucide-react';

const FEATURES = [
  {
    icon: GraduationCap,
    title: 'Akademik Nitelik',
    description:
      'Anadolu Üniversitesi Devlet Konservatuvarı bünyesinde düzenlenen şenlik, akademik standartlarda eğitim içerikleri sunar.',
  },
  {
    icon: Music2,
    title: 'Sanatsal Derinlik',
    description:
      'Klasik gitar repertuvarının inceliklerini keşfederek müzikal ifade ve yorumlama becerilerini geliştirme imkânı.',
  },
  {
    icon: Users,
    title: 'İş Birliği ve Paylaşım',
    description:
      'Türkiye genelinden gitar eğitmenleri ve öğrencilerin bir araya gelerek deneyimlerini paylaştığı eşsiz bir platform.',
  },
  {
    icon: Sparkles,
    title: 'Hazırlık Kaynakları',
    description:
      'Şenlik öncesinde orkestra eserlerini çalışmak ve teknik becerileri geliştirmek için hazırlanan özel eğitim videoları.',
  },
];

export default function AboutSection() {
  return (
    <section id="hakkinda" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-semibold text-gold-600 tracking-wider uppercase mb-3">
            Hakkında
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
            Gitar Sanatını Eğitimle Buluşturuyoruz
          </h2>
          <p className="text-stone-500 leading-relaxed">
            Anadolu Üniversitesi Gitar Şenliği, Türkiye'nin dört bir yanından gitar eğitmenleri ve
            öğrencileri bir araya getiren, klasik gitar sanatının gelişimine katkı sağlayan
            akademik bir etkinliktir. Şenlik kapsamında düzenlenen konserler, atölye çalışmaları
            ve eğitim programları ile katılımcılar müzikal ufuklarını genişletme fırsatı bulur.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-2xl bg-cream hover:bg-surface transition-colors group"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-wine-800/5 flex items-center justify-center group-hover:bg-wine-800/10 transition-colors">
                <feature.icon className="w-7 h-7 text-wine-700" />
              </div>
              <h3 className="font-display text-lg font-semibold text-stone-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
