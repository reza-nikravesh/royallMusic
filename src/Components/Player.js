import React, { useState } from "react";
import SongInfo from "./SongInfo.js";
import Controls from "./Controls.js";
import data from "../js/utill";

export default function Player({songs, setSongs}) {
  const [currentSong, setCurrentSong] = useState(songs[4]);
  return (
    <div className="player">
      <SongInfo currentSong={currentSong}/>
      <Controls currentSong={currentSong} setCurrentSong={setCurrentSong} />
    </div>
  );
}
