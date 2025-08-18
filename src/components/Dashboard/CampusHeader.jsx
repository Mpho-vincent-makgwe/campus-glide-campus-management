import { useState, useEffect } from "react";

const CampusHeader = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-ZA", {
        dateStyle: "medium",
        timeStyle: "short",
      });
      setDateTime(formatted);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 60000); // update every minute
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="mb-2 pb-2 flex items-center justify-between">
        {/* Far left */}
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            Campus Management Overview
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            High-level snapshot of all campuses using Campus Glide.
          </p>
        </div>

        {/* Far right, vertically centered */}
        <div className="text-sm text-gray-600">{dateTime}</div>
      </div>

      {/* Faint hr line */}
      <hr className="border-gray-200" />
    </>
  );
};

export default CampusHeader;
