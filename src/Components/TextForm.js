import React, { useState } from 'react'
export default function TextForm(props) {
    

    const handleUpClick= ()=>{
        console.log("UpperCase was Clicked" + text);
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase" ,"success");
    }
    
    const handleLowerClick= ()=>{

        console.log("Lowercase was clicked" +text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowercase", "success");
    }
    
    const handleClearClick= ()=>{
        console.log("Clear was clicked");
        let newText=" "
        setText(newText);
        props.showAlert("Text has been cleared", "success");
    }
    const handleCopy= ()=>{
        console.log("I am copy");
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success" );
    }
// funcion to remove extra spaces
    const handleExtraSpaces = ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange= (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const[text , setText]=useState("Enter text here") // this is a hook
    
    return (
    <>
    
    <div className='container' style={{color:props.mode==='dark'?'white':'#030546'}}>
    <h1>{props.heading} </h1>
    <div className="mb-3" >
    
    <textarea className="form-control"  value ={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#030546'}} id="myBox" rows="9"></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To UpperCase</button>
    <button className='btn btn-primary mx-2' onClick={handleLowerClick}>Convert To LowerCase</button>
    <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
    <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
    <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces </button>

    </div>

    <div className='container my-2' style={{color:props.mode==='dark'?'white':'#030546'}} >
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} word and {text.length} characters</p>
        <p>{.007*text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text in the above box to preview it here"}</p>
    </div>    

    </>
  )
}
