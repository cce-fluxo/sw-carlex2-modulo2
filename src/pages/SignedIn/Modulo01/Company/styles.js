import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Table, TableCell, TableRow } from '@material-ui/core';

export const Content = styled.div`
    width: 100%;
    background-color: ${props=>props.theme.colors.auxiliar};
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:50px 0;
`

export const Section = styled.div`
    width: 90%;
    margin: 0 auto 20px;
    display:flex;
    flex-direction: column;
    color: ${props => props.theme.colors.text};
    
    
    >h3{
        border-bottom: 1px solid grey;
        padding: 5px;
       
    }
`

export const SectionContent = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;

`
export const BasicInformations = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    align-items:center;
    width: 90%;
    margin: 0 auto;
    img{
        width: 200px;
    }
`
export const Resume = styled.div`
    margin: 20px 0;
    display: grid;
    grid-template-columns: auto auto;
    grid-row-gap: 10px;
    grid-column-gap: 80px;
    h4{
        display: inline;
    }
    span{
        margin-left: 10px;
    }
    a, a:active, a:link, a:hover{
        color: ${props => props.theme.colors.mediumBlue}
    }
    
`
export const Accounts = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`
export const StyledT = styled(Table)`
    width: 60% !important;
    margin: 0 auto;
    border-radius: 50px;
`
export const TH = styled(TableRow)`
    background-color: ${props => props.theme.colors.blue};
`
export const TC = styled(TableCell)`
    display:flex;
    justify-content:center;
    align-items: center;
    padding: ${props => props.empty ? "4px" : null};
    border-bottom:0 !important;
    button{
        background: transparent;
        cursor: pointer;
        color: ${props=>props.theme.colors.text};
    }
`
export const TableP = styled.p`
   color: ${props => props.natureza==="despesa"?'#C64242':props.natureza==="receita"?"#359533": props.theme.colors.text};
    font-size: 1.1em;
    text-align: start;
    white-space: nowrap;
`


export const TR = styled(TableRow)`
    background-color: ${props => props.color % 2 ? props.theme.colors.border : props.theme.colors.lightDark};
    border-bottom: none;
    
`

export const StyledLink = styled(Link)`
    align-self: flex-end;
    width: 200px;
    height: 35px;
    border-radius: 5px;
    display:flex;
    align-items:center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    background-color: ${props => props.theme.colors.mediumBlue};
    &:hover{
        filter: brightness(0.8);
    }
    &:active, :visited, :link{
        color: ${props => props.theme.colors.text};
    }
    
`