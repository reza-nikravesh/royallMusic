import React from "react";
import LibrarySong from "./Library-song";

export default function Library({ songs }) {
  return (
    <div className="library">
      {songs.map((item) => {
        return <LibrarySong name={item.name} cover={item.cover} artist={item.artist}/>;
      })}
    </div>
  );
}
