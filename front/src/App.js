import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import styled from 'styled-components'
import Main from "./page/Main";


function App() {
  return (
    <>
         <Routes>
            <Route path="/"element={<Main />}/> 
            <Route path="/login"element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
         </Routes>
    </>
  );
}




export default App;
