import React from "react";

export default function LibrarySong({
  song,
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
  id,
  setIsPlaying,
  audioRef,
  isPlaying,
  setIsOpen,
  isOpen,
}) {
  function closeLibrary() {
    setIsOpen(!isOpen);
  }
  function updateData() {
    const newSong = songs.map((song) => {
      if (song.id === id) return { ...song, active: true };
      else return { ...song, active: false };
    });
    setSongs(newSong);
    setTimeout(() => {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        setIsPlaying(!isPlaying);
        audioRef.current.play();
      }
    }, 500);
  }
  function clickHandler(e) {
    const selectedSong = songs.filter((item) => item.id === id);
    setCurrentSong(selectedSong[0]);
    updateData();
    closeLibrary();
  }
  return (
    <div
      onClick={clickHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt="" />
      <div className={song.active ? "text-active" : "text"}>
        <h3 className={"name"}>{song.name}</h3>
        <h5 className="artist">{song.artist}</h5>
      </div>
    </div>
  );
}
