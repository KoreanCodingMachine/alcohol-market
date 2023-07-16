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

      if (password !== passwordConfirm) {
        return (
         <Alert status="error">
          <AlertIcon />
          <AlertTitle>Your browser is outdated!</AlertTitle>
          <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
         </Alert>
         )}

      const { data, status } = await axios.post('http://localhost:3333/api/signup', { username:email, password })

      console.log(status)

      if (status === 201) {
        navigate('/login')
      }
    }

   

    return (  
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