import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = () => {
  const location = useLocation();

  // If the user is at "/" → redirect to "/login"
  if (location.pathname === '/') {
    return <Navigate to="/login" replace />;
  }

  // Hide Sidebar and Navbar for login page
  const hideLayout = location.pathname === '/login';

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {!hideLayout && <Sidebar />}
      <div className="flex-1 flex flex-col overflow-hidden">
        {!hideLayout && <Navbar />}
        <main
          className={`flex-1 overflow-y-auto p-4 lg:p-6 ${
            hideLayout ? '' : 'pt-20 mt-15 lg:pt-6 lg:ml-64'
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
