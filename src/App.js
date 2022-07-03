// import logo from './logo.svg';
import { useState } from 'react';
import Alert from './components/Alert';
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar'
import TextForms from './components/TextForms';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  const removeBodyClass = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
  }

  const toggleMode = (cls) => {
    // removeBodyClass();
    // document.body.classList.add('bg-' + cls);
    // if(cls==='light'){
    //   setMode('light');
    // }
    // else{
    //   setMode('dark');
    // }
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enable", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enable", "success");
    }
  }
  return (
    <BrowserRouter>
      {/* <Navbar/> */}

      <Navbar title="Text Utills" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForms heading="Try TextUtils - Word counter, character counter,remove extra spaces" mode={mode} showAlert={showAlert} />} />
          <Route path="about" element={<AboutUs  mode={mode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
