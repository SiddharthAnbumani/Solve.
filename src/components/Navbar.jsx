// import { NavLink } from "react-router-dom";

// export default function Navbar(){
//     return (
//         // <div className="h-20 bg-gradient-to-r from-black via-zinc-900 to-zinc-950 border-b-2 border-black/10 flex items-center">
//         <div className="h-20 bg-white border-b-2 border-black/10 flex items-center">
//             <div className="w-6/12 flex items-center">
//             <NavLink to='/'>
//             <img src="public/solve-white1.png" alt="" className="h-30 mx-10" />
//             {/* <p className="font-helvetica-light text-white text-3xl">Solve.</p> */}
//             </NavLink>
//             </div>
//             <div className="text-white w-full flex">
//             <div className="w-2/12">
//             </div>
//             <ul className="flex justify-center w-8/12 space-x-5 text-lg uppercase font-helvetica-medium text-black">
//                 <NavLink to='/products'>
//                     Products
//                 </NavLink>
//                 <NavLink to='/services'>
//                     Services
//                 </NavLink>
//                 <NavLink to='/pricing'>
//                     Pricing
//                 </NavLink>
//                 {/* <NavLink to='/policy'>
//                     Policy
//                 </NavLink> */}
//                 <NavLink to='/about'>
//                     About Us
//                 </NavLink>
//                 <NavLink to='/contact'>
//                     Contact Us
//                 </NavLink>
//             </ul>
//             </div>
//         </div>
//     )
// }

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => setMenuOpen((p) => !p);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 overflow-x-hidden">
      {/* Navbar */}
      <div className="h-20 bg-white border-b-2 border-black/10 flex items-center justify-between px-4 sm:px-6 md:px-10 w-screen">
        {/* Logo */}
        <NavLink to="/" onClick={closeMenu} className="flex items-center">
          <img
            src="public/solve-white1.png"
            alt="Solve Logo"
            className="h-30 md:h-30 object-contain"
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center space-x-8 text-lg uppercase font-helvetica-medium text-black">
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggle}
          className="md:hidden flex items-center justify-center bg-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/30"
        >
          {menuOpen ? (
            <X className="text-white w-6 h-6" />
          ) : (
            <Menu className="text-white w-6 h-6" />
          )}
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center uppercase text-3xl font-helvetica-medium text-black space-y-8 transition-all duration-300 z-[60] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-zinc-100 transition"
        >
          <X className="w-7 h-7 text-black" />
        </button>

        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/products" onClick={closeMenu}>
          Products
        </NavLink>
        <NavLink to="/services" onClick={closeMenu}>
          Services
        </NavLink>
        <NavLink to="/pricing" onClick={closeMenu}>
          Pricing
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About Us
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}
