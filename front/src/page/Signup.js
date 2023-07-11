import React, { useState } from "react";
import styled from 'styled-components'
import Input from "../components/Input";
import Button from "../components/Button";
import { InputContainer, ButtonContainer, MainContainer, WelcomeText } from "../styles/container";
import { LoginWith, HorizontalRule } from "../styles/common";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../styles/Login.css'

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
      const { email, password } = inputs

      const { data, status } = await axios.post('http://192.168.10.12:3000/signup', { username:email, password })

      console.log(status)

      if (status === 201) {
        console.log(data)
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