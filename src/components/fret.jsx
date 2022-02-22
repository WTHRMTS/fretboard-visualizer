import React from "react";

function Fret(props) {
    return (
        <div className={props.className}>
            <span></span>
            {props.content}
        </div>
    )
}

export default Fret;