import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './signup-form.css';

export default function SignupForm() {
  const { signUp } = useAuth();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    country: '',
    city: '',
    homeLatitude: '',
    homeLongitude: ''
  });

  const [loading, setLoading] = useState(false);
  const [geoLoading, setGeoLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setErrorMsg('Geolocation is not supported by your browser.');
      return;
    }

    setGeoLoading(true);
    setErrorMsg('');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData((prev) => ({
          ...prev,
          homeLatitude: position.coords.latitude.toFixed(6),
          homeLongitude: position.coords.longitude.toFixed(6)
        }));
        setGeoLoading(false);
      },
      (_error) => {
        setErrorMsg('Unable to retrieve location. Please grant permission or enter manually.');
        setGeoLoading(false);
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(true);

    const metadata = {
      full_name: formData.fullName,
      country: formData.country,
      city: formData.city,
      home_latitude: formData.homeLatitude ? parseFloat(formData.homeLatitude) : null,
      home_longitude: formData.homeLongitude ? parseFloat(formData.homeLongitude) : null
    };

    const { error } = await signUp(formData.email, formData.password, metadata);

    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccessMsg('Account created successfully! Check your email to confirm registration.');
      setFormData({
        fullName: '',
        email: '',
        password: '',
        country: '',
        city: '',
        homeLatitude: '',
        homeLongitude: ''
      });
    }
    setLoading(false);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        {errorMsg && <div className="alert error">{errorMsg}</div>}
        {successMsg && <div className="alert success">{successMsg}</div>}

        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="India"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Kolkata"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="location-section">
          <div className="location-header">
            <span>Home Coordinates</span>
            <button
              type="button"
              className="geo-btn"
              onClick={handleGetLocation}
              disabled={geoLoading}
            >
              {geoLoading ? 'Fetching...' : 'Get Current Location'}
            </button>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="homeLatitude">Latitude</label>
              <input
                type="number"
                step="any"
                id="homeLatitude"
                name="homeLatitude"
                placeholder="22.5726"
                value={formData.homeLatitude}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="homeLongitude">Longitude</label>
              <input
                type="number"
                step="any"
                id="homeLongitude"
                name="homeLongitude"
                placeholder="88.3639"
                value={formData.homeLongitude}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}