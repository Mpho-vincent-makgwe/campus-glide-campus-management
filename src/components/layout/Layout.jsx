import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useEffect } from 'react';

const Layout = () => {
  const location = useLocation();

  // If the user is at "/" → redirect to "/login"
  if (location.pathname === '/') {
    return <Navigate to="/login" replace />;
  }

  // Hide Sidebar and Navbar for login page
  const hideLayout = location.pathname === '/login';

  useEffect(() => {
    if (hideLayout) {
      // Disable scrolling when on login page
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when not on login page
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    // Cleanup function to re-enable scrolling when component unmounts
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [hideLayout]); // Run effect when hideLayout changes

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {!hideLayout && <Sidebar />}
      <div className="flex-1 flex flex-col overflow-hidden">
        {!hideLayout && <Navbar />}
        <main
          className={`flex-1 p-4 lg:p-6 ${
            hideLayout ? '' : 'pt-20 mt-15 lg:pt-6 lg:ml-64 overflow-y-auto'
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;