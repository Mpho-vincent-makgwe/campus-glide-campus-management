import { useState, useEffect } from 'react';
import { ChevronDown, LogOut, LayoutDashboard, Share2, Building2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


const Sidebar = () => {
  const [isCampusesOpen, setIsCampusesOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#111] text-white border-t border-gray-800 z-40">
        <nav className="flex justify-around py-2">
          <Link 
            to="/dashboard" 
            className={`flex flex-col items-center p-2 rounded ${location.pathname === '/dashboard' ? 'text-green-500' : 'text-gray-300'}`}
          >
            <LayoutDashboard size={18} />
            <span className="text-xs mt-1">Dashboard</span>
          </Link>

          <Link 
            to="/campuses"
            className="flex flex-col items-center p-2 rounded text-gray-300"
          >
            <Building2 size={18} />
            <span className="text-xs mt-1">Campuses</span>
          </Link>

          <Link 
            to="/referrals" 
            className="flex flex-col items-center p-2 rounded text-gray-300"
          >
            <Share2 size={18} />
            <span className="text-xs mt-1">Referrals</span>
          </Link>

          <Link 
            to="/login" 
            className="flex flex-col items-center p-2 rounded text-gray-300"
          >
            <LogOut size={18} />
            <span className="text-xs mt-1">Logout</span>
          </Link>
        </nav>
      </div>
    );
  }

  return (
    <aside className="hidden lg:block bg-[#111] text-white h-screen w-64 flex flex-col py-6 px-4 fixed">
      <div className="text-2xl font-bold text-white mb-10 flex items-center space-x-2">
        <div className="">
          <img
            className="w-5 h-5 rounded-full"
            src="/src/assets/images/Campus glide logo favicon.png"
            alt="Sidebar Favicon"
          />
        </div>
        <span>Campus Glide</span>
      </div>

      <nav className="flex flex-col space-y-4 text-sm">
        <Link 
          to="/dashboard" 
          className={`flex items-center space-x-2 px-3 py-2 rounded ${location.pathname === '/dashboard' ? 'bg-green-600' : 'hover:bg-[#1a1a1a]'}`}
        >
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/campuses"
          className="flex items-center justify-between w-full px-3 py-2 rounded hover:bg-[#1a1a1a]"
          onClick={(e) => {
            e.preventDefault();
            setIsCampusesOpen(!isCampusesOpen);
          }}
        >
          <span className="flex items-center space-x-2">
            <Building2 size={18} />
            <span>Campuses</span>
          </span>
          <ChevronDown size={16} className={`transition-transform ${isCampusesOpen ? 'rotate-180' : ''}`} />
        </Link>

        {isCampusesOpen && (
          <div className="ml-6 flex flex-col space-y-2 text-gray-300 text-sm">
            <Link to="/campuses" className="hover:text-white">All Campuses</Link>
            <Link to="/campuses/new" className="hover:text-white">Add New</Link>
          </div>
        )}

        <Link to="/referrals" className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-[#1a1a1a]">
          <Share2 size={18} />
          <span>Referrals</span>
        </Link>

        <Link to="/login" className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-[#1a1a1a] mt-auto">
          <LogOut size={18} />
          <span>Logout</span>
        </Link>
      </nav>
      <div className="">
        <img
          src="/src/assets/images/image.png"
          alt="Sidebar Footer"
          className="object-contain"
        />
      </div>
    </aside>
  );
};

export default Sidebar;