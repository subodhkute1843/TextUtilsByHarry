import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("function clicked")
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  
  // Use a regular expression to split the text by spaces and filter out empty strings
  const wordCount = text.split(/\s+/).filter(parameter => parameter.trim() !== "").length;

   // Use the replace method to remove spaces before counting characters
   const characterCount = text.replace(/\s/g, '').length;

  return (
    <form>
      <div className="container">   
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"/>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button><br /><br />
      </div>
      <div className='container'>
        <h1>Text Summary</h1>
        <p>{wordCount} {wordCount === 1 ? 'word' : 'words'} and {characterCount} characters</p>
      </div>
    </form>
  )
}


