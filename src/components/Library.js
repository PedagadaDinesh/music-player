import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
  //   console.log(songs);
  return (
    <div>
      <div className="">
        <LibrarySong
          songs={songs}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          isPlaying={isPlaying}
        />
      </div>
    </div>
  );
};

export default Library;
