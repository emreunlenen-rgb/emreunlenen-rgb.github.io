import { useState } from 'react';
import { Users, GraduationCap } from 'lucide-react';
import { getVideosByCategory } from '../data/videos';
import VideoCard from '../components/VideoCard';

type Tab = 'student' | 'teacher';

const TABS = [
  {
    id: 'student' as Tab,
    label: 'Öğrenci Gitar Orkestrası',
    icon: Users,
    description:
      'Öğrenci gitar orkestrası üyeleri için hazırlanmış teknik çalışma videoları ve orkestra eseri rehberleri.',
  },
  {
    id: 'teacher' as Tab,
    label: 'GSL Gitar Eğitmenleri Orkestrası',
    icon: GraduationCap,
    description:
      'Eğitmen orkestrası parti kayıtları «Parti kayıtları» bölümünde. Buraya genel eğitim videoları eklendiğinde listelenecektir.',
  },
];

export default function VideosSection() {
  const [activeTab, setActiveTab] = useState<Tab>('student');
  const activeTabData = TABS.find((t) => t.id === activeTab)!;
  const filteredVideos = getVideosByCategory(activeTab);

  return (
    <section id="videolar" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-sm font-semibold text-gold-600 tracking-wider uppercase mb-3">
            Eğitim Videoları
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
            Şenliğe Hazırlık Videoları
          </h2>
          <p className="text-stone-500 leading-relaxed">
            İki farklı orkestra kategorisi için özel olarak hazırlanmış eğitim içeriklerimizi
            izleyerek şenliğe en iyi şekilde hazırlanın.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10 max-w-2xl mx-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-wine-800 text-white shadow-lg shadow-wine-800/20'
                  : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab description */}
        <div className="text-center mb-10">
          <p className="text-sm text-stone-500 max-w-xl mx-auto">{activeTabData.description}</p>
        </div>

        {/* Video cards */}
        <div className="space-y-10">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-16">
            <p className="text-stone-400">Bu kategori için henüz video eklenmemiş.</p>
          </div>
        )}
      </div>
    </section>
  );
}
