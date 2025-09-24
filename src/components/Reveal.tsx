import { useEffect, useRef } from "react";

//Wrapper to apply slideFadeIn animation when element is in viewport
export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("animate-slideFadeIn");
            observer.unobserve(element); // only run once
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="translate-y-10 opacity-0">
      {children}
    </div>
  );
}
