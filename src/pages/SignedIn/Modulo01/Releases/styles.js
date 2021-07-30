import styled from 'styled-components';
import {TableRow, TableCell} from '@material-ui/core';

export const Content = styled.div`
    width: 100%;
    background-color: ${props=>props.theme.colors.auxiliar};
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:60px 10%;
`


export const TH = styled(TableRow)`
    background-color: ${props => props.theme.colors.blue};
`
export const TC = styled(TableCell)`
    align-items: "flex-end";
    padding: ${props => props.empty? "4px": null};
`
export const TableP = styled.p`
   color: ${props => props.natureza==="despesa"?'#C64242':props.natureza==="receita"?"#359533": props.theme.colors.text};
    font-size: 1.1em;
    text-align: end;
    white-space: nowrap;
`

export const FilterBar = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 30px;
    align-items: center;
    display: flex;
    justify-content: space-between;
`
export const FilterLeft = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FilterRight = styled.div`
    display: flex;
    justify-content: space-between;
`

export const SearchIcon = styled.img`
    margin-top:8px;
    border-radius: 80%;
    padding: 5px;
    margin-left: 10px;
    transition: background-color 2s;
    cursor: pointer;
    &:hover{
        background-color: ${props=> props.theme.colors.blue};
    }
    
`
export const AddBar = styled.div`
    align-self: flex-end;
    display: flex;
    justify-content: space-between;
    align-items:center;
`

export const AddBtn = styled.button`
    padding: 10px;
    margin: 0 15px;
    color: ${props => props.theme.colors.text};
    font-weight: 400;
    font-size: .9em;
    border-radius: 5px;
    background-color: ${props => props.type === "despesa" ? "#C64242" : "#359533"};
    cursor: pointer;
    transition: opacity 1s;
    &:hover{
        opacity: .7;
    }
`

export const Categories = styled.ul`
    color: ${props => props.theme.colors.text};
    border: 1px solid ${props => props.theme.colors.grafite};
    display: flex;
`

export const Category = styled.li`
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    background-color: ${props => props.selected ? props.theme.colors.blue : null};
    transition: background-color 2s, opacity 2s;
    
    &:hover{
        background-color: ${props => !props.selected ? props.theme.colors.lightBlue : null};
        opacity: ${props => !props.selected ? 0.7 : null};
        
    }
`

export const TopContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-bottom: 50px;
`

export const Title = styled.p`
    align-self: flex-start;
    margin-bottom: 10px;
    color:${props => props.theme.colors.text};
`