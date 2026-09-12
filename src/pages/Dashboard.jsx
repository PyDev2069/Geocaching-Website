import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DashboardSummary from '../components/dashboard-summary/dashboard-summary';

function Dashboard() {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return <Navigate to="/signin" replace />;

  return <DashboardSummary />;
}

export default Dashboard;