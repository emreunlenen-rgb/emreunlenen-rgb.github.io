/**
 * Öğrenci gitar orkestrası oturma listesi (PDF).
 *
 * Oturma görseli: 1.–3. partiler **üç gitarlı eser listesine** göredir.
 * Dört gitarlı eserlerde yalnızca **4. parti** ayrı sütunda gösterilir (liste farkı burada).
 */

export const seatingThreeGuitar = {
  title: 'Birinci üç parti (üç ve dört gitarlı eserler için esas)',
  parts: [
    {
      label: '1. Parti',
      names: [
        'Kadriye Nur Sunal',
        'Dilan Sayalı',
        'Eylül Uğur',
        'Efe Eren Çakır',
        'Deniz Büyükkaya',
        'İrem Demirci',
        'Batuhan Taştan',
        'Berkay Taha Kaygısız',
        'Emre Berat Keleş',
        'Ali Efe Kardaş',
        'Zeynep Taştekin',
      ],
    },
    {
      label: '2. Parti',
      names: [
        'Sıla Horata',
        'Utkan Demir Ayaz',
        'Didem Gül Öztürk',
        'Zeynep Ece Çoban',
        'Ege Kayrancı',
        'Eflanur İşkan',
        'Umut S. Şengezer',
        'Arda Arkın',
        'Deniz Çelik',
        'Sinem Yıldız',
        'Aybars Ekşioğlu',
        'Toprak',
        'Yağmur',
      ],
    },
    {
      label: '3. Parti',
      names: [
        'Arda Öksüz',
        'Nehir Demiç',
        'Esma Yılmaz',
        'Nidanur Özlevbaş',
        'Toprak Gügül',
        'Muhammed Y. Dik',
        'Yasin Altay',
        'Kuzey Akkurt',
        'Masal',
        'Nehir',
        'İrem Günay',
        'Azra Gezer',
        'Ayşe Derin Koçak',
      ],
    },
  ],
} as const;

/** Yalnızca dört gitarlı eserlerde kullanılan 4. parti sırası (PDF dört gitar listesi). */
export const seatingFourthPartOnly = {
  label: '4. Parti',
  description: 'Yalnızca dört gitar partili eserlerde geçerlidir.',
  names: [
    'Arda Öksüz',
    'Nehir Demiç',
    'Nidanur Özlevbaş',
    'Yasin Altay',
    'Kuzey Akkurt',
    'Masal',
    'Nehir',
  ],
} as const;
