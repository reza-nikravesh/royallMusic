import React, { useState } from "react";
import SongInfo from "./SongInfo.js";
import Controls from "./Controls.js";
import data from "../js/utill";

export default function Player({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
}) {
  return (
    <div className="player">
      <SongInfo currentSong={currentSong} />
      <Controls
        songs={songs}
        setSongs={setSongs}
        audioRef={audioRef}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}
