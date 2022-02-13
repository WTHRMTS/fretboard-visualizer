import React, {useState, useEffect} from "react";
import Fretboard from "./Fretboard";

function ArpeggioVisualiser(props) {
    const flat = "\u266D"
    const sharp = "\u266F"
    const natural = "\u266E"
    const ChromaticScale = [[0, 'C'], [1, 'C'+sharp + '/D'+flat], [2, 'D'], [3, 'D'+sharp+'/E'+flat], [4, 'E'], [5, 'F'], [6, 'F'+ sharp + '/G'+flat], [7, 'G'] ,
    [8, 'G'+ sharp + '/A' + flat], [9, 'A'], [10, 'A' + sharp + '/B'+flat], [11, 'B']];

    let [scaleType, updateNotes] = useState([0,0])
    
    const Arpeggios = ['Major', 'Minor', 'Major 7th', 'Minor 7th', 'Dominant 7th', 'Half Diminished 7th', 'Diminished 7th']

    let highlightedNotes = output_arpeggios(scaleType)

    function output_arpeggios([tonic, pattern_type]) {

        let root = ChromaticScale[tonic]

        const arpeggios = [[4, 7], [3, 7], [4,7,11], [3, 7, 10], [4, 7, 10], [3, 6, 10], [3, 6, 9]]

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
        <div className="arpeggio visualiser">
            <h2>
                Arpeggio Visualizer
            </h2>
            <div className="input-area">
                <select className="select-menu" onChange={handleChange} name="First">
                    {ChromaticScale.map((scale, index) => (
                        <option
                        key={index}
                        className="select-option-root"
                        value={scale[0]}>{scale[1]}</option>
                     ))}
                </select>
                <select className="select-menu" onChange={handleChange} name="Second">
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
            <h3 className="scale-arpeggio-type">{ChromaticScale[scaleType[0]][1]} {Arpeggios[scaleType[1]]}</h3>
            <Fretboard numberOfStrings={props.numberOfStrings} highlightedNotes={highlightedNotes} dropTuned={props.dropTuned} detune={props.detune} origin={"ArpeggioVisualiser"}/>
        </div>
    )

}

export default ArpeggioVisualiser;