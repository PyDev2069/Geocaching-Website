import {
  Search,
  Navigation,
  PenLine,
  Check,
  Gem,
  ArrowUpRight,
} from "lucide-react";
import "./styles/landing.css";
import Reveal from "./reveal";

const features = [
  {
    icon: Search,
    title: "Discover Caches",
    description: "Find clever clues tucked into places worth remembering.",
  },
  {
    icon: Navigation,
    title: "Explore Nearby",
    description: "Turn a free hour into a small, unexpected adventure.",
  },
  {
    icon: PenLine,
    title: "Hide Your Own",
    description: "Share a place, story or viewpoint only locals know.",
  },
  {
    icon: Check,
    title: "Log Your Finds",
    description: "Keep a quiet record of every trail, clue and discovery.",
  },
  {
    icon: Gem,
    title: "Earn & Collect",
    description: "Collect tokens of curiosity as your map fills in.",
  },
];

function Features() {
  return (
    <section
      className="manus-section manus-section--paper"
      id="features"
    >
      <div className="manus-container">
        <Reveal className="manus-section-heading-row">
          <div>
            <div className="manus-eyebrow">
              <span className="manus-eyebrow__line" />
              What you can do
            </div>

            <h2 className="manus-section-heading">
              Make room for
              <br />
              <em>serendipity.</em>
            </h2>
          </div>

          <p className="manus-section-heading-row__aside">
            A toolkit for paying attention — and finding the good stuff hiding
            in plain sight.
          </p>
        </Reveal>

        <div className="manus-feature-list">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal
                key={feature.title}
                className="manus-feature-row"
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <span className="manus-feature-row__index">
                  0{index + 1}
                </span>

                <span className="manus-feature-row__icon">
                  <Icon size={21} strokeWidth={1.7} />
                </span>

                <div className="manus-feature-row__title">
                  {feature.title}
                </div>

                <p>{feature.description}</p>

                <ArrowUpRight className="manus-feature-row__arrow" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
