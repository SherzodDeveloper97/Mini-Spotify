import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  // Ref
  const audioRef = useRef(null);
  // Event Handlers
  const playSongHandler = () => {
    // console.log(audioRef.current);
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const timeUpdateHandler = (e) => {
    // console.log(e.target.currentTime);
    // console.log(e.target.duration);
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo,
      currenTime: current,
      duration,
    });
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    // console.log(e.target.value);
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...setSongInfo,
      currentTime: e.target.value,
    });
  };

  // State
  const [songInfo, setSongInfo] = useState({
    currenTime: 0,
    duration: 0,
  });

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currenTime)}</p>
        <input
          type="range"
          min="0"
          max={songInfo.duration}
          value={songInfo.currenTime}
          onChange={dragHandler}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="player-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={timeUpdateHandler}
      ></audio>
    </div>
  );
};
export default Player;
