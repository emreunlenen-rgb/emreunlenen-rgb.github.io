export function getYouTubeEmbedUrl(url: string): string | null {
  const trimmed = url.trim();
  if (!trimmed) return null;

  const listOnly = trimmed.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  const hasVideoId = /(?:v=|youtu\.be\/|\/embed\/|\/shorts\/)([a-zA-Z0-9_-]{11})/.test(trimmed);
  if (listOnly && !hasVideoId) {
    return `https://www.youtube.com/embed/videoseries?list=${listOnly[1]}`;
  }

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match?.[1]) {
      const base = `https://www.youtube.com/embed/${match[1]}`;
      const list = trimmed.match(/[?&]list=([a-zA-Z0-9_-]+)/);
      if (list) {
        return `${base}?list=${list[1]}`;
      }
      return base;
    }
  }
  return null;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
