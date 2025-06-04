import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Verify from './Components/Auth/Verifyemail';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Profile from './Components/Profilepage/Profile';
import Forget from './Components/Auth/ForgetPass';
import CreateNewPassword from './Components/Auth/CreateNewPassword';
import Dashboard from './Components/DashBoard/DashBoard';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loggedinSuccess } from './Redux/Slices/AuthSlice';


const App: React.FC = () => {

  const dispatch  = useDispatch();

  useEffect(()=>{
     axios.get("http://localhost:3000/user/persist",{withCredentials:true}).then((response)=>{
         console.log("real data:",response.data)
         dispatch(loggedinSuccess({User:response.data.user,Link:""}))
     })
  },[]);

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
           <Route path='/forgot' element={<Forget/>}/>
           <Route path='/cpass' element={<CreateNewPassword/>}/>
           <Route path='/dash' element={<Dashboard/>}/>
         </Routes>
      </BrowserRouter>
      </div>
  );
};

export default App;
