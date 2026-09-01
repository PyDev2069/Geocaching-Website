const API_URL = 'http://localhost:4000';

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    method: options.method || 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', // send/receive the session cookie
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || 'Request failed');
  }

  return data;
}

export const registerUser = (payload) =>
  request('/api/auth/register', { method: 'POST', body: payload });

export const loginUser = (payload) =>
  request('/api/auth/login', { method: 'POST', body: payload });

export const logoutUser = () => request('/api/auth/logout', { method: 'POST' });

export const fetchCurrentUser = () => request('/api/auth/me');
