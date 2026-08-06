import Image from "next/image";

import type { ProjectMedia } from "@/lib/types";

type MediaMode = "preview" | "gallery" | "fullscreen";

export function ProjectMediaDisplay({
  media,
  projectTitle,
  mode,
}: {
  media: ProjectMedia;
  projectTitle: string;
  mode: MediaMode;
}) {
  const imageClassName = mode === "fullscreen" ? "object-contain" : "object-cover";
  const sizes = mode === "fullscreen" ? "100vw" : mode === "gallery" ? "(max-width: 1280px) 100vw, 62vw" : "(max-width: 768px) 100vw, 58vw";

  if (media.type === "image") {
    return <Image src={media.src} alt={media.alt ?? projectTitle} fill sizes={sizes} className={imageClassName} />;
  }

  if (mode === "preview" && media.poster) {
    return <Image src={media.poster} alt={media.alt ?? projectTitle} fill sizes={sizes} className="object-cover" />;
  }

  return (
    <video
      src={media.src}
      poster={media.poster}
      controls={mode !== "preview"}
      autoPlay={mode === "fullscreen"}
      playsInline
      preload="metadata"
      aria-label={media.alt ?? `${projectTitle} video`}
      className={`size-full ${imageClassName}`}
    />
  );
}
