import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          
        </Routes>
      </BrowserRouter>
        <header className="App-header">
          
          <p>pog champ</p>
      </header>
    </div>
  );
}

export default App;
