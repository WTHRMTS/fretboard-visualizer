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

    function stringSetter() {
        setNumberStrings(() => [...[document.getElementById("string-select").selectedIndex]])
    }

    function detuneSetter() {
        setDetune([document.getElementById("detuning").selectedIndex]);
    }

    return (
        <div>
            <Introduction />
            <div className="toggle-advanced-options">
                <button className="toggle-advanced-options"  onClick={toggleShowHide}>Toggle Advanced Options</button>
            </div>
            
            {/* <div id="advanced-options" style={{display: showHide? "block" : "none"}}>
                <h2 className="how-many-strings">How Many Strings?</h2>
                <div className="string-select-area">
                    <select id="string-select" className="string-select" onChange={stringSetter}>
                        <option>
                            6 String Guitar
                        </option>
                        <option>
                            7 String Guitar
                        </option>
                        <option>
                            8 String Guitar
                        </option>
                    </select>
                </div>
                <h2>Detune How Many Semitones?</h2>
                <div className="drop-tuning">
                <div >
                    <select id="detuning" className="select-menu" onChange={detuneSetter}>
                        <option>
                            0 Semitones
                        </option>
                        <option>
                            1 Semitone
                        </option>
                        <option>
                            2 Semitones
                        </option>
                        <option>
                            3 Semitones
                        </option>
                        <option>
                            4 Semitones
                        </option>
                        <option>
                            5 Semitones
                        </option>
                        <option>
                            6 Semitones
                        </option>
                        <option>
                            7 Semitones
                        </option>
                        <option>
                            8 Semitones
                        </option>
                    </select>
                </div>
                <div className="droptuning-area">
                    <label id="drop-tuning-label" htmlFor="drop-tuning">Drop Tuned?</label><span>&nbsp;&nbsp;</span>
                    <input id="drop-tuning" type="checkbox" value="Test" onClick={toggleIsOn} />
                </div>
                </div>
            </div> */}
            <AdvancedOptions showHide={showHide} numberOfStrings={numberStrings} setNumberStrings={setNumberStrings} detune={detune} setDetune={setDetune} dropTuned={isOn} setDropTuned={toggleIsOn}/>
            <ScaleVisualiser numberOfStrings={numberStrings} dropTuned={isOn? 2 : 0} detune={detune}/>
            <ArpeggioVisualiser numberOfStrings={numberStrings} dropTuned={isOn? 2 : 0} detune={detune}/>
            <div className="footer">&copy; Jamie Booth 2022</div>
        </div>
    )

}

export default App;