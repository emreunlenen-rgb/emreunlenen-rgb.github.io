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
// ✅  = Kesinleşmiş eğitim videosu
// ⏳  = Geçici (placeholder) — gerçek eğitim videosu hazır olduğunda değiştirilecek
//       Geçici videolar Emre Ünlenen kanalından doğrulanmış performans kayıtlarıdır.
//
// Yeni video eklemek için: id, title, description, youtubeUrl, category, orderIndex girin.
// category: 'student' | 'teacher'

export const videos: Video[] = [

  // ═══════════════════════════════════════════════════════════════
  //  ÖĞRENCİ GİTAR ORKESTRASI
  // ═══════════════════════════════════════════════════════════════

  // ✅ Kesinleşmiş
  {
    id: 'student-1',
    title: 'Roland Dyens – O Trio Magico (1. Gitar)',
    description:
      'Öğrenci gitar orkestrası repertuvarından Roland Dyens\'in O Trio Magico eserinin 1. gitar partisi çalışma materyali.',
    youtubeUrl: 'https://www.youtube.com/watch?v=mv5110AsTg4',
    category: 'student',
    orderIndex: 1,
  },

  // ✅ Kesinleşmiş
  {
    id: 'student-2',
    title: 'Enrique Granados – Spanish Dance Nr. 2 (1. Gitar)',
    description:
      'Granados\'un İspanyol Dansı Nr. 2 eserinin 1. gitar partisi için hazırlanmış detaylı çalışma videosu.',
    youtubeUrl: 'https://www.youtube.com/watch?v=qoSIOdhaf54',
    category: 'student',
    orderIndex: 2,
  },

  // ⏳ Geçici — gerçek eğitim videosu ile değiştirilecek
  {
    id: 'student-3',
    title: 'Roland Dyens – Libra Sonatine I: India',
    description:
      'Geçici içerik · Dyens\'in Libra Sonatine süitinden India bölümü. Ritmik yapı ve müzikal ifade çalışması için referans kayıt.',
    youtubeUrl: 'https://www.youtube.com/watch?v=wQHl4bOS3WI',
    category: 'student',
    orderIndex: 3,
  },

  // ═══════════════════════════════════════════════════════════════
  //  GÜZEL SANATLAR LİSELERİ GİTAR EĞİTMENLERİ ORKESTRASI
  // ═══════════════════════════════════════════════════════════════

  // ⏳ Geçici — gerçek eğitim videosu ile değiştirilecek
  {
    id: 'teacher-1',
    title: 'Astor Piazzolla – Oblivion (Düz. Roland Dyens)',
    description:
      'Geçici içerik · Piazzolla\'nın Oblivion eserinin Dyens düzenlemesi. Yorumlama, ton rengi ve müzikal ifade üzerine referans performans.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ZTOnLcZchrU',
    category: 'teacher',
    orderIndex: 1,
  },

  // ⏳ Geçici — gerçek eğitim videosu ile değiştirilecek
  {
    id: 'teacher-2',
    title: 'Turgay Erdener – Gitar Sonatı: I. Bölüm (Allegro Giocoso)',
    description:
      'Geçici içerik · Çağdaş Türk bestecisi Turgay Erdener\'in Gitar Sonatı\'nın birinci bölümü. Çağdaş Türk gitar müziği örneği.',
    youtubeUrl: 'https://www.youtube.com/watch?v=oe-YeYYQZmk',
    category: 'teacher',
    orderIndex: 2,
  },
];

export function getVideosByCategory(category: Video['category']): Video[] {
  return videos
    .filter((v) => v.category === category)
    .sort((a, b) => a.orderIndex - b.orderIndex);
}
