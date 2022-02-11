import React, {useState, useEffect} from "react";
import Fretboard from "./Fretboard";

function ScaleVisualiser(props) {
    const flat = "\u266D"
    const sharp = "\u266F"
    const natural = "\u266E"
    // console.log("props.droptuned = " + props.dropTuned)
    const ChromaticScale = [[0, 'C'], [1, 'C'+sharp + '/D'+flat], [2, 'D'], [3, 'D'+sharp+'/E'+flat], [4, 'E'], [5, 'F'], [6, 'F'+ sharp + '/G'+flat], [7, 'G'] ,
    [8, 'G'+ sharp + '/A' + flat], [9, 'A'], [10, 'A' + sharp + '/B'+flat], [11, 'B']];

    let [scaleType, updateNotes] = useState([0,0])
    
    const Scales = ['Major/Ionian', 'Dorian', 'Phyrgian', 'Lydian', 'Mixolydian', 'Minor/Aeolian', 'Locrian', 'Pentatonic Major', 'Pentatonic Minor', 'Blues Scale',
    'Harmonic Minor', 'Locrian '+ natural + '6', 'Ionian '+ sharp + '5' , 'Dorian ' + sharp + '11', 'Phrygian Dominant', 'Lydian '+ sharp + '2', 'Super Locrian '+ flat + flat + '7'
    ,'Melodic Minor (Ascending)', 'Dorian '+ flat + '2', 'Lydian '+ sharp + '5', 'Lydian Dominant', 'Mixolydian ' + flat + '6', 'Aeolian '+ flat + '5', 'Altered Scale']

    let highlightedNotes = output_scales(scaleType)

    function output_scales([tonic, pattern_type]) {

        let root = ChromaticScale[tonic]
       
        const scales = [[2, 4, 5, 7, 9, 11], [2, 3, 5, 7, 9, 10], [1, 3, 5, 7, 8, 10], [2, 4, 6, 7, 9, 11], 
        [2, 4, 5, 7, 9, 10], [2, 3, 5, 7, 8, 10], [1, 3, 5, 6, 8, 10], [2, 4, 7, 9], [3, 5, 7, 10], [3, 5, 6, 7, 10], [2, 3, 5, 7, 8, 11], 
        [1, 3, 5, 6, 9, 10], [2, 4, 5, 8, 9, 11], [2, 3, 6, 7, 9, 10], [1, 4, 5, 7, 8, 10], [3, 4, 6, 7, 9, 11], [1, 3, 4, 6, 8, 9], [2, 3, 5, 7, 9, 11],
        [1, 3, 5, 7, 9, 10, 12], [2, 4, 6, 8, 9, 11, 12], [2, 4, 6, 7, 9, 10], [2, 4, 5, 7, 8, 10], [2, 3, 5, 6, 8, 10], [1, 3, 4, 6, 8, 10]]
         // Major scale for reference when adding new scales: [2, 4, 5, 7, 9, 11]
        
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
        }

    return (
        <div className="scale visualiser">
            <h2>
                Scale Visualizer
            </h2>
            <div className="input-area">
                <select className="select-menu" onChange={handleChange} name="First">
                    {ChromaticScale.map((scale) => ( 
                        <option 
                        className="select-option-root"
                        value={scale[0]}>{scale[1]}
                        </option> 
                     ))}
                </select>
                <select className="select-menu" onChange={handleChange} name="Second">
                    {Scales.map((scale, index) => ( 
                        <option
                        className="select-option-scale"
                        value={index}>{scale}</option>
                     ))}
                </select>
                <button className="submit-button" onClick={HandleClick}>Submit</button>
            </div>
                <h3 className="scale-arpeggio-type">{ChromaticScale[scaleType[0]][1]} {Scales[scaleType[1]]}</h3>
            <Fretboard numberOfStrings={props.numberOfStrings} highlightedNotes={highlightedNotes} dropTuned={props.dropTuned}/>
        </div>
    )

}

export default ScaleVisualiser;