import React from "react";
import style from "./playerStyle.module.css";

function Player({
  thumbnailImg = "https://i.ytimg.com/vi/MKAjG85zfaQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCm8rtzEqLY0s50iKtv80v1VvtTRg",
  artistImg = "https://yt3.ggpht.com/a-/AAuE7mBxoduqQ95cSiBqrPbOL64y6QPK3UYZOCSQRw=s288-mo-c-c0xffffffff-rj-k-no",
  songTitle = "Que mas pues",
  songDurationSeconds
}) {
  return (
    <div className="playerDiv">
      <img className={style.thumbnailImg} src={thumbnailImg} alt="Song" />

      {/* Container for buttons, slider and song title */}
      <div className={style.controlDiv}>
        {/* Container for play, pause, backward and forward buttons */}
        <div className={style.buttonsDiv}>
          <button className={style.playerButton}>
            <i className="fas fa-backward" />
          </button>

          <button className={style.playerButton}>
            <i className="fas fa-play" />
          </button>

          <button className={style.playerButton}>
            <i className="fas fa-forward" />
          </button>
        </div>

        {/* Slider */}
        <div className={style.sliderDiv}>
          <div className={style.sliderBackground}>
            <div className={style.sliderForeground} />
          </div>
          <span>00:00</span>
          <span>00:00</span>
        </div>

        {/* Song title */}
        <span className={style.title}>{songTitle}</span>

        {/* Artist image */}
        <div className={style.artistImgDiv}>
          <img className={style.artistImg} src={artistImg} alt="Artist" />
        </div>
      </div>
    </div>
  );
}

export default Player;
