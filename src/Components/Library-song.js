import React from "react";

export default function LibrarySong({
  active,
  song,
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
  id,
  setIsPlaying,
  audioRef,
  isPlaying,
}) {
  function clickHandler(e) {
    const selectedSong = songs.filter((item) => item.id === id);
    setCurrentSong(selectedSong[0]);
    setTimeout(() => {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        setIsPlaying(!isPlaying);
        audioRef.current.play();
      }
    }, 500);
  }
  return (
    <div
      onClick={clickHandler}
      className={`library-song ${active ? "active" : ""}`}
    >
      <img src={song.cover} alt="" />
      <div className="text">
        <h3 className="name">{song.name}</h3>
        <h5 className="artist">{song.artist}</h5>
      </div>
    </div>
  );
}
