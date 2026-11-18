<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

- Keep page-wide palette, metallic fills and shadows in global semantic CSS tokens, with a scoped hero theme, so light/dark controls and shared study/help screens stay consistent.
- Import class websites into dedicated TanStack routes and namespaced content modules rather than replacing the app bootstrap, so homepage, auth, theme and help remain intact.
- Keep each imported class's browser progress keys distinct so learning progress never leaks between classes.
- Theme selection must synchronize every header from browser storage without writing a default during mount, so navigation never resets the selected mode.
- Use the plain Button variant for state-colored class controls, so generic hover colors cannot override selected gold fills.
- Use intent-preloaded TanStack links for local course cards and frame-scheduled pointer transforms without transform entrance animations, so classes avoid document reloads and card motion remains responsive.
- Share the compact class board picker with grade-specific art and motion; preserve original curriculum IDs when changing display labels so existing lessons, links and saved progress remain valid.
- Classes 4–10 share data-driven /study/$grade routes; chapter notes+quizzes are AI-generated once per chapter and cached in chapter_packs, so content scales without hand-writing hundreds of chapters.
- Store CBSE/NCERT chapter lists from official textbook contents (src/data/primary-curriculum.ts, src/data/upper/curriculum.ts) and include the chapter title in chapter_packs keys, so curriculum updates never reuse notes from a different chapter.
- Senior and undergraduate courses use data-driven /learn routes with course/track/subject cache namespaces; college units are core practice tracks, not universal university syllabi, so institutions and shared subjects cannot silently reuse incompatible content.

- Degree semester navigation uses a shared semester plan and dedicated semester subject route; retain existing subject URLs and cache IDs so stored learning content survives reorganization.
- Lecture video searches are built only by src/lib/classes/lecture-queries.ts and pre-filled into lesson_videos via the dev-only /api/fill-lecture-videos job (enumerated in all-lectures.ts); chapter lists batch-read saved videos, so visitors never wait for a YouTube search. Add new curricula to all-lectures.ts and re-run the job.
