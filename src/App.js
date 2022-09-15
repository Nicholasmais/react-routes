import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header><h1>React Routes</h1></header>
      <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path="/" element = {<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
