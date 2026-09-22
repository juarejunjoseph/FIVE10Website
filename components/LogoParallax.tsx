"use client";

import { useEffect, useRef } from "react";

type LogoParallaxProps = {
  image: string;
  imageWidth?: number;
  speed?: number;
};

export default function LogoParallax({
  image,
  imageWidth = 1769,
  speed = 0.28,
}: LogoParallaxProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let current = window.scrollY;
    let target = window.scrollY;

    const updateTarget = () => {
      target = window.scrollY;
    };

    const render = () => {
      current += (target - current) * 0.12;

      const cycle = imageWidth;
      const offset = ((current * speed) % cycle + cycle) % cycle;

      if (trackRef.current) {
        trackRef.current.style.transform =
          "translate3d(" + -offset + "px, 0, 0)";
      }

      raf = requestAnimationFrame(render);
    };

    window.addEventListener("scroll", updateTarget, { passive: true });
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("scroll", updateTarget);
      cancelAnimationFrame(raf);
    };
  }, [imageWidth, speed]);

  return (
    <div className="logo-parallax" aria-label="Clients we have worked with">
      <div
        ref={trackRef}
        className="logo-parallax-track"
        style={{ width: imageWidth * 3 }}
      >
        <img src={image} alt="" width={imageWidth} height="auto" />
        <img src={image} alt="" width={imageWidth} height="auto" />
        <img src={image} alt="" width={imageWidth} height="auto" />
      </div>
    </div>
  );
}
