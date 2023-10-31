import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState('light') //wheather dark mode is enabled or not 

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  }
  
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" mode = {mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        {/* <TextForm heading = "enter the text to analyze"/> */}
      </div>
      <About/>
    </>
  );
}
// title="TextUtils" aboutText="About us"
export default App;
