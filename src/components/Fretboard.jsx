import React, {useState} from "react";
import Fret from "./fret";

function Fretboard() {
    const flat = "\u266D"
    const sharp = "\u266F"
    const natural = "\u266E"
    const ChromaticScale = [[0, 'C'], [1, 'C'+sharp + '/D'+flat], [2, 'D'], [3, 'D'+sharp+'/E'+flat], [4, 'E'], [5, 'F'], [6, 'F'+ sharp + '/G'+flat], [7, 'G'] ,
    [8, 'G'+ sharp + '/A' + flat], [9, 'A'], [10, 'A' + sharp + '/B'+flat], [11, 'B']];

    let highlightedNotes = output_scale(9,11)

    function output_scale(tonic, category) {
        let root = ChromaticScale[tonic]
        // 0: Ionian - 1: Dorian - 2: Phrygian - 3: Lydian - 4: Mixolydian - 5: Aeolian - 6: Locrian - 7: Harmonic Minor
        // 8: Asc. Melodic Minor - 9: Pentatonic Major - 10: Pentatonic Minor - 11: Blues Scale 
        const scales = [[2, 4, 5, 7, 9, 11, 12], [2, 3, 5, 7, 9, 10, 12], [1, 3, 5, 7, 8, 10, 12], [2, 4, 6, 7, 9, 11, 12], 
        [2, 4, 5, 7, 9, 10, 12], [2, 3, 5, 7, 8, 10, 12], [1, 3, 5, 6, 8, 10, 12], [2, 3, 5, 7, 8, 11, 12], 
        [2, 3, 5, 7, 9, 11, 12], [2, 4, 7, 9, 12], [3, 5, 7, 10, 12], [3, 5, 6, 7, 10, 12]]
        let scale = []
        scale.push(root[0])
        let start = root[0]
        scales[category].forEach((interval) => {
            let note = start + interval
            scale.push(ChromaticScale[note%12][0])
        })
       
        return scale
        }
    function output_arpeggio(tonic, category) {
        let root = ChromaticScale[tonic]
        //  Major 7th - Minor 7th - Dominant 7th - Half Diminished 7th - Diminished 7th
        const arpeggios = [[4, 3, 4, 1], [3, 4, 3, 2], [4, 3, 3, 2], [3, 3, 4, 2], [3, 3, 3, 3]]
        let arpeggio = []
        arpeggio.push(root[0])
        let start = root[0]
        arpeggios[category].forEach((interval) => {
            let note = start + interval
            arpeggio.push(ChromaticScale[note%12][0])
        })
            
        return arpeggio
        }

    return (
        <div className="fretboard-grid">
            {/* Note the bloody round brackets on the map callback function below!!! */}
            {highlightedNotes.map((note) => (
                    <Fret className="fret" content={ChromaticScale[note][1]}/>
            ))}
        </div>
        // <div>Fretboard</div>
    )

}
export default Fretboard;