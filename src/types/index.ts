export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  category: 'student' | 'teacher';
  orderIndex: number;
}

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

export interface Comment {
  id: string;
  videoId: string;
  parentId: string | null;
  authorName: string;
  content: string;
  role: 'student' | 'teacher' | 'admin';
  isApproved: boolean;
  createdAt: string;
  replies?: Comment[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
