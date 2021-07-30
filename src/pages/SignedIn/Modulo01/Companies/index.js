import React from 'react'

import {StyledLink, AddBtn, Content, Cards} from "./styles"

import {empresas} from "../../../../data"

import Container from "../../../../components/Modulo01/Container/styles"
import H1 from "../../../../components/Modulo01/H1/styles"
import SideArea from "../../../../components/SideArea/index"
import CompanyCard from '../../../../components/Modulo01/CompanyCard'


const Companies = () => {
    return (
        <Container>
            <SideArea />
            <Content>
                <H1>Empresas</H1>
                <StyledLink to="../adicionar-empresa">
                    <AddBtn>
                        Adicionar Empresa
                    </AddBtn>
                </StyledLink>
                
                <Cards>
                    {empresas.map((empresa, index) => {
                        return (
                            <CompanyCard key={index} company={empresa}/>
                        )
                    })}
                </Cards>
            </Content>
        </Container>
    )
}

export default Companies;