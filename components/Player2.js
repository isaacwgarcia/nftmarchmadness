import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";

const songs = [
  {
    name: "Welcome to black paradise",
    singer: "My Chemical Romance",
    cover: "",
    musicSrc:
      "https://gateway.pinata.cloud/ipfs/QmP5QHLcYtpVEesZw4GfXj6oKfrUTkoJ3CnzbzYvpjNueP",
  },
  {
    name: "God's Gift",
    singer: "Sean Bruce",
    cover: "",
    musicSrc:
      "https://gateway.pinata.cloud/ipfs/QmTGi3yvvnkKmsk3trNkvyeh6qTdwnn1znEvUnnuLX6Wdw",
  },
  /*   {
    name: "Tap In",
    singer: "Act Natural ",
    cover: "",
    musicSrc:
      "https://gateway.pinata.cloud/ipfs/QmYLP6RcVJaHSGrtxXuC7XiBSjfBJwaZBt25ai84vTEjit",
  }, */
  {
    name: "Lose Yourself",
    singer: "Eminem",
    cover: "",
    musicSrc:
      "https://gateway.pinata.cloud/ipfs/QmRxMYnstH7bsoiZH3MNposJ9NRveP5yZqa4J8e7hUDVHx",
  },
  {
    name: "I Wanted You",
    singer: "Roe Kapara",
    cover: "",
    musicSrc:
      "https://gateway.pinata.cloud/ipfs/QmTPmwUudGt7dgfp3mPZ63VJdADBunGiYDH8aLeeNZTi1h",
  },
  {
    name: "From the Bottom",
    singer: "Sean Bruce",
    cover: "",
    musicSrc:
      "https://gateway.pinata.cloud/ipfs/QmTimhk81yDCtFAPet37dY4TFD1SKcWRhV9RctneUQaCMp",
  },
];

const Player2 = () => (
  <div>
    <ReactJkMusicPlayer
      playIndex={0}
      audioLists={songs}
      autoPlay={false}
      defaultPosition={{
        right: "20px",
        bottom: "20px",
      }}
      mode="full"
    />
  </div>
);
export default Player2;
