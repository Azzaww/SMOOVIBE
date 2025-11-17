import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const GrafikView = ({ salesData, loading }) => {
    if (loading) {
    return <p className="text-center py-4">Loading grafik...</p>;
  }

  return (
    <div className="bg-white">
        <section className="mb-10">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">
        Grafik Penjualan Mingguan
      </h2>

      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={salesData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {salesData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
    </div>
  )
}

export default GrafikView