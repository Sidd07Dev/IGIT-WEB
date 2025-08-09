import React, { useState } from "react";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const links = [
    { name: "Home", to: "/" },
    { name: "Gallery", to: "/gallery" },
    { name: "Placed Students", to: "/placements" },
    { name: "Faculty", to: "/faculty" },
    { name: "Contact", to: "/contactus" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/60 shadow-lg border-b border-white/20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">

        {/* Left Side: MacOS style buttons + Logo */}
        <div className="flex items-center space-x-4">
          {/* MacOS window buttons */}
          <div className="flex space-x-1">
            <span className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></span>
          </div>

          {/* Logo + Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/5/5c/Indira_Gandhi_Institute_of_Technology%2C_Sarang_Logo.png"
              alt="IGIT Logo"
              className="w-10 h-10 rounded-full shadow-md"
            />
            <span className="text-xl font-extrabold tracking-wide text-[#5C7CFA] hover:text-[#4DB6AC] transition-colors">
              IGIT <span className="text-[#2D3436]">MCA</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="relative font-medium text-[#2D3436] hover:text-[#4DB6AC] transition-colors group"
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-[#5C7CFA] to-[#4DB6AC] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {!user ? (
            <Link
              to="/login"
              className="bg-gradient-to-r from-[#5C7CFA] to-[#4DB6AC] text-white px-4 py-2 rounded-lg shadow hover:scale-105 transform transition"
            >
              Login
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#E3F2FD] transition"
              >
                <User className="w-5 h-5 text-[#5C7CFA]" />
                <span className="text-[#2D3436] font-medium">{user?.name}</span>
                <ChevronDown className="w-4 h-4 text-[#5C7CFA]" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-lg shadow-xl border border-gray-200 bg-white overflow-hidden animate-fadeIn z-50">
                  <Link
                    to="/student/profile"
                    className="block px-4 py-2 text-[#2D3436] hover:bg-gradient-to-r hover:from-[#5C7CFA] hover:to-[#4DB6AC] hover:text-white transition"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/student/resources"
                    className="block px-4 py-2 text-[#2D3436] hover:bg-gradient-to-r hover:from-[#5C7CFA] hover:to-[#4DB6AC] hover:text-white transition"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Resources
                  </Link>
                  <Link
                    to="/student/attendance"
                    className="block px-4 py-2 text-[#2D3436] hover:bg-gradient-to-r hover:from-[#5C7CFA] hover:to-[#4DB6AC] hover:text-white transition"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Attendance
                  </Link>
                  <Link
                    to="/student/batchmates"
                    className="block px-4 py-2 text-[#2D3436] hover:bg-gradient-to-r hover:from-[#5C7CFA] hover:to-[#4DB6AC] hover:text-white transition"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Batchmates
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#2D3436]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 rounded-b-lg bg-white/90 border-t border-gray-200 animate-slideDown">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-[#2D3436] hover:text-[#4DB6AC] font-medium transition"
            >
              {link.name}
            </Link>
          ))}
          {!user ? (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block mt-3 bg-gradient-to-r from-[#5C7CFA] to-[#4DB6AC] text-white text-center py-2 rounded-lg shadow hover:scale-105 transform transition"
            >
              Login
            </Link>
          ) : (
            <>
              <Link
                to="/student/profile"
                className="block py-2 text-[#2D3436] hover:text-[#4DB6AC] transition"
                onClick={() => setMenuOpen(false)}
              >
                My Profile
              </Link>
              <Link
                to="/student/resources"
                className="block py-2 text-[#2D3436] hover:text-[#4DB6AC] transition"
                onClick={() => setMenuOpen(false)}
              >
                Resources
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="w-full text-left py-2 text-red-600 hover:bg-red-100 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}

      {/* Animations */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-in-out forwards;
          }
          .animate-slideDown {
            animation: slideDown 0.3s ease-in-out forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </header>
  );
};

export default Navbar;
