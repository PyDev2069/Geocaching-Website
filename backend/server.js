require('dotenv').config();

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');

require('./db'); // ensures tables are created
const authRoutes = require('./routes/auth');
const requireAuth = require('./middleware/requireAuth');

const app = express();
const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
const isProduction = process.env.NODE_ENV === 'production';

app.set('trust proxy', 1);

app.use(express.json());

// Allow the Vite frontend (different port) to send/receive cookies
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

// ---- Sessions ----
// Session records are persisted as files in backend/sessions/ so logins survive server restarts.
app.use(
  session({
    store: new FileStore({
      path: path.join(__dirname, 'sessions'),
      logFn: () => {}, // silence its default console logging
    }),
    name: 'geocaching.sid', // don't use the default 'connect.sid' name
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true, // JS on the frontend can't read the cookie
      secure: isProduction, // only send over HTTPS in production
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    },
  })
);

app.use('/api/auth', authRoutes);

// Example of a protected route, used by the frontend to gate pages
app.get('/api/protected/ping', requireAuth, (req, res) => {
  res.json({ message: 'You are authenticated', userId: req.session.userId });
});

app.get('/', (req, res) => {
  res.send('Geocaching API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
