import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

const WORDS = ["Geocaching India", "Geocaching भारत"];
const TYPE_MS = 85;
const DELETE_MS = 45;
const HOLD_MS = 1600;

function TypedTitle() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIndex] ?? WORDS[0];

    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % WORDS.length);
      return;
    }

    const t = setTimeout(
      () =>
        setText((prev) =>
          deleting
            ? word.slice(0, prev.length - 1)
            : word.slice(0, prev.length + 1)
        ),
      deleting ? DELETE_MS : TYPE_MS
    );

    return () => clearTimeout(t);
  }, [text, deleting, wordIndex]);

  return (
    <h1 className="text-[clamp(2.6rem,7vw,5.2rem)] leading-[1.05]">
      <span aria-label="Geocaching India">{text}</span>

      <motion.span
        aria-hidden="true"
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{
          duration: 1.1,
          repeat: Infinity,
          times: [0, 0.5, 0.5, 1],
        }}
        className="ml-1 inline-block h-[0.82em] w-[3px] translate-y-[0.08em] rounded-full bg-accent align-middle"
      />
    </h1>
  );
}

function Hero() {
  return (
   <section className="topo relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-4 pt-24 pb-16">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <Sparkles className="size-3.5 text-accent" />
            Real-world treasure hunting
          </span>

          <div className="mt-6 min-h-[2.4em] sm:min-h-[1.2em]">
            <TypedTitle />
          </div>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Discover hidden places, uncover local stories, and turn your city into a playground.
            Starting on the streets of Kolkata.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/signup"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
            >
              Start Exploring
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              How It Works
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card/70 p-4 shadow-[var(--shadow-lift)] backdrop-blur-sm"
          >
            {/* Google Map will go here later */}
            <div className="mx-auto max-w-[440px] aspect-square" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;