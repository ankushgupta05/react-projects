// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light')// Whether dark mode  is enable or not

  return (
    <>
       <Navbar title="TextUtils"  aboutText="About Textutils" mode={mode}/>
       {/* <Navbar/> */}
       
       <div  className="container" >
           <TextForm  heading="Enter The text to analyze" />
           {/* <About/> */}
       </div>
   
    </>
  );
}

export default App;
