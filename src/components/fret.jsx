import React from "react";

function Fret(props) {
    return (
        <div className={props.className}>
            {props.content}
        </div>
    )
}

export default Fret;