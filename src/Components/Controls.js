import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Controls() {
  return (
    <div className="controls">
      <div className="time-control">
        <h4>startTime</h4>
        <input type="range" name="" id="" />
        <h4>endTime</h4>
      </div>
      <div className="buttons">
        <FontAwesomeIcon
          className="ic skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon className="ic play" size="2x" icon={faPlay} />
        <FontAwesomeIcon
          className="ic skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}
