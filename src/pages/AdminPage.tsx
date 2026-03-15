import { useState, useEffect, useCallback } from 'react';
import {
  LogIn,
  LogOut,
  Check,
  Trash2,
  MessageSquare,
  Clock,
  CheckCircle2,
  Filter,
  RefreshCw,
  AlertCircle,
  Send,
  Music,
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { videos } from '../data/videos';
import { formatDate } from '../utils/youtube';
import type { Comment } from '../types';

interface RawComment {
  id: string;
  video_id: string;
  parent_id: string | null;
  author_name: string;
  content: string;
  role: 'student' | 'teacher' | 'admin';
  is_approved: boolean;
  created_at: string;
}

type FilterStatus = 'all' | 'pending' | 'approved';

function getVideoTitle(videoId: string): string {
  return videos.find((v) => v.id === videoId)?.title ?? 'Bilinmeyen Video';
}

export default function AdminPage() {
  const { user, loading: authLoading, signIn, signOut, isConfigured } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const [comments, setComments] = useState<Comment[]>([]);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [filter, setFilter] = useState<FilterStatus>('pending');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchAllComments = useCallback(async () => {
    if (!supabase) return;

    setCommentsLoading(true);
    try {
      let query = supabase
        .from('comments')
        .select('*')
        .is('parent_id', null)
        .order('created_at', { ascending: false });

      if (filter === 'pending') {
        query = query.eq('is_approved', false);
      } else if (filter === 'approved') {
        query = query.eq('is_approved', true);
      }

      const { data, error } = await query;
      if (error) throw error;

      const mapped = (data as RawComment[]).map((row) => ({
        id: row.id,
        videoId: row.video_id,
        parentId: row.parent_id,
        authorName: row.author_name,
        content: row.content,
        role: row.role,
        isApproved: row.is_approved,
        createdAt: row.created_at,
      }));

      setComments(mapped);
    } catch (err) {
      console.error('Yorumlar yüklenirken hata:', err);
    } finally {
      setCommentsLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    if (user) fetchAllComments();
  }, [user, fetchAllComments]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setLoginError('E-posta ve şifre gereklidir.');
      return;
    }

    setLoginLoading(true);
    setLoginError('');
    try {
      await signIn(email, password);
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : 'Giriş başarısız.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleApprove = async (commentId: string) => {
    if (!supabase) return;
    setActionLoading(commentId);
    try {
      await supabase.from('comments').update({ is_approved: true }).eq('id', commentId);
      await fetchAllComments();
    } catch (err) {
      console.error('Onaylama hatası:', err);
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (commentId: string) => {
    if (!supabase || !confirm('Bu yorumu silmek istediğinize emin misiniz?')) return;
    setActionLoading(commentId);
    try {
      await supabase.from('comments').delete().eq('id', commentId);
      await fetchAllComments();
    } catch (err) {
      console.error('Silme hatası:', err);
    } finally {
      setActionLoading(null);
    }
  };

  const handleReply = async (commentId: string, videoId: string) => {
    if (!supabase || !replyContent.trim()) return;
    setActionLoading(commentId);
    try {
      await supabase.from('comments').insert({
        video_id: videoId,
        parent_id: commentId,
        author_name: user?.email?.split('@')[0] ?? 'Eğitmen',
        content: replyContent.trim(),
        role: 'teacher',
        is_approved: true,
      });
      setReplyContent('');
      setReplyingTo(null);
      await fetchAllComments();
    } catch (err) {
      console.error('Yanıt hatası:', err);
    } finally {
      setActionLoading(null);
    }
  };

  if (!isConfigured) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 max-w-md w-full text-center">
          <AlertCircle className="w-12 h-12 text-stone-300 mx-auto mb-4" />
          <h2 className="font-display text-xl font-semibold text-stone-800 mb-2">
            Supabase Yapılandırılmamış
          </h2>
          <p className="text-sm text-stone-500">
            Yönetim panelini kullanmak için .env dosyanızda Supabase ortam değişkenlerini
            yapılandırın.
          </p>
          <a
            href="#/"
            className="inline-block mt-6 text-sm text-wine-700 hover:text-wine-800 font-medium"
          >
            ← Ana Sayfaya Dön
          </a>
        </div>
      </div>
    );
  }

  if (authLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-wine-700 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-wine-800/5 flex items-center justify-center">
              <Music className="w-7 h-7 text-wine-700" />
            </div>
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-1">
              Yönetim Paneli
            </h2>
            <p className="text-sm text-stone-500">Devam etmek için giriş yapın</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">E-posta</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="w-full px-3.5 py-2.5 text-sm border border-stone-200 rounded-lg bg-white text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-wine-600/20 focus:border-wine-600 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Şifre</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 text-sm border border-stone-200 rounded-lg bg-white text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-wine-600/20 focus:border-wine-600 transition-colors"
                required
              />
            </div>

            {loginError && (
              <div className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-wine-700 hover:bg-wine-800 disabled:opacity-50 rounded-lg transition-colors"
            >
              <LogIn className="w-4 h-4" />
              {loginLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="#/"
              className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
            >
              ← Ana Sayfaya Dön
            </a>
          </div>
        </div>
      </div>
    );
  }

  const pendingCount = comments.filter((c) => !c.isApproved).length;

  return (
    <div className="min-h-screen bg-cream">
      {/* Admin header */}
      <header className="bg-white border-b border-stone-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Music className="w-5 h-5 text-gold-600" />
              <h1 className="font-display text-lg font-semibold text-stone-900">
                Yönetim Paneli
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-stone-500 hidden sm:inline">{user.email}</span>
              <a
                href="#/"
                className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
              >
                Siteyi Gör
              </a>
              <button
                onClick={signOut}
                className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Çıkış</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 border border-stone-100">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-stone-400" />
              <div>
                <p className="text-2xl font-bold text-stone-900">{comments.length}</p>
                <p className="text-xs text-stone-500">Toplam Yorum</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-stone-100">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-500" />
              <div>
                <p className="text-2xl font-bold text-stone-900">{pendingCount}</p>
                <p className="text-xs text-stone-500">Bekleyen Onay</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-stone-100">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <div>
                <p className="text-2xl font-bold text-stone-900">
                  {comments.length - pendingCount}
                </p>
                <p className="text-xs text-stone-500">Onaylanmış</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and refresh */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-stone-400" />
            <div className="flex gap-1 bg-white rounded-lg border border-stone-200 p-1">
              {([
                { key: 'pending', label: 'Bekleyen' },
                { key: 'approved', label: 'Onaylı' },
                { key: 'all', label: 'Tümü' },
              ] as { key: FilterStatus; label: string }[]).map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    filter === f.key
                      ? 'bg-wine-700 text-white'
                      : 'text-stone-500 hover:text-stone-700'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={fetchAllComments}
            disabled={commentsLoading}
            className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-700 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${commentsLoading ? 'animate-spin' : ''}`} />
            Yenile
          </button>
        </div>

        {/* Comments list */}
        {commentsLoading && comments.length === 0 ? (
          <div className="text-center py-16">
            <div className="animate-spin w-8 h-8 border-2 border-wine-700 border-t-transparent rounded-full mx-auto" />
          </div>
        ) : comments.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-stone-100">
            <MessageSquare className="w-10 h-10 text-stone-200 mx-auto mb-3" />
            <p className="text-stone-400">Bu filtrede yorum bulunmuyor.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white rounded-xl border border-stone-100 p-5 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-stone-800">
                        {comment.authorName}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          comment.isApproved
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-amber-50 text-amber-700'
                        }`}
                      >
                        {comment.isApproved ? 'Onaylı' : 'Bekliyor'}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400">
                      {getVideoTitle(comment.videoId)} • {formatDate(comment.createdAt)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {!comment.isApproved && (
                      <button
                        onClick={() => handleApprove(comment.id)}
                        disabled={actionLoading === comment.id}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors disabled:opacity-50"
                      >
                        <Check className="w-3.5 h-3.5" />
                        Onayla
                      </button>
                    )}
                    <button
                      onClick={() =>
                        setReplyingTo(replyingTo === comment.id ? null : comment.id)
                      }
                      disabled={actionLoading === comment.id}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-wine-700 bg-wine-50 hover:bg-wine-100 rounded-lg transition-colors disabled:opacity-50"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Yanıtla
                    </button>
                    <button
                      onClick={() => handleDelete(comment.id)}
                      disabled={actionLoading === comment.id}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors disabled:opacity-50"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Sil
                    </button>
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed whitespace-pre-wrap break-words">
                  {comment.content}
                </p>

                {replyingTo === comment.id && (
                  <div className="mt-4 pl-4 border-l-2 border-gold-200">
                    <div className="flex gap-2">
                      <textarea
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        placeholder="Yanıtınızı yazın..."
                        rows={2}
                        className="flex-1 px-3 py-2 text-sm border border-stone-200 rounded-lg bg-white text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-wine-600/20 focus:border-wine-600 transition-colors resize-none"
                      />
                      <button
                        onClick={() => handleReply(comment.id, comment.videoId)}
                        disabled={!replyContent.trim() || actionLoading === comment.id}
                        className="self-end inline-flex items-center gap-1 px-4 py-2 text-xs font-medium text-white bg-wine-700 hover:bg-wine-800 disabled:opacity-50 rounded-lg transition-colors"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Gönder
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
