import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import './App.css';
import Nav from "./components/Nav/Nav";
import Questions from "./pages/Questions/Questions";
import { useState } from "react";

function App() {
  const [isOn,setIsOn] = useState('no');
  const [chosen, setChosen] = useState([]);
  return (
    <div>
      <Routes>
        <Route path="/" element= {<Home setIsOn={setIsOn}/>}/>
        <Route path={'questions/:topic'} element= {<Questions 
          setChosen={setChosen} 
          chosen={chosen} 
          isOn={isOn} 
          setIsOn={setIsOn}
        />}/>
      </Routes>
      <Nav/>
    </div>
  );
}

export default App;
