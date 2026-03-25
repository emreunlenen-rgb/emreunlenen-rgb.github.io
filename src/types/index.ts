export interface FeaturedVideo {
  title: string;
  description: string;
  youtubeUrl: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** Tek bir parti kaydı (YouTube veya yakında) */
export interface PartRecordingSlot {
  partLabel: string;
  performer?: string;
  youtubeUrl: string | null;
}

/** Bir eser altındaki tüm parti kayıtları */
export interface PiecePartRecordings {
  id: string;
  title: string;
  slots: PartRecordingSlot[];
}
