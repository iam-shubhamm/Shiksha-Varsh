CREATE TABLE public.lesson_videos (key text PRIMARY KEY, ids text[] NOT NULL, created_at timestamptz NOT NULL DEFAULT now());
GRANT ALL ON public.lesson_videos TO service_role;
ALTER TABLE public.lesson_videos ENABLE ROW LEVEL SECURITY;