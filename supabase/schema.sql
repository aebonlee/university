-- ============================================
-- University AI Education - Supabase Schema
-- Prefix: univ_
-- ============================================

-- Profiles
CREATE TABLE IF NOT EXISTS univ_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT,
  email TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user',
  signup_domain TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE univ_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profiles are viewable by everyone" ON univ_profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON univ_profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON univ_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION handle_univ_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO univ_profiles (id, name, email, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', '')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- DROP TRIGGER IF EXISTS on_univ_auth_user_created ON auth.users;
-- CREATE TRIGGER on_univ_auth_user_created
--   AFTER INSERT ON auth.users
--   FOR EACH ROW EXECUTE FUNCTION handle_univ_new_user();

-- Posts
CREATE TABLE IF NOT EXISTS univ_posts (
  id SERIAL PRIMARY KEY,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL DEFAULT '',
  board TEXT NOT NULL DEFAULT 'free',
  category TEXT DEFAULT 'free',
  title TEXT NOT NULL,
  content TEXT NOT NULL DEFAULT '',
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE univ_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Posts are viewable by everyone" ON univ_posts
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create posts" ON univ_posts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authors can update own posts" ON univ_posts
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Authors can delete own posts" ON univ_posts
  FOR DELETE USING (auth.uid() = author_id);

-- Comments
CREATE TABLE IF NOT EXISTS univ_comments (
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES univ_posts(id) ON DELETE CASCADE,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL DEFAULT '',
  body TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE univ_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Comments are viewable by everyone" ON univ_comments
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create comments" ON univ_comments
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authors can delete own comments" ON univ_comments
  FOR DELETE USING (auth.uid() = author_id);

-- View count increment function
CREATE OR REPLACE FUNCTION increment_univ_view_count(post_id INTEGER)
RETURNS VOID AS $$
BEGIN
  UPDATE univ_posts SET view_count = view_count + 1 WHERE id = post_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
