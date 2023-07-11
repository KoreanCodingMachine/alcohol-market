import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import styled from 'styled-components'
import Main from "./page/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Navbar />
         <Routes>
            <Route path="/"element={<Main />}/> 
            <Route path="/login"element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
         </Routes>
        <STFooter />
    </>
  );
}


const STFooter = styled(Footer)`
  position:absolute;
  bottom:0;
`


export default App;
