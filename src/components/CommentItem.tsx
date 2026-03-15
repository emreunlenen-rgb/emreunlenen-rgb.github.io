import { User, GraduationCap, Shield } from 'lucide-react';
import { formatDate } from '../utils/youtube';
import type { Comment } from '../types';

interface CommentItemProps {
  comment: Comment;
}

const ROLE_CONFIG = {
  student: {
    icon: User,
    label: 'Öğrenci',
    className: 'bg-stone-100 text-stone-600',
  },
  teacher: {
    icon: GraduationCap,
    label: 'Eğitmen',
    className: 'bg-gold-100 text-gold-800',
  },
  admin: {
    icon: Shield,
    label: 'Yönetici',
    className: 'bg-wine-100 text-wine-800',
  },
} as const;

export default function CommentItem({ comment }: CommentItemProps) {
  const config = ROLE_CONFIG[comment.role];
  const Icon = config.icon;

  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 mt-0.5">
          <Icon className="w-4 h-4 text-stone-500" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-sm font-medium text-stone-800">{comment.authorName}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${config.className}`}>
              {config.label}
            </span>
            <span className="text-xs text-stone-400">{formatDate(comment.createdAt)}</span>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed whitespace-pre-wrap break-words">
            {comment.content}
          </p>
        </div>
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-8 pl-4 border-l-2 border-gold-200 space-y-3">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
}
