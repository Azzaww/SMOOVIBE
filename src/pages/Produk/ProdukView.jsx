import React from 'react'

const ProdukView = ({
  products,
  formData,
  setFormData,
  editId,
  handleCreate,
  handleUpdate,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
        <h1 className="text-center font-bold py-5 text-2xl">Daftar Produk</h1>

        {/* Form Input */}
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editId ? "Edit Produk" : "Tambah Produk"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Nama Produk"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="p-2 rounded border border-gray-300 w-full"
          />
          <input
            type="number"
            placeholder="Harga"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="p-2 rounded border border-gray-300 w-full"
          />
          <input
            type="number"
            placeholder="Stok"
            value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
            className="p-2 rounded border border-gray-300 w-full"
          />
        </div>

        <div className="mt-4 flex gap-2">
          {editId ? (
            <>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Update
              </button>
              <button
                onClick={() => {
                  setFormData({ name: "", price: "", stock: "" });
                  window.location.reload(); // reset sederhana
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Batal
              </button>
            </>
          ) : (
            <button
              onClick={handleCreate}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Tambah
            </button>
          )}
        </div>
      </div>

      {/* Tabel Produk */}
      <div className="overflow-x-auto max-w-5xl mx-auto">
        <table className="table-auto w-full border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Nama Produk</th>
              <th className="p-3">Harga</th>
              <th className="p-3">Stok</th>
              <th className="p-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products && products.length > 0 ? (
              products.map((p) => (
                <tr key={p.id} className="border-b border-gray-300">
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">Rp {p.price}</td>
                  <td className="p-3">{p.stock}</td>
                  <td className="p-3 text-center flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(p)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-6">
                  Tidak ada produk
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProdukView