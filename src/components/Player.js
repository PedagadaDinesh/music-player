import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { PiShuffleSimpleBold } from "react-icons/pi";
import { IoMdRepeat } from "react-icons/io";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { IoMdVolumeHigh } from "react-icons/io";

const Player = ({
  audioRef,
  currentSong,
  isPlaying,
  setIsPlaying,
  setSongInfo,
  songInfo,
}) => {
  const songPlayHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  return (
    <div className="flex flex-col justify-center items-center fixed bottom-0 w-full">
      <div className="flex flex-col w-full text-white relative">
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          className="w-[100%] absolute -top-0 left-0 right-0 cursor-pointer h-[5%]"
        />
        <div className="flex justify-between w-full items-center px-10 py-2 bg-[#1C1C1C]">
          <div className="flex  items-center justify-center gap-2">
            <img src={currentSong.cover} className="h-10 w-10 rounded-md"></img>
            <div className="flex flex-col text-sm ">
              <p>{currentSong.movie}</p>
              <p className="text-gray-400">{currentSong.name}</p>
            </div>
          </div>
          <div className="flex text-white gap-10 items-center justify-center">
            <PiShuffleSimpleBold className="h-6 w-6 cursor-pointer" />
            <IoPlaySkipBack className="h-6 w-6 cursor-pointer" />
            <FontAwesomeIcon
              onClick={songPlayHandler}
              className="rounded-full text-blue-600 cursor-pointer"
              icon={isPlaying ? faPause : faPlay}
              size="2x"
            />
            <IoPlaySkipForward className="h-6 w-6 cursor-pointer" />
            <IoMdRepeat className="h-6 w-6 cursor-pointer" />
          </div>
          <div className="flex gap-4">
            <MdOutlineDownloadForOffline className="h-6 w-6 cursor-pointer" />
            <div className="flex gap-2">
              <p>{getTime(songInfo.currentTime)}</p>/
              <p>{getTime(songInfo.duration)}</p>
            </div>
            <IoMdVolumeHigh className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
