import type { PiecePartRecordings } from '../types';

/** Öğrenci gitar orkestrası — parti kayıt videoları (kaynak: Parti Kayıt Listesi dokümanı) */
export const studentPartRecordings: PiecePartRecordings[] = [
  {
    id: 'ogr-dyens-trio',
    title: 'Roland Dyens – O Trio Magico (3 gitar)',
    slots: [
      { partLabel: '1. gitar', performer: 'Ekin Özlü', youtubeUrl: 'https://www.youtube.com/watch?v=mv5110AsTg4' },
      { partLabel: '2. gitar', performer: 'Tarık', youtubeUrl: 'https://www.youtube.com/watch?v=KLXWYgdiGMw' },
      { partLabel: '3. gitar', performer: 'Ulaş', youtubeUrl: 'https://www.youtube.com/watch?v=_LuVfRB43w0' },
    ],
  },
  {
    id: 'ogr-granados',
    title: 'Enrique Granados – Spanish Dance No. 2 (3 gitar)',
    slots: [
      { partLabel: '1. gitar', performer: undefined, youtubeUrl: null },
      { partLabel: '2. gitar', performer: 'Tarık', youtubeUrl: 'https://www.youtube.com/watch?v=u227-p9D3tM' },
      { partLabel: '3. gitar', performer: 'Baturhan', youtubeUrl: 'https://www.youtube.com/watch?v=04EqXZInioQ' },
    ],
  },
  {
    id: 'ogr-schubert',
    title: 'Franz Schubert – Ständchen (3 gitar)',
    slots: [
      { partLabel: '1. gitar', performer: 'Sıla', youtubeUrl: 'https://www.youtube.com/watch?v=uZPsHAASzAU' },
      { partLabel: '2. gitar', performer: 'Tamay', youtubeUrl: 'https://www.youtube.com/watch?v=40AFoow3suo' },
      { partLabel: '3. gitar', performer: 'Baturhan', youtubeUrl: 'https://www.youtube.com/watch?v=IbfD6R-mMoY' },
    ],
  },
  {
    id: 'ogr-penella',
    title: 'Manuel Penella – El Gato Montés (4 gitar)',
    slots: [
      { partLabel: '1. gitar', performer: 'Sıla', youtubeUrl: 'https://www.youtube.com/watch?v=y1STFwjxMwA' },
      { partLabel: '2. gitar', performer: 'Tamay', youtubeUrl: 'https://www.youtube.com/watch?v=czDPO7b3esU' },
      { partLabel: '3. gitar', performer: 'Baturhan', youtubeUrl: 'https://www.youtube.com/watch?v=e1csMLkGY9w' },
      { partLabel: '4. gitar', performer: 'Ulaş', youtubeUrl: 'https://www.youtube.com/shorts/dgLRQWVOFe4' },
    ],
  },
];

/** GSL gitar eğitmenleri orkestrası — parti kayıt videoları */
export const teacherPartRecordings: PiecePartRecordings[] = [
  {
    id: 'hoca-villa-lobos',
    title: 'Heitor Villa-Lobos – Gavotte-Choro (3 gitar)',
    slots: [
      { partLabel: '1. gitar', performer: undefined, youtubeUrl: null },
      { partLabel: '2. gitar', performer: 'Duru Yavuşan', youtubeUrl: 'https://www.youtube.com/watch?v=TuzHSCKYWuw' },
      { partLabel: '3. gitar', performer: 'Caner Yiğiter', youtubeUrl: 'https://www.youtube.com/watch?v=CwbHgWlBiJ8' },
    ],
  },
  {
    id: 'hoca-fersan',
    title: 'Refik Fersan – Sultan-ı Yegâh Sirto (3 gitar)',
    slots: [
      {
        partLabel: '1. gitar',
        performer: undefined,
        youtubeUrl: null,
      },
      { partLabel: '2. gitar', performer: 'Duru Yavuşan', youtubeUrl: 'https://www.youtube.com/watch?v=7UkGkSTA_q4' },
      { partLabel: '3. gitar', performer: 'Caner Yiğiter', youtubeUrl: 'https://www.youtube.com/watch?v=wcqiocdLOTM' },
    ],
  },
  {
    id: 'hoca-gallo',
    title: 'Rafael Gallo – Llanura (4 gitar)',
    slots: [
      {
        partLabel: '1. gitar',
        performer: undefined,
        youtubeUrl: null,
      },
      { partLabel: '2. gitar', performer: 'Duru Yavuşan', youtubeUrl: 'https://www.youtube.com/watch?v=U-KUgbCdgUA' },
      { partLabel: '3. gitar', performer: 'Caner Yiğiter', youtubeUrl: 'https://www.youtube.com/watch?v=JrhrWk2Vc8c' },
      { partLabel: '4. gitar', performer: 'Abdullah Kaya', youtubeUrl: 'https://www.youtube.com/watch?v=OnV2chtmHBU' },
    ],
  },
];
