import { useState, useCallback } from 'react';
import { Music, Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { id: 'anasayfa', label: 'Ana Sayfa' },
  { id: 'hakkinda', label: 'Hakkında' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'videolar', label: 'Eğitim Videoları' },
  { id: 'oturus', label: 'Oturma planı' },
  { id: 'sss', label: 'SSS' },
  { id: 'iletisim', label: 'İletişim' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  const scrollTo = useCallback((id: string) => {
    if (isAdmin) {
      window.location.hash = '#/';
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  }, [isAdmin]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gold-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollTo('anasayfa')}
            className="flex items-center gap-2.5 text-wine-800 hover:text-wine-700 transition-colors"
          >
            <Music className="w-6 h-6 text-gold-600" />
            <span className="font-display text-lg font-semibold tracking-tight hidden sm:inline">
              Gitar Şenliği
            </span>
          </button>

          {!isAdmin && (
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm font-medium text-stone-500 hover:text-wine-700 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          )}

          {isAdmin && (
            <span className="text-sm font-medium text-wine-700">Yönetim Paneli</span>
          )}

          {!isAdmin && (
            <button
              className="md:hidden text-wine-800 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
        </div>
      </div>

      {menuOpen && !isAdmin && (
        <div className="md:hidden bg-cream border-b border-gold-200/50">
          <nav className="px-4 py-3 flex flex-col">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-stone-500 hover:text-wine-700 transition-colors py-3 text-left border-b border-stone-100 last:border-0"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
