
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

function FinalCta() {
  return (
    <section className="px-4 pt-10 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="topo relative mx-auto flex max-w-5xl flex-col items-center gap-6 overflow-hidden rounded-[2rem] border border-border bg-card px-8 py-12 text-center shadow-[var(--shadow-soft)] sm:flex-row sm:justify-between sm:text-left"
      >
        <svg
          viewBox="0 0 400 60"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full opacity-40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-10 40 C 90 5, 160 60, 260 25 S 380 15, 410 35"
            fill="none"
            stroke="oklch(0.74 0.155 62 / 0.5)"
            strokeWidth="2"
            className="dash-route"
          />
        </svg>

        <div className="relative">
          <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] leading-tight">
            Your next discovery is waiting.
          </h2>

          <p className="mt-2 text-muted-foreground">
            Step beyond the usual path — one cache at a time.
          </p>
        </div>

        <a
          href="/signup"
          className="group relative inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
        >
          Start Exploring
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
}

export default FinalCta;
