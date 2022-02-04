import React, {useState} from "react";
import Fret from "./fret"
import Fretboard from "./Fretboard";
import Users from "./Users"

function App() {
    const ChromaticScale = [[0, 'C'], [1, 'CSharp/DFlat'], [2, 'D'], [3, 'DSharp/EFlat'], [4, 'E'], [5, 'F'], [6, 'FSharp/GFlat'], [7, 'G'] ,
    [8, 'GSharp/AFlat'], [9, 'A'], [10, 'ASharp/BFlat'], [11, 'B']];
    const [notes, updateNotes] = useState([0,1,2,3,4,5,6])

    return (
        <div>
            <h1>
                Fretboard Visualizer
            </h1>
            <Fretboard />
        </div>
    )
    

}

export default App;