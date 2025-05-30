import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Verify from './Components/Auth/Verifyemail';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Profile from './Components/Profilepage/Profile';


const App: React.FC = () => {
  return (
      <div>
      <BrowserRouter>
        <Navbar/> 
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/Register' element={<Register/>}/>
           <Route path='/Login' element={<Login/>}/>
           <Route path='/Verify' element={<Verify/>}/>
           <Route path='/profile' element={<Profile/>}/>
         </Routes>
      </BrowserRouter>
      </div>
  );
};

export default App;
