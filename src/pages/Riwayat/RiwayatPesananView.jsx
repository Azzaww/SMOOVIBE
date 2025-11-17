import React from 'react'

const RiwayatPesananView = ({ orderHistory, loading }) => {
    if (loading) {
    return <p className="text-center py-4">Loading...</p>;
  }
  return (
    <div>
        <section className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">
        Riwayat Pesanan
      </h2>

      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="p-3 text-left font-semibold text-gray-700 text-sm">No</th>
              <th className="p-3 text-left font-semibold text-gray-700 text-sm">Nama</th>
              <th className="p-3 text-left font-semibold text-gray-700 text-sm">Menu</th>
              <th className="p-3 text-left font-semibold text-gray-700 text-sm">Jumlah</th>
              <th className="p-3 text-left font-semibold text-gray-700 text-sm">Lokasi</th>
              <th className="p-3 text-left font-semibold text-gray-700 text-sm">Catatan</th>
              <th className="p-3 text-left font-semibold text-gray-700 text-sm">Bukti</th>
              <th className="p-3 text-left font-semibold text-gray-700 text-sm">Nominal</th>
            </tr>
          </thead>

          <tbody>
            {orderHistory.map((item, index) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-3 text-gray-600">{index + 1}</td>
                <td className="p-3 text-gray-600">{item.name}</td>
                <td className="p-3 text-gray-600">{item.menu}</td>
                <td className="p-3 text-gray-600">{item.quantity}</td>
                <td className="p-3 text-gray-600">{item.location}</td>
                <td className="p-3 text-gray-600">{item.notes}</td>
                <td className="p-3 text-blue-600 cursor-pointer hover:underline">
                  {item.proof}
                </td>
                <td className="p-3 text-gray-600">
                  Rp {item.amount.toLocaleString("id-ID")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    </div>
  )
}

export default RiwayatPesananView