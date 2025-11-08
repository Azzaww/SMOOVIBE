import React, { useEffect, useState } from 'react'
import ProdukView from './ProdukView';

const Produk = () => {
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({ name: "", price: "", stock: "" });
  const [editId, setEditId] = useState(null);

  // Ambil semua produk dari API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/api/products");
      if (!res.ok) throw new Error("Gagal mengambil data produk");
      const data = await res.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Tambah produk baru
  const handleCreate = async () => {
    if (!formData.name || !formData.price || !formData.stock)
      return alert("Lengkapi semua data!");

    try {
      const res = await fetch("http://localhost:8080/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Gagal menambah produk");
      const newProduct = await res.json();

      setProducts([...products, newProduct]);
      setFormData({ name: "", price: "", stock: "" });
    } catch (err) {
      alert(err.message);
    }
  };

  // Update produk
  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/admin/products/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Gagal mengupdate produk");
      const updated = await res.json();

      setProducts(products.map((p) => (p.id === updated.id ? updated : p)));
      setFormData({ name: "", price: "", stock: "" });
      setEditId(null);
    } catch (err) {
      alert(err.message);
    }
  };

  // Hapus produk
  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus produk ini?")) return;
    try {
      const res = await fetch(`http://localhost:8080/api/admin/products/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Gagal menghapus produk");
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  // Masukkan data ke form untuk edit
  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      price: product.price,
      stock: product.stock,
    });
    setEditId(product.id);
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

  return (
    <div>
        <ProdukView
        products={products}
      formData={formData}
      setFormData={setFormData}
      editId={editId}
      handleCreate={handleCreate}
      handleUpdate={handleUpdate}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
        />
    </div>
  )
}

export default Produk