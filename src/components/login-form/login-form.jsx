import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login-form.css';

function LoginForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder only — no backend yet, so any submission is treated
    // as a successful login for now.
    navigate('/dashboard');
  };

  return (
    <div className="login-form">
      <h1>Sign in</h1>
      <p className="login-form-lede">Welcome back to Waypoint.</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="login-form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="login-form-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="login-form-submit">
          Sign in
        </button>
      </form>

      <p className="login-form-switch">
        New to Waypoint? <Link to="/signup">Create an account</Link>
      </p>
    </div>
  );
}

export default LoginForm;
