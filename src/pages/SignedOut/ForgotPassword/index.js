import React from 'react';
import {useState} from "react"
import Modal from "@material-ui/core/Modal"
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import
{
    Container,
    LogoLogin,
    H1,
    Form,
    InputLogin,
    P,
    ErrorMsg,
    H3,
    ModalContainer,
    ModalTitle,
    ModalMsg
} from "./styles";

import BlueBtn from "../../../components/Modulo01/BlueBtn/styles"

import Logo from "../../../assets/logo.svg"
import UserLogin from "../../../assets/userLogin.svg"



const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            console.log(email)
            setError(false)
        }
        catch {
            setError(true) 
        }
        //setLoading(false)        
        setOpen(true)

        
    }

    const handleClose = () => {
        setOpen(false)
    }

    const ModalChildren = () => {
        return(
            <ModalContainer>
                <ModalTitle>
                    {error? "Email não cadastrado": "Email Enviado com sucesso"}
                    
                </ModalTitle>
                <ModalMsg>
                    {error ?
                        "O email informado não está cadastrado, por favor tente novamente":
                        "Confira sua caixa de email e siga os procedimentos indicados para recuperar sua senha"
                    }
                    
                </ModalMsg>
            </ModalContainer>
        )
    }


    return (
        
        <Container>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
            {ModalChildren()}
            </Modal>
            <LogoLogin src={Logo} alt="GC"/>
            <H1>Recuperar Senha</H1>
            <Form>
                <P>Informe seu email para podermos enviar as informações referentes a recuperação de sua senha</P>
                <InputLogin placeholder="Email" background={UserLogin} value={email} onChange={(e) => setEmail(e.target.value)} />
                <ErrorMsg>
                    {error?
                        "Email não encontrado":""
                    }
                    </ErrorMsg>
            </Form>
            <BlueBtn onClick={(e) => handleSubmit(e)}>
            {loading ?
                    <ReactLoading type="spin" color="#fff" height={25} width={25} /> :
                    "Recuperar"
                }
            </BlueBtn>
            <Link to="/">
                <H3>Retornar para o login</H3>
            </Link>
           
            
        </Container>
    )

}

export default ForgotPassword