import React, {useState} from "react";
import Fret from "./fret";
import FretBoardMarker from "./fretboard-marker";

function Fretboard(props) {
    const flat = "\u266D"
    const sharp = "\u266F"
    const natural = "\u266E"
    const ChromaticScale = [[0, 'C'], [1, 'C'+sharp + '/D'+flat], [2, 'D'], [3, 'D'+sharp+'/E'+flat], [4, 'E'], [5, 'F'], [6, 'F'+ sharp + '/G'+flat], [7, 'G'] ,
    [8, 'G'+ sharp + '/A' + flat], [9, 'A'], [10, 'A' + sharp + '/B'+flat], [11, 'B']];

    // Need to change these to text, figure out why map wont work over strings, only empty strings.
    const fretBoardMarkers = [0, 1,'', 3,'', 5,'', 7,'', 9,'','', 12]

    function outputStrings() {
        const stringNotes = [[4],[11],[7],[2],[9],[4]]
        for (let j = 0; j < 6; j++){
            for (let i = 1; i< 13; i++) {
                stringNotes[j].push((stringNotes[j][0]+i)%12)
            }
        }
        return stringNotes
    }
    const stringNotes = outputStrings();

    return (
        <div className="fretboard-grid">
            {/* Note the round brackets on the map callback function below!!! */}
            {   fretBoardMarkers.map((marker, index) => (
                <FretBoardMarker key={index} content={fretBoardMarkers[marker]}/>
            ))
            }
            {   stringNotes[0].map((note, index) => (
                    <Fret key={index} className={note == props.highlightedNotes[0]? "root-note-fret" :  props.highlightedNotes[1].includes(note)? "highlighted-fret" : "fret"} content={ChromaticScale[note][1]}/>
            ))}
            {   stringNotes[1].map((note, index) => (
                    <Fret key={index} className={note == props.highlightedNotes[0]? "root-note-fret" :  props.highlightedNotes[1].includes(note)? "highlighted-fret" : "fret"} content={ChromaticScale[note][1]}/>
            ))}
            {  stringNotes[2].map((note, index) => (
                    <Fret key={index} className={note == props.highlightedNotes[0]? "root-note-fret" :  props.highlightedNotes[1].includes(note)? "highlighted-fret" : "fret"} content={ChromaticScale[note][1]}/>
            ))}
            {   stringNotes[3].map((note, index) => (
                    <Fret key={index} className={note == props.highlightedNotes[0]? "root-note-fret" :  props.highlightedNotes[1].includes(note)? "highlighted-fret" : "fret"} content={ChromaticScale[note][1]}/>
            ))}
            {   stringNotes[4].map((note, index) => (
                    <Fret key={index} className={note == props.highlightedNotes[0]? "root-note-fret" :  props.highlightedNotes[1].includes(note)? "highlighted-fret" : "fret"} content={ChromaticScale[note][1]}/>
            ))}
            {   stringNotes[5].map((note, index) => (
                    <Fret key={index} className={note == props.highlightedNotes[0]? "root-note-fret" :  props.highlightedNotes[1].includes(note)? "highlighted-fret" : "fret"} content={ChromaticScale[note][1]}/>
            ))}
        </div>
    )

}
export default Fretboard;