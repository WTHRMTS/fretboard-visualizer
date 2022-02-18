import React, { useEffect, useState } from "react";
import ScaleVisualiser from "./ScaleVisualiser";
import ArpeggioVisualiser from "./ArpeggioVisualiser";
import useToggle from "./useToggle";

function App() {
    const [numberStrings, setNumberStrings] = useState([0])
    const [detune, setDetune] = useState([0])
    const [isOn, toggleIsOn] = useToggle();
    const [showHide, toggleShowHide] = useToggle();

    function detuneSetter(event) {
        let deTuneSteps = []
        // console.log("event name= " + event.target.name);
        // let numberOfStrings = parseInt(event.target.value)
        switch (event.target.value) {
            case "0 Semitones":
                deTuneSteps.push(0);
                break;
            case "1 Semitone":
                deTuneSteps.push(1);
                break;
            case "2 Semitones":
                deTuneSteps.push(2);
                break;
            case "3 Semitones":
                deTuneSteps.push(3);
                break;
            case "4 Semitones":
                deTuneSteps.push(4);
                break;
            case "5 Semitones":
                deTuneSteps.push(5);
                break;
            case "6 Semitones":
                deTuneSteps.push(6);
                break;
            case "7 Semitones":
                deTuneSteps.push(7);
                break;
            case "8 Semitones":
                deTuneSteps.push(8);
                break;
        }        
        setDetune(deTuneSteps);
    }

    function handleChange(event) {
        let numStrings = []
        // console.log("event name= " + event.target.name);
        // let numberOfStrings = parseInt(event.target.value)
        if (event.target.value == "6 String Guitar") {
            numStrings.push(0)
        } else if (event.target.value == "7 String Guitar") {
            numStrings.push(1)
        } else if (event.target.value == "8 String Guitar") {
            numStrings.push(2);
        }
        // console.log(numStrings)
        setNumberStrings(() => [...[numStrings]])
        // console.log("number of strings from App.jsx = " + numberStrings);
    }

    function showAdvancedOptions() {
        var x = document.getElementById("advanced-options");
        if (x.style.display === "none") {
          x.style.display = "block";
          x.value="Hide Advanced Options"
        } else {
          x.style.display = "none";
        }
      }

    return (
        <div>
            <div className="introduction" display="none">
                <h1>Visualize Scales, Modes and Arpeggios</h1>
                {/* <p>
                If you're like me and have a bunch of books lying around which are full of scales and arpeggios but find them too cumbersome 
                to use (just keeping the right page open while you're holding a guitar is hard enough), then this site is for you.
                </p> */}
                <p>With this app you can visualize the Major, Minor and Harmonic Minor scales, as well as the modes of the Major, Harmonic Minor and Melodic Minor 
                    scales (and more) and all the common arpeggios, i.e. Major, Minor, 7th, Diminished 7th etc.,
                in any key all over the fretboard.
                </p>
                <p>
                    Hit the "Toggle Advanced Options" button to choose a 7-string or 8-string guitar fretboard and drop-tuning if required.
                </p>
                <p>
                Example usage: select the C Major Scale, and run through the C Major 7, D minor 7, E minor 7, F Major 7, G Dominant 7, A minor 7 and B Half Diminished 7 arpeggios, 
                and see that all of the notes in each arpeggio are contained in the C Major/Ionian Scale. 
                </p>
                <p> This is Diatonic Harmony, and tells you which chords you can safely use
                    together (there are others, but that is more advanced). Play around and learn!
                </p>
            </div>
            <div className="toggle-advanced-options">
            <button className="toggle-advanced-options"  onClick={toggleShowHide}>Toggle Advanced Options</button>
            </div>
            
            <div id="advanced-options" style={{display: showHide? "block" : "none"}}>
            <h2 className="how-many-strings">How Many Strings?</h2>
            <div className="string-select-area">
                <select className="string-select" onChange={handleChange}>
                    <option name="Six">
                        6 String Guitar
                    </option>
                    <option name="Seven">
                        7 String Guitar
                    </option>
                    <option name="Eight">
                        8 String Guitar
                    </option>
                </select>
            </div>
            <h2>Detune How Many Semitones?</h2>
            <div className="drop-tuning">
            <div >
                {/* <label className="detuning-label" htmlFor="detuning">Detune: </label>
                <span>&nbsp;&nbsp;</span> */}
                
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
            </div>
            <ScaleVisualiser numberOfStrings={numberStrings} dropTuned={isOn? 2 : 0} detune={detune}/>
            <ArpeggioVisualiser numberOfStrings={numberStrings} dropTuned={isOn? 2 : 0} detune={detune}/>
            <div className="footer">&copy; Jamie Booth 2022</div>

        </div>
    )

}

export default App;