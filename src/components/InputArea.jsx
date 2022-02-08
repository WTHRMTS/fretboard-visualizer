import React, {useState, useEffect} from "react";

function InputArea({setNotes}) {
    let message = "This is from body"
    const [inputData, updateinputData] = useState([])
    console.log(inputData)
    // function handleSubmit(event) {
    //     console.log("submitted!")
    //     console.log(data)
    //     event.preventDefault();

    // }
    function handleChange(event) {
        const dataValue = parseInt(event.target.value);
        updateinputData(() => {
            // inputData.push(dataValue);
            // event.preventDefault();
            inputData.push(dataValue)
            console.log(inputData)
            return inputData
        });
    }
    function HandleClick(inputData) {
        // props.parentCallBack(inputData)
        console.log(inputData)
        useEffect(() => {setNotes(inputData)}, []);
    }
    return (
        <div className="input-area">
            
            <input onChange={handleChange}/>
            <input onChange={handleChange}/>
            <input onChange={handleChange}/>
            <button // onClick={HandleClick}
                // props.onSubmit({message})
                // inputData.map((data) => (props.parentCallBack(data)))

            >Submit</button>
            
        </div>
    )
}

export default InputArea;