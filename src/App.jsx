import './App.css'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Produk from './pages/Produk/Produk'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/produk" element={<Produk/>}/>
      </Routes>

    </>
  )
}

export default App
