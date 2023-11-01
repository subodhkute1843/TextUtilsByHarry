import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("function clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!", "success")
  }

  const handleLoClick = ()=>{ 
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
  }
  const [text, setText] = useState('');

  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }
  
  // Use a regular expression to split the text by spaces and filter out empty strings
  const wordCount = text.split(/\s+/).filter(parameter => parameter.trim() !== "").length;

   // Use the replace method to remove spaces before counting characters
   const characterCount = text.replace(/\s/g, '').length;

  return (
    <form>
      
      <div className="container" style={{color: props.mode==='dark' ? 'white':'#042743'}}>  
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"/>
        </div>
        <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button><br /><br />
      </div>
      <div className='container' style={{color: props.mode==='dark' ? 'white':'#042743'}}>
        <h1>Text Summary</h1>
        <p>{wordCount} {wordCount === 1 ? 'word' : 'words'} and {characterCount} characters</p>
      </div>
    </form>
  )
}


