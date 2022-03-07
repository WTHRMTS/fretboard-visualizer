import React from "react"

function Introduction(props) {

    return (
    <div className="introduction" style={{display: props.showIntro? "none" : "block"}}>
                <p>
                    With this app you can visualize the Major, Minor and Harmonic Major and Minor scales, as well as 
                    their modes and more exotic scales like the 'Iwato Scale' in any key and all over the fretboard. The "Arpeggio
                    Visualizer" section works identically but visualizes all common and some exotic arpeggios, 
                    i.e. Major, Minor, 7th, Diminished 7th, 'Minor/Major 9' etc.
                </p>
                <p>
                    Hit the "Toggle Advanced Options" button to choose a 7-string or 8-string guitar fretboard, detune the 
                    guitar up to 8 semitones, and use drop-tuning if required.
                </p>
                <p>
                    Drag the yellow box around to highlight convenient "box" shapes, or hit the checkbox to hide it. 
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