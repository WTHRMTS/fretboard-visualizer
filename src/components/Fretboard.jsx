import React from "react";
import FretBoardMarker from "./fretboard-marker";
import GuitarString from "./GuitarString";

function Fretboard(props) {
    const flat = "\u266D"
    const sharp = "\u266F"
    const natural = "\u266E"
    const ChromaticScale = [[0, '  C  '], [1, 'C'+sharp + '/D'+flat], [2, '  D  '], [3, 'D'+sharp+'/E'+flat], [4, '  E  '], [5, '  F  '], [6, 'F'+ sharp + '/G'+flat], [7, '  G  '] ,
    [8, 'G'+ sharp + '/A' + flat], [9, '  A  '], [10, 'A' + sharp + '/B'+flat], [11, '  B  ']];

    // Need to change these to text, figure out why map wont work over strings, only empty strings.
    const fretBoardMarkers = [0,1,2, 3,4, 5,6, 7,8, 9,10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

    const stringNumbers = [0, 1, 2, 3, 4, 5]
    
    function outputStrings() {
        // Need to avoid negative note numbers hence the somewhat intricate expressions below. 
        // Instead of subtracting the detune amount, add 12, subtract detune then use that number modulo 12.
        // E.g. to detune F six semitones, add 12 to get 17, subtract 6 giving 11, then 11%12 gives 11.  
        // The last step seems redundant but it's needed as the detune might not always give a negative note value. So it corrects if it doesn't.
        
        let stringNotes = [[(4+12-props.detune)%12],[(11+12-props.detune)%12],[(7+12-props.detune)%12],[(2+12-props.detune)%12],[(9+12-props.detune)%12],[(4+12-props.detune)%12]];
        if (props.numberOfStrings == 1) {
            stringNotes.push([(11+12-props.detune)%12]);
            stringNumbers.push(6)
        } else if (props.numberOfStrings == 2) {
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
        <div className="fretboard-window" id="style-1">
            <div className="fretboard-grid marker">
                {/* Note the round brackets on the map callback function below!!! */}
                {   fretBoardMarkers.map((marker, index) => (
                    <FretBoardMarker key={index} content={fretBoardMarkers[marker]}/>
                ))
                }
            </div>
            <hr className="horizontal-lines-top"/>
            {stringNumbers.map((stringNumber) => (<GuitarString key={stringNumber+1} stringNumber={stringNumber} stringNotes={stringNotes} highlightedNotes={props.highlightedNotes} ChromaticScale={ChromaticScale}/>))}
            <hr className="horizontal-lines-bottom"/>
            <div className="fretboard-grid marker">
                {/* Note the round brackets on the map callback function below!!! */}
                {   fretBoardMarkers.map((marker, index) => (
                    <FretBoardMarker key={index} content={fretBoardMarkers[marker]}/>
                ))
                }
            </div>
        </div>
    )

}
export default Fretboard;