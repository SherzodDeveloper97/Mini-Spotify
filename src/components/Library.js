import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) => {
  const removeLibraryList = () => {
    setLibraryStatus(false);
  };

  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <div className="title__content">
        <h2>Library</h2>
        <i className="fa-solid fa-xmark close" onClick={removeLibraryList}></i>
      </div>
      <div className="library__songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            key={song.id}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            songs={songs}
            id={song.id}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
