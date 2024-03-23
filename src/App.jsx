import "./App.css";
import React, {useState, useEffect} from 'react'
import Screen from "./components/Screen";
import ThemeState from "./context/ThemeState";
import Loading from "./components/Loading";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  
  const [Loader, setLoader] = useState(true)
  useEffect(()=>{
      const timeout = setTimeout(() => {
        setLoader(false)
      }, 3000);
      return ()=> clearTimeout(timeout);
    }, []);
  return (
    <ThemeState>
        <div className= "d-flex flex-column align-items-center parentDiv">
          {/* <BrowserRouter>
            <Routes>
              <Route path="/" element={Loader? <Loading/> : <Screen/>}></Route>
            </Routes>
          </BrowserRouter> */}
          {Loader? <Loading/> : <Screen/>}
        </div>
      </ThemeState>

  );
}

export default App;
