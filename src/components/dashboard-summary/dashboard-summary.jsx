import './dashboard-summary.css';

const stats = [
  { label: 'Caches found', value: '0' },
  { label: 'Caches hidden', value: '0' },
  { label: 'Logbook entries', value: '0' },
  { label: 'Nearest cache', value: '\u2014' },
];

function DashboardSummary() {
  return (
    <div className="dashboard-summary">
      <span className="dashboard-summary-flag">login successful</span>
      <h1>Welcome to your dashboard.</h1>
      <p className="dashboard-summary-lede">
        This is a placeholder page. Once Waypoint is connected to a real
        backend, this is where your caches, finds, and activity will live.
      </p>

      <div className="dashboard-summary-stats">
        {stats.map((stat) => (
          <div className="dashboard-summary-stat" key={stat.label}>
            <span className="dashboard-summary-stat-value">{stat.value}</span>
            <span className="dashboard-summary-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardSummary;
