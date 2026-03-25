# III. Anadolu Üniversitesi Gitar Şenliği

27 Nisan 2026 • Eskişehir

**Canlı site:** [https://emreunlenen-rgb.github.io/](https://emreunlenen-rgb.github.io/)

Klasik gitar sanatının eğitimle buluştuğu akademik bir etkinliğin web sitesi. Öğrenci ve eğitmen gitar orkestraları için parti kayıt videoları, öne çıkan video, fotoğraf galerisi ve oturma planı içerir.

## Teknolojiler

- **React 19** + **TypeScript**
- **Vite 8** (build aracı)
- **Tailwind CSS v4** (stil; tipografi: Outfit + Source Sans 3)
- **React Router** (HashRouter — GitHub Pages uyumlu)
- **Lucide React** (ikonlar)
- **clsx**

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

Site adresi: **https://emreunlenen-rgb.github.io/** (özel alan adı kullanıyorsanız DNS’inizi buna yönlendirin.)

## Fotoğraf Galerisi

Görseller `public/images/gallery/` klasöründen yüklenir. `src/data/gallery.ts` dosyasında `src`, `alt`, `caption`, `credit` alanlarını güncelleyin.

## Video İçeriği

- **Öne çıkan video:** `src/data/videos.ts` → `featuredVideo`
- **Öğrenci / eğitmen parti kayıtları:** `src/data/partRecordings.ts` → `studentPartRecordings`, `teacherPartRecordings`

## Proje Yapısı

```
├── .github/workflows/deploy.yml
├── public/images/gallery/
├── src/
│   ├── components/
│   ├── sections/
│   ├── pages/
│   ├── data/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── supabase-schema.sql   # arşiv (yorum sistemi kaldırıldı)
└── vite.config.ts
```

## Lisans

Bu proje Anadolu Üniversitesi Devlet Konservatuvarı tarafından eğitim amaçlı kullanılmak üzere geliştirilmiştir.
