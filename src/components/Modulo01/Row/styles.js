import styled from 'styled-components';
import {TableRow, TableCell, Typography, TextField, Select } from '@material-ui/core';

export const TR = styled(TableRow)`
    background-color: ${props => props.color % 2 ? props.theme.colors.border : props.theme.colors.lightDark};
    border-bottom: unset;
    
`

export const TH = styled(TableRow)`
    background-color: ${props => props.theme.colors.blue};
`
export const TC = styled(TableCell)`
    align-items: "flex-end";
    padding: ${props => props.empty? "4px": null};
`
export const TableP = styled.p`
   color: ${props => props.natureza === "despesa" ?
    props.theme.colors.red : props.natureza === "receita" ?
        props.theme.colors.green :
        props.theme.colors.text};
    font-size: 1.1em;
    text-align: end;
    white-space: nowrap;
    cursor: ${props => props.pointer ? "pointer" : "default"};
`

export const Historico = styled(Typography)`
    color: ${props => props.theme.colors.text};
`

export const ModalContainer = styled.div`
    width: 500px;
    background-color: #fff;
    margin: 80px auto;
    border-radius: 5px;
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
`

export const ModalName = styled.h2` 
`

export const Form = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;
`

export const Input = styled(TextField)`
    width: 180px;
    margin: 5px 0;
`

export const SelectInput = styled(Select)`
    width: 180px;
`


export const Btn = styled.button`
    background-color: ${props => props.color === "red" ? props.theme.colors.red : props.theme.colors.green};
    color: ${props => props.theme.colors.text};
    margin: 20px 15px 0 15px;
    width: 100px;
    height: 35px;
    font-weight: bold;
    border-radius: 5px;
    align-self: center;
    cursor: pointer;
`
export const DivBtn = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

export const FormSection = styled.div`
    display: flex;
    width: 400px;
    justify-content: space-between;
`

export const InputFile = styled.input`
    display: none;
`

export const LabelFile = styled.label`
    padding: 5px 5px 0 5px;
    width: 160px;
    height: 30px;
    align-self: center;
    //background-color: ${props => props.theme.colors.blue};
    //border-bottom: 2px solid ${props => props.theme.colors.blue};
    //border-radius: 5px;
    color: ${props => props.theme.colors.grafite};
    font-weight: 600;
    font-size:1.2em;
    text-align:center;
    display: block;
    cursor: pointer;
    display: flex;
    align-items:baseline;
    justify-content: space-around;
    margin-top: 10px;
`

export const FileNameArea = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    min-height: 40px;
    color: red;
    white-space: nowrap;
`
export const FileName = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props=>props.theme.colors.lightBlue};
    font-size: 1.2em;

    padding: 0 20px;
    height: 40px;
    border-radius: 5px;
    color: ${props => props.theme.colors.text};
    &:hover{
        background-color: ${props=>props.theme.colors.mediumBlue};
    }
`

export const FileDiv = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-self: center;
    
`

export const FileImg = styled.img`
    width: 20px;
    transform: rotateZ(90deg);
`

export const ModalTop = styled.div`
    background-color: ${props => props.theme.colors.mediumBlue};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: 80px;
`

export const ModalTitle = styled.h2`
    margin-left: 20px;
    color: ${props => props.theme.colors.text};
`

export const StatusImg = styled.img`
    width: 18px;
    margin-right: 5px;
`

export const StatusDiv = styled.span`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`