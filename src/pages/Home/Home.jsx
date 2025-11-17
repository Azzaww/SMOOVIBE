import React, { useState } from "react";
import HomeView from "./HomeView";

const Home = () => {
  const [teamMembers] = useState([
    { name: "Aprilia Athaya Syahda", role: "Production & Promotion" },
    { name: "Citra Yunisa", role: "System Analyst" },
    { name: "Faldan Yudiatira Elbas", role: "Graphic Design" },
    { name: "Fatimah Az-Zahra", role: "Database Analyst" },
    { name: "Lintang Mahameru Putra", role: "Web Developer" },
  ]);
 

  return (
    <div>
      <HomeView teamMembers={teamMembers}   />
    </div>
  );
};

export default Home;
