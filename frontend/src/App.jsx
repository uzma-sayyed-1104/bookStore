import React from 'react';
import Home from './home/Home';

import { Routes,Route, Navigate } from "react-router-dom";
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import Contacts from './Contacts/Contacts';
import {Toaster} from 'react-hot-toast'
import { useAuth } from './context/AuthProvider';


function App() {
   const [authUser, setAuthUser] = useAuth()
    console.log(authUser);
  
  return (
    <>
      
      <div className="dark:bg-slate-900 dark:text-white ">
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/contact" element={<Contacts/> } />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
