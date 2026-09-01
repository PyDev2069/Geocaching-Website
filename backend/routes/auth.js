const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

const SALT_ROUNDS = 12;

function toPublicUser(user) {
  return {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    country: user.country,
    city: user.city,
    profilePrivacy: user.profilePrivacy,
  };
}

// ---------- REGISTER ----------
router.post('/register', async (req, res) => {
  try {
    const { fullName, email, country, city, profilePrivacy, password } = req.body;

    if (!fullName || !email || !country || !city || !profilePrivacy || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!['public', 'private'].includes(profilePrivacy)) {
      return res.status(400).json({ error: 'Invalid profile privacy value' });
    }

    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // 1. Check whether email already exists
    const existing = db.findUserByEmail(normalizedEmail);
    if (existing) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    // 2. Hash the password
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    // 3. Save user in database
    const user = db.createUser({
      fullName: fullName.trim(),
      email: normalizedEmail,
      country: country.trim(),
      city: city.trim(),
      profilePrivacy,
      passwordHash,
    });

    // Log the user in immediately after registering
    req.session.userId = user.id;

    return res.status(201).json({ user: toPublicUser(user) });
  } catch (err) {
    console.error('Register error:', err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

// ---------- LOGIN ----------
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Find user in database
    const user = db.findUserByEmail(normalizedEmail);

    // Use a generic error so we don't leak which part was wrong
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare password with stored hash
    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Regenerate session to prevent session fixation, then store userId
    req.session.regenerate((err) => {
      if (err) {
        console.error('Session regenerate error:', err);
        return res.status(500).json({ error: 'Something went wrong' });
      }

      req.session.userId = user.id;

      return res.json({ user: toPublicUser(user) });
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

// ---------- LOGOUT ----------
router.post('/logout', (req, res) => {
  const cookieName = 'geocaching.sid';
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ error: 'Something went wrong' });
    }
    res.clearCookie(cookieName);
    return res.json({ message: 'Logged out' });
  });
});

// ---------- CURRENT USER (used to protect pages / restore session on refresh) ----------
router.get('/me', requireAuth, (req, res) => {
  const user = db.findUserById(req.session.userId);

  if (!user) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  return res.json({ user: toPublicUser(user) });
});

module.exports = router;
