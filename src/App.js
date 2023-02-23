import React, { useState } from "react";
// Adding sass files
import "./styles/app.scss";
// Adding components
import Song from "./components/Song";
import Player from "./components/Player";
// Adding data
import data from "./util";
import Library from "./components/Library";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[3]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs} />
    </div>
  );
}
export default App;
