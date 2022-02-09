import React from "react";
import ScaleVisualiser from "./ScaleVisualiser";
import ArpeggioVisualiser from "./ArpeggioVisualiser";


function App() {
    

    return (
        <div>
            <div class="introduction">
                <h1>Visualize Scales, Modes and Arpeggios</h1>
                <p>
                If you're like me and have a bunch of books lying around which are full of scales and arpeggios but find them too cumbersome 
                to use (just keeping the right page while your holding a guitar is hard enough), then this site is for you.
                </p>
                <p>On this page you can visualize
                scales such as the Major, Minor or Harmonic Minor (and more), the modes of the Major scale, and all the common arpeggios (Major, Minor, 7th, Diminished 7th etc.)
                in any key (in Standard Tuning, alternate tunings arriving soon!).
                </p>
                <p>
                For example: select the C Major Scale, and run through the C Major 7, D minor 7, E minor 7, F Major 7, G Dominant 7, A minor 7 and B Half Diminished 7 arpeggios, 
                and see that all of the notes in each arpeggio are contained in the C Major/Ionian Scale. 
                </p>
                <p> This is Diatonic Harmony, and tells you which chords you can safely use
                    together (there are others, but that is more advanced). Play around and learn!
                </p>
            </div>
            <ScaleVisualiser />
            <ArpeggioVisualiser />
            <div class="footer">&copy; Jamie Booth 2022</div>

        </div>
    )

}

export default App;