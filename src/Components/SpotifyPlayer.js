import React from "react";

function Player(props) {
  return (
    <div>
      <iframe
        title="spotifyPlayer"
        id="spotify"
        src={`https://open.spotify.com/embed/album/${props.currAlbum}`}
        width="350"
        height="80"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Player;
