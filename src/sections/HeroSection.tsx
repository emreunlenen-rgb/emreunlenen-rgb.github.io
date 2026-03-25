import { Calendar, MapPin, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToVideos = () => {
    document.getElementById('videolar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-wine-900 via-wine-800 to-wine-900 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-wine-600 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-gold-300 text-sm mb-8 border border-white/10">
          <Calendar className="w-4 h-4" />
          <span>27 Nisan 2026</span>
          <span className="text-white/30">•</span>
          <MapPin className="w-4 h-4" />
          <span>Eskişehir</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
          III. Anadolu Üniversitesi
          <br />
          <span className="text-gold-400">Gitar Şenliği</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
          Klasik gitar sanatının eğitimle buluştuğu, Türkiye'nin en önemli akademik gitar
          etkinliklerinden biri. Öğrenciler ve eğitmenler için özel hazırlanmış eğitim içerikleriyle
          şenliğe hazırlanın.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToVideos}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-wine-900 font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-gold-500/25 text-sm"
          >
            Eğitim Videolarını Keşfet
            <ArrowDown className="w-4 h-4" />
          </button>
          <button
            onClick={() =>
              document.getElementById('hakkinda')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all border border-white/20 text-sm"
          >
            Daha Fazla Bilgi
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-white/40" />
      </div>
    </section>
  );
}
