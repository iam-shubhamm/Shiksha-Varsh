DROP POLICY IF EXISTS "Anyone can submit help request" ON public.help_requests;
CREATE POLICY "Anyone can submit valid help request" ON public.help_requests
FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(btrim(name)) BETWEEN 1 AND 100
  AND char_length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (phone IS NULL OR char_length(phone) <= 30)
  AND char_length(btrim(topic)) BETWEEN 1 AND 100
  AND char_length(btrim(message)) BETWEEN 1 AND 5000
);