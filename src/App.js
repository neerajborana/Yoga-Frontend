import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Addm from './components/Addm';
import Payment from './Payment';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
       <Navbar />
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="admission" element={ <Addm/> } />
        <Route path="payment" element={ <Payment/> } />
      </Routes>
    </div>
  );
}

export default App;
