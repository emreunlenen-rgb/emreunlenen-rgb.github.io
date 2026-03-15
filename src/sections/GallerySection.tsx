import { Camera } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import GalleryGrid from '../components/GalleryGrid';

export default function GallerySection() {
  return (
    <section id="galeri" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-sm font-semibold text-gold-600 tracking-wider uppercase mb-3">
            Galeri
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
            Geçen Yıldan Kareler
          </h2>
          <p className="text-stone-500 leading-relaxed">
            II. Anadolu Üniversitesi Gitar Şenliği'nden öne çıkan anlar. Konser performansları,
            atölye çalışmaları ve katılımcılarımızla birlikte yaşadığımız unutulmaz kareler.
          </p>
        </div>

        {galleryItems.length > 0 ? (
          <GalleryGrid items={galleryItems} />
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-100">
            <Camera className="w-10 h-10 text-stone-200 mx-auto mb-3" />
            <p className="text-stone-400 text-sm">Galeri görselleri yakında eklenecektir.</p>
          </div>
        )}

        {/* Yeni görseller: public/images/gallery/ klasörüne ekleyin, src/data/gallery.ts'yi güncelleyin */}
      </div>
    </section>
  );
}
