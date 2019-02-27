import React, { useState } from "react";

// import playlistStyle from "./playlistStyle.module.css";
import songStyle from "./songStyle.module.css";

function Playlist() {
  const [songs, updateSongs] = useState([
    {
      title: "Sech - ¡Que Más Pues! - Justin Quiles - Audio Oficial",
      thumbnail: `https://i.ytimg.com/vi/MKAjG85zfaQ/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCm8rtzEqLY0s50iKtv80v1VvtTRg`,
      link: "https://www.youtube.com/watch?v=MKAjG85zfaQ"
    }
  ]);

  return (
    <div>
      {songs.map(({ title, thumbnail, link }) => {
        return <Song title={title} thumbnail={thumbnail} link={link} />;
      })}
    </div>
  );
}

function Song({ title, thumbnail, link }) {
  return (
    <div className={songStyle.songDiv}>
      <div className={songStyle.thumbnailImgDiv}>
        <img
          className={songStyle.thumbnailImg}
          src={thumbnail}
          alt="Thumbnail"
        />
      </div>
    </div>
  );
}

export default Playlist;
