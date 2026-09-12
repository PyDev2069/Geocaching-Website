import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Compass, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Roles", href: "#roles" },
  { label: "Explore", href: "#how-it-works" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center gap-6 rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-border bg-card/85 shadow-[var(--shadow-soft)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[image:var(--gradient-deep)] text-deep-foreground">
            <Compass className="size-5" />
          </span>

          <span className="font-display text-lg tracking-tight">
            Geocaching India
          </span>
        </Link>

        <ul className="ml-auto hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          {NAV.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto hidden items-center gap-2 md:ml-0 md:flex">
          <Link
            to="/signin"
            className="rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
          >
            Start Exploring
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex size-10 items-center justify-center rounded-full border border-border bg-card md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-lift)] md:hidden"
          >
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-2 grid gap-2">
              <Link
                to="/signin"
                onClick={() => setOpen(false)}
                className="rounded-full border border-border px-4 py-2.5 text-center text-sm font-semibold"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Start Exploring
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;