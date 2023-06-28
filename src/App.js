import './App.css';
import * as  React  from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import  { useState } from 'react';
import Alert from './Components/Alert';
//import About from './Components/About';

function App() {
  const[mode , setMode]=useState('light'); // wheather dark mode is enabled or not
  const[alert,setAlert]=useState(null);

  const showAlert=(message , type)=>{
    setAlert({
      msg:message,  // we can use the message given in showAlert here
      type:type
    })
    setTimeout( ()=>{
      setAlert(null)
    },2000 )
  }

  const toggleMode= ()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#030546'
    showAlert("Dark mode has been enabled", "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enabled", "success");

  }
}

  return (
    <>
 

    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container my-3'>
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
    {/*<About/>*/}
    
    </div>
    
    
    </>
   
  );
}

export default App;
