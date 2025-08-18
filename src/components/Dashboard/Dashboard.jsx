import WelcomeBanner from './WelcomeBanner';
import CampusSearch from './CampusSearch';
import CampusCards from './CampusCards';
import CampusMap from './CampusMap';
import CampusStats from './CampusStats';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Campus Management Overview</h1>
      <p className="text-gray-500 mb-6">High-level snapshot of all campuses using Campus Glide.</p>

      <WelcomeBanner />
      <CampusSearch />
      <CampusCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        <CampusMap />
        <CampusStats />
      </div>
    </div>
  );
};

export default Dashboard;
