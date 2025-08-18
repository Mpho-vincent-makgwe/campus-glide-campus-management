// pages/dashboard.jsx (content-only; no sidebar/navbar)
import WelcomeBanner from "./WelcomeBanner";
import CampusSearch from "./CampusSearch";
import CampusCards from "./CampusCards";
import CampusMap from "./CampusMap";
import CampusStats from "./CampusStats";
import CampusHeader from "./CampusHeader";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      
      <CampusHeader/>
      <div className="mt-4">
        <WelcomeBanner />
      </div>

      <CampusSearch />
      <CampusCards />

      <div className="mt-6 grid grid-cols-1 
       gap-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CampusMap />
        </div>
        <div className="lg:col-span-1">
          <CampusStats />
        </div>
      </div>
    </main>
  );
}
