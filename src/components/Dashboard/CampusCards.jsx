// components/CampusCards.jsx
import CampusCard from "./CampusCard";

const CampusCards = () => {
  const campuses = [
    {
      status: "Active",
      logo: "/images/universitypic.png",
      name: "University of Capetown",
      scooters: 120,
      rides: 52,
      revenue: 6700,
    },
    {
      status: "Active",
      logo: "/images/universitypic.png",
      name: "University of Johannesburg",
      scooters: 200,
      rides: 40,
      revenue: 6000,
    },
    {
      status: "Active",
      logo: "/images/universitypic.png",
      name: "North West University",
      scooters: 150,
      rides: 37,
      revenue: 5100,
    },
    {
      status: "Active",
      logo: "/images/universitypic.png",
      name: "University of KwaZulu Natal",
      scooters: 160,
      rides: 44,
      revenue: 5670,
    },
  ];

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {campuses.map((campus, i) => (
        <CampusCard key={i} campus={campus} />
      ))}
    </div>
  );
};

export default CampusCards;
