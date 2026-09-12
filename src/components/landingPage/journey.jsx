
import { Search, Route, Eye, Heart } from "lucide-react";
import Reveal from "./reveal";

const steps = [
  {
    icon: Search,
    word: "Find",
    description: "Choose a cache",
  },
  {
    icon: Route,
    word: "Follow",
    description: "Read the clues",
  },
  {
    icon: Eye,
    word: "Discover",
    description: "Look closer",
  },
  {
    icon: Heart,
    word: "Log",
    description: "Leave a note",
  },
];

function Journey() {
  return (
    <section
      className="journey-section section section--green"
      id="how-it-works"
    >
      <div className="container">
        <Reveal className="journey-heading">
          <div className="eyebrow eyebrow--light">
            <span className="eyebrow__line" />
            The journey
          </div>

          <h2>
            Four small steps.
            <br />
            <em>One big feeling.</em>
          </h2>
        </Reveal>

        <div
          className="journey-line"
          aria-label="Find, Follow, Discover, Log"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal
                key={step.word}
                className="journey-step"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="journey-step__number">
                  0{index + 1}
                </span>

                <span className="journey-step__icon">
                  <Icon size={23} strokeWidth={1.6} />
                </span>

                <strong>{step.word}</strong>

                <span>{step.description}</span>

                {index < 3 && (
                  <span className="journey-step__connector" />
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Journey;
