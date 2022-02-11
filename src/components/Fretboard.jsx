import React, {useState} from "react";
import Fret from "./fret";
import FretBoardMarker from "./fretboard-marker";
import GuitarString from "./GuitarString";

function Fretboard(props) {
    const flat = "\u266D"
    const sharp = "\u266F"
    const natural = "\u266E"
    const ChromaticScale = [[0, '  C  '], [1, 'C'+sharp + '/D'+flat], [2, '  D  '], [3, 'D'+sharp+'/E'+flat], [4, '  E  '], [5, '  F  '], [6, 'F'+ sharp + '/G'+flat], [7, '  G  '] ,
    [8, 'G'+ sharp + '/A' + flat], [9, '  A  '], [10, 'A' + sharp + '/B'+flat], [11, '  B  ']];

    // Need to change these to text, figure out why map wont work over strings, only empty strings.
    const fretBoardMarkers = [0, 1,2, 3,4, 5,6, 7,8, 9,10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

    const stringNumbers = [0, 1, 2, 3, 4, 5]
    // console.log(props.numberOfStrings)
    // let stringNotes = [];
    // const stringNumbers = [[[4],[11],[7],[2],[9],[4]], [[4],[11],[7],[2],[9],[4],[11]], [[4],[11],[7],[2],[9],[4],[11],[6]]]
    // if (props.numberOfStrings == 0) {
    //     stringNotes = [[4],[11],[7],[2],[9],[4]];
    // } else if (props.numberOfStrings == 1) {
    //     stringNotes = [[4],[11],[7],[2],[9],[4], [11]];
    // } else if (props.numberOfStrings == 2) {
    //     stringNotes = [[4],[11],[7],[2],[9],[4],[11],[6]];
    // }
    // let numberOfStrings = props.numberOfStrings;
    

    function outputStrings() {
        // console.log("numberOfStrings=" + props.numberOfStrings);
        const stringNotes = [[4],[11],[7],[2],[9],[4]];
        if (props.numberOfStrings == 1) {
            stringNotes.push([11]);
            stringNumbers.push(6)
        } else if (props.numberOfStrings == 2) {
            stringNotes.push([11])
            stringNotes.push([6])
            stringNumbers.push([6])
            stringNumbers.push([7])
        }
        // console.log(stringNotes)
        // const stringNotes = [[4],[11],[7],[2],[9],[4]]
        // const stringNotes = stringNumbers[props.numberOfStrings]
        let index = stringNotes.length - 1;
        console.log(stringNotes[index], props.dropTuned)
        stringNotes[index][0] -= props.dropTuned;
        for (let j = 0; j < stringNotes.length; j++){
            for (let i = 1; i< 25; i++) {
                stringNotes[j].push((stringNotes[j][0]+i)%12)
            }
        }
        // console.log(stringNotes)
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
            {stringNumbers.map((stringNumber) => (<GuitarString key={stringNumber+1} stringNumber={stringNumber} stringNotes={stringNotes} highlightedNotes={props.highlightedNotes} ChromaticScale={ChromaticScale}/>))}
            <hr className="horizontal-lines"/>
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