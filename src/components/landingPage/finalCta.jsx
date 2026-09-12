import { ArrowRight, Leaf } from "lucide-react";
import Reveal from "./reveal";

function FinalCta() {
  return (
    <section className="final-cta section">
      <div className="container final-cta__inner">
        <div className="final-cta__glow" />

        <Reveal>
          <div className="eyebrow">
            <span className="eyebrow__line" />
            Your next chapter
          </div>

          <h2>
            Your next discovery
            <br />
            is <em>waiting.</em>
          </h2>

          <p>Start with a clue. Leave with a story.</p>

          <div className="final-cta__actions">
            <a className="button button--green" href="/signup">
              Start exploring
              <ArrowRight size={17} />
            </a>

            <a className="text-link" href="/signin">
              Already a member? Sign in
              <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>

        <div className="final-cta__leaf">
          <Leaf size={22} strokeWidth={1.4} />
        </div>
      </div>
    </section>
  );
}

export default FinalCta;