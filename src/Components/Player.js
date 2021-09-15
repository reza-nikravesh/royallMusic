import React, { useState } from "react";
import SongInfo from "./SongInfo.js";
import Controls from "./Controls.js";
import data from "../js/data";

export default function Player() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="player">
      <SongInfo currentSong={currentSong} setCurrentSong={setCurrentSong} />
      <Controls />
    </div>
  );
}
