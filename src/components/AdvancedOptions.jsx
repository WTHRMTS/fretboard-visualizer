import React from "react";

function AdvancedOptions(props) {

    function settingDropTuned() {
        props.setDropTuned()
    }

    function settingNumberOfStrings() {
        props.setNumberStrings(() => [...[document.getElementById("string-select").selectedIndex]])
    }

    function detuneSetter() {
        props.setDetune([document.getElementById("detuning").selectedIndex]);
    }

    return (
        <div id="advanced-options" style={{display: props.showHide? "block" : "none"}}>
                <h2 className="how-many-strings">How Many Strings?</h2>
                <div className="string-select-area">
                    <select id="string-select" className="string-select" onChange={settingNumberOfStrings}>
                        <option>
                            6 String Guitar
                        </option>
                        <option>
                            7 String Guitar
                        </option>
                        <option>
                            8 String Guitar
                        </option>
                    </select>
                </div>
                <h2>Detune How Many Semitones?</h2>
                <div className="drop-tuning">
                <div >
                    <select id="detuning" className="select-menu" onChange={detuneSetter}>
                        <option>
                            0 Semitones
                        </option>
                        <option>
                            1 Semitone
                        </option>
                        <option>
                            2 Semitones
                        </option>
                        <option>
                            3 Semitones
                        </option>
                        <option>
                            4 Semitones
                        </option>
                        <option>
                            5 Semitones
                        </option>
                        <option>
                            6 Semitones
                        </option>
                        <option>
                            7 Semitones
                        </option>
                        <option>
                            8 Semitones
                        </option>
                    </select>
                </div>
                <div className="droptuning-area">
                    <label id="drop-tuning-label" htmlFor="drop-tuning">Drop Tuned?</label><span>&nbsp;&nbsp;</span>
                    <input id="drop-tuning" type="checkbox" value="Test" onClick={settingDropTuned} />
                </div>
                </div>
            </div>
    )

}

export default AdvancedOptions;