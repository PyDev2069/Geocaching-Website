import { motion } from "motion/react";

function About() {
  return (
    <section id="about" className="px-4 py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.08]">
            The city is full of places waiting to be discovered.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Geocaching is a real-world treasure hunt. Someone hides a small container — a cache —
            somewhere that deserves attention, then shares its coordinates and a clue. You go find
            it, sign the log, and put it back for the next explorer.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Geocaching India turns that into a way of seeing where you live: lanes you have walked
            past a hundred times, a courtyard behind a familiar wall, the story nobody wrote on a
            signboard. Find caches, hide your own, and build a trail other explorers can follow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="self-center rounded-[2rem] border border-border bg-[image:var(--gradient-deep)] p-8 text-deep-foreground shadow-[var(--shadow-lift)]"
        >
          <p className="font-display text-2xl leading-snug">
            “A cache is never really about the box. It is about the place it makes you stand in.”
          </p>

          <p className="mt-6 text-sm text-deep-foreground/65">
            Every cache carries a clue, a difficulty rating and a log of everyone who found it
            before you. Leave a note, add a photo, and pass the place on.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;