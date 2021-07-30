import { useState } from 'react';
import { useParams } from 'react-router-dom';
import InputMask from 'react-input-mask'
import ReactLoading from 'react-loading';
import Switch from '@material-ui/core/Switch';
import BlueBtn from '../../../../components/Modulo01/BlueBtn/styles';
import Container from '../../../../components/Modulo01/Container/styles';
import H1 from '../../../../components/Modulo01/H1/styles';
import { Form, FormSection, InputArea, InputName, Label, P, Select } from '../../../../components/Modulo01/Inputs/styles';
import SideArea from '../../../../components/SideArea';

import {
    Content,
    PermisionsList,
    Permision,
} from "./styles"

const AddEmployess = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [area, setArea] = useState("")
    const [cargo, setCargo] = useState("")
    //Permisions
    const [addEmployee, setAddEmployee] = useState(false)
    const [addCompany, setAddCompany] = useState(false)
    const [addRelease, setAddRelease] = useState(false)
    const [addAccount, setAddAccount] = useState(false)
    //
    const [loading, setLoading] = useState(false)

    const { companyName } = useParams()

    const permisions = [
        {
            value: addEmployee,
            handleFunction: setAddEmployee,
            description: "Permitir que o funcionário adicione outros funcionários"
        },
        {
            value: addCompany,
            handleFunction: setAddCompany,
            description: "Permitir que o funcionário adicione outras empresas"
        },
        {
            value: addAccount,
            handleFunction: setAddAccount,
            description: "Permitir que o funcionário adicione contas de uma empresa"
        },
        {
            value: addRelease,
            handleFunction: setAddRelease,
            description: "Permitir que o funcionário adicione lançamentos"
        },
        {
            value: addRelease,
            handleFunction: setAddRelease,
            description: "Permitir que o funcionário adicione lançamentos"
        },
        
        
    ]

    const renderPermisions = permisions.map((permision, index) => {
        const handleChangeValue = (event) => {
            permision.handleFunction(!permision.value);
          };
        return (
            <Permision key={index}>
                <h4>{permision.description}</h4>
                <Switch
                    checked={permision.value}
                    onChange={handleChangeValue}
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </Permision>
        )
    })
    console.log(addEmployee)

    const handleAddEmployee = () => {
        setLoading(true)
        const body = {
            name,
            email,
            cpf,
            companyName,
            area,
            cargo
        }
        console.log(body)
        //setLoading(false)
    }


    return (
        <Container>
            <SideArea />
            <Content>
                <H1>Adicionar Funcionário</H1>
                <Form>
                    <P>Informações Básicas</P>
                    <FormSection>
                        <InputArea>
                            <Label>Nome do funcionário</Label>
                            <InputName value={name} onChange={(e)=> setName(e.target.value)}/>
                        </InputArea>
                        <InputArea>
                            <Label>Email</Label>
                            <InputName value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        </InputArea>
                        <InputArea>
                            <Label>CPF</Label>
                            <InputMask value={cpf} onChange={(e) => setCpf(e.target.value)} mask="999.999.999-99" maskChar="">
                                {() => <InputName />}
                            </InputMask>
                            
                        </InputArea>
                        
                    </FormSection>
                    <FormSection>
                        <InputArea>
                            
                            <Label>Empresa</Label>
                            <InputName value={companyName} readonly disabled/>
                            
                        </InputArea>
                        <InputArea>
                            
                            <Label>Área da empresa</Label>
                            <Select onChange={(e) => setArea(e.target.value)}>
                                <option value="">
                                    Selecionar a area
                                </option>
                                <option value="administrativo">
                                    Administrativo
                                </option>
                                <option value="financeiro">
                                    Financeiro
                                </option>
                            </Select>
                        </InputArea>
                        <InputArea>
                            <Label>Cargo</Label>
                            <Select onChange={(e) => setCargo(e.target.value)}>
                                <option value="">
                                    Selecionar o cargo
                                </option>
                                <option value="diretor">
                                    Diretor
                                </option>
                                <option value="secretario">
                                    Secretário
                                </option>
                            </Select>
                        </InputArea>
                    </FormSection>
                    <P>Permissões</P>
                    <FormSection>
                        <PermisionsList>
                            {renderPermisions}
                        </PermisionsList>
                    </FormSection>
                </Form>
                <BlueBtn onClick={handleAddEmployee}>
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

export default AddEmployess;