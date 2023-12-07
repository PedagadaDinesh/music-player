import React from "react";

const Navbar = () => {
  return (
    <div className="text-white py-4 px-7 bg-red-600 flex justify-between">
      <h1 className="text-xl ">MusicPlex</h1>
      <button className="text-lg rounded-full bg-blue-600 px-3 py-0.5 border border-blue-600">
        Get App
      </button>
    </div>
  );
};

export default Navbar;
