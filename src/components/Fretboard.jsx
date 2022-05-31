import React from "react";
import {ChromaticScale} from "./ScalesAndArpeggios";
import FretBoardMarker from "./fretboard-marker";
import GuitarString from "./GuitarString";
import Draggable from 'react-draggable';


function Fretboard(props) {
   
    // Need to restyle?
    const fretBoardMarkers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

    const stringNumbers = [0, 1, 2, 3, 4, 5]
    // console.log(props.numberOfStrings[0])
    function outputStrings() {
        // Need to avoid negative note numbers when detuning hence the somewhat intricate expressions below. 
        // Instead of subtracting the detune amount, add 12, subtract detune then use that number modulo 12.
        // E.g. to detune F six semitones, add 12 to get 17, subtract 6 giving 11, then 11%12 gives 11.  
        // The last step seems redundant but it's needed as the detune might not always give a negative note value. So it corrects if it doesn't.
        // E.g. detuning B by 6 semitones: add 12 to get 23 then subtract 6 and you get 17, which is not in the chromatic scale. But 17%12 gives 5, 
        // which is the correct note: F. So we have one algorithm for all notes and all detuning options.
        
        let stringNotes = [[(4+12-props.detune)%12],[(11+12-props.detune)%12],[(7+12-props.detune)%12],[(2+12-props.detune)%12],[(9+12-props.detune)%12],[(4+12-props.detune)%12]];
        if (props.numberOfStrings[0] === 1) {
            stringNotes.push([(11+12-props.detune)%12]);
            stringNumbers.push(6)
        } else if (props.numberOfStrings[0] === 2) {
            stringNotes.push([(11+12-props.detune)%12])
            stringNotes.push([(6+12-props.detune)%12])
            stringNumbers.push([6])
            stringNumbers.push([7])
        }
        let index = stringNotes.length - 1;
        stringNotes[index][0] = (stringNotes[index][0]+ 12 - props.dropTuned)%12;

        for (let j = 0; j < stringNotes.length; j++){
            for (let i = 1; i< 25; i++) {
                stringNotes[j].push((stringNotes[j][0]+i)%12)
            }
        }
        return stringNotes
    }
    const stringNotes = outputStrings();


    return (
        <div className="fretboard-window" id={props.fretboardType}>
            <div className="fretboard-grid marker">
                {/* Note the round brackets on the map callback function below!!! */}
                {   fretBoardMarkers.map((marker, index) => (
                    <FretBoardMarker key={index} content={marker}/>
                ))
                }
            </div>
            <Draggable bounds={{left: 0, right: 510}} axis = "x">
                <div 
                    id="fretbox" className={props.numberOfStrings[0] === 1? "draggable-7": props.numberOfStrings[0] === 2? "draggable-8": "draggable"} style={{display: props.showHideBox? "block" : "none"}}>
                </div>
            </Draggable>
            <hr className="horizontal-lines-top"/>
            {stringNumbers.map((stringNumber) => (<GuitarString key={stringNumber+1} stringNumber={stringNumber} stringNotes={stringNotes} highlightedNotes={props.highlightedNotes} ChromaticScale={ChromaticScale}/>))}
            <hr className="horizontal-lines-bottom"/>
            <div className="fretboard-grid marker">
                {/* Note the round brackets on the map callback function below!!! */}
                {   fretBoardMarkers.map((marker, index) => (
                    <FretBoardMarker key={index} content={marker}/>
                ))
                }
            </div>
        </div>
    )

}
export default Fretboard;