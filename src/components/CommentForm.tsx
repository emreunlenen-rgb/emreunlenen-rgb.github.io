import { useState } from 'react';
import { Send } from 'lucide-react';

interface CommentFormProps {
  onSubmit: (authorName: string, content: string) => Promise<void>;
  placeholder?: string;
  buttonText?: string;
}

const MAX_COMMENT_LENGTH = 1000;
const MAX_NAME_LENGTH = 100;

export default function CommentForm({
  onSubmit,
  placeholder = 'Yorumunuzu yazın...',
  buttonText = 'Gönder',
}: CommentFormProps) {
  const [authorName, setAuthorName] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; content?: string }>({});

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    const trimmedName = authorName.trim();
    const trimmedContent = content.trim();

    if (!trimmedName) {
      newErrors.name = 'Ad Soyad alanı zorunludur.';
    } else if (trimmedName.length > MAX_NAME_LENGTH) {
      newErrors.name = `Ad Soyad en fazla ${MAX_NAME_LENGTH} karakter olabilir.`;
    }

    if (!trimmedContent) {
      newErrors.content = 'Yorum alanı zorunludur.';
    } else if (trimmedContent.length > MAX_COMMENT_LENGTH) {
      newErrors.content = `Yorum en fazla ${MAX_COMMENT_LENGTH} karakter olabilir.`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      await onSubmit(authorName.trim(), content.trim());
      setAuthorName('');
      setContent('');
      setErrors({});
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-stone-50 rounded-xl p-4 sm:p-5 space-y-4">
      <div>
        <label htmlFor="author-name" className="block text-sm font-medium text-stone-700 mb-1.5">
          Ad Soyad
        </label>
        <input
          id="author-name"
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Adınızı ve soyadınızı girin"
          maxLength={MAX_NAME_LENGTH}
          className="w-full px-3.5 py-2.5 text-sm border border-stone-200 rounded-lg bg-white text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-wine-600/20 focus:border-wine-600 transition-colors"
          disabled={submitting}
        />
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="comment-content" className="block text-sm font-medium text-stone-700 mb-1.5">
          Yorumunuz
        </label>
        <textarea
          id="comment-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={placeholder}
          rows={3}
          maxLength={MAX_COMMENT_LENGTH}
          className="w-full px-3.5 py-2.5 text-sm border border-stone-200 rounded-lg bg-white text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-wine-600/20 focus:border-wine-600 transition-colors resize-none"
          disabled={submitting}
        />
        <div className="flex items-center justify-between mt-1">
          {errors.content ? (
            <p className="text-xs text-red-600">{errors.content}</p>
          ) : (
            <span />
          )}
          <span className="text-xs text-stone-400">
            {content.length}/{MAX_COMMENT_LENGTH}
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-wine-700 hover:bg-wine-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
      >
        <Send className="w-4 h-4" />
        {submitting ? 'Gönderiliyor...' : buttonText}
      </button>
    </form>
  );
}
