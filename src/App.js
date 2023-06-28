import './App.css';
import * as  React  from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import  { useState } from 'react';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";


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
 
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container my-3'>

      <Switch>
          <Route path="/about">
            <About/>
            </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          </Route>      
      </Switch>
      </div>
    </Router>
   </>
   
  );
}

export default App;
