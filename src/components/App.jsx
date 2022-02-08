import React, {useState, useEffect} from "react";
import Fretboard from "./Fretboard";
import InputArea from "./InputArea";
import SelectionMenu from "./SelectionMenu";

function App() {
    const flat = "\u266D"
    const sharp = "\u266F"
    const natural = "\u266E"
    const ChromaticScale = [[0, 'C'], [1, 'C'+sharp + '/D'+flat], [2, 'D'], [3, 'D'+sharp+'/E'+flat], [4, 'E'], [5, 'F'], [6, 'F'+ sharp + '/G'+flat], [7, 'G'] ,
    [8, 'G'+ sharp + '/A' + flat], [9, 'A'], [10, 'A' + sharp + '/B'+flat], [11, 'B']];
    let arr = [0,0,0];
    const [scaleType, updateNotes] = useState([0 + arr[0], 0 + arr[1], 0 + arr[2]])
    
    const Scales = ['Major/Ionian', 'Dorian', 'Phyrgian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian', 
    'Harmonic Minor', 'Melodic Minor (Ascending)', 'Pentatonic Major', 'Pentatonic Minor', 'Blues Scale']

    const Arpeggios = ['Major', 'Minor', 'Major 7th', 'Minor 7th', 'Dominant 7th', 'Half Dimishied 7th', 'Diminished 7th']

    let highlightedNotes = output_scales_arpeggios(scaleType)

    function output_scales_arpeggios([category, tonic, pattern_type]) {
        
        // scales_arpeggios array structure = [[Scales],[Arpeggios]]
        // So first index selects scale or arpeggio. Second selects scale or arpeggio type (i.e. Harmonic Minor or Diminished 7th etc.)

        // Scales:
        // 0: Ionian - 1: Dorian - 2: Phrygian - 3: Lydian - 4: Mixolydian - 5: Aeolian - 6: Locrian - 7: Harmonic Minor
        // 8: Asc. Melodic Minor - 9: Pentatonic Major - 10: Pentatonic Minor - 11: Blues Scale 

        // Arpeggios
        // 0: Major - 1: Minor - 2: Major 7th - 3: Minor 7th - 4: Dominant 7th - 5: Half Diminished 7th - 6: Diminished 7th

        let root = ChromaticScale[tonic]
       
        const scales_arpeggios = [[[2, 4, 5, 7, 9, 11], [2, 3, 5, 7, 9, 10, 12], [1, 3, 5, 7, 8, 10, 12], [2, 4, 6, 7, 9, 11, 12], 
        [2, 4, 5, 7, 9, 10, 12], [2, 3, 5, 7, 8, 10, 12], [1, 3, 5, 6, 8, 10, 12], [2, 3, 5, 7, 8, 11, 12], 
        [2, 3, 5, 7, 9, 11, 12], [2, 4, 7, 9, 12], [3, 5, 7, 10, 12], [3, 5, 6, 7, 10, 12]], 
        
        [[4, 7], [3, 7], [4,7,11], [3, 7, 10], [4, 7, 10], [3, 6, 10], [3, 6, 9]]]

        let scale = []
        let start = root[0]
        scales_arpeggios[category][pattern_type].forEach((interval) => {
            let note = start + interval
            scale.push(ChromaticScale[note%12][0])
        })
        console.log("Function output_scales_arpeggios called!")
       
        return [root[0], scale]
        }

        function HandleClick() {
            updateNotes((scaleType) => scaleType = arr)
            console.log(arr)
        }
        

        function handleChange(event) {
            let index
            // event.target.name == "First"? index = 0: event.target.name == "Second"? index = 1 : index = 2;
            // if (event.target.name == "First") {
            //     index = 0;
            // } else 
            if (event.target.name == "Second") {
                index = 1;
            }
            else if (event.target.name == "Third") {
                index = 2;
            }
            else if (event.target.name == "Fourth") {
                arr[0] = 1;
                index = 1;
            }
            else if (event.target.name = "Fifth") {
                arr[0] = 1;
                index = 2;
            }
            const dataValue = parseInt(event.target.value);
            arr[index] = dataValue;
            console.log(arr)
                // return arr
        }

    return (
        <div>
            
            <h1>
                Fretboard Visualizer
            </h1>
            <div><h3>Choose a Scale</h3></div>
            <div className="input-area">
                <select onChange={handleChange} name="Second">
                    <option value="" selected disabled hidden>Root Note</option>
                    {ChromaticScale.map((scale) => (
                        <option 
                        value={scale[0]}>{scale[1]}</option>
                     ))}
                </select>
                <select onChange={handleChange} name="Third">
                    <option value="" selected disabled hidden>Scale Type</option>
                    {Scales.map((scale, index) => (
                        <option 
                        value={index}>{scale}</option>
                     ))}
                </select>
                
                <button onClick={HandleClick}
                >Submit</button>
            </div>
            <div><h3>Choose an Arpeggio</h3></div>
            <div className="input-area">
                <select onChange={handleChange} name="Fourth">
                    <option value="" selected disabled hidden>Root Note</option>
                    {ChromaticScale.map((scale) => (
                        <option 
                        value={scale[0]}>{scale[1]}</option>
                     ))}
                </select>
                <select onChange={handleChange} name="Fifth">
                    <option value="" selected disabled hidden>Arpeggio Type</option>
                    {Arpeggios.map((arpeggio, index) => (
                        <option 
                        value={index}>{arpeggio}</option>
                     ))}
                </select>
                
                <button onClick={HandleClick}
                >Submit</button>
            </div>
            <SelectionMenu selections={ChromaticScale}/>
            <Fretboard highlightedNotes={highlightedNotes}/>
        </div>
    )

}

export default App;