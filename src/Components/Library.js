import React from "react";
import LibrarySong from "./Library-song";

export default function Library({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  setIsPlaying,
}) {
  return (
    <div className="library">
      {songs.map((item) => {
        return (
          <LibrarySong
            setIsPlaying={setIsPlaying}
            key={item.id}
            id={item.id}
            active={item.active ? true : false}
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
