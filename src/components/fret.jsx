import React from "react";
import useToggle from "./useToggle";

function Fret(props) {
    const [highlight, setHighlight] = useToggle()

    return (
        <div id={highlight? "clickNotHighlighted": "clickHighlighted"} onClick={setHighlight} className={props.className}>
            <span></span>
            {props.content}
        </div>
    )
}

export default Fret;