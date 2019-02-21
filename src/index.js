import React from "react";
import ReactDOM from "react-dom";

import Player from "./components/player/player";

function Youtify() {
  return (
    <div>
      <Player />
      {/* <Playlist /> */}
      {/* <Search /> */}
    </div>
  );
}

ReactDOM.render(<Youtify />, document.getElementById("root"));
