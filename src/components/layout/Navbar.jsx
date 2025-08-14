import { useState, useEffect } from 'react';
import { Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
      <nav className="lg:hidden bg-white shadow-sm h-16 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-50">
        <button 
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <Menu size={20} />
        </button>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Search size={20} className="text-gray-500" />
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="/src/assets/images/avatar.png"
              alt="Ann Grob"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="hidden lg:flex bg-white h-16 items-center justify-between px-6 fixed top-0 right-0 left-64 shadow z-50">
      <div className="w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300 text-sm"
        />
      </div>

      <div className="flex items-center space-x-6">
        <span className="text-sm text-gray-500">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        <button className="text-gray-600 hover:text-gray-800">?</button>
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/images/avatar.png"
            alt="Ann Grob"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="text-right text-sm">
            <div className="font-semibold text-gray-700">Ann Grob</div>
            <div className="text-gray-500">Admin</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;