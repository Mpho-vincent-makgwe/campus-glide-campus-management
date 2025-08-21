import { useState, useEffect, useContext } from 'react';
import { ChevronDown, LogOut, LayoutDashboard, Share2, Building2, GraduationCap, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { CampusContext } from '../../context/CampusContext.jsx';

const Sidebar = () => {
  const { campuses } = useContext(CampusContext);
  const [isCampusesOpen, setIsCampusesOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setWindowHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isSettingsActive = (path) => location.pathname.startsWith('/campuses/settings');
  const isCampusActive = (campusId) => location.pathname.includes(`/campuses/${campusId}`);

  if (isMobile) {
    return (
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#111] text-white border-t border-gray-800 z-40">
        <nav className="flex justify-around py-2">
          <Link to="/dashboard" className={`flex flex-col items-center p-2 rounded ${isActive('/dashboard') ? 'text-green-500' : 'text-gray-300'}`}>
            <LayoutDashboard size={18} />
            <span className="text-xs mt-1">Dashboard</span>
          </Link>
          <Link to="/campuses" className="flex flex-col items-center p-2 rounded text-gray-300">
            <Building2 size={18} />
            <span className="text-xs mt-1">Campuses</span>
          </Link>
          <Link to="/referrals" className="flex flex-col items-center p-2 rounded text-gray-300">
            <Share2 size={18} />
            <span className="text-xs mt-1">Referrals</span>
          </Link>
          <Link to="/login" className="flex flex-col items-center p-2 rounded text-gray-300">
            <LogOut size={18} />
            <span className="text-xs mt-1">Logout</span>
          </Link>
        </nav>
      </div>
    );
  }

  return (
    <div className="hidden lg:block relative">
      <aside
        className="flex flex-col bg-[#111] text-white h-screen w-64 py-6 px-4 fixed"
        style={{ zIndex: 2 }}
      >
        {/* Watermark container - full width but maintains aspect ratio */}
        <div 
          className="absolute w-full bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
          style={{ 
            zIndex: 0,
            opacity: 0.15,
            mixBlendMode: 'screen'
          }}
        >
          <img 
            src="/image.svg" 
            alt="Watermark" 
            className="w-full h-[50%] object-contain object-bottom"
            
          />
        </div>

        {/* Content with higher z-index */}
        <div className="relative z-10">
          {/* Logo */}
          <div className="text-2xl font-bold text-white mb-10 flex items-center space-x-2">
            <img className="w-5 h-5 rounded-full" src="/images/Campus glide logo favicon.png" alt="Sidebar Favicon" />
            <span>Campus Glide</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col space-y-1 text-sm">
            <Link to="/dashboard" className={`flex items-center space-x-2 px-3 py-2 rounded ${isActive('/dashboard') ? 'bg-[#3AC204]' : 'hover:bg-[#1a1a1a]'}`}>
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </Link>

            {/* Campuses */}
            <div>
              <button
                onClick={() => setIsCampusesOpen(!isCampusesOpen)}
                className={`flex items-center justify-between w-full px-3 py-2 rounded ${location.pathname.startsWith('/campuses') ? 'bg-[#1a1a1a]' : 'hover:bg-[#1a1a1a]'}`}
              >
                <span className="flex items-center space-x-2">
                  <Building2 size={18} />
                  <span>Campuses</span>
                </span>
                <ChevronDown size={16} className={`transition-transform ${isCampusesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCampusesOpen && (
                <div className="ml-6 flex flex-col space-y-1 text-gray-300">
                  <Link to="/campuses" className={`flex items-center space-x-2 px-3 py-2 rounded ${isActive('/campuses') ? 'bg-[#3AC204]' : 'hover:bg-[#1a1a1a]'}`}>
                    <Building2 size={16} />
                    <span>All Campuses</span>
                  </Link>
                  
                  {campuses.map(campus => (
                    <Link 
                      key={campus.id}
                      to={`/campuses/settings/${campus.id}`}
                      className={`flex items-center space-x-2 px-3 py-2 rounded ${isCampusActive(campus.id) ? 'bg-[#3AC204]' : 'hover:bg-[#1a1a1a]'}`}
                    >
                      <GraduationCap size={16} />
                      <span>{campus.name}</span>
                    </Link>
                  ))}
                  
                  <Link 
                    to="/campuses/settings" 
                    className={`flex items-center space-x-2 px-3 py-2 rounded ${isSettingsActive('/campuses/settings') ? 'bg-[#3AC204]' : 'hover:bg-[#1a1a1a]'}`}
                  >
                    <Settings size={16} />
                    <span>Settings</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Referrals */}
            <Link to="/referrals" className={`flex items-center space-x-2 px-3 py-2 rounded ${isActive('/referrals') ? 'bg-[#3AC204]' : 'hover:bg-[#1a1a1a]'}`}>
              <Share2 size={18} />
              <span>Referrals</span>
            </Link>

            {/* Logout */}
            <Link to="/login" className={`flex items-center space-x-2 px-3 py-2 rounded ${isActive('/login') ? 'bg-[#3AC204]' : 'hover:bg-[#1a1a1a]'}`}>
              <LogOut size={18} />
              <span>Logout</span>
            </Link>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;