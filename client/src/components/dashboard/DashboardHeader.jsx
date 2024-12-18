import React from "react";

const DashboardHeader = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-white text-lg">My Dashboard</div>
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-gray-400">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Settings
          </a>
        </div>
      </nav>
    </div>
  );
};

export default DashboardHeader;
