import styled from "styled-components";

export const Content = styled.div`
    padding:50px 5%;
    width: 100%;
    background-color: ${props => props.theme.colors.auxiliar};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin-bottom: 50px;
`
export const FormBasicInformation = styled.div`
    margin: 10px 0 45px 0;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const FormImgArea = styled.div`
    display: flex;
    flex-direction: column;
    width:20%;
    align-items: center;     
`
export const FormSmallSection = styled.div`
    display: flex;
    align-self: flex-end;
    //flex-wrap: wrap;
    gap: 150px;
    margin: 10px 0; 
`


export const ImageDiv = styled.div`
    width: 150px;
    height: 150px;
    border: 1px solid ${props => props.theme.colors.grey};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:5px; 
`
export const PreviewImg = styled.img`
    max-width: 80%;
    max-height: 90%;
`
export const Camera= styled.img`
    width: 60px;
`

export const LabelFile = styled.label`
    padding: 5px 5px 0 5px;
    width: 180px;
    height: 30px;
    color: ${props => props.theme.colors.text};
    font-weight: 600;
    font-size:1.0em;
    text-align:center;
    display: block;
    cursor: pointer;
    display: flex;
    align-items:baseline;
    justify-content: space-around;
    margin-top: 10px;
`

export const FormBasicSection = styled.div`
    margin: 10px 0 45px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`