import React, { useState } from "react";
import { UniversePage } from "./components/UniversePage";
import { Header } from "./components/Header";
import bakcgroundSound from "./assets/mp3/universo/backgroundSound.mp3";

const audio = new Audio(bakcgroundSound);

export const UniverseApp = () => {
  const [stopMusic, setStopMusic] = useState(false);

  const PlaySound = () => {
    if (!stopMusic) {
      audio.play();
      setStopMusic(!stopMusic);
    } else if (stopMusic) {
      audio.pause();
      setStopMusic(!stopMusic);
    }
  };

  return (
    <div className="global">
      <Header PlaySound={PlaySound} setStopMusic={setStopMusic} />
      <UniversePage PlaySound={PlaySound} />
    </div>
  );
};
