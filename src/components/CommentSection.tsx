import { useState } from 'react';
import { MessageSquare, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { useComments } from '../hooks/useComments';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

interface CommentSectionProps {
  videoId: string;
}

export default function CommentSection({ videoId }: CommentSectionProps) {
  const { comments, loading, error, submitComment, isConfigured } = useComments(videoId);
  const [expanded, setExpanded] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (authorName: string, content: string) => {
    try {
      setSubmitStatus('idle');
      await submitComment(authorName, content);
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (err) {
      setSubmitStatus('error');
      setSubmitError(err instanceof Error ? err.message : 'Yorum gönderilirken hata oluştu');
    }
  };

  if (!isConfigured) {
    return (
      <div className="border-t border-stone-100 pt-6">
        <div className="flex items-center gap-2 text-stone-400 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>Yorum sistemi şu an yapılandırılmamış.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t border-stone-100 pt-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-wine-700 transition-colors mb-4"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Yorumlar ({comments.length})</span>
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {expanded && (
        <div className="space-y-6">
          {loading && <p className="text-sm text-stone-400">Yorumlar yükleniyor...</p>}

          {error && (
            <div className="flex items-center gap-2 text-sm text-red-600">
              <AlertCircle className="w-4 h-4" />
              <span>{error}</span>
            </div>
          )}

          {!loading && comments.length === 0 && (
            <p className="text-sm text-stone-400">
              Henüz onaylanmış yorum bulunmuyor. İlk yorumu siz yazın!
            </p>
          )}

          <div className="space-y-4">
            {comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </div>

          <CommentForm onSubmit={handleSubmit} />

          {submitStatus === 'success' && (
            <p className="text-sm text-emerald-600 bg-emerald-50 rounded-lg px-4 py-3">
              Yorumunuz başarıyla gönderildi. Onaylandıktan sonra görünecektir.
            </p>
          )}

          {submitStatus === 'error' && (
            <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">{submitError}</p>
          )}
        </div>
      )}
    </div>
  );
}
