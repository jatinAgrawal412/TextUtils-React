import React, { useState } from 'react'

export default function TextForms(props) {
    const [text, setText] = useState('');
    // text = "new text"; //wronng way
    //  setText("new text"); //correct way
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to Uppercase",'success');
    }
    const handleLowClick = () => {
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to Lowercase",'success');
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    const handleClearClick = (event) => {
        // console.log("on change");
        setText('');
        props.showAlert("Text was  cleared",'success');
    }

    const handleCopy = () => {
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!",'success');
    }

    const handleExtraSpaces = () => {

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed",'success');
    }
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h3 className='mb-2'>{props.heading}</h3>
                <div className="form-floating my-3">
                    <textarea className="form-control" placeholder="Leave a comment here" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white' ,color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>convert to Uppercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleLowClick}>convert to Lowercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3 "  style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </> 
    )
}
