import "./Styles/App.scss";
import Player from "./Components/Player";
import Library from "./Components/Library";
import { useState } from "react";
import {data} from "./js/utill";
function App() {
  const [songs, setSongs] = useState(data());
  return (
    <div className="App">
      <Library songs={songs} setSongs={setSongs} />
      <Player songs={songs} setSongs={setSongs} />
    </div>
  );
}

export default App;
