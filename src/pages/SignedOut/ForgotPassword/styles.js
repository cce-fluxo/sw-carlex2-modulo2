import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    //border: 1px solid black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const LogoLogin = styled.img`
    margin-bottom: 30px;
    width: 140px;
`

export const H1 = styled.h1`
    font-size: 2em;
    margin-bottom: 30px;
    padding: 5px 15px;
    border-bottom: 3px solid ${props => props.theme.colors.blue};
    color: ${props =>  props.theme.colors.text};

`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`

export const InputLogin = styled.input`
    padding-left: 30px;
    font-size: 1.0em;
    color: ${props =>  props.theme.colors.text};
    font-weight: bold;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    background-color: rgb(51, 51, 51);
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: 17px;
    background-position: 7px 45%;
    margin: 15px 0;

`
export const P = styled.p`
    color: ${props =>  props.theme.colors.text};
    width: 300px;
    font-size: 1.1em;
    text-align: center;
    margin-bottom: 10px;

`
export const ErrorMsg = styled.p`
    color: red;
    height: 16px;
`

export const H3 = styled.h3`
    font-size: 1em;
    padding: 0 10px 3px 10px;
    margin-top: 20px;
    color: ${props =>  props.theme.colors.text};
    border-bottom: 1px solid ${props =>  props.theme.colors.text};
`

export const ModalContainer = styled.div`
    width: 500px;
    height: 200px;
    margin: 200px auto;
    border-radius: 20px;
    background-color: ${props =>  props.theme.colors.text};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ModalTitle = styled.h2`
    font-size: 1.5em;
    
`
export const ModalMsg = styled.p`
    width: 70%;
    font-size: 1.1em;
    text-align: center;
    margin-top: 20px;
`

export const CloseBtn = styled.img`
    cursor: pointer;
    position: relative;
    right: -100px;
    width: 35px;
`