import React, { useState } from "react";
// Adding sass files
import "./styles/app.scss";
// Adding components
import Song from "./components/Song";
import Player from "./components/Player";
// Adding data
import data from "./util";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[3]);

  return (
    <div>
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}
export default App;
