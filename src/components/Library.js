import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs }) => {
  //   console.log(songs);
  return (
    <div>
      <div className="">
        <LibrarySong songs={songs} />
      </div>
    </div>
  );
};

export default Library;
