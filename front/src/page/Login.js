import React, { useState } from "react";
import styled from 'styled-components'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import Input from '../components/Input'
import Button from "../components/Button";
import Icon from "../components/Icon";
import { InputContainer, ButtonContainer, IconContainer, MainContainer, WelcomeText } from "../styles/container";
import { LoginWith, HorizontalRule } from "../styles/common";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/Login.css'

function Login() {

    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        email:'',
        password:''
    })

    const onChange = (e) => {
        const {name, value} = e.target

        const nextInputs = {
            ...inputs,
            [name] : value
        }

        setInputs(nextInputs)
    }

    const onSubmit =  async () => {

        const { email, password } = inputs

        const { data, status } = await axios.post('http://localhost:3333/api/signin', {username:email, password})

        console.log(status)

        if (status === 200) {
          console.log(data)
          localStorage.setItem('token', data.token)
        }
        
    }

    return ( 
        <MainContainer>
          <WelcomeText>welcome</WelcomeText>
        <InputContainer>
          <Input type='text' placeholder='email' name={'email'} onChange={onChange}/>          
          <Input type='password' placeholder='password' name={'password'} onChange={onChange}/>
        </InputContainer>
        <ButtonContainer>
          <Button content={'login'} onClick={onSubmit}/>
        </ButtonContainer>
        <LoginWith>or Login with</LoginWith>
        <HorizontalRule/>
        <IconContainer> 
          <Icon> 
            <FaFacebookF />
          </Icon>
          <Icon> 
            <FaInstagram />
          </Icon>
          <Icon> 
            <FaTwitter />
          </Icon>
        </IconContainer>
        <ForgotPassword onClick={() => {navigate('/signup')}}>Go to Signup?</ForgotPassword>
        </MainContainer>
     );
}


const ForgotPassword = styled.h4`
  cursor: pointer;
`

export default Login;