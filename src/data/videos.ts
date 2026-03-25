import type { Video, FeaturedVideo } from '../types';

// ─── Öne Çıkan Video ─────────────────────────────────────────────

export const featuredVideo: FeaturedVideo = {
  title: 'II. Anadolu Üniversitesi Gitar Şenliği Orkestra Performansı',
  youtubeUrl: 'https://www.youtube.com/watch?v=nadCt6jyZOE',
  description:
    'Geçen yılki şenlikten öne çıkan orkestra performans kaydı. Bu video, şenliğin müzikal atmosferini ve orkestra çalışmalarının kalitesini yansıtmaktadır.',
};

// ─── Eğitim Videoları ─────────────────────────────────────────────
//
// Yeni video: id, title, description, youtubeUrl, category, orderIndex
// category: 'student' | 'teacher'
//
// GSL eğitmen orkestrası parti kayıtları: ana sayfada «Parti kayıtları» bölümünde.

export const videos: Video[] = [
  {
    id: 'student-1',
    title: 'Roland Dyens – O Trio Magico (1. Gitar)',
    description:
      'Öğrenci gitar orkestrası repertuvarından Roland Dyens\'in O Trio Magico eserinin 1. gitar partisi çalışma materyali.',
    youtubeUrl: 'https://www.youtube.com/watch?v=mv5110AsTg4',
    category: 'student',
    orderIndex: 1,
  },
  {
    id: 'student-2',
    title: 'Enrique Granados – Spanish Dance Nr. 2 (1. Gitar)',
    description:
      'Granados\'un İspanyol Dansı Nr. 2 eserinin 1. gitar partisi için hazırlanmış detaylı çalışma videosu.',
    youtubeUrl: 'https://www.youtube.com/watch?v=qoSIOdhaf54',
    category: 'student',
    orderIndex: 2,
  },
];

export function getVideosByCategory(category: Video['category']): Video[] {
  return videos
    .filter((v) => v.category === category)
    .sort((a, b) => a.orderIndex - b.orderIndex);
}
