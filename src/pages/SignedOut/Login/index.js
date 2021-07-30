import React from 'react';
import { useState } from "react"
import ReactLoading from 'react-loading';

import
{
    Container,
    LogoLogin,
    H1,
    Form,
    InputLogin,
    H3,
    ErrorMsg
} from "./styles";

import BlueBtn from "../../../components/Modulo01/BlueBtn/styles"

import Logo from "../../../assets/logo.svg"
import UserLogin from "../../../assets/userLogin.svg"
import Locker from "../../../assets/locker.svg"
import { Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';



const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [loginError, setLoginError] = useState(false)
    const {signIn} = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { email: email, password: password }
        signIn(data, setLoading, setLoginError)
        
    }


    return (
        
        <Container>
            <LogoLogin src={Logo} alt="GC"/>
            <H1>Acessar sua conta</H1>
            <Form>
                <InputLogin placeholder="Email" background={UserLogin} value={email} onChange={(e) => setEmail(e.target.value)}/>
                <InputLogin placeholder="Senha" type="password" background={Locker} value={password} onChange={(e) => setPassword(e.target.value)}/>
                <ErrorMsg>
                    {loginError? "Email e/ou senha inválidos": ""}
                </ErrorMsg>
            </Form>
            <BlueBtn onClick={e => handleSubmit(e)}>
                {loading ?
                    <ReactLoading type="spin" color="#fff" height={25} width={25} /> :
                    "Entrar"
                }
                
            </BlueBtn>
            <Link to="/esqueci-senha">
                <H3>Recuperar senha</H3>
            </Link>
            
        </Container>
    )

}

export default Login