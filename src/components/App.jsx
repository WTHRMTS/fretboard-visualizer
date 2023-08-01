import React, { useState } from "react";
import ScaleVisualiser from "./ScaleVisualiser";
import ArpeggioVisualiser from "./ArpeggioVisualiser";
import useToggle from "./useToggle";
import Title from "./Title";
import Introduction from "./Introduction";
import AdvancedOptions from "./AdvancedOptions";
import Instructions from "./Instructions";

function App() {
  const [numberStrings, setNumberStrings] = useState([0]);
  const [detune, setDetune] = useState([0]);
  const [isOn, toggleIsOn] = useToggle();
  const [intro, introToggle] = useToggle();
  const [showHide, toggleShowHide] = useToggle();

  return (
    <div className="App">
      <Title />
      <Introduction />
      <Instructions showIntro={intro} />
      <div className="toggle-advanced-options">
        <button className="toggle-button" onClick={introToggle}>
          Toggle Instructions
        </button>
        <button className="toggle-button" onClick={toggleShowHide}>
          Toggle Advanced Options
        </button>
      </div>
      <AdvancedOptions
        showHide={showHide}
        numberOfStrings={numberStrings}
        setNumberStrings={setNumberStrings}
        detune={detune}
        setDetune={setDetune}
        dropTuned={isOn}
        setDropTuned={toggleIsOn}
      />
      <ScaleVisualiser
        numberOfStrings={numberStrings}
        dropTuned={isOn ? 2 : 0}
        detune={detune}
      />
      <ArpeggioVisualiser
        numberOfStrings={numberStrings}
        dropTuned={isOn ? 2 : 0}
        detune={detune}
      />
      <div className="footer">
        &copy; Jamie Booth {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default App;
