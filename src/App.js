import "./Styles/App.scss";
import Player from "./Components/Player";
import Library from "./Components/Library";
import { useRef, useState } from "react";
import { data } from "./js/utill";
import Nav from "./Components/Nav";
function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      <Library
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isPlaying={isPlaying}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
      />
    </div>
  );
}

export default App;
