"use client";

import { useEffect, useRef, useState } from "react";

export function useProjectCarousel(itemCount: number, shouldReduceMotion: boolean) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const railRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  const setActiveIndexIfChanged = (nextIndex: number) => {
    if (nextIndex === activeIndexRef.current) return;
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
  };

  const registerSlide = (index: number) => (element: HTMLElement | null) => {
    itemRefs.current[index] = element;
  };

  const scrollToIndex = (requestedIndex: number) => {
    if (itemCount === 0) return;

    const index = (requestedIndex + itemCount) % itemCount;
    const slide = itemRefs.current[index];
    if (!slide) return;

    slide.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "nearest", inline: "start" });
    setActiveIndexIfChanged(index);
  };

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || itemCount === 0) return;

    let frameId: number | undefined;
    const syncActiveSlide = () => {
      frameId = undefined;
      const nearestIndex = itemRefs.current.reduce(
        (closest, slide, index) => {
          if (!slide) return closest;
          const distance = Math.abs(slide.offsetLeft - rail.scrollLeft);
          return distance < closest.distance ? { index, distance } : closest;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY }
      ).index;
      setActiveIndexIfChanged(nearestIndex);
    };
    const handleScroll = () => {
      if (frameId === undefined) frameId = window.requestAnimationFrame(syncActiveSlide);
    };

    rail.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      rail.removeEventListener("scroll", handleScroll);
      if (frameId !== undefined) window.cancelAnimationFrame(frameId);
    };
  }, [itemCount]);

  return { activeIndex, railRef, registerSlide, scrollToIndex };
}
