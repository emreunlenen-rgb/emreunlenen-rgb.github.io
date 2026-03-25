import type { Video, FeaturedVideo } from '../types';

// ─── Öne Çıkan Video ─────────────────────────────────────────────

export const featuredVideo: FeaturedVideo = {
  title: 'II. Anadolu Üniversitesi Gitar Şenliği Orkestra Performansı',
  youtubeUrl: 'https://www.youtube.com/watch?v=nadCt6jyZOE',
  description:
    'Geçen yılki şenlikten öne çıkan orkestra performans kaydı. Bu video, şenliğin müzikal atmosferini ve orkestra çalışmalarının kalitesini yansıtmaktadır.',
};

// ─── Eğitim Videoları (GSL sekmesi) ───────────────────────────────
//
// Öğrenci orkestrası: «Şenliğe Hazırlık Videoları» sekmesinde parti kayıtları
// (src/data/partRecordings.ts → studentPartRecordings) gösterilir.
//
// Buraya yalnızca teacher kategorisinde ek kartlar için giriş ekleyin.

export const videos: Video[] = [];

export function getVideosByCategory(category: Video['category']): Video[] {
  return videos
    .filter((v) => v.category === category)
    .sort((a, b) => a.orderIndex - b.orderIndex);
}
