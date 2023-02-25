import React, { useRef, useState } from "react";
// Adding sass files
import "./styles/app.scss";
// Adding components
import Song from "./components/Song";
import Player from "./components/Player";
// Adding data
import data from "./util";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  // Ref
  const audioRef = useRef(null);
  // State
  const [songInfo, setSongInfo] = useState({
    currenTime: 0,
    duration: 0,
  });
  const timeUpdateHandler = (e) => {
    // console.log(e.target.currentTime);
    // console.log(e.target.duration);
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo,
      currenTime: current,
      duration,
    });
  };

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        timeUpdateHandler={timeUpdateHandler}
        setSongInfo={setSongInfo}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}
export default App;
