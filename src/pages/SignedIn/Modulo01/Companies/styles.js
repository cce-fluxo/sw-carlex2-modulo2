import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
    align-self: flex-end;
    &:active, :visited, :link{
        color: ${props => props.theme.colors.text};
    }
    
`

export const AddBtn = styled.button`
    width: 200px;
    height: 40px;
    border-radius: 5px;    
    background-color: ${props => props.theme.colors.blue};
    align-self: flex-end;
    cursor: pointer;
    margin-right: 5px;
    color: ${props => props.theme.colors.text};
    font-weight: 500;
    font-size: 1em;
`


export const Content = styled.div`
    padding:50px 5%;
    width: 100%;
    background-color: ${props => props.theme.colors.auxiliar};
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
   
`