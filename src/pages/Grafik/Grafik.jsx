import React, { useEffect, useState } from 'react'
import GrafikView from './GrafikView';

const Grafik = () => {
    const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/sales/weekly")
      .then((res) => res.json())
      .then((data) => {
        setSalesData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
        <GrafikView salesData={salesData} loading={loading} />
    </div>
  )
}

export default Grafik