import React from "react";
export default function Song({ currentSong, setCurrentSong }) {
  return (
    <div className="song-info">
      <img src={currentSong.cover} />
      <h1>{currentSong.name}</h1>
      <h3>{currentSong.artist}</h3>
    </div>
  );
}
