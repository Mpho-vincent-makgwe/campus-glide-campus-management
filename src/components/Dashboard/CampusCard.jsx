// components/CampusCard.jsx
import { FaArrowUp } from "react-icons/fa";

const CampusCard = ({ campus }) => {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-[#3AC204]">{campus.status}</span>
        <img
          src={campus.logo}
          alt={campus.name}
          className="h-10 w-10 rounded-full object-contain"
        />
      </div>

      <h3 className="text-[15px] font-semibold leading-tight text-gray-900">
        {campus.name}
      </h3>
      <p className="mt-1 text-xs text-gray-500">{campus.scooters} Active Scooters</p>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-gray-500">Active Rides</p>
          <p className="mt-0.5 flex items-center gap-2 text-[15px] font-bold">
            {campus.rides}
            <span className="flex items-center gap-1 text-xs font-medium text-[#3AC204]">
              <FaArrowUp className="-mt-[1px]" /> 10%
            </span>
            <span className="text-xs text-gray-400">Today</span>
          </p>
        </div>
        <div>
          <p className="text-gray-500">Wallet Revenue</p>
          <p className="mt-0.5 text-[15px] font-bold">R{campus.revenue}</p>
        </div>
      </div>

      <button className="mt-4 w-full rounded-full bg-[#3AC204]
       px-4 py-2.5 text-sm font-medium text-white transition hover:bg-green-700">
        View Dashboard
      </button>
    </div>
  );
};

export default CampusCard;
