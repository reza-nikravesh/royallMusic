import React from "react";
import LibrarySong from "./Library-song";

export default function Library({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  setIsPlaying,
  audioRef,
  isPlaying,
  isOpen,
}) {
  return (
    <div className={`library ${isOpen ? "open" : ""}`}>
      <h1 className="title">Library</h1>
      {songs.map((item) => {
        return (
          <LibrarySong
            isPlaying={isPlaying}
            audioRef={audioRef}
            setIsPlaying={setIsPlaying}
            key={item.id}
            id={item.id}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            songs={songs}
            setSongs={setSongs}
            song={item}
          />
        );
      })}
    </div>
  );
}
