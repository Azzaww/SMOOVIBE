import React, { useState } from "react";
import HomeView from "./HomeView";

const Home = () => {
  const [salesData] = useState([
    { name: "Mango Bliss", value: 35, color: "#2563eb" },
    { name: "Banadra (Banana mix Dragon)", value: 25, color: "#06b6d4" },
    { name: "Choco Banana", value: 40, color: "#ec4899" },
  ]);

  const [orders] = useState([
    {
      id: 1,
      no: 1,
      date: "01/11/2024",
      cost: 45000,
      product: "Mango Bliss",
      sold: 15,
      price: 5000,
      revenue: 75000,
      profit: 30000,
    },
    {
      id: 2,
      no: 2,
      date: "01/11/2024",
      cost: 38000,
      product: "Choco Banana",
      sold: 12,
      price: 5000,
      revenue: 60000,
      profit: 22000,
    },
    {
      id: 3,
      no: 3,
      date: "02/11/2024",
      cost: 42000,
      product: "Banadra",
      sold: 18,
      price: 5000,
      revenue: 90000,
      profit: 48000,
    },
  ]);

  const [teamMembers] = useState([
    { name: "Aprilia Athaya Syahda", role: "Production & Promotion" },
    { name: "Citra Yunisa", role: "System Analyst" },
    { name: "Faldan Yudiatira Elbas", role: "Graphic Design" },
    { name: "Fatimah Az-Zahra", role: "Database Analyst" },
    { name: "Lintang Mahameru Putra", role: "Web Developer" },
  ]);

  const [orderHistory] = useState([
    {
      id: 1,
      no: 1,
      name: "Ahmad Rizki",
      menu: "Mango Bliss",
      quantity: 2,
      location: "Kelas 12-A",
      notes: "Tanpa es",
      proof: "Lihat Bukti",
      amount: 10000,
    },
    {
      id: 2,
      no: 2,
      name: "Siti Nurhaliza",
      menu: "Choco Banana",
      quantity: 1,
      location: "Kantin",
      notes: "-",
      proof: "Lihat Bukti",
      amount: 5000,
    },
    {
      id: 3,
      no: 3,
      name: "Budi Santoso",
      menu: "Banadra",
      quantity: 3,
      location: "Lab Komputer",
      notes: "Extra manis",
      proof: "Lihat Bukti",
      amount: 15000,
    },
  ]);

  return (
    <div>
      <HomeView
        salesData={salesData}
        orders={orders}
        orderHistory={orderHistory}
        teamMembers={teamMembers}
      />
    </div>
  );
};

export default Home;
