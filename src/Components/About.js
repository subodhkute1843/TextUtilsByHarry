import React from 'react'

export default function About(props) {

  //setting text inside button
//   const [text, setText] = useState('Enable Dark Mode');
//   const handleUpClick = () => {
//     let newText = text === 'Enable Dark Mode' ? 'Enable Light Mode' : 'Enable Dark Mode';
//     setText(newText);

//     toggleStyle();
//   }

  //changing style accordingly
//   const toggleStyle = () => {
//     if(myStyle.color === '#5BD9A6'){
//         setMyStyle({
//             color: '#042743',
//             backgroundColor: 'white'
//           })
//         setBtnStyle('btn btn-outline-primary');
//     } else{
//         setMyStyle({
//          color: '#5BD9A6',
//          backgroundColor: '#042743',
//          border: '1px solid white'
//         })
//         setBtnStyle('btn btn-outline-success');
//     }
//   }
//   const [myStyle, setMyStyle] = useState({
//     color: '#042743',
//     backgroundColor: 'white',
//   })

    let myStyle ={
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }


  //changing button styles
//   const [btnStyle, setBtnStyle] = useState("btn btn-outline-primary");

  return (
    <div className='container my-3' style={myStyle}> 
        <h1>About Us</h1>
        <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    <strong>Analyze Your text </strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
                </div>
                </div>
            </div>
            <div className="accordion-item"  style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    <strong>Free to use </strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item"  style={myStyle}    >
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <strong>Browser Compatible </strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
        </div>
        {/* <div className='container'>
            <button type="button" className={btnStyle} onClick={handleUpClick}>
                {text}
            </button>
        </div> */}
        <br />
    </div>
  )
}
