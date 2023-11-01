// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react'
import Alert from './Components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const [mode, setMode] = useState('light') //wheather dark mode is enabled or not 
  
  const removeBodyClasses = ()=> {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
  }


  const toggleMode = (cls)=>{
    removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if (cls !== null){
      setMode(cls);
      if(cls === 'primary'){
        document.body.style.backgroundColor = '#5BC0DE';
      }
      else if(cls === 'success'){document.body.style.backgroundColor = '#5BD9A6';}
      else if(cls === 'danger'){document.body.style.backgroundColor = '#FF6666';}
      else if(cls === 'warning'){document.body.style.backgroundColor = '#fff3cd';}
      showAlert(cls+" mode has been enabled", "success");
    }
    else if(mode === 'light' ){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            />
         <Route path="/about" element={<About mode={mode}/>} />
      </Routes>
    </BrowserRouter>
  );
}
// title="TextUtils" aboutText="About us"
export default App;
