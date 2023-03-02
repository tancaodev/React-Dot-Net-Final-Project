import React from "react";
import { GiSniffingDog } from "react-icons/gi";

function TopBar() {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <a href='/' className="flex items-center border-none">
        <GiSniffingDog
          size={40}
          className="text-[var(--primary-dark)] mr-2"
        />
        <h1 className="text-xl font-bold text-gray-700">NASUS</h1>
      </a>
      <div className="flex">
        {/* <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle
            size={20}
            className="mr-2 text-[var(--primary-dark)] font-bold"
          />
          <p className="text-sm text-gray-700">9AM - 5PM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]" />
          <p className="text-sm text-gray-700">0865373260</p>
        </div> */}
        <button>Login</button>
      </div>
    </div>
  );
}

export default TopBar;
