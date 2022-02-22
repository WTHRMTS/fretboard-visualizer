import React, { useEffect, useState } from "react";
import ScaleVisualiser from "./ScaleVisualiser";
import ArpeggioVisualiser from "./ArpeggioVisualiser";
import useToggle from "./useToggle";
import Introduction from "./Introduction";
import AdvancedOptions from "./AdvancedOptions";

function App() {
    const [numberStrings, setNumberStrings] = useState([0])
    const [detune, setDetune] = useState([0])
    const [isOn, toggleIsOn] = useToggle();
    const [showHide, toggleShowHide] = useToggle();

    return (
        <div>
            <Introduction />
            <div className="toggle-advanced-options">
                <button className="toggle-advanced-options"  onClick={toggleShowHide}>Toggle Advanced Options</button>
            </div>
            <AdvancedOptions showHide={showHide} numberOfStrings={numberStrings} setNumberStrings={setNumberStrings} detune={detune} setDetune={setDetune} dropTuned={isOn} setDropTuned={toggleIsOn}/>
            <ScaleVisualiser numberOfStrings={numberStrings} dropTuned={isOn? 2 : 0} detune={detune}/>
            <ArpeggioVisualiser numberOfStrings={numberStrings} dropTuned={isOn? 2 : 0} detune={detune}/>
            <div className="footer">&copy; Jamie Booth 2022</div>
        </div>
    )

}

export default App;