import styled from 'styled-components'


export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  margin-top: 1rem;  
`

export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 35vw;
  
  box-shadow: 0px 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`

// export const GlobalStyle = createGlobalStyle`
//   body {
//     margin:0;
//     padding:0;
//     box-sizing: border-box;
//     background-size: calc(100% + 80px);
//   }
// `;