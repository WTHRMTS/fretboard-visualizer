import React from "react";
import Fret from "./fret";

function GuitarString(props) {
    const flat = "\u266D"
    const sharp = "\u266F"
    const natural = "\u266E"
    const ChromaticScale = [[0, '  C  '], [1, 'C'+sharp + '/D'+flat], [2, '  D  '], [3, 'D'+sharp+'/E'+flat], [4, '  E  '], [5, '  F  '], [6, 'F'+ sharp + '/G'+flat], [7, '  G  '] ,
    [8, 'G'+ sharp + '/A' + flat], [9, '  A  '], [10, 'A' + sharp + '/B'+flat], [11, '  B  ']];

    return (
            <div>
                <hr className="horizontal-lines"/>
                <div className="fretboard-grid string">
                        {   props.stringNotes[props.stringNumber].map((note, index) => (
                                <Fret key={index} className={note == props.highlightedNotes[0]? "root-note-fret" :  props.highlightedNotes[1].includes(note)? "highlighted-fret" : "fret"} content={ChromaticScale[note][1]}/>
                        ))}
                </div>
            </div>
    )
}

export default GuitarString;