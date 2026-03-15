import { useState, useEffect, useCallback } from 'react';
import { supabase, supabaseConfigured } from '../lib/supabase';
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

function mapRow(row: RawComment): Comment {
  return {
    id: row.id,
    videoId: row.video_id,
    parentId: row.parent_id,
    authorName: row.author_name,
    content: row.content,
    role: row.role,
    isApproved: row.is_approved,
    createdAt: row.created_at,
  };
}

function nestComments(flat: Comment[]): Comment[] {
  const topLevel = flat.filter((c) => !c.parentId);
  const replies = flat.filter((c) => c.parentId);
  return topLevel.map((comment) => ({
    ...comment,
    replies: replies.filter((r) => r.parentId === comment.id),
  }));
}

export function useComments(videoId: string, showAll = false) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = useCallback(async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      let query = supabase
        .from('comments')
        .select('*')
        .eq('video_id', videoId)
        .order('created_at', { ascending: true });

      if (!showAll) {
        query = query.eq('is_approved', true);
      }

      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;

      const mapped = (data as RawComment[]).map(mapRow);
      setComments(nestComments(mapped));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Yorumlar yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  }, [videoId, showAll]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const submitComment = useCallback(
    async (authorName: string, content: string) => {
      if (!supabase) throw new Error('Yorum sistemi yapılandırılmamış');

      const { error } = await supabase.from('comments').insert({
        video_id: videoId,
        author_name: authorName,
        content,
        role: 'student',
        is_approved: false,
      });

      if (error) throw error;
    },
    [videoId],
  );

  const submitReply = useCallback(
    async (parentId: string, content: string, authorName: string, role: 'teacher' | 'admin') => {
      if (!supabase) throw new Error('Yorum sistemi yapılandırılmamış');

      const { error } = await supabase.from('comments').insert({
        video_id: videoId,
        parent_id: parentId,
        author_name: authorName,
        content,
        role,
        is_approved: true,
      });

      if (error) throw error;
      await fetchComments();
    },
    [videoId, fetchComments],
  );

  const approveComment = useCallback(
    async (commentId: string) => {
      if (!supabase) return;
      const { error } = await supabase.from('comments').update({ is_approved: true }).eq('id', commentId);
      if (error) throw error;
      await fetchComments();
    },
    [fetchComments],
  );

  const deleteComment = useCallback(
    async (commentId: string) => {
      if (!supabase) return;
      const { error } = await supabase.from('comments').delete().eq('id', commentId);
      if (error) throw error;
      await fetchComments();
    },
    [fetchComments],
  );

  return {
    comments,
    loading,
    error,
    submitComment,
    submitReply,
    approveComment,
    deleteComment,
    refresh: fetchComments,
    isConfigured: supabaseConfigured,
  };
}
