
import { useEffect, useRef } from "react";

function Reveal({ children, className = "", style }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`manus-reveal ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export default Reveal;
