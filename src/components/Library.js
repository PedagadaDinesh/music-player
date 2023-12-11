import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong }) => {
  //   console.log(songs);
  return (
    <div>
      <div className="">
        <LibrarySong songs={songs} setCurrentSong={setCurrentSong} />
      </div>
    </div>
  );
};

export default Library;
