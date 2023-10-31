import React, {useState} from 'react'

export default function About() {

  //setting text inside button
  const [text, setText] = useState('Enable Dark Mode');
  const handleUpClick = () => {
    let newText = text === 'Enable Dark Mode' ? 'Enable Light Mode' : 'Enable Dark Mode';
    setText(newText);

    toggleStyle();
  }

  //changing style accordingly
  const toggleStyle = () => {
    if(myStyle.color === '#5BD9A6'){
        setMyStyle({
            color: 'black',
            backgroundColor: 'white'
          })
        setBtnStyle('btn btn-outline-primary');
    } else{
        setMyStyle({
         color: '#5BD9A6',
         backgroundColor: 'black',
         border: '1px solid white'
        })
        setBtnStyle('btn btn-outline-success');
    }
  }
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  })


  //changing button styles
  const [btnStyle, setBtnStyle] = useState("btn btn-outline-primary");

  return (
    <div className='container' style={myStyle}> 
        <h1>About Us</h1>
        <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item"  style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item"  style={myStyle}    >
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <button type="button" className={btnStyle} onClick={handleUpClick}>
                {text}
            </button>
        </div>
        <br />
    </div>
  )
}
