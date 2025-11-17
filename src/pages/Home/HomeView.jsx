import React from "react";
import Footer from "../../components/Footer";
import Grafik from "../Grafik/Grafik";


const HomeView = ({teamMembers }) => {
  return (
    <div>
        <Grafik/>
        <Footer teamMembers={teamMembers} />
      </div>
  );
};

export default HomeView;
