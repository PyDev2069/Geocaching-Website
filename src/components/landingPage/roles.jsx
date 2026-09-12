import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Route, PackagePlus, ShieldCheck } from "lucide-react";

const ROLES = [
  {
    id: "explorer",
    icon: Route,
    title: "Seeker",
    body: "Find caches, follow clues, verify your discovery, and build your exploration journey.",
    details: [
      "Discover and filter caches, and view their details, clues, hints, coordinates, and difficulty.",
      "Navigate to the cache, find the physical object, and verify the discovery using a code or QR scan.",
      "Log finds, save interesting caches, track progress, and report missing, damaged, or unsafe caches.",
    ],
  },
  {
    id: "owner",
    icon: PackagePlus,
    title: "Hider",
    body: "Create and place caches safely, add clues, and manage them as seekers discover your hidden objects.",
    details: [
      "Create and place caches using GPS verification, with details such as category, difficulty, and hints.",
      "Add verification codes or QR codes and manage cache visibility, availability, and updates.",
      "Track finds, ratings, feedback, and collectible exchanges while handling cache reports.",
    ],
  },
  {
    id: "community",
    icon: ShieldCheck,
    title: "System Vanguard",
    body: "Monitor activity, resolve issues, and keep the geocaching community safe and trustworthy.",
    details: [
      "Monitor users, caches, reports, and overall platform activity.",
      "Investigate missing, stolen, damaged, unsafe, or incorrectly placed caches.",
      "Resolve disputes, address misuse or suspicious activity, and maintain platform safety.",
    ],
  },
];

function RoleArt({ id }) {
  return (
    <svg
      viewBox="0 0 240 120"
      className="h-24 w-full"
      aria-hidden="true"
    >
      <path
        d="M10 100 Q70 20 120 60 T230 30"
        fill="none"
        stroke="oklch(0.74 0.155 62 / 0.7)"
        strokeWidth="2"
        className="dash-route"
      />

      {id === "community" ? (
        [30, 90, 150, 210].map((x, i) => (
          <g key={x}>
            <circle
              cx={x}
              cy={40 + (i % 2) * 40}
              r="7"
              fill="oklch(0.35 0.062 158)"
            />

            {i > 0 && (
              <line
                x1={x - 60}
                y1={40 + ((i - 1) % 2) * 40}
                x2={x}
                y2={40 + (i % 2) * 40}
                stroke="oklch(0.35 0.062 158 / 0.35)"
                strokeWidth="1.5"
              />
            )}
          </g>
        ))
      ) : id === "owner" ? (
        <>
          <rect
            x="150"
            y="18"
            width="34"
            height="24"
            rx="6"
            fill="oklch(0.35 0.062 158)"
            transform="rotate(-8 167 30)"
          />

          <circle
            cx="120"
            cy="60"
            r="8"
            fill="oklch(0.78 0.15 68)"
          />
        </>
      ) : (
        <>
          <circle
            cx="10"
            cy="100"
            r="8"
            fill="oklch(0.35 0.062 158)"
          />

          <circle
            cx="230"
            cy="30"
            r="9"
            fill="oklch(0.78 0.15 68)"
          />
        </>
      )}
    </svg>
  );
}

function Roles() {
  const [active, setActive] = useState("explorer");

  return (
    <section id="roles" className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(2rem,4vw,3rem)]"
        >
          Choose your way to explore.
        </motion.h2>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {ROLES.map((role) => {
            const isActive = active === role.id;

            return (
              <motion.button
                key={role.id}
                type="button"
                onMouseEnter={() => setActive(role.id)}
                onFocus={() => setActive(role.id)}
                onClick={() => setActive(role.id)}
                layout
                transition={{
                  layout: {
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className={`overflow-hidden rounded-[2rem] border p-7 text-left transition-colors duration-300 ${
                  isActive
                    ? "border-transparent bg-[image:var(--gradient-deep)] text-deep-foreground shadow-[var(--shadow-lift)]"
                    : "border-border bg-card shadow-[var(--shadow-soft)] hover:bg-secondary"
                }`}
              >
                <span
                  className={`flex size-12 items-center justify-center rounded-2xl ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-primary"
                  }`}
                >
                  <role.icon className="size-5" />
                </span>

                <h3 className="mt-6 text-2xl">
                  {role.title}
                </h3>

                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    isActive
                      ? "text-deep-foreground/75"
                      : "text-muted-foreground"
                  }`}
                >
                  {role.body}
                </p>

                <div className={isActive ? "opacity-100" : "opacity-45"}>
                  <RoleArt id={role.id} />
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2 overflow-hidden text-sm text-deep-foreground/80"
                    >
                      {role.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex gap-2.5"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                          {detail}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Roles;