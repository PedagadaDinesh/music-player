import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.css";
import data from "./util";
import React, { useState } from "react";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className=" bg-black flex flex-col gap-12 h-screen">
      <Navbar />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
