import React from 'react';
import { useParams} from 'react-router-dom';
import { TableContainer, TableBody, TableHead } from '@material-ui/core';
import {FaPencilAlt} from "react-icons/fa"

import {
    Content,
    Section,
    SectionContent,
    Accounts,
    StyledT,
    TC,
    TH,
    TableP,
    StyledLink,
    Resume,
    BasicInformations
} from "./styles"

import Container from "../../../../components/Modulo01/Container/styles"
import H1 from "../../../../components/Modulo01/H1/styles"
import SideArea from "../../../../components/SideArea"
import AccountCard from "../../../../components/Modulo01/AccountCard"
import { TR } from '../../../../components/Modulo01/Row/styles';
const Company = () => {
    const { companyName } = useParams()
    const accounts = [
        {
            nome: "Itau",
            saldo: 2000,
            agencia: "1033",
            conta: "22223445"
        },
        {
            nome: "Itau",
            saldo: 2000,
            agencia: "1033",
            conta: "22223445"
        },
        {
            nome: "Itau",
            saldo: 2000,
            agencia: "1033",
            conta: "22223445"
        },
    ]
    const funcionarios = [
        {
            nome: "João Silva",
            setor: "Financeiro",
            cargo: "Secretário",
            telefone: "999034864"
        },
        {
            nome: "João Silva",
            setor: "Financeiro",
            cargo: "Secretário",
            telefone: "999034864"
        },
    ]
    return (
        
        <Container>
            <SideArea />
            <Content>
                <H1>{companyName}</H1>
                <Section>
                    <h3>Resumo</h3>
                    <SectionContent>
                    <StyledLink to={`./${companyName}/editar-conta`}>Editar dados</StyledLink>
                    <BasicInformations>
                        <img alt={`${companyName}`} src="data:image/jpeg;base64,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"/>
                        <Resume>
                        <h4>
                            Razão Social: <span>Carlex - Transportes e Serviços Eireli</span>
                        </h4>
                        <h4>
                            CEP: <span>22470-220</span>
                        </h4>
                        <h4>
                            CNPJ: <span>xxxxxxxxxxxx</span>
                        </h4>
                        <h4>
                            Endereço: <span>Av das Americas, 300, 501</span>
                        </h4>
                        <h4>
                            Total em conta: <span>R$5000,00</span>
                        </h4>
                        <h4>
                            Email: <span>sistema.carlucho@gmail.com</span>
                        </h4>
                        <h4>
                            Número de Carros: <span>30</span>
                        </h4>
                        <h4>
                            Telefone: <span>2222-2222</span>
                        </h4>
                        <h4>
                            Número de funcionários: <span>5</span>
                        </h4>
                        <h4>
                            Site: <span><a href="https://www.google.com/">http://www.Carlex.com.br</a></span>
                        </h4>
                    </Resume>
                    </BasicInformations>
                    </SectionContent>
                   
                </Section>
                <Section>
                    <h3>Contas</h3>
                    
                    <SectionContent>
                    <StyledLink to={`./${companyName}/adicionar-conta`}>Adicionar conta</StyledLink>
                        <Accounts>
                            {accounts.map((account, index) => {
                                return (
                                    <AccountCard key={index} account={account}/>
                                )
                            })}
                        </Accounts>
                    </SectionContent>
                </Section>
                <Section>
                    <h3>Funcionários</h3>
                    <SectionContent>
                        <StyledLink to={`./${companyName}/adicionar-funcionario`}>Adicionar funcionário</StyledLink>
                        <TableContainer>
                            <StyledT>
                                <TableHead>
                                    <TH>
                                        <TC><TableP>Nome</TableP></TC>
                                        <TC><TableP>Setor</TableP></TC>
                                        <TC><TableP>Cargo</TableP></TC>
                                        <TC><TableP>Telefone</TableP></TC>
                                        <TC><TableP></TableP></TC>
                                    </TH>
                                </TableHead>
                                <TableBody>
                                    {funcionarios.map((funcionario, index) => {
                                        return (
                                            <TR key={index} color={index}>
                                                <TC><TableP>{funcionario.nome}</TableP></TC>
                                                <TC><TableP>{funcionario.setor}</TableP></TC>
                                                <TC><TableP>{funcionario.cargo}</TableP></TC>
                                                <TC><TableP>{funcionario.telefone}</TableP></TC>
                                                <TC><button><FaPencilAlt/></button></TC>
                                            </TR>
                                        )
                                    })}
                                </TableBody>
                            </StyledT>
                        </TableContainer>
                    </SectionContent>
                </Section>
            </Content>
        </Container>
    )
}

export default Company;