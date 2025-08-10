import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 pt-20 mt-15 lg:pt-6 lg:ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;