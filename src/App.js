import "./App.css";
import Song from "./Components/Song.js";
import Controls from "./Components/Controls.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div>
      <Song />
      <Controls />
      <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
      <FontAwesomeIcon className="play" size="2x" icon={faPlay} />
      <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
    </div>
  );
}

export default App;
