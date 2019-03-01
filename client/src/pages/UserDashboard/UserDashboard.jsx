import React from "react";

const navigationItems = [
  "CREATE EXERCISE",
  "CREATE PROGRAM",
  "SCHEDULE PROGRAM"
];

const UserDashboard = () => (
  <div>
    {navigationItems.map((navItem, index) => (
      <div key={index}> {navItem} </div>
    ))}
  </div>
);

export default UserDashboard;
