import React from "react"

function Introduction(props) {

    return (
    <div className="introduction" style={{display: props.showIntro? "none" : "block"}}>
                {/* <h1>Visualize Scales, Modes and Arpeggios</h1> */}
                <p>
                    With this app you can visualize the Major, Minor and Harmonic Minor scales, as well as 
                    the modes of the Major, Harmonic Minor and Melodic Minor scales (and more) and all 
                    the common arpeggios, i.e. Major, Minor, 7th, Diminished 7th etc.,in any key all over the fretboard.
                </p>
                <p>
                    Hit the "Toggle Advanced Options" button to choose a 7-string or 8-string guitar fretboard, detune the 
                    guitar up to 8 semitones, and use drop-tuning if required.
                </p>
                <p>
                    Drag the yellow box around to highligh convenient "box" shapes, or hit the checkbox to hide it. 
                    You can also click on highlighted notes (hide the fretboard box first) to remove the highlight, 
                    which can be used to create custom patterns, such as three note per string shapes etc.
                </p>
                <p>
                    Example usage: select the C Major Scale, and run through the C Major 7, D minor 7, E minor 7, 
                    F Major 7, G Dominant 7, A minor 7 and B Half Diminished 7 arpeggios, and see that all of the 
                    notes in each arpeggio are contained in the C Major/Ionian Scale. 
                </p>
                <p> This is Diatonic Harmony, and tells you which chords you can safely use
                    together (there are others, but that is more advanced). Play around and learn!
                </p>
            </div>
    )
}
export default Introduction