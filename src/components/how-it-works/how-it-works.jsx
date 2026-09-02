import './how-it-works.css';

const steps = [
  {
    title: 'Create your account',
    body: 'Set up a profile with your home turf, so nearby caches make sense.',
  },
  {
    title: 'Find a cache',
    body: 'Follow the coordinates to a hidden container, and sign the logbook inside.',
  },
  {
    title: 'Log it, or hide your own',
    body: 'Record the find on Waypoint, or set out a cache for the next person.',
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How it works</h2>
      <ol className="how-it-works-list">
        {steps.map((step, index) => (
          <li className="how-it-works-step" key={step.title}>
            <span className="how-it-works-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default HowItWorks;
