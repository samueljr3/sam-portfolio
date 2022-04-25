import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  index element={<Home/>} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter> */}
        
    </div>
  );
}

export default App;
