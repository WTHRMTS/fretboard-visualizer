import React, {useState} from "react";
import Fret from "./fret";

function Fretboard() {
    const flat = "\u266D"
    const sharp = "\u266F"
    const natural = "\u266E"
    const ChromaticScale = [[0, 'C'], [1, 'C'+sharp + '/D'+flat], [2, 'D'], [3, 'D'+sharp+'/E'+flat], [4, 'E'], [5, 'F'], [6, 'F'+ sharp + '/G'+flat], [7, 'G'] ,
    [8, 'G'+ sharp + '/A' + flat], [9, 'A'], [10, 'A' + sharp + '/B'+flat], [11, 'B']];
    let notes = [9, 11, 1, 2, 4, 6, 8, 9]
    function output_scale(tonic, category) {
        let root = ChromaticScale[tonic]
        //  Ionian - Dorian - Phrygian - Lydian - Mixolydian - Aeolian - Locrian - Harmonic Minor - Asc. Melodic Minor
        const modes = [[2, 2, 1, 2, 2, 2, 1], [2, 1, 2, 2, 2, 1, 2], [1, 2, 2, 2, 1, 2, 2], [2, 2, 2, 1, 2, 2, 1], 
        [2, 2, 1, 2, 2, 1, 2], [2, 1, 2, 2, 1, 2, 2], [1, 2, 2, 1, 2, 2, 2], [2, 1, 2, 2, 1, 3, 1], [2, 1, 2, 2, 2, 2, 1]]
        scale = []
        scale.push(root[1])
        counter = root[0]
        modes[category].forEach((mode)=> {
            counter += mode
            console.log(counter)
            scale.push(ChromaticScale[counter%12][1])
        })
       
        return scale
        }
    function output_arpeggio(tonic, category) {
        let root = ChromaticScale[tonic]
        //  Major 7th - Minor 7th - Dominant 7th - Half Diminished 7th - Diminished 7th
        const notes = [[4, 3, 4, 1], [3, 4, 3, 2], [4, 3, 3, 2], [3, 3, 4, 2], [3, 3, 3, 3]]
        arpeggio = []
        arpeggio.push(root[0])
        counter = root[0]
        notes[category].forEach((note) => {
            counter += note
            arpeggio.push(ChromaticScale[counter%12][0])
        })
            
        return arpeggio
        }
    return (
        <div className="fretboard-grid">
            {/* Note the bloody round brackets on the map callback function below!!! */}
            {notes.map((note) => (
                    <Fret className="fret" content={ChromaticScale[note][1]}/>
            ))}
        </div>
        // <div>Fretboard</div>
    )

}
export default Fretboard;