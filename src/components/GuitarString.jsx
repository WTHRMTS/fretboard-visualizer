import React from "react";
import Fret from "./fret";

function GuitarString(props) {
    const flat = "\u266D"
    const sharp = "\u266F"
    const natural = "\u266E"
    const ChromaticScale = [[0, '  C  '], [1, 'C'+sharp + '/D'+flat], [2, '  D  '], [3, 'D'+sharp+'/E'+flat], [4, '  E  '], [5, '  F  '], [6, 'F'+ sharp + '/G'+flat], [7, '  G  '] ,
    [8, 'G'+ sharp + '/A' + flat], [9, '  A  '], [10, 'A' + sharp + '/B'+flat], [11, '  B  ']];
//     console.log(props.stringNotes[props.stringNumber][0])
        let testArr = ChromaticScale[props.stringNotes[props.stringNumber][0]]
        console.log(testArr[1]);
        // console.log(ChromaticScale[props.stringNotes[props.stringNumber][0][0]])
//     props.stringNotes[props.stringNumber].slice(1,25).map((note) => (console.log(note)))


    return (
            <div>
                {/* <hr className="horizontal-lines"/> */}
                <div className="fretboard-grid string">
                        <Fret className={props.stringNotes[props.stringNumber][0] == props.highlightedNotes[0]? "open-string root-note-fret" :  props.highlightedNotes[1].includes(props.stringNotes[props.stringNumber][0])? "open-string highlighted-fret" : "open-string fret"} content={<pre>{ChromaticScale[props.stringNotes[props.stringNumber][0]][1]}</pre>}/>
                        {   props.stringNotes[props.stringNumber].slice(1,25).map((note, index) => (
                                // <Fret key={index} className={note == props.highlightedNotes[0]? "root-note-fret" :  props.highlightedNotes[1].includes(note)? "highlighted-fret" : "fret"} content={<pre>{ChromaticScale[note][1]}</pre>}/>
                                <Fret key={index} className={note == props.highlightedNotes[0]? "root-note-fret" :  props.highlightedNotes[1].includes(note)? "highlighted-fret" : "fret"} content={<pre>{ChromaticScale[note][1]}</pre>}/>

                        ))}
                </div>
            </div>
    )
}

export default GuitarString;