import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {

  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" />
      <div className="container my-3">
        {/* <TextForm heading = "enter the text to analyze"/> */}
      </div>
      <About/>
    </>
  );
}
// title="TextUtils" aboutText="About us"
export default App;
