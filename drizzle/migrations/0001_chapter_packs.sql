CREATE TABLE public.chapter_packs (
  key text PRIMARY KEY,
  grade int NOT NULL,
  board text NOT NULL,
  subject text NOT NULL,
  chapter text NOT NULL,
  notes jsonb NOT NULL,
  quiz jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.chapter_packs TO anon, authenticated;
GRANT ALL ON public.chapter_packs TO service_role;
ALTER TABLE public.chapter_packs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read chapter packs" ON public.chapter_packs FOR SELECT TO anon, authenticated USING (true);