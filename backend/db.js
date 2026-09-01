const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'users.json');

// ---- low-level file helpers ----

function readUsers() {
  if (!fs.existsSync(DB_FILE)) {
    return [];
  }
  const raw = fs.readFileSync(DB_FILE, 'utf-8').trim();
  if (!raw) return [];
  return JSON.parse(raw);
}

function writeUsers(users) {
  fs.writeFileSync(DB_FILE, JSON.stringify(users, null, 2), 'utf-8');
}

// ensure the file exists on startup
if (!fs.existsSync(DB_FILE)) {
  writeUsers([]);
}

// ---- public API (mirrors what routes/auth.js needs) ----

function findUserByEmail(email) {
  const users = readUsers();
  return users.find((u) => u.email === email) || null;
}

function findUserById(id) {
  const users = readUsers();
  return users.find((u) => u.id === id) || null;
}

function createUser({ fullName, email, country, city, profilePrivacy, passwordHash }) {
  const users = readUsers();
  const nextId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;

  const user = {
    id: nextId,
    fullName,
    email,
    country,
    city,
    profilePrivacy,
    passwordHash,
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  writeUsers(users);
  return user;
}

module.exports = {
  findUserByEmail,
  findUserById,
  createUser,
};
