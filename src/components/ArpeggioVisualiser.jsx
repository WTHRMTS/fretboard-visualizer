import React, {useState} from "react";
import Arpeggios from "./Arpeggios";
import ChromaticScale from "./ChromaticScale";
import Fretboard from "./Fretboard";
import useToggle from "./useToggle";
import exportAsImage from "../utils/exportAsImage";

function ArpeggioVisualiser(props) {
  
    const fretboardType= "Arpeggio"

    let [scaleType, updateNotes] = useState([0,0])
    let [showHideBox, setShowHideBox] = useToggle(true)

    const [arpeggioNames, arpeggioNotes] = Arpeggios

    let highlightedNotes = output_arpeggios(scaleType)

    function output_arpeggios([tonic, pattern_type]) {

        let root = ChromaticScale[tonic]

        let scale = []
        let start = root[0]
        arpeggioNotes[pattern_type].forEach((interval) => {
            let note = start + interval
            scale.push(ChromaticScale[note%12][0])
        })
       
        return [root[0], scale]
        }

        function HandleClick() {
            updateNotes(()=> [...scaleType])
        }
        
        function handleChange(event) {
            // This looks confusing but it just allows the use of one function for both select menus: Key and Arpeggio Type.
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
                Arpeggio Visualizer
            </h2>
            <div className="input-area">
                <select className="select-menu-item" onChange={handleChange} name="First">
                    {ChromaticScale.map((scale, index) => (
                        <option
                        key={index}
                        className="select-option-root"
                        value={scale[0]}>{scale[1]}</option>
                     ))}
                </select>
                <select className="select-menu-item" onChange={handleChange} name="Second">
                    {arpeggioNames.map((arpeggio, index) => (
                        <option
                        key={index}
                        className="select-option-arpeggio"
                        value={index}>{arpeggio}</option>
                     ))}
                </select>
                
                <button className="submit-button" onClick={HandleClick}
                >Submit</button>
            </div>
            <div className="fretboard-box">
                <label id="fretboard-box-label" htmlFor="fretboard-box">Hide Fretboard Box?</label>
                <input id="fretboard-box" type="checkbox" value="Test" onClick={setShowHideBox}/>
            </div>
            <h3 className="scale-arpeggio-type">{ChromaticScale[scaleType[0]][1]} {arpeggioNames[scaleType[1]]}</h3>
            <Fretboard 
                numberOfStrings={props.numberOfStrings} 
                highlightedNotes={highlightedNotes} 
                dropTuned={props.dropTuned} 
                detune={props.detune} 
                origin={"ArpeggioVisualiser"} 
                showHideBox={showHideBox} 
                fretboardType="Arpeggio"
            />
            <div className="SaveAsImage">
                <button className="SaveButton" onClick={() => exportAsImage(document.getElementById(fretboardType), "Arpeggio")}>
                        Save as Image
                </button>
            </div>
           
        </div>
        
    )

}

export default ArpeggioVisualiser;