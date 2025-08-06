'use client';
import { useState } from 'react';
import { ChevronDown, LogOut, LayoutDashboard, Share2, Building2 } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  const [isCampusesOpen, setIsCampusesOpen] = useState(true);

  return (
    <div className="bg-[#111] text-white h-screen w-64 flex flex-col py-6 px-4 fixed">
      {/* Logo */}
      <div className="text-2xl font-bold text-white mb-10 flex items-center space-x-2">
        <div className="w-5 h-5 bg-green-500 rounded-full"></div>
        <span>Campus Glide</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4 text-sm">
        <Link href="/dashboard" className="flex items-center space-x-2 px-3 py-2 rounded bg-green-600">
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </Link>

        <button
          onClick={() => setIsCampusesOpen(!isCampusesOpen)}
          className="flex items-center justify-between w-full px-3 py-2 rounded hover:bg-[#1a1a1a]"
        >
          <span className="flex items-center space-x-2">
            <Building2 size={18} />
            <span>Campuses</span>
          </span>
          <ChevronDown size={16} className={`transition-transform ${isCampusesOpen ? 'rotate-180' : ''}`} />
        </button>

        {isCampusesOpen && (
          <div className="ml-6 flex flex-col space-y-2 text-gray-300 text-sm">
            <Link href="#" className="hover:text-white">All Campuses</Link>
            <Link href="#" className="hover:text-white">Add New</Link>
          </div>
        )}

        <Link href="#" className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-[#1a1a1a]">
          <Share2 size={18} />
          <span>Referrals</span>
        </Link>

        <Link href="#" className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-[#1a1a1a] mt-auto">
          <LogOut size={18} />
          <span>Logout</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
