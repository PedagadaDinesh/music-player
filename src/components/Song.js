import React from "react";
import { FaPlay } from "react-icons/fa6";

const Song = ({ currentSong }) => {
  return (
    <div className="flex flex-col justify-center w-full px-[6.5rem]">
      <div className=" flex gap-20 text-white ">
        <div className="flex flex-col gap-10">
          <img
            src={currentSong.cover}
            className="h-56 w-56 rounded-xl  border-2 border-blue-600"
            alt={currentSong.name}
          ></img>
          <div>
            <h1 className="text-2xl">Featured Artists</h1>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-medium text-4xl pb-2">{currentSong.movie}</h1>
          <p className="text-gray-400">{currentSong.name}</p>
          <button className="bg-blue-600 px-3 py-2 rounded-full mt-3 flex items-center gap-1 font-medium">
            <FaPlay />
            Play Songs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Song;
