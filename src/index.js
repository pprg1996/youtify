import React from "react";
import ReactDOM from "react-dom";
import style from "./youtifyStyle.module.css";

import Player from "./components/player/player";
import Playlist from "./components/playlist/playlist";

function Youtify() {
  return (
    <div className={style.youtifyDiv}>
      <Player />
      <Playlist />
      {/* <Search /> */}
    </div>
  );
}

ReactDOM.render(<Youtify />, document.getElementById("root"));
