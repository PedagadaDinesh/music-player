import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.css";
import data from "./util";
import React, { useState, useRef } from "react";
import Library from "./components/Library";
function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  return (
    <div className="bg-black flex flex-col gap-12 h-[75rem]">
      <Navbar />
      <div className="flex flex-col justify-between gap-[15rem]">
        <Song
          currentSong={currentSong}
          songs={songs}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          isPlaying={isPlaying}
        />
        <Player
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentSong={currentSong}
          setSongInfo={setSongInfo}
          songInfo={songInfo}
        />
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
}

export default App;
