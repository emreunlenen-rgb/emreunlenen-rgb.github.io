# 3. Anadolu Üniversitesi Gitar Şenliği

27 Nisan 2026 • Eskişehir

**Canlı site:** [https://emreunlenen-rgb.github.io/](https://emreunlenen-rgb.github.io/)

Klasik gitar sanatının eğitimle buluştuğu akademik bir etkinliğin web sitesi. Öğrenci ve eğitmen gitar orkestraları için eğitim videoları, fotoğraf galerisi, yorum sistemi ve yönetim paneli içerir.

## Teknolojiler

- **React 19** + **TypeScript**
- **Vite 8** (build aracı)
- **Tailwind CSS v4** (stil)
- **Supabase** (yorum veritabanı + kimlik doğrulama)
- **React Router** (HashRouter — GitHub Pages uyumlu)
- **Lucide React** (ikonlar)

## Hızlı Başlangıç

```bash
npm install
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresini açın.

## GitHub Pages Deployment

Bu proje `emreunlenen-rgb.github.io` kullanıcı sitesi olarak yapılandırılmıştır.

### İlk Push

```bash
git init
git add .
git commit -m "İlk sürüm"
git branch -M main
git remote add origin https://github.com/emreunlenen-rgb/emreunlenen-rgb.github.io.git
git push -u origin main
```

### GitHub Pages Ayarı

1. [github.com/emreunlenen-rgb/emreunlenen-rgb.github.io](https://github.com/emreunlenen-rgb/emreunlenen-rgb.github.io) → **Settings** → **Pages**
2. **Source** olarak **"GitHub Actions"** seçin
3. `main` branch'e her push'ta `.github/workflows/deploy.yml` otomatik çalışır

Site adresi: **https://emreunlenen-rgb.github.io/**

### Supabase Secrets (Opsiyonel)

Yorum sistemi kullanacaksanız:

1. Repository **Settings → Secrets and variables → Actions**
2. Şu secret'ları ekleyin:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

> **Not:** Supabase ayarlanmadan site çalışmaya devam eder, yalnızca yorum sistemi devre dışı kalır.

## Ortam Değişkenleri

Yerel geliştirme için `.env.example` dosyasını `.env` olarak kopyalayın:

```bash
cp .env.example .env
```

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Supabase Kurulumu

1. [supabase.com](https://supabase.com) adresinde yeni proje oluşturun
2. **Settings → API** bölümünden URL ve anon key'i kopyalayın
3. Supabase **SQL Editor**'de `supabase-schema.sql` dosyasının içeriğini çalıştırın
4. **Authentication → Users** bölümünden admin kullanıcısı oluşturun
5. `https://emreunlenen-rgb.github.io/#/admin` adresinden giriş yapın

## Fotoğraf Galerisi

Görseller `public/images/gallery/` klasöründen yüklenir.

Yeni fotoğraf eklemek için:

1. Görseli `public/images/gallery/` klasörüne kopyalayın
2. `src/data/gallery.ts` dosyasına giriş ekleyin:

```typescript
{
  id: '7',
  src: '/images/gallery/07.jpg',
  alt: 'Fotoğraf açıklaması',
  caption: 'Alt yazı',
  credit: 'Kaynak',
}
```

## Video Güncelleme

### Öne Çıkan Video

`src/data/videos.ts` → `featuredVideo` nesnesini düzenleyin.

### Eğitim Videoları

`src/data/videos.ts` → `videos` dizisine yeni giriş ekleyin:

```typescript
{
  id: 'student-5',
  title: 'Video Başlığı',
  description: 'Açıklama.',
  youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID',
  category: 'student',  // veya 'teacher'
  orderIndex: 5,
}
```

**Kategoriler:**
- `student` — Öğrenci Gitar Orkestrası
- `teacher` — Güzel Sanatlar Liseleri Gitar Eğitmenleri Orkestrası

## Proje Yapısı

```
├── .github/workflows/deploy.yml
├── public/images/gallery/
├── src/
│   ├── components/
│   ├── sections/
│   ├── pages/
│   ├── hooks/
│   ├── lib/
│   ├── data/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── supabase-schema.sql
└── vite.config.ts
```

## Admin Paneli

`https://emreunlenen-rgb.github.io/#/admin` adresinden erişilir:

- Supabase Auth ile giriş
- Yorumları onaylama / silme
- Eğitmen olarak yanıt verme
- Durum filtreleme

## Lisans

Bu proje Anadolu Üniversitesi Devlet Konservatuvarı tarafından eğitim amaçlı kullanılmak üzere geliştirilmiştir.
