import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { MoreVertical } from "lucide-react";
import Footer from "../../components/Footer";


const HomeView = ({ salesData, orders, orderHistory, teamMembers }) => {
  return (
    <div className="min-h-screen bg-white ">
      

      <div className="max-w-7xl mx-auto p-3 sm:p-4 md:p-6 space-y-6 sm:space-y-8">
        {/* Sales Chart Section */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-gray-800">
            Grafik Penjualan
          </h2>
          <div className="h-64 sm:h-80 md:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={salesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => {
                    const isMobile = window.innerWidth < 640;
                    return isMobile
                      ? `${(percent * 100).toFixed(0)}%`
                      : `${name} ${(percent * 100).toFixed(0)}%`;
                  }}
                  outerRadius={
                    window.innerWidth < 640
                      ? 60
                      : window.innerWidth < 768
                      ? 80
                      : 100
                  }
                  fill="#8884d8"
                  dataKey="value"
                >
                  {salesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  wrapperStyle={{
                    fontSize: window.innerWidth < 640 ? "12px" : "14px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Orders Section */}
        <section className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 overflow-hidden">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-gray-800">
            Pemasukan
          </h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      No
                    </th>
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      Tanggal
                    </th>
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      Biaya Produksi
                    </th>
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      Produk
                    </th>
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      Terjual
                    </th>
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      Harga
                    </th>
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      Pendapatan
                    </th>
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      Laba
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm">
                        {order.no}
                      </td>
                      <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm whitespace-nowrap">
                        {order.date}
                      </td>
                      <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm whitespace-nowrap">
                        Rp {order.cost.toLocaleString("id-ID")}
                      </td>
                      <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm">
                        {order.product}
                      </td>
                      <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm">
                        {order.sold}
                      </td>
                      <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm whitespace-nowrap">
                        Rp {order.price.toLocaleString("id-ID")}
                      </td>
                      <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm whitespace-nowrap">
                        Rp {order.revenue.toLocaleString("id-ID")}
                      </td>
                      <td className="p-2 sm:p-3 text-gray-600 font-semibold text-green-600 text-xs sm:text-sm whitespace-nowrap">
                        Rp {order.profit.toLocaleString("id-ID")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Order History Section */}
        <section className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 overflow-hidden">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-gray-800">
            Riwayat Pesanan
          </h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      No
                    </th>
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      Nama
                    </th>
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      Menu
                    </th>
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      Jumlah
                    </th>
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      Lokasi
                    </th>
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      Catatan
                    </th>
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      Bukti Bayar
                    </th>
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      Nominal
                    </th>
                    <th className="p-2 sm:p-3 text-left font-semibold text-gray-700 text-xs sm:text-sm whitespace-nowrap">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderHistory.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm">
                        {item.no}
                      </td>
                      <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm">
                        {item.menu}
                      </td>
                      <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm">
                        {item.quantity}
                      </td>
                      <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm whitespace-nowrap">
                        {item.location}
                      </td>
                      <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm">
                        {item.notes}
                      </td>
                      <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm">
                        <span className="text-blue-600 hover:underline cursor-pointer whitespace-nowrap">
                          {item.proof}
                        </span>
                      </td>
                      <td className="p-2 sm:p-3 text-gray-600 text-xs sm:text-sm whitespace-nowrap">
                        Rp {item.amount.toLocaleString("id-ID")}
                      </td>
                      <td className="p-2 sm:p-3">
                        <button className="bg-green-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-green-600 transition text-xs sm:text-sm whitespace-nowrap">
                          Terima
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <Footer teamMembers={teamMembers} />
      </div>
    </div>
  );
};

export default HomeView;
