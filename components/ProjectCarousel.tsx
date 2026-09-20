"use client";

import { useMemo, useState } from "react";

type Slide = {
  image: string;
  title: string;
  location?: string;
};

export default function ProjectCarousel({
  slides,
  dark = false,
}: {
  slides: Slide[];
  dark?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const active = slides[index];

  const next = () => setIndex((value) => (value + 1) % slides.length);
  const previous = () => setIndex((value) => (value - 1 + slides.length) % slides.length);

  const dots = useMemo(() => slides.map((_, i) => i), [slides]);

  return (
    <div className={`project-carousel ${dark ? "project-carousel-dark" : ""}`}>
      <button className="carousel-arrow carousel-left" onClick={previous} aria-label="Previous slide">←</button>
      <div className="carousel-stage">
        <img src={active.image} alt={active.title} />
      </div>
      <button className="carousel-arrow carousel-right" onClick={next} aria-label="Next slide">→</button>

      <div className="carousel-caption">
        <div>{active.title}</div>
        {active.location && <span>{active.location}</span>}
      </div>

      <div className="carousel-dots" aria-label="Carousel pagination">
        {dots.map((dot) => (
          <button
            key={dot}
            className={dot === index ? "is-active" : ""}
            aria-label={`Go to slide ${dot + 1}`}
            aria-current={dot === index ? "true" : undefined}
            onClick={() => setIndex(dot)}
          />
        ))}
      </div>
    </div>
  );
}
