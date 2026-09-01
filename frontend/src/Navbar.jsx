import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav>
      {user ? (
        <>
          <span>Logged in as {user.fullName}</span>
          {' | '}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          {' | '}
          <Link to="/signin">Signin</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
