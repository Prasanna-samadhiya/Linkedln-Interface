import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './Pages/Authentication';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';


const App: React.FC = () => {
  return (
      <div> 
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Auth/>}/>
           <Route path='/Register' element={<Register/>}/>
           <Route path='/Login' element={<Login/>}/>
         </Routes>
      </BrowserRouter>
      </div>
  );
};

export default App;
