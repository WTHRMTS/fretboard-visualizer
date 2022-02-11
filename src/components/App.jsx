import React, { useState } from "react";
import ScaleVisualiser from "./ScaleVisualiser";
import ArpeggioVisualiser from "./ArpeggioVisualiser";
import useToggle from "./useToggle";

function App() {
    const [numberStrings, setNumberStrings] = useState([0])
    const [detune, setDetune] = useState([0])
    const [isOn, toggleIsOn] = useToggle();

    function detuneSetter(event) {
        let deTuneSteps = []
        // console.log("event name= " + event.target.name);
        // let numberOfStrings = parseInt(event.target.value)
        if (event.target.value == "0 steps") {
            deTuneSteps.push(0)
        } else if (event.target.value == "half step") {
            deTuneSteps.push(1)
        } else if (event.target.value == "1 step") {
            deTuneSteps.push(2);
        } else if (event.target.value == "2 steps") {
            deTuneSteps.push(4);
        } else if (event.target.value == "3 steps") {
            deTuneSteps.push(6);
        }
        console.log(deTuneSteps);
        setDetune([deTuneSteps]);
        console.log("number of steps detuned = " + detune);
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

    return (
        <div>
            <div className="introduction">
                <h1>Visualize Scales, Modes and Arpeggios</h1>
                {/* <p>
                If you're like me and have a bunch of books lying around which are full of scales and arpeggios but find them too cumbersome 
                to use (just keeping the right page open while you're holding a guitar is hard enough), then this site is for you.
                </p> */}
                <p>On this page you can visualize the Major, Minor, Harmonic Minor, the modes of the Major, Harmonic Minor and Melodic Minor 
                    scales and all the common arpeggios (Major, Minor, 7th, Diminished 7th etc.)
                in any key, for either 6-, 7- or 8-string guitars.
                </p>
                <p>
                    
                </p>
                {/* <p>
                For example: select the C Major Scale, and run through the C Major 7, D minor 7, E minor 7, F Major 7, G Dominant 7, A minor 7 and B Half Diminished 7 arpeggios, 
                and see that all of the notes in each arpeggio are contained in the C Major/Ionian Scale. 
                </p>
                <p> This is Diatonic Harmony, and tells you which chords you can safely use
                    together (there are others, but that is more advanced). Play around and learn!
                </p> */}
            </div>
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
            <div className="drop-tuning">
            <label className="detuning-label" for="detuning">Detune: </label>

            <select id="detuning" onChange={detuneSetter}>
                    <option>
                        0 steps
                    </option>
                    <option>
                        half step
                    </option>
                    <option>
                        1 step
                    </option>
                    <option>
                        2 steps
                    </option>
                    <option>
                        3 steps
                    </option>
                </select>
                <label id="drop-tuning-label" for="drop-tuning">Drop Tuned?</label><span>   </span>
                <input id="drop-tuning" type="checkbox" value="Test" onClick={toggleIsOn} />
             
            </div>
            <ScaleVisualiser numberOfStrings={numberStrings} dropTuned={isOn? 2 : 0} detune={detune}/>
            <ArpeggioVisualiser numberOfStrings={numberStrings} dropTuned={isOn? 2 : 0} detune={detune}/>
            <div className="footer">&copy; Jamie Booth 2022</div>

        </div>
    )

}

export default App;