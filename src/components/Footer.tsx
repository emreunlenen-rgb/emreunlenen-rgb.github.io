import { Music, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-wine-900 text-white/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Music className="w-5 h-5 text-gold-400" />
              <span className="font-display text-lg font-semibold text-white">
                Gitar Şenliği
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              III. Anadolu Üniversitesi Gitar Şenliği, klasik gitar eğitimi ve sanatını bir araya
              getiren akademik bir etkinliktir.
            </p>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-white mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                <span>
                  Anadolu Üniversitesi Devlet Konservatuvarı
                  <br />
                  Eskişehir, Türkiye
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href="mailto:gitar.senligi@anadolu.edu.tr"
                  className="hover:text-white transition-colors"
                >
                  gitar.senligi@anadolu.edu.tr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-white mb-4">Bağlantılar</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.anadolu.edu.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-gold-400 shrink-0" />
                  Anadolu Üniversitesi
                </a>
              </li>
              <li>
                <a
                  href="https://www.anadolu.edu.tr/akademik/fakulteler/devlet-konservatuvari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-gold-400 shrink-0" />
                  Devlet Konservatuvarı
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 Anadolu Üniversitesi Devlet Konservatuvarı. Tüm hakları saklıdır.</p>
          <p>III. Anadolu Üniversitesi Gitar Şenliği</p>
        </div>
      </div>
    </footer>
  );
}
