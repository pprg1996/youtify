import React from "react";
import style from "./playerStyle.module.css";

function Player({ thumbnailImg, artistImg, songName, songDurationSeconds }) {
  return (
    <div>
      <img className={style.thumbnailImg} src={thumbnailImg} />

      <div className={style.controlDiv}>
        <div className={style.buttonDiv}>{/* Botones */}</div>

        <div className={style.sliderDiv}>{/* Slider */}</div>

        <span className={style.title}>{songName}</span>

        <div className={style.artistImgDiv}>
          <img className={style.artistImg} src={artistImg} />
        </div>
      </div>
    </div>
  );
}

export default Player;
