import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading"
import BlueBtn from '../../../../components/Modulo01/BlueBtn/styles';
import Container from '../../../../components/Modulo01/Container/styles';
import H1 from '../../../../components/Modulo01/H1/styles';
import { Form, FormSection, InputArea, InputName, Label, P, Select } from '../../../../components/Modulo01/Inputs/styles';
import SideArea from '../../../../components/SideArea';

import {Content } from "./styles"

const AddAccount = () => {

    const { companyName } = useParams()
    const [banco, setBanco] = useState("")
    const [agencia, setAgencia] = useState("")
    const [conta, setConta] = useState("")
    const [valorEmConta, setValorEmConta] = useState(0)
    const [mensalidade, setMensalidade] = useState("")
    const [numeroTeds, setNumeroTed] = useState(0)
    const [valorTedAdicional, setValorTedAdicional] = useState(0)
    const [loading, setLoading] = useState(false)
    
    

    const handleAddAccount = () => {
        setLoading(true)
        setTimeout(() =>setLoading(false), 5000)
        const body = {
            companyName
        }
        console.log(body)
    }


    return (
        <Container>
            <SideArea />
            <Content>
                <H1>Adicionar Conta</H1>
                <Form>
                    <P>Informações Básicas</P>
                    <FormSection>
                        {/*<InputArea>
                            <Label>Empresa</Label>
                            <InputName
                                value={companyName}
                                readonly
                                disabled
                            />
                        </InputArea>*/}
                        <InputArea>
                            <Label>Banco</Label>
                            <Select  onChange={(e) => setBanco(e.target.value)}>
                                <option value="">Selecionar o banco</option>
                                <option value="itau">Itaú</option>
                            </Select>
                        </InputArea>
                            
                        <InputArea>
                            <Label>Agência</Label>
                            <InputName
                                value={agencia}
                                onChange={(event) => setAgencia(event.target.value)}
                            />
                        </InputArea>
                        <InputArea>
                            <Label>Conta</Label>
                            <InputName
                                value={conta}
                                onChange={(event) => setConta(event.target.value)}
                            />
                        </InputArea>
                    </FormSection>
                    <FormSection>
                    
                    </FormSection>
                    <P>Informações Adicionais</P>
                    <FormSection>
                        <InputArea>
                            <Label>Mensalidade</Label>
                            <InputName
                                value={mensalidade}
                                onChange={(event) => setMensalidade(event.target.value)}
                            />
                        </InputArea>
                        <InputArea>
                            <Label>Número de Teds por mês</Label>
                            <InputName
                                value={numeroTeds}
                                onChange={(event) => setNumeroTed(event.target.value)}
                            />
                        </InputArea>
                        <InputArea>
                            <Label>Valor por Ted excedente</Label>
                            <InputName
                                value={valorTedAdicional}
                                onChange={(event) => setValorTedAdicional(event.target.value)}
                            />
                        </InputArea>
                    </FormSection>
                </Form>
                <BlueBtn onClick={handleAddAccount}>
                    {
                        loading ?
                            <ReactLoading type="spin" width={20} height={20} color="#fff" />:
                            "Adicionar"
                    }
                </BlueBtn>
            </Content>
        </Container>
    )
}

export default AddAccount;