import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library__songs">
        {songs.map((song) => (
          <LibrarySong song={song} key={song.id} />
        ))}
      </div>
    </div>
  );
};
export default Library;