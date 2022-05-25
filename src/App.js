import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Tools from './Pages/Home/Tools';
import Footer from './Pages/Home/Footer';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
