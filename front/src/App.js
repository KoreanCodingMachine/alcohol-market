import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Main from "./page/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styled from 'styled-components';


const theme = {
  backgrounds: {
    main: 'none', // 메인 페이지 백그라운드 스타일
    login: 'url("login-background.jpg")', // 로그인/회원가입 페이지 백그라운드 이미지
  }
};


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
