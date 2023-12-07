import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[40vh] w-full">
      <div className="text-center flex flex-col gap-5 text-white ">
        <img
          src={currentSong.cover}
          className="md:h-56 md:w-56 h-52 w-52 rounded-xl border-2 border-red-600"
          alt={currentSong.name}
        ></img>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-medium text-2xl pb-2">{currentSong.movie}</h1>
          <p className="text-gray-400">{currentSong.name}</p>
          <p className="text-gray-400">{currentSong.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
