import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Table, TableContainer, TableBody, TableHead} from '@material-ui/core';

import Search from "../../../../assets/search.svg"
import Calendar from "../../../../assets/calendar.svg"
import Container from "../../../../components/Modulo01/Container/styles"
import SideArea from '../../../../components/SideArea';
import Row from "../../../../components/Modulo01/Row/index"

import { InputArea, InputDate, Label, Select } from '../../../../components/Modulo01/Inputs/styles';
import { Content, TC, TH, TableP, FilterBar, SearchIcon, FilterRight, FilterLeft, AddBar, AddBtn, Categories, Category, TopContent, Title} from './styles';

import { lancamentos } from "../../../../data"
import { Link } from 'react-router-dom';
const RowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
});

const Releases = () => {
    const classeRow = RowStyles();
    return (
        <Container>
            <SideArea />
            <Content>
                <Title>Ver Lançamentos</Title>
                <TopContent>
                    
                    <Categories>
                        <Category selected>Todos</Category>
                        <Category>Receitas</Category>
                        <Category>Despesas</Category>
                    </Categories>
                    <AddBar>
                        <Link to="adicionar-receita">
                            <AddBtn type="receita">Adicionar Receita</AddBtn>
                        </Link>
                        
                        <Link to="adicionar-despesa">
                        <AddBtn type="despesa">Adicionar Despesa</AddBtn>
                        </Link>
                        
                    </AddBar>
                </TopContent>
                <FilterBar>
                    <FilterLeft>
                        <InputArea>
                            <Label>Escolha a data</Label>
                            <InputDate type="date" bg={Calendar} width="180px"/>
                        </InputArea>
                        
                    </FilterLeft>
                    <FilterRight>
                    <InputArea margin="0 20px">
                        <Label>Filtrar por empresas</Label>
                            <Select width="220px">
                            <option>Selecione a empresa</option>
                            <option>Carlex</option>
                            <option>Lochaus</option>
                        </Select>
                    </InputArea>
                    <InputArea margin="0 20px">
                        <Label>Filtrar por categoria</Label>
                        <Select width="220px">
                            <option>Selecione a categoria</option>
                        </Select>
                    </InputArea>
                    <SearchIcon src={Search}/>    

                    </FilterRight>
                        
                </FilterBar>
                <TableContainer>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TH className={classeRow.root}>
                                <TC></TC>
                                <TC><TableP header>Nome</TableP></TC>
                                <TC><TableP header>Natureza</TableP></TC>
                                <TC><TableP header>Empresa</TableP></TC>
                                <TC><TableP header>Valor Total</TableP></TC>
                                <TC><TableP header>Data Vencimento</TableP></TC>
                                <TC><TableP header>Valor Quitado</TableP></TC>
                                <TC><TableP header></TableP></TC>
                                
                                <TC></TC>
                            </TH>
                        </TableHead>
                        <TableBody>
                            {lancamentos.map((row, index) => {
                                return (
                                    <Row key={index} rowIndex={index} row={row} onClick={(e)=> console.log("oi")}/>    
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Content>
        </Container>
    )
}

export default Releases;