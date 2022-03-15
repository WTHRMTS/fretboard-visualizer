import React, {useState} from "react";
import Fretboard from "./Fretboard";
import useToggle from "./useToggle";
import exportAsImage from "../utils/exportAsImage";

function ArpeggioVisualiser(props) {
    const flat = "\u266D"
    const sharp = "\u266F"
    const natural = "\u266E"
    const fretboardType= "Arpeggio"

    const ChromaticScale = [[0, 'C'], [1, 'C'+sharp + '/D'+flat], [2, 'D'], [3, 'D'+sharp+'/E'+flat], [4, 'E'], [5, 'F'], [6, 'F'+ sharp + '/G'+flat], [7, 'G'] ,
    [8, 'G'+ sharp + '/A' + flat], [9, 'A'], [10, 'A' + sharp + '/B'+flat], [11, 'B']];

    let [scaleType, updateNotes] = useState([0,0])
    let [showHideBox, setShowHideBox] = useToggle(true)

    const Arpeggios = ['Major', 'Minor', 'Augmented', 'Diminished', 'Major 7th', 'Minor 7th', 'Dominant 7th', 'Half Diminished 7th', 'Diminished 7th', 'Major 9', 'Minor 9', 'Dominant 9', 'Dominant 7'+flat+'9'
                        ,'Dominant 7'+sharp+'5'+flat+'9', 'Dominant 7'+sharp+'5'+sharp+'9', 'Minor 9'+flat+'5', 'Major 9'+sharp+'5', 'Minor/Major 9']

    let highlightedNotes = output_arpeggios(scaleType)

    function output_arpeggios([tonic, pattern_type]) {

        let root = ChromaticScale[tonic]

        const arpeggios = [[4, 7], [3, 7], [4, 8], [3, 6], [4,7,11], [3, 7, 10], [4, 7, 10], [3, 6, 10], [3, 6, 9], [2, 4, 7, 11], [2, 3, 7, 10], [2, 4, 7, 10], [1, 4, 7, 10], [1, 4, 8, 10]
                            , [3, 4, 8, 10], [2, 3, 6, 10], [2, 4, 8, 11], [2, 3, 7, 11]]

        let scale = []
        let start = root[0]
        arpeggios[pattern_type].forEach((interval) => {
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
                    {Arpeggios.map((arpeggio, index) => (
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
            <h3 className="scale-arpeggio-type">{ChromaticScale[scaleType[0]][1]} {Arpeggios[scaleType[1]]}</h3>
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