import React from "react";
import {FaPizzaSlice} from "react-icons/fa";
import { HiLocationMarker} from "react-icons/hi";
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io";
import {RiSearch2Line} from "react-icons/ri";

const MobileNav = () => {
    return (<>
  <div className="px-1 py-1 shadow-md items-center justify-between flex w-full md:hidden">
  <div className="w-28">
    <img
      src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
      alt="logo"
      className="w-full h-full"
    />
  </div>
  <div className="flex items-center gap-3">
    <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
    <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
      <FaPizzaSlice />
    </span>
  </div>
  </div>
    </>);
  };


const MediumNav = () => {
    return (
        <>
         <div className="hidden gap-4 w-full items-center justify-between flex lg:hidden">
         <div className="w-28">
        <img
         src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
         alt="logo"
         className="w-full h-full"
        />
        </div>
        <div className="w-full bg-white shadow-md px-3 py-3 flex items-center gap-3 border border-gray-200 rounded">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
                <span className="text-zomato-400">
                    <HiLocationMarker />
                </span>
                <input type="text" placeholder="Pune,Maharashtra" className="focus:outline-none" />
                <IoMdArrowDropdown />
            </div>
            <div className="flex w-full items-center gap-2">
               <RiSearch2Line />
               <input type="search" 
                    placeholder="Search for Restaurant, Cuisine or Dish" 
                    className="w-full focus:outline-none"/> 
            </div>
        </div>
        <div className="flex gap-2">
            <button className="text-gray-500 text-xl hover:text-gray-800">Login</button>
            <button  className="text-gray-500 text-xl hover:text-gray-800">Signup</button>
        </div>
        </div>
        </>
    )
}


const LargeNav =() => {
    return (
        <>
         <div className="hidden gap-5 w-full items-center justify-between  md:flex lg:w-3/4">
         <div className="w-28">
        <img
         src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
         alt="logo"
         className="w-full h-full"
        />
        </div>
        <div className="w-full bg-white shadow-md px-3 py-3 flex items-center gap-3 border border-gray-200 rounded">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
                <span className="text-zomato-400">
                    <HiLocationMarker />
                </span>
                <input type="text" placeholder="Pune,Maharashtra" className="focus:outline-none" />
                <IoMdArrowDropdown />
            </div>
            <div className="flex w-full items-center gap-2">
               <RiSearch2Line />
               <input type="search" 
                    placeholder="Search for Restaurant, Cuisine or Dish" 
                    className="w-full focus:outline-none"/> 
            </div>
        </div>
        <div className="flex gap-2">
            <button className="text-gray-500 text-xl hover:text-gray-800 px-12">Login</button>
            <button  className="text-gray-500 text-xl hover:text-gray-800">Signup</button>
        </div>
        </div>
        </>
    )
};

  
  const Navbar = () => {
  return (
    <>
      <nav className="p-4 flex bg-white  items-center">
      <MobileNav />
      <MediumNav />
      <LargeNav />
      </nav>
    </>
  )
  
  };
  
  export default Navbar;