import styled from "styled-components"

export const Container = styled.div`
    max-width: 100vw;
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
    color: ${props => props.theme.colors.text};

`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`

export const InputLogin = styled.input`
    padding-left: 30px;
    font-size: 1em;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    color: ${props => props.theme.colors.text};
    font-weight: 500;
    background-color: rgb(51, 51, 51);
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: 17px;
    background-position: 7px 45%;
    margin-top: 15px;

`

export const H3 = styled.h3`
    font-size: 1em;
    padding: 0 10px 3px 10px;
    margin-top: 20px;
    color: ${props => props.theme.colors.text};
    border-bottom: 1px solid ${props => props.theme.colors.text};
`
export const ErrorMsg = styled.p`
    color: red;
    height: 16px;
    margin-top: 10px;
`