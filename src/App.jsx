import './App.css'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Produk from './pages/Produk/Produk'
import RiwayatPesanan from './pages/Riwayat/RiwayatPesanan'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/produk" element={<Produk/>}/>
      <Route path="/riwayat" element={<RiwayatPesanan/>}/>
      </Routes>

    </>
  )
}

export default App
