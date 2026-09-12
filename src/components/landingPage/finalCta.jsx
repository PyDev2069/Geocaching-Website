
import { ArrowRight, Leaf } from "lucide-react";
import Reveal from "./reveal";

function FinalCta() {
  return (
    <section className="manus-final-cta manus-section">
      <div className="manus-container manus-final-cta__inner">
        <div className="manus-final-cta__glow" />

        <Reveal>
          <div className="manus-eyebrow">
            <span className="manus-eyebrow__line" />
            Your next chapter
          </div>

          <h2>
            Your next discovery
            <br />
            is <em>waiting.</em>
          </h2>

          <p>Start with a clue. Leave with a story.</p>

          <div className="manus-final-cta__actions">
            <a
              className="manus-button manus-button--green"
              href="/signup"
            >
              Start exploring
              <ArrowRight size={17} />
            </a>

            <a
              className="manus-text-link"
              href="/signin"
            >
              Already a member? Sign in
              <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>

        <div className="manus-final-cta__leaf">
          <Leaf size={22} strokeWidth={1.4} />
        </div>
      </div>
    </section>
  );
}

export default FinalCta;

