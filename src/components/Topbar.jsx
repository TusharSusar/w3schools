import React from "react";
import Subtopnav from "./Subtopnav";
import { FaCaretDown } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";
import { LuCodeXml } from "react-icons/lu";
import { GiGraduateCap } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";

function Topbar() {
  return (
    <header className="w-full fixed top-0">
      <section className="navbar md:px-14 w-full flex items-center justify-between">
        <div className="left flex items-center gap-4">
          <div className="logo">
            <img src="https://www.w3schools.com/favicon.ico" alt="Logo" width={55} className="p-2" />
          </div>
          <ul className="flex">
            <li className="navitems">Tutorials<span><FaCaretDown/></span></li>
            <li className="navitems">Exercises<span><FaCaretDown/></span></li>
            <li className="navitems">Certificates<span><FaCaretDown/></span></li>
            <li className="navitems">Services<span><FaCaretDown/></span></li>
          </ul>
          <input type="search" name="input" placeholder="Search..." className="border border-[#ccc] outline-none px-4 py-1 italic font-semibold rounded-full" />
          <VscColorMode size={20}/> 
        </div>
        <div className="right flex space-x-8 font-semibold">
          <ul className="flex gap-10 text-[15px]">
            <li className="flex items-center gap-2 cursor-pointer"><span><LuCodeXml color="#9763f6" size={20}/></span>Spaces</li>
            <li className="flex items-center gap-2 cursor-pointer"><span><GiGraduateCap color="#9763f6" size={20}/></span>For Teachers</li>
            <li className="flex items-center gap-2 cursor-pointer"><span><BsStars color="#9763f6" size={20}/></span>Upgrade</li>
            <li className="flex items-center gap-2 cursor-pointer"><span><IoCartOutline color="#9763f6" size={20}/></span>Get Certified</li>
          </ul>
          <button type="button" className="btn py-2 px-4 flex items-center gap-1.5 cursor-pointer"><span><FaRegUser size={12}/></span>Sign up</button>
        </div>
      </section>
      <Subtopnav />
    </header>
  );
}

export default Topbar;
