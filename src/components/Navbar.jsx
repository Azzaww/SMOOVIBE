import { MoreVertical } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();

  // Tutup dropdown kalau klik di luar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  return (
    <div>
      <header className="relative bg-gradient-to-b from-yellow-400 to-yellow-200 p-4 sm:p-6 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          Admin Dashboard
        </h1>

        {/* Tombol MoreVertical + dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="text-gray-900 hover:text-gray-700 p-2"
          >
            <MoreVertical size={24} />
          </button>

          {/* Dropdown muncul di atas elemen lain */}
          {openMenu && (
            <div
              className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
              style={{ zIndex: 9999 }}
            >
              <ul className="text-gray-800">
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpenMenu(false)}
                  >
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/produk"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpenMenu(false)}
                  >
                     Produk
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
    </div>
  );
};

export default Navbar;
