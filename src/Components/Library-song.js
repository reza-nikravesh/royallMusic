import React from "react";

export default function LibrarySong({
  active,
  name,
  cover,
  artist,
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
  id,
  setIsPlaying,
}) {
  function clickHandler(e) {
    for (const item of songs)
      if (item.id === id) {
        setCurrentSong(item);
        setIsPlaying(false);
      }
  }
  return (
    <div
      onClick={clickHandler}
      className={`library-song ${active ? "active" : ""}`}
    >
      <img src={cover} alt="" />
      <div className="text">
        <h3 className="name">{name}</h3>
        <h5 className="artist">{artist}</h5>
      </div>
    </div>
  );
}
