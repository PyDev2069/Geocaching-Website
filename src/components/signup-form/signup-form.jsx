import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup-form.css';

function SignupForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    country: '',
    city: '',
    profilePrivacy: 'public',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder only — no backend yet, so any submission is treated
    // as a successful signup for now.
    navigate('/dashboard');
  };

  return (
    <div className="signup-form">
      <h1>Create an account</h1>
      <p className="signup-form-lede">It takes about a minute.</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="signup-form-field">
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="signup-form-field">
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

        <div className="signup-form-row">
          <div className="signup-form-field">
            <label htmlFor="country">Country</label>
            <input
              id="country"
              name="country"
              type="text"
              autoComplete="country-name"
              value={form.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="signup-form-field">
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="signup-form-field">
          <label htmlFor="profilePrivacy">Profile visibility</label>
          <select
            id="profilePrivacy"
            name="profilePrivacy"
            value={form.profilePrivacy}
            onChange={handleChange}
          >
            <option value="public">Public &mdash; other cachers can see your finds</option>
            <option value="private">Private &mdash; only you can see your finds</option>
          </select>
        </div>

        <div className="signup-form-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={form.password}
            onChange={handleChange}
            required
            minLength={8}
          />
          <p className="signup-form-hint">At least 8 characters.</p>
        </div>

        <button type="submit" className="signup-form-submit">
          Create account
        </button>
      </form>

      <p className="signup-form-switch">
        Already have an account? <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
}

export default SignupForm;
