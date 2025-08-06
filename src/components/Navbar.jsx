'use client';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="ml-64 bg-white shadow-sm h-16 flex items-center justify-between px-6 fixed top-0 right-0 left-64 z-10">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search..."
        className="w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300 text-sm"
      />

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500">19th May 2024, Monday</span>
        <button className="text-gray-600 hover:text-gray-800">?</button>
        <div className="flex items-center space-x-2">
          <Image
            src="/avatar.png" // Replace with your avatar path
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
    </div>
  );
};

export default Navbar;
