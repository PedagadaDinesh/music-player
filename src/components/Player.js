import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { PiShuffleSimpleBold } from "react-icons/pi";
import { IoMdRepeat } from "react-icons/io";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);
  const songPlayHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
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

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  return (
    <div className="flex flex-col justify-center items-center fixed bottom-0 w-full">
      <div className="flex flex-col w-full text-white relative">
        <input
          type="range"
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
          className="w-[100%] absolute -top-3 left-0 right-0"
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
            <PiShuffleSimpleBold className="h-6 w-6" />
            <IoPlaySkipBack className="h-6 w-6" />
            <FontAwesomeIcon
              onClick={songPlayHandler}
              className="rounded-full text-blue-600"
              icon={faPlay}
              size="2x"
            />
            <IoPlaySkipForward className="h-6 w-6" />
            <IoMdRepeat className="h-6 w-6" />
          </div>
          <div className="flex">
            <p>{getTime(songInfo.currentTime)}</p>
            <p>/{getTime(songInfo.duration)}</p>
          </div>
        </div>
        <audio
          // autoPlay
          // controls
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
          className="w-[60%]"
        ></audio>
      </div>
    </div>
  );
};

export default Player;
