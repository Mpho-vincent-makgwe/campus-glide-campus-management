// components/CampusSearch.jsx
import { FiSearch } from "react-icons/fi";

const CampusSearch = () => {
  return (
    <div className="mt-6 flex items-center gap-2">
      {/* Search input */}
      <div className="relative">
        <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Enter Campus Name"
          className="w-[410px]
           rounded-lg border border-gray-200 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
        />
      </div>

      {/* Smaller button */}
      <button className="rounded-lg bg-[#3AC204]
       px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700
      w-[244.94px]
      ">
        Search Campus
      </button>
    </div>
  );
};

export default CampusSearch;
