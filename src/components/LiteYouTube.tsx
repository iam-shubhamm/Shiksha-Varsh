import { useEffect, useState } from "react";

/** Shows the YouTube thumbnail instantly; the real player loads only on click (autoplay). */
export function LiteYouTube({ id, title = "Lecture video", className = "" }: { id: string; title?: string; className?: string }) {
  const [play, setPlay] = useState(false);
  useEffect(() => setPlay(false), [id]);
  useEffect(() => {
    // Warm up the player connection while the student looks at the thumbnail.
    for (const href of ["https://www.youtube-nocookie.com", "https://i.ytimg.com", "https://www.google.com"]) {
      if (document.head.querySelector(`link[data-yt="${href}"]`)) continue;
      const l = document.createElement("link");
      l.rel = "preconnect"; l.href = href; l.dataset["yt"] = href;
      document.head.appendChild(l);
    }
  }, []);
  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-lg bg-muted ${className}`}>
      {play ? (
        <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen />
      ) : (
        <button type="button" onClick={() => setPlay(true)} aria-label={`Play ${title}`} className="group absolute inset-0 h-full w-full">
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="eager" fetchPriority="high" className="h-full w-full object-cover" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-2xl text-primary-foreground shadow-lg transition-transform group-hover:scale-110">▶</span>
        </button>
      )}
    </div>
  );
}
