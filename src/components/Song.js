import React, { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { TbDownload } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import Library from "./Library";
import { IoMdShare } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
const Song = ({ currentSong, songs, setCurrentSong, audioRef, isPlaying }) => {
  // console.log(songs);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col justify-center w-full px-[6.5rem]">
      <div className=" flex flex-col gap-10 text-white ">
        <div className="flex gap-20">
          <img
            src={currentSong.cover}
            className="h-56 w-56 rounded-xl  border-2 border-white"
            alt={currentSong.name}
          ></img>
          <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-5 w-full">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-2xl">Featured Artists</h1>
                <div className="flex gap-4">
                  <button>
                    <TbDownload className="h-8 w-8 text-white border-2 px-1 py-1 rounded-full" />
                  </button>
                  <button
                    onClick={toggleMenu}
                    className="relative"
                    onBlur={() => {
                      setIsOpen(false);
                    }}
                  >
                    <BsThreeDotsVertical className="h-8 w-8 text-white border-2 px-1 py-1 rounded-full" />
                    {isOpen && (
                      <div className="bg-[#21252D] text-white text-sm font-normal flex flex-col gap-3 w-36 px-2 py-3 absolute top-0 right-12 rounded-xl border border-blue-400">
                        <p className="flex gap-2 items-start">
                          <FiDownload className="w-5 h-5" />
                          Download
                        </p>
                        <p className="flex gap-2 items-start">
                          <IoMdShare className="w-5 h-5" />
                          Share
                        </p>
                      </div>
                    )}
                  </button>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img
                    src="./arijit.webp"
                    className="rounded-full h-28 w-28"
                  ></img>
                  <h1 className="text-sm font-medium">ARIJIT SINGH</h1>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img
                    src="./vishal.webp"
                    className="rounded-full h-28 w-28"
                  ></img>
                  <h1 className="text-sm font-medium">VISHAL MISHRA</h1>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img
                    src="./sonu.webp"
                    className="rounded-full h-28 w-28"
                  ></img>
                  <h1 className="text-sm font-medium">SONU NIGAM</h1>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img
                    src="./pritam.webp"
                    className="rounded-full h-28 w-28"
                  ></img>
                  <h1 className="text-sm font-medium">PRITAM</h1>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img
                    src="./shreyal.webp"
                    className="rounded-full h-28 w-28"
                  ></img>
                  <h1 className="text-sm font-medium">SHREYA GHOSHAL</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full ">
          <div className="flex flex-col">
            <h1 className="font-medium text-4xl pb-2">{currentSong.movie}</h1>
            <p className="text-gray-400">{currentSong.name}</p>
            <button className="bg-blue-600 px-3 py-2 rounded-full mt-3 flex items-center gap-1 font-medium w-fit border-2 border-white">
              <FaPlay />
              Play Songs
            </button>
          </div>
          <div className="w-[75%]">
            <Library
              songs={songs}
              setCurrentSong={setCurrentSong}
              audioRef={audioRef}
              isPlaying={isPlaying}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Song;
