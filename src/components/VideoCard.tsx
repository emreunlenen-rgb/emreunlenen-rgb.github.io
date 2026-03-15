import { getYouTubeEmbedUrl } from '../utils/youtube';
import CommentSection from './CommentSection';
import type { Video } from '../types';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const embedUrl = getYouTubeEmbedUrl(video.youtubeUrl);

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
      {embedUrl && (
        <div className="aspect-video w-full">
          <iframe
            src={embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6 sm:p-8">
        <h3 className="font-display text-xl font-semibold text-stone-900 mb-2">
          {video.title}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed mb-6">{video.description}</p>

        <CommentSection videoId={video.id} />
      </div>
    </article>
  );
}
