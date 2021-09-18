import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { secondToMinutes } from "../js/utill";
export default function Controls({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
}) {
  //useRef

  //state
  const [time, setTime] = useState({ currentTime: null, duration: null });

  function clickHandler() {
    if (isPlaying) {
      setIsPlaying(!isPlaying);
      audioRef.current.pause();
    } else {
      setIsPlaying(!isPlaying);
      audioRef.current.play();
    }
  }
  function timeUpdateHandler(e) {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setTime({
      currentTime: currentTime,
      duration: duration,
    });
    if (currentTime === duration) setIsPlaying(false);
  }
  function changeHandler(e) {
    const value = e.target.value;
    setTime({ ...time, currentTime: value });
    audioRef.current.currentTime = value;
  }
  return (
    <div className="controls">
      <div className="time-control">
        <h4>{secondToMinutes(time.currentTime)}</h4>
        <input
          onChange={changeHandler}
          min={0}
          // max={String(time.duration)}
          max={time.duration || 0}
          value={time.currentTime === null ? 0 : time.currentTime}
          type="range"
          name=""
          id=""
        />
        <h4>{secondToMinutes(time.duration)}</h4>
      </div>
      <div className="buttons">
        <FontAwesomeIcon
          className="ic skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={clickHandler}
          className="ic play"
          size="2x"
          icon={isPlaying === true ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="ic skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        src={currentSong.audio}
        ref={audioRef}
      />
    </div>
  );
}
