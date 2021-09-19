import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { secondToMinutes } from "../js/utill";
import { Range } from "./styledComponents";
export default function Controls({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songs,
  setSongs,
}) {
  //useEffect
  //state
  const [time, setTime] = useState({ currentTime: null, duration: null });

  function updateData() {
    const newSong = songs.map((song) => {
      if (song.id === currentSong.id) return { ...song, active: true };
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
  function skipTrack(direction) {
    // get currentSong index
    let currentSongIndex = songs.findIndex((song) => {
      if (song.id === currentSong.id) return song;
    });

    switch (direction) {
      case "skip-back":
        if (0 === currentSongIndex) {
          setCurrentSong(songs[songs.length - 1]);
          updateData();
        } else {
          setCurrentSong(songs[currentSongIndex - 1]);
          updateData();
        }

        break;
      case "skip-forward":
        if (songs.length - 1 === currentSongIndex) {
          setCurrentSong(songs[0]);
          updateData();
        } else {
          setCurrentSong(songs[currentSongIndex + 1]);
          updateData();
        }

        break;

      default:
        break;
    }
  }
  return (
    <div className="controls">
      <div className="time-control">
        <h4 className="currentTime">{secondToMinutes(time.currentTime)}</h4>
        {/* <input
          onChange={changeHandler}
          min={0}
          // max={String(time.duration)}
          max={time.duration || 0}
          value={time.currentTime === null ? 0 : time.currentTime}
          type="range"
          name=""
          id=""
        /> */}
        <Range
          type="range"
          onChange={changeHandler}
          min={0}
          // max={String(time.duration)}
          max={time.duration || 0}
          value={time.currentTime === null ? 0 : time.currentTime}
          startColor={currentSong.color[0]}
          endColor={currentSong.color[1]}
        />
        <h4 className="duration">{secondToMinutes(time.duration)}</h4>
      </div>
      <div className="buttons">
        <FontAwesomeIcon
          onClick={() => {
            skipTrack("skip-back");
          }}
          className="ic back"
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
          onClick={() => {
            skipTrack("skip-forward");
          }}
          className="ic forward"
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
