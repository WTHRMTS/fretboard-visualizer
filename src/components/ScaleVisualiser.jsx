import React, {useState} from "react";
import Fretboard from "./Fretboard";
import useToggle from "./useToggle";

function ScaleVisualiser(props) {
    const flat = "\u266D"
    const sharp = "\u266F"
    const natural = "\u266E"
    const ChromaticScale = [[0, 'C'], [1, 'C'+sharp + '/D'+flat], [2, 'D'], [3, 'D'+sharp+'/E'+flat], [4, 'E'], [5, 'F'], [6, 'F'+ sharp + '/G'+flat], [7, 'G'] ,
    [8, 'G'+ sharp + '/A' + flat], [9, 'A'], [10, 'A' + sharp + '/B'+flat], [11, 'B']];

    let [scaleType, updateNotes] = useState([0,0])
    let [showHideBox, setShowHideBox] = useToggle(true)
    
    const Scales = ['Major/Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Minor/Aeolian', 'Locrian', 'Pentatonic Major', 'Pentatonic Minor', 'Blues Scale',
    'Harmonic Minor', 'Locrian '+ natural + '6', 'Ionian '+ sharp + '5' , 'Dorian ' + sharp + '11', 'Phrygian Dominant', 'Lydian '+ sharp + '2', 'Super Locrian '+ flat + flat + '7'
    ,'Harmonic Major', 'Dorian '+flat+'5', 'Altered Dominant '+natural+'5', 'Melodic Minor '+sharp+'4', 'Mixolydian '+flat+'2', 'Lydian Augmented '+sharp+'2', 'Locrian '+flat+flat+'7'
    ,'Melodic Minor (Ascending)', 'Dorian '+ flat + '2', 'Lydian '+ sharp + '5', 'Lydian Dominant', 'Mixolydian ' + flat + '6', 'Aeolian '+ flat + '5', 'Altered Scale', 'Whole Tone Scale', 'Hirajoshi Scale',
    'Iwato Scale', 'Arabic Scale', 'Kamavardhani Raga']
    let highlightedNotes = output_scales(scaleType)

    function output_scales([tonic, pattern_type]) {

        let root = ChromaticScale[tonic]
       
        const scales = [[2, 4, 5, 7, 9, 11], [2, 3, 5, 7, 9, 10], [1, 3, 5, 7, 8, 10], [2, 4, 6, 7, 9, 11], 
        [2, 4, 5, 7, 9, 10], [2, 3, 5, 7, 8, 10], [1, 3, 5, 6, 8, 10], [2, 4, 7, 9], [3, 5, 7, 10], [3, 5, 6, 7, 10], [2, 3, 5, 7, 8, 11], 
        [1, 3, 5, 6, 9, 10], [2, 4, 5, 8, 9, 11], [2, 3, 6, 7, 9, 10], [1, 4, 5, 7, 8, 10], [3, 4, 6, 7, 9, 11], [1, 3, 4, 6, 8, 9], 
        [2, 4, 5, 7, 8, 11], [2, 3, 5, 6, 9, 10], [1, 3, 4, 7, 8, 10], [2, 3, 6, 7, 9, 11], [1, 4, 5, 7, 9, 10], [3, 4, 6, 8, 9, 11], [1, 3, 5, 6, 8, 9],
        [2, 3, 5, 7, 9, 11], [1, 3, 5, 7, 9, 10, 12], [2, 4, 6, 8, 9, 11, 12], [2, 4, 6, 7, 9, 10], [2, 4, 5, 7, 8, 10], [2, 3, 5, 6, 8, 10], 
        8[1, 3, 4, 6, 8, 10],[2, 4, 6, 8, 10], [2, 3, 7, 8], [1, 5, 6, 10], [1, 4, 5, 7, 8, 11], [1, 4, 6, 7, 8, 11]]
        
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
            // This looks confusing but it just allows the use of one function for both select menus: Key and Scale Type.
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
        <div className="visualiser">
            <h2>
                Scale Visualizer
            </h2>
            <div className="input-area">
                <select id="category-selected" className="select-menu-item" onChange={handleChange} name="First">
                    {ChromaticScale.map((scale, index) => ( 
                        <option 
                        key={index}
                        className="select-option-root"
                        value={scale[0]}>{scale[1]}
                        </option> 
                     ))}
                </select>
                <select id="category-selected" className="select-menu-item" onChange={handleChange} name="Second">
                    {Scales.map((scale, index) => ( 
                        <option
                        key={index}
                        className="select-option-scale"
                        value={index}>{scale}</option>
                     ))}
                </select>
                <button className="submit-button" onClick={HandleClick}>Submit</button>
            </div>
            <div className="fretboard-box">
                <label id="fretboard-box-label" htmlFor="fretboard-box">Hide Fretboard Box?</label>
                <input id="fretboard-box" type="checkbox" value="Test" onClick={setShowHideBox}/>
            </div>
                <h3 className="scale-arpeggio-type">{ChromaticScale[scaleType[0]][1]} {Scales[scaleType[1]]}</h3>
            <Fretboard numberOfStrings={props.numberOfStrings} highlightedNotes={highlightedNotes} dropTuned={props.dropTuned} detune={props.detune} origin={"ScaleVisualiser"} showHideBox={showHideBox}/>
        </div>
    )

}

export default ScaleVisualiser;