import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Verify from './Components/Auth/Verifyemail';
import Home from './Components/Home/Home';
import Profile from './Components/Profilepage/Profile';
import Forget from './Components/Auth/ForgetPass';
import CreateNewPassword from './Components/Auth/CreateNewPassword';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { checkifLoggedIn, loggedinSuccess } from './Redux/Slices/AuthSlice';
import Dashboard2 from './Components/DashBoard/DashBoard';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';


const App: React.FC = () => {

  const dispatch  = useDispatch();

  useEffect(()=>{
         const allCookies = document.cookie;
         console.log("cookies:",document.cookie.split("=")[1]);
         const cookie = allCookies.split("=").slice(1).join("");
         console.log("cookies:",cookie);
      
     axios.post("http://localhost:3000/user/userdata",{authtoken:cookie},{withCredentials:true}).then((response)=>{
         console.log("real data:",response.data)
         dispatch(loggedinSuccess({User:response.data.user,Link:response.data.presignedurl}))
     }).catch(()=>{dispatch(checkifLoggedIn(false))})
  },[]);

  return (
      <div>
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/Register' element={<Register/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/Verify' element={<Verify/>}/>
           <Route element={<ProtectedRoute/>}>
           <Route path='/profile' element={<Profile/>}/>
           <Route path='/forgot' element={<Forget/>}/>
           <Route path='/cpass' element={<CreateNewPassword/>}/>
           <Route path='/dash' element={<Dashboard2/>}/>
           </Route>
         </Routes>
      </BrowserRouter>
      </div>
  );
};

export default App;
