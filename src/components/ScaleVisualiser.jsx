import React, {useState, useEffect} from "react";
import Fretboard from "./Fretboard";

function ScaleVisualiser() {
    const flat = "\u266D"
    const sharp = "\u266F"
    const natural = "\u266E"
    const ChromaticScale = [[0, 'C'], [1, 'C'+sharp + '/D'+flat], [2, 'D'], [3, 'D'+sharp+'/E'+flat], [4, 'E'], [5, 'F'], [6, 'F'+ sharp + '/G'+flat], [7, 'G'] ,
    [8, 'G'+ sharp + '/A' + flat], [9, 'A'], [10, 'A' + sharp + '/B'+flat], [11, 'B']];

    let [scaleType, updateNotes] = useState([0,0])
    
    const Scales = ['Major/Ionian', 'Dorian', 'Phyrgian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian', 
    'Harmonic Minor', 'Melodic Minor (Ascending)', 'Pentatonic Major', 'Pentatonic Minor', 'Blues Scale']

    let highlightedNotes = output_scales(scaleType)

    function output_scales([tonic, pattern_type]) {

        // Scales:
        // 0: Ionian - 1: Dorian - 2: Phrygian - 3: Lydian - 4: Mixolydian - 5: Aeolian - 6: Locrian - 7: Harmonic Minor
        // 8: Asc. Melodic Minor - 9: Pentatonic Major - 10: Pentatonic Minor - 11: Blues Scale 

        let root = ChromaticScale[tonic]
       
        const scales = [[2, 4, 5, 7, 9, 11], [2, 3, 5, 7, 9, 10, 12], [1, 3, 5, 7, 8, 10, 12], [2, 4, 6, 7, 9, 11, 12], 
        [2, 4, 5, 7, 9, 10, 12], [2, 3, 5, 7, 8, 10, 12], [1, 3, 5, 6, 8, 10, 12], [2, 3, 5, 7, 8, 11, 12], 
        [2, 3, 5, 7, 9, 11, 12], [2, 4, 7, 9, 12], [3, 5, 7, 10, 12], [3, 5, 6, 7, 10, 12]]
        
        let scale = []
        let start = root[0]
        scales[pattern_type].forEach((interval) => {
            let note = start + interval
            scale.push(ChromaticScale[note%12][0])
        })
       
        return [root[0], scale]
        }

        function HandleClick() {
            updateNotes(()=> [...scaleType])
            console.log(scaleType.length)
        }
        
        function handleChange(event) {
            let index
            
            if (event.target.name == "First") {
                index = 0;
            }
            else if (event.target.name == "Second") {
                index = 1;
            }
            
            const dataValue = parseInt(event.target.value);
            scaleType[index] = dataValue;

            console.log(scaleType)
        }

    return (
        <div className="scale visualiser">
            <h2>
                Scale Visualizer
            </h2>
            <div className="input-area">
                <select onChange={handleChange} name="First">
                    {ChromaticScale.map((scale) => ( 
                        <option 
                        // selected={scale == ChromaticScale[scaleType[0]][1]? "selected" : ""}
                        value={scale[0]}>{scale[1]}
                        </option> 
                     ))}
                </select>
                <select onChange={handleChange} name="Second">
                    {Scales.map((scale, index) => ( 
                        <option 
                        // selected={scale==scaleType[1]? "selected": ""}
                        value={index}>{scale}</option>
                     ))}
                </select>
                <button onClick={HandleClick}>Submit</button>
            </div>
                <h3 className="scale-arpeggio-type">{ChromaticScale[scaleType[0]][1]} {Scales[scaleType[1]]}</h3>
            <Fretboard highlightedNotes={highlightedNotes}/>
        </div>
    )

}

export default ScaleVisualiser;