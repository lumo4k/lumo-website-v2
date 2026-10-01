"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
export function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    let lenis: Lenis | undefined;
    let ticker: ((time: number) => void) | undefined;
    const anchors = (event: MouseEvent) => {
      const link = (event.target as Element).closest('a[href^="#"]');
      const id = link?.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.getElementById(id.slice(1));
      if (target && lenis) {
        event.preventDefault();
        lenis.scrollTo(target, { offset: -88 });
      }
    };
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (window.matchMedia("(pointer: fine)").matches) {
        lenis = new Lenis({ duration: 0.9, smoothWheel: true, anchors: false });
        lenis.on("scroll", ScrollTrigger.update);
        ticker = (time: number) => lenis?.raf(time * 1000);
        gsap.ticker.add(ticker);
      }
      const context = gsap.context(() => {
        const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
        hero
          .from("[data-hero-eyebrow]", { opacity: 0, y: 12, duration: 0.45 })
          .from(
            "[data-hero-line]",
            { yPercent: 105, duration: 0.85, stagger: 0.1 },
            "-=.2",
          )
          .from(
            "[data-hero-image]",
            { clipPath: "inset(100% 0 0 0)", scale: 1.08, duration: 1 },
            "-=.7",
          )
          .from(
            "[data-hero-detail]",
            { opacity: 0, y: 18, stagger: 0.1, duration: 0.55 },
            "-=.45",
          );
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) =>
          gsap.from(el, {
            y: 24,
            opacity: 0,
            duration: 0.7,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          }),
        );
        gsap.from(".journey-line", {
          scaleY: 0,
          transformOrigin: "top",
          scrollTrigger: {
            trigger: ".journey",
            start: "top 75%",
            end: "bottom 60%",
            scrub: true,
          },
        });
      });
      return () => {
        context.revert();
        if (ticker) gsap.ticker.remove(ticker);
        lenis?.destroy();
        lenis = undefined;
      };
    });
    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const context = gsap.context(() => {
          const track = document.querySelector<HTMLElement>(".project-track");
          const section = document.querySelector<HTMLElement>(".portfolio");
          if (track && section)
            gsap.to(track, {
              x: () => -(track.scrollWidth - section.clientWidth),
              ease: "none",
              scrollTrigger: {
                trigger: section,
                pin: true,
                scrub: 0.7,
                start: "top top",
                end: () => `+=${track.scrollWidth - section.clientWidth}`,
                invalidateOnRefresh: true,
              },
            });
          gsap.to("[data-hero-image] img", {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
          gsap.utils.toArray<HTMLElement>(".project-image img").forEach((img) =>
            gsap.fromTo(
              img,
              { scale: 1.05 },
              {
                scale: 1,
                scrollTrigger: {
                  trigger: img,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            ),
          );
        });
        return () => context.revert();
      },
    );
    document.addEventListener("click", anchors);
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts.ready.then(refresh);
    return () => {
      mm.revert();
      document.removeEventListener("click", anchors);
      window.removeEventListener("load", refresh);
    };
  }, []);
  return null;
}
