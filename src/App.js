import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.css";
import data from "./util";
import React, { useState } from "react";
import Library from "./components/Library";
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-black flex flex-col gap-12">
      <Navbar />
      <div className="flex flex-col justify-between gap-[15rem]">
        <Song currentSong={currentSong} songs={songs} />
        <Player
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentSong={currentSong}
        />
      </div>
    </div>
  );
}

export default App;
