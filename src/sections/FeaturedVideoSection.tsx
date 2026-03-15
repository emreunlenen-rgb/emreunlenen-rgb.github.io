import { Play } from 'lucide-react';
import { featuredVideo } from '../data/videos';
import { getYouTubeEmbedUrl } from '../utils/youtube';

export default function FeaturedVideoSection() {
  const embedUrl = getYouTubeEmbedUrl(featuredVideo.youtubeUrl);

  return (
    <section className="py-24 bg-wine-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-80 h-80 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-wine-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold tracking-wider uppercase mb-3">
            <Play className="w-4 h-4" />
            <span>Öne Çıkan Video</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            {featuredVideo.title}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            {featuredVideo.description}
          </p>
        </div>

        {embedUrl && (
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
            <iframe
              src={embedUrl}
              title={featuredVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
}
