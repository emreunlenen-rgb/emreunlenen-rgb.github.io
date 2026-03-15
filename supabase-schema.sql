-- ============================================
-- 3. Anadolu Üniversitesi Gitar Şenliği
-- Supabase Veritabanı Şeması
-- ============================================

-- Yorumlar tablosu
-- video_id alanı, uygulamadaki sabit video verilerine karşılık gelir
create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  video_id text not null,
  parent_id uuid references comments(id) on delete cascade,
  author_name text not null,
  content text not null check (char_length(content) <= 1000),
  role text not null default 'student' check (role in ('student', 'teacher', 'admin')),
  is_approved boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists idx_comments_video_id on comments(video_id);
create index if not exists idx_comments_parent_id on comments(parent_id);
create index if not exists idx_comments_is_approved on comments(is_approved);

-- Row Level Security
alter table comments enable row level security;

-- Herkes onaylanmış yorumları okuyabilir
create policy "public_read_approved"
  on comments for select
  using (is_approved = true);

-- Giriş yapmış kullanıcılar tüm yorumları okuyabilir
create policy "auth_read_all"
  on comments for select
  using (auth.role() = 'authenticated');

-- Herkes öğrenci olarak üst düzey yorum ekleyebilir
create policy "public_insert_student"
  on comments for insert
  with check (role = 'student' and parent_id is null);

-- Giriş yapmış kullanıcılar her türlü yorum/yanıt ekleyebilir
create policy "auth_insert_any"
  on comments for insert
  with check (auth.role() = 'authenticated');

-- Giriş yapmış kullanıcılar yorumları güncelleyebilir (onaylama vb.)
create policy "auth_update"
  on comments for update
  using (auth.role() = 'authenticated');

-- Giriş yapmış kullanıcılar yorumları silebilir
create policy "auth_delete"
  on comments for delete
  using (auth.role() = 'authenticated');

-- ============================================
-- İsteğe bağlı: Video tablosu
-- Uygulama videoları sabit veri olarak tutar,
-- ancak ileride dinamik yönetim istenirse
-- bu tablo kullanılabilir.
-- ============================================

-- create table if not exists videos (
--   id text primary key,
--   title text not null,
--   description text,
--   youtube_url text not null,
--   category text not null check (category in ('student', 'teacher')),
--   order_index integer not null default 0,
--   created_at timestamptz not null default now()
-- );

-- alter table videos enable row level security;

-- create policy "public_read_videos"
--   on videos for select
--   using (true);

-- create policy "auth_manage_videos"
--   on videos for all
--   using (auth.role() = 'authenticated');
