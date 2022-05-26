import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Tools from './Pages/Home/Tools';

import SignUp from './Pages/Login/Signup';
import RequireAuth from './Pages/Shared/RequireAuth';
import BookingItem from './Pages/Home/BookingItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/item/:itemId'
          element={
            <RequireAuth>
              <BookingItem>
              </BookingItem>
            </RequireAuth>
          }>
        </Route>
        <Route path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard></Dashboard>

            </RequireAuth>
          }>
        </Route>


      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
