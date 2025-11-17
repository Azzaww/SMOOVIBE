import React, { useEffect, useState } from 'react'
import RiwayatPesananView from './RiwayatPesananView';

const RiwayatPesanan = () => {
    const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrderHistory(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
       <RiwayatPesananView orderHistory={orderHistory} loading={loading} />
    </div>
  )
}

export default RiwayatPesanan