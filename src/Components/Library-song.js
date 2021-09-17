import React from "react";

export default function LibrarySong({ name, cover, artist }) {
  return (
    <div className="library-song">
      <img src={cover} alt="" />
      <div className="text">
        <h3 className="name">{name}</h3>
        <h5 className="artist">{artist}</h5>
      </div>
    </div>
  );
}
