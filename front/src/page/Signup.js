import React, { useState } from "react";
import styled from 'styled-components'
import Input from "../components/Input";
import Button from "../components/Button";
import { InputContainer, ButtonContainer, MainContainer, WelcomeText } from "../styles/container";
import { LoginWith, HorizontalRule } from "../styles/common";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../styles/Login.css'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'



function Signup() {


    const navigate = useNavigate()
    const [passwordCorrect, setPasswordCorrect] = useState(true)
    console.log(passwordCorrect)


    const [inputs, setInputs] = useState({
        email:'',
        password:'',
        passwordConfirm:''
    })

    const onChange = (e) => {
        const { name, value } = e.target
       
        const nextInputs = {
            ...inputs,
            [name] : value
        }

        setInputs(nextInputs)
    }


    const onSubmit = async () => {
      const { email, password, passwordConfirm } = inputs

      console.log(password, passwordConfirm)

      if (password !== passwordConfirm) {
        setPasswordCorrect(false)
        return
      }

      const { data, status } = await axios.post('http://localhost:3333/api/signup', { username:email, password })

      console.log(status)

      if (status === 201) {
        navigate('/login')
      }
    }

   

    return (  
      <>
      {
        passwordCorrect 
        ?
        <> 
          <MainContainer>
            <WelcomeText>Welcome</WelcomeText>
              <SignUpInputContainer>
                <Input type='text' placeholder='email' name={'email'} onChange={onChange}/>          
                <Input type='password' placeholder='password' name={'password'} onChange={onChange}/>
                <Input type='password' placeholder='passwordConfirm' name={'passwordConfirm'} onChange={onChange}/>
              </SignUpInputContainer>
              <ButtonContainer>
                <Button content={'signup'} onClick={onSubmit}/>
              </ButtonContainer>
              <HorizontalRule/>
              <SignUpLoginWith onClick={() => {navigate('/login')}}>GO to Login?</SignUpLoginWith>
          </MainContainer>
        </>
        :
        <div className="alert" style={{display: 'flex' , flexDirection:'column',justifyContent: 'center', alignItems:'center' , minHeight: '100vh', width:'80vh', margin: '0 auto'}}>
          <Alert status="error">
           <AlertIcon />
            <AlertDescription>Password did not match!</AlertDescription>
            <AlertTitle style={{cursor: 'pointer'}} onClick={() => {window.location.reload()}}>please check your password with passwordConfirm Click Here!</AlertTitle>
          </Alert>
        </div>
      }
      </>
    );
}


const SignUpInputContainer = styled(InputContainer)`
  margin-top: 1rem;
  height: 30%;
`

const SignUpLoginWith = styled(LoginWith)`
  margin-top: 2rem;
  font-size: 1rem;
`




export default Signup;