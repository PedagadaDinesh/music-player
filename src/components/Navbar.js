import React from "react";
import { IoMdMusicalNote } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="text-white py-4 px-7 bg-[#1C1C1C] flex">
      <h1 className="text-xl px-20 flex justify-center items-center gap-2">
        <IoMdMusicalNote className="h-9 w-9 text-blue-600  bg-white rounded-full py-1 transform rotate-12" />
        MusicPlex
      </h1>
      <button className="text-lg rounded-full bg-blue-600 px-3 py-0.5 border border-blue-600 md:hidden">
        Get App
      </button>
    </div>
  );
};

export default Navbar;
