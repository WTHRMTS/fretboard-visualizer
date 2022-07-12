import React, {useState} from "react";
import {Scales} from "./ScalesAndArpeggios";
import {ChromaticScale} from "./ScalesAndArpeggios";
import Fretboard from "./Fretboard";
import useToggle from "./useToggle";
import exportAsImage from "../utils/exportAsImage";

function ScaleVisualiser(props) {
    
    const fretboardType = "Scale"

    let [scaleType, updateNotes] = useState([0,0])
    let [showHideBox, setShowHideBox] = useToggle(true)
    
    const [scaleNames, scaleNotes] = Scales

    let highlightedNotes = output_scales(scaleType)

    function output_scales([tonic, pattern_type]) {

        let root = ChromaticScale[tonic]
       
        let scale = []
        let start = root[0]
        scaleNotes[pattern_type].forEach((interval) => {
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
            
            if (event.target.name === "First") {
                index = 0;
            }
            else if (event.target.name === "Second") {
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
                    {scaleNames.map((scale, index) => ( 
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
                <h3 className="scale-arpeggio-type">{ChromaticScale[scaleType[0]][1]} {scaleNames[scaleType[1]]}</h3>
            <Fretboard 
                numberOfStrings={props.numberOfStrings} 
                highlightedNotes={highlightedNotes} 
                dropTuned={props.dropTuned} 
                detune={props.detune} 
                origin={"ScaleVisualiser"} 
                showHideBox={showHideBox}
                fretboardType="Scale"
                />
            <div className="SaveAsImage">
                <button className="SaveButton" onClick={() => exportAsImage(document.getElementById(fretboardType), "Scale")}>
                        Save as Image
                </button>
            </div>
        </div>
    )

}

export default ScaleVisualiser;