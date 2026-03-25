import type { Video, FeaturedVideo } from '../types';

// ─── Öne Çıkan Video ─────────────────────────────────────────────

export const featuredVideo: FeaturedVideo = {
  title: 'II. Anadolu Üniversitesi Gitar Şenliği Orkestra Performansı',
  youtubeUrl: 'https://www.youtube.com/watch?v=nadCt6jyZOE',
  description:
    'Geçen yılki şenlikten öne çıkan orkestra performans kaydı. Bu video, şenliğin müzikal atmosferini ve orkestra çalışmalarının kalitesini yansıtmaktadır.',
};

// ─── Ek eğitim videoları (isteğe bağlı) ───────────────────────────
//
// Öğrenci ve eğitmen parti kayıtları: VideosSection + partRecordings.ts
// Buraya category: 'student' | 'teacher' ile ek VideoCard satırları eklenebilir.

export const videos: Video[] = [];

export function getVideosByCategory(category: Video['category']): Video[] {
  return videos
    .filter((v) => v.category === category)
    .sort((a, b) => a.orderIndex - b.orderIndex);
}
