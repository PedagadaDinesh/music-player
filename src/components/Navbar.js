import React from "react";
import { IoMdMusicalNote } from "react-icons/io";
import { LuMusic4 } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="text-white py-4 bg-[#1C1C1C] flex px-[7rem] justify-between">
      <h1 className="text-xl flex justify-center items-center gap-2">
        <IoMdMusicalNote className="h-9 w-9 text-blue-600  bg-white rounded-full py-1 transform rotate-12" />
        MusicPlex
      </h1>
      <div className="flex gap-4 items-center">
        <p className=" font-normal text-gray-300 flex items-center gap-2 cursor-pointer">
          <LuMusic4 className="h-6 w-6" />
          My Music
        </p>
        <button>
          <RxHamburgerMenu className="h-6 w-6" />
        </button>
      </div>
      {/* <button className="text-lg rounded-full bg-blue-600 px-3 py-0.5 border border-blue-600 md:hidden">
        Get App
      </button> */}
    </div>
  );
};

export default Navbar;
