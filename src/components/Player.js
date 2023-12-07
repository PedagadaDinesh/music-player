import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

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
    <div className="flex flex-col justify-center items-center gap-8">
      <div className=" flex p-4 gap-5 w-full justify-center items-center text-white">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
          className="md:w-[40%] w-[60%] h-[10%]"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="flex gap-20 cursor-pointer text-white border-2 border-red-600 px-4 py-3 rounded-full justify-center items-center">
        <IoPlaySkipBack className="h-6 w-6" />
        <FontAwesomeIcon
          onClick={songPlayHandler}
          className="play"
          icon={faPlay}
          size="2x"
        />
        <IoPlaySkipForward className="h-6 w-6" />
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
  );
};

export default Player;
