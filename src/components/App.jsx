import React, {useState} from "react";
import Fret from "./fret"

function App() {
    // const ChromaticScale = {0: [0, 'C'], 1: [1, 'CSharp/DFlat'], 2: [2, 'D'], 3: [3, 'DSharp/EFlat'], 4: [4, 'E'], 5: [5, 'F'], 6: [6, 'FSharp/GFlat'], 7: [7, 'G'] ,
    //     8: [8, 'GSharp/AFlat'], 9: [9, 'A'], 10: [10, 'ASharp/BFlat'], 11: [11, 'B']};
    const ChromaticScale = [[0, 'C'], [1, 'CSharp/DFlat'], [2, 'D'], [3, 'DSharp/EFlat'], [4, 'E'], [5, 'F'], [6, 'FSharp/GFlat'], [7, 'G'] ,
    [8, 'GSharp/AFlat'], [9, 'A'], [10, 'ASharp/BFlat'], [11, 'B']];
    const notes = [0,1,2,3,4,5,6]
    return (
        <div>
            <h1>
                Fretboard Visualizer
            </h1>
            <main className="fretboard-grid">
                {
                    // notes.map((note) => {
                    //     <Fret 
                    //         content={ChromaticScale[note]}
                    //     />
                    // })
                    <Fret content={ChromaticScale[0]}/>
                }
            </main>
        </div>
    )

}

export default App;