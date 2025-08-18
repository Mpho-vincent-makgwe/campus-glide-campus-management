// components/CampusStats.jsx
import { FaArrowUp } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "MON", value: 5 },
  { name: "TUE", value: 10 },
  { name: "WED", value: 20 },
  { name: "THUR", value: 12 },
  { name: "FRI", value: 14 },
  { name: "SAT", value: 6 },
  { name: "SUN", value: 4 },
];

const CampusStats = () => {
  return (
    <div className="max-w-sm  border border-gray-200 bg-white p-6 text-center shadow-sm">
      {/* Logo circle */}
      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
        <img
          src="
          /images/universitypic.png
          "
          alt="UCT Logo"
          className="h-12 w-12 object-contain"
        />
      </div>

      <h2 className="text-lg font-bold">University of Capetown</h2>
      <p className="mb-5 text-sm">
        Status: <span className="font-medium text-green-600">Active</span>
      </p>

      <div className="mb-6 flex items-start justify-around text-left">
        <div>
          <p className="text-xs text-gray-500">Active Rides</p>
          <p className="mt-1 flex items-center text-xl font-bold">
            20
            <span className="ml-2 flex items-center gap-1 text-xs font-medium text-green-600">
              <FaArrowUp /> 10%
            </span>
            <span className="ml-1 text-xs text-gray-400">Today</span>
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Latest Activity</p>
          <p className="mt-1 flex items-center text-xl font-bold">
            12 mins ago
            <FiInfo className="ml-2 text-base text-[#3AC204]" />
          </p>
        </div>
      </div>

      <div className="mb-4 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorGreen)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <button className="w-full rounded-full bg-[#3AC204] px-6 py-3 text-sm font-medium text-white transition hover:bg-green-700">
        View Dashboard
      </button>
    </div>
  );
};

export default CampusStats;
