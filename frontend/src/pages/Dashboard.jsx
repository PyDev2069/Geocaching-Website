import { useAuth } from '../AuthContext';

function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Dashboard (protected page)</h2>
      <p>Full Name: {user.fullName}</p>
      <p>Email: {user.email}</p>
      <p>Country: {user.country}</p>
      <p>City: {user.city}</p>
      <p>Profile Privacy: {user.profilePrivacy}</p>
    </div>
  );
}

export default Dashboard;
