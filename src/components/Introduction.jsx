import React from "react";

function Introduction(props) {
  return (
    <div
      className="introduction"
      style={{ display: props.showIntro ? "none" : "block" }}
    >
      <h3 className="intro-heading">About this App:</h3>
      <p>
        With this application you can visualize the Major, Minor and Harmonic
        Major and Minor scales, as well as their modes and more exotic scales
        like the 'Iwato Scale' in any key and all over the fretboard. The
        "Arpeggio Visualizer" section works identically but visualizes all
        common and some exotic arpeggios, i.e. Major, Minor, Major and Minor
        7th, Diminished 7th, 'Minor/Major 9' etc.
      </p>
    </div>
  );
}
export default Introduction;
