"use client";

import { useState } from "react";

/**
 * Renders a portrait photo from /public. If the file is missing (or the user
 * hasn't dropped one in yet), it degrades gracefully to a monogram placeholder
 * instead of a broken-image icon.
 *
 * Drop your photo at /public/photo.jpg (or pass a different `src`).
 */
export default function Photo({
  src = "/photo.jpg",
  alt = "Luiz Vieira",
  className = "",
  monogram = "LV",
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`photo-ph ${className}`} role="img" aria-label={alt}>
        <span className="photo-monogram">{monogram}</span>
        <span className="photo-hint">[ drop photo.jpg in /public ]</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`photo-img ${className}`}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}
