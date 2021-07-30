import React from 'react';
import {useState, useEffect} from 'react'
import NumberFormat from 'react-number-format';
import ReactLoading from 'react-loading';
import SideArea from '../../../../components/SideArea/index';
import BlueBtn from "../../../../components/Modulo01/BlueBtn/styles"
import Container from "../../../../components/Modulo01/Container/styles"
import H1 from "../../../../components/Modulo01/H1/styles"
//import TextField from "@material-ui/core/TextField"
import Folder from "../../../../assets/folder.svg"
import Close from "../../../../assets/close.svg"
import Calendar from "../../../../assets/calendar.svg"

import
{Content} from './styles'
import
{
    Label,
    Form,
    FormSection,
    FormGrid,
    InputArea,
    InputName,
    InputDate,
    Select,
    InputValue,
    InputPorcent,
    TextArea,
    InputAreaExternal,
    P,
    InputFile,
    LabelFile,
    FileNameArea,
    FileName,
    FileDiv,
    FileImg,
    CloseImg,
    Required,
} from "../../../../components/Modulo01/Inputs/styles"
//import { Link } from 'react-router-dom';



const AddRelease = ({type}) => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [company, setCompany] = useState('')
    const [expectedValue, setExpectedValue] = useState("")
    const [payedValue, setPayedValue] = useState("")
    const [discount, setDiscount] = useState("")
    const [interest , setInterest] = useState("")
    const [chargedValue, setChargedValue] = useState('0')
    const [obs, setObs] = useState('')
    const [category, setCategory] = useState('')
    const [status, setStatus] = useState('')
    const [payday, setPayDay] = useState('')
    const [formOfPayment, setFormOfPayment] = useState('')
    const [bankAccount, setBankAccount] = useState('')
    const [noteNumber, setNoteNumber] = useState('')
    const [file, setFile] = useState("")
    const [noteCompany, setNoteCompany] = useState("")
    const [loading, setLoading] = useState(false)

    const AddPayment = ( pago ) => {
    
        return(
            <>
                <P>Dados do {type === "despesa" ? "pagamento" : "recebimento"}</P>
                <FormSection>
                        <InputArea>
                        <Label>Valor {type === "despesa" ? "pago" : "recebido"} <Required>*</Required></Label>
                        <NumberFormat placeholder="R$ 0,00" disabled={pago} thousandSeparator="." fixedDecimalScale={true} decimalScale={2} decimalSeparator="," value={pago?calcValue(): payedValue} onChange={(e)=>setPayedValue(e.target.value)} prefix={'R$ '} customInput={InputValue}/>
                        </InputArea>
                        <InputArea>
                            <Label>Data do {type === "despesa" ? "pagamento" : "recebimento"} <Required>*</Required></Label>
                        <InputDate bg={Calendar} value={payday} type="date" onChange={(e) => setPayDay(e.target.value)}/>
                        </InputArea>
                        <InputArea>
                            <Label>Forma de {type === "despesa" ? "pagamento" : "recebimento"} <Required>*</Required></Label>
                            <Select value={formOfPayment} onChange={(e) => setFormOfPayment(e.target.value)}>
                                <option value="">Selecione forma de {type === "despesa" ? "pagamento" : "recebimento"}</option>
                                <option value="ted">Ted</option>
                                <option value="pix">Pix</option>
                            </Select>
                        </InputArea>
                    </FormSection>
                    <FormSection>
                        <InputArea>
                            <Label>Conta<Required>*</Required></Label>
                            <Select value={bankAccount} onChange={(e) => setBankAccount(e.target.value)}>
                                <option value="">Selecione a conta</option>
                                <option value="itau">Itau</option>
                                <option value="nubank">Nubank</option>
                            </Select>
                        </InputArea>
                        <InputArea>
                            <Label>Número da nota<Required>*</Required></Label>
                        <InputValue value={noteNumber} onChange={(e) => setNoteNumber(e.target.value)}/>
                    </InputArea>
                    <InputArea>
                        <Label>Empresa emissora da nota<Required>*</Required></Label>
                            <Select onChange={(e)=> setNoteCompany(e.target.value)} value={noteCompany}>
                                <option value="">
                                    Selecionar a empresa
                                </option>
                                <option value="carlex">
                                    Carlex
                                </option>
                                <option value="lochaus">
                                    Lochaus
                                </option>
                        </Select>
                        </InputArea>
                        
                </FormSection>
                <P>Arquivo</P>
                <FormGrid>
                <InputArea>
                            <Label>Comprovante de {type === "despesa" ? "pagamento" : "recebimento"}</Label>
                        <FileDiv>
                            <LabelFile htmlFor="file">
                                <FileImg alt="arquivo" src={Folder}/>
                                Escolher arquivo
                            </LabelFile>
                            <InputFile multiple id="file" name="file" value={file} onChange={(e) => setFile(e.target.value)} type="file"/>
                            <FileNameArea file={file !== ""}>
                                {file !=="" ?
                                    <FileName>
                                        {file.slice(12,)}
                                        <CloseImg onClick={(e) => setFile("")} src={Close} alt="fechar"/>
                                    </FileName> :
                                    "Nenhum arquivo selecionado"
                                }
                            </FileNameArea>
                       </FileDiv>
                        </InputArea>
                </FormGrid>
                </>
            )
    }
    
    
  const validPorcent= (inputObj) => {
    const { value } = inputObj;
    if (value <= 100) return inputObj;
  };
    
    const handleSubmit = () =>
    {
        setLoading(true)
        const data =
        {
            name: name,
            date: date,
            company: company,
            expectedValue: expectedValue,
            discount: discount,
            interest: interest,
            obs: obs,
            category: category,
            status: status
        }
        const paymentDetails = {
            payedValue: payedValue,
            bankAccount: bankAccount,
            noteNumber: noteNumber,
            file: file,
            payday: payday,
            formOfPayment: formOfPayment,
            noteCompany: noteCompany
        }
        console.log(data, paymentDetails)
        //setLoading(false)
    }
/*
    const handleFile = (e) => {
        console.log(e.target)
        setFile(e.target)
    }*/
    const calcValue = () => {
        const value = parseFloat(expectedValue.slice(2, expectedValue.length).replace(".", "").replace(",", "."))
        const discountValue = parseFloat(discount.slice(0, discount.length-1).replace(",", "."))
        if (isNaN(value))
        {
            return ""
        }
        if (isNaN(discountValue)) {
            console.log(discountValue)
            return(value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
        }
        return(value*(1-discountValue/100)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    useEffect(() => {
        const calcValue = () => {
            const value = parseFloat(expectedValue.slice(2, expectedValue.length).replace(".", "").replace(",", "."))
            const discountValue = parseFloat(discount.slice(0, discount.length-1).replace(",", "."))
            if (isNaN(value))
            {
                return ""
            }
            if (isNaN(discountValue)) {
                console.log(discountValue)
                return(value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
            }
            return(value*(1-discountValue/100)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }
        setChargedValue(calcValue())
    }, [discount, expectedValue])

    return (
        <Container>
            <SideArea />
            <Content key={'Content'}>
            
                <H1>Adicionar {type === "despesa" ? "Despesa" : "Receita"}</H1>
                <Form>
                    <P>Informações Básicas</P>
                    <FormSection>
                    
                        <InputArea>
                            <Label>Nome da {type === "despesa" ? "Despesa" : "Receita"} <Required>*</Required></Label>
                            <InputName value={name} onChange={(e) => setName(e.target.value)} maxLength={30} />
                        </InputArea>
                        <InputArea>
                            <Label>Data da {type === "despesa" ? "Despesa" : "Receita"} <Required>*</Required></Label>
                            <InputDate bg={Calendar} type="date" onChange={(e) => setDate(e.target.value)} />
                            
                        </InputArea>
                        <InputArea>
                        <Label>Empresa <Required>*</Required></Label>
                            <Select onChange={(e)=> setCompany(e.target.value)}>
                                <option value="">
                                    Selecionar a empresa
                                </option>
                                <option value="carlex">
                                    Carlex
                                </option>
                                <option value="lochaus">
                                    Lochaus
                                </option>
                            </Select>
                        </InputArea>
                    </FormSection>
                    <P>Valores</P>
                    <FormSection>
                        <InputArea>
                            <Label>Valor esperado <Required>*</Required></Label>
                            <NumberFormat placeholder="R$ 0,00" thousandSeparator="." fixedDecimalScale={true} decimalScale={2} decimalSeparator="," value={expectedValue} onChange={(e)=> setExpectedValue(e.target.value)} prefix={'R$ '} customInput={InputValue}/>
                        </InputArea>

                        <InputArea>
                            <Label>Desconto</Label>
                            <NumberFormat value={discount} isAllowed={validPorcent} placeholder="0,0%" onChange={e => setDiscount(e.target.value)} customInput={InputPorcent} suffix="%" decimalScale={1} decimalSeparator="," />
                                
                            
                        </InputArea>
                        <InputArea>
                            <Label>Juros</Label>
                            <NumberFormat placeholder="0,0%" isAllowed={validPorcent} value={interest} onChange={e => setInterest(e.target.value)} customInput={InputPorcent} suffix="%" decimalScale={1} decimalSeparator="," />
                        </InputArea>
                        <InputArea>
                        <Label>Valor Calculado</Label>
                            <InputValue placeholder="R$ 0,00" value={chargedValue} readOnly/>
                        </InputArea>
                    </FormSection>
                    <P>Complementos</P>
                    <FormSection>

                        <InputArea>
                            <Label>Descrição</Label>
                            <TextArea value={obs} onChange={(e) => setObs(e.target.value)} maxLength={690}></TextArea>
                        </InputArea>
                        <InputAreaExternal>
                        <InputArea>
                            <Label>Selecione a categoria <Required>*</Required></Label>
                            <Select onChange={(e) => setCategory(e.target.value)}>
                                <option>Selecione a categoria</option>
                            </Select>
                        </InputArea>
                        <InputArea>
                            <Label>Data do vencimento <Required>*</Required></Label>
                                <InputDate bg={Calendar} type="date" onChange={(e) => setDueDate(e.target.value)} value={dueDate}/>
                        </InputArea>    
                        <InputArea>
                            <Label>Status do {type === "despesa" ? "pagamento" : "recebimento"} <Required>*</Required></Label>
                            <Select onChange={(e) => setStatus(e.target.value)}>
                                    <option value="">Selecione o status</option>
                                    <option value={type === "despesa" ? "pago" : "recebido"}>{type === "despesa" ? "Pago" : "Recebido"}</option>
                                    <option value="parcialmente">{type === "despesa" ? "Pago" : "Recebido"} Parcialmente</option>
                                    <option value={type === "despesa" ? "naopago" : "naorecebido"}>Não {type === "despesa" ? "Pago" : "Recebido"}</option>
                            </Select>
                                
                        </InputArea>    
                        </InputAreaExternal>
                       
                    </FormSection>
                    {status === "pago" || status === "recebido" ? AddPayment(1): status === "parcialmente" ? AddPayment() : null}
                </Form>
                <BlueBtn onClick={handleSubmit}>
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

export default AddRelease;