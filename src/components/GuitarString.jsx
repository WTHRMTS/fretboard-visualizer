import React from "react";
import Fret from "./fret";
import ChromaticScale from "./ChromaticScale";

function GuitarString(props) {
    return (
            <div>
                <div className="fretboard-grid string">
                        <Fret id="open-string" className={props.stringNotes[props.stringNumber][0] == props.highlightedNotes[0]? "open-string root-note-fret" :  props.highlightedNotes[1].includes(props.stringNotes[props.stringNumber][0])? "open-string highlighted-fret" : "open-string fret"} content={<pre>{ChromaticScale[props.stringNotes[props.stringNumber][0]][1]}</pre>}/>
                        {   props.stringNotes[props.stringNumber].slice(1,25).map((note, index) => (
                                <Fret key={index} className={note == props.highlightedNotes[0]? "root-note-fret" :  props.highlightedNotes[1].includes(note)? "highlighted-fret" : "fret"} content={<pre>{ChromaticScale[note][1]}</pre>}/>

                        ))}
                </div>
            </div>
    )
}

export default GuitarString;