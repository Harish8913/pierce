import React from "react";
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-0 md:px-6 py-4 bg-white w-full">
      <img src={logo} width={140}/>

      <div className="cursor-pointer bg-[#95798A] w-fit p-3 px-2 md:px-8 text-white text-xs tracking-widest font-light">
        <a href="https://api.whatsapp.com/send/?phone=919373550236&text&type=phone_number&app_absent=0">
          <button>BOOK NOW</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
