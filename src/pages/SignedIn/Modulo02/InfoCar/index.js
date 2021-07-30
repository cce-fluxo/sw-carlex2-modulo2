import React,{useContext,useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
import Header from '../../../../components/Modulo02/Header';
import { BgContainer,ArrowDiv,Return } from './styles';
import Arrow from '../../../../assets/arrow.svg';
import MainTitle from '../../../../components/Modulo02/MainTitle';
import { HeaderContainer } from '../Gestao/styles';
import { Input, InputDiv, InputTitle,DropOptions } from '../../../../components/Modulo02/Input/styles';
import CarContext from '../../../../contexts/CarContext';
import { ButtonDiv, ButtonSmall } from '../../../../components/Modulo02/Button/styles';

export default function InfoCar(){
  const fullUrl=window.location.pathname
  const id=fullUrl.slice(16)
  const ctx= useContext(CarContext);
  const carObject=ctx.carInfo(id)
  const [formIsValid, setFormIsValid] = useState(false);
  const [empresa,setEmpresa]=useState(carObject.empresa);
  const [contrato,setContrato]=useState(carObject.contrato);
  const [linha,setLinha]=useState(carObject.linha);
  

  const changeEmpresa=()=>{
    setEmpresa(document.getElementById('empresa_id').value);
    
  }

  const changeContrato=()=>{
    setContrato(document.getElementById('contrato_id').value);
    
  }

  const changeLinha=()=>{
    setLinha(document.getElementById('linha_id').value);
    
  }

  const removeHandler=()=>{
    ctx.onRemove(id)

  }

  return(
    <>
    
    <HeaderContainer>
    <Header active={'Gestão'}/>
    <BgContainer>
      <ArrowDiv><Link to='/gestao'><Return src={Arrow} alt='Voltar'/></Link></ArrowDiv>
      <MainTitle>Informações do Veículo</MainTitle>
      <InputDiv>
        <InputTitle>Modelo:</InputTitle>
        <Input value={carObject.modelo} disabled/>
      </InputDiv>
      <InputDiv>
        <InputTitle>Placa:</InputTitle>
        <Input value={carObject.placa} disabled/>
      </InputDiv>
      <InputDiv>
        <InputTitle>Final de placa:</InputTitle>
        <Input value={carObject.final} disabled/>
      </InputDiv>
      <InputDiv>
        <InputTitle>Status:</InputTitle>
        <Input placeholder={carObject.status}/>
      </InputDiv>
      <InputDiv>
        <InputTitle>Local:</InputTitle>
        <Input placeholder={carObject.local}/>
      </InputDiv>
      <InputDiv>
          <InputTitle>Empresa</InputTitle>
          <DropOptions id='empresa_id' value={empresa} onChange={changeEmpresa}>
            <option id='empresa0' disabled hidden selected ></option>
            <option value='empresa1' >Empresa 1</option>
            <option value='empresa2'>Empresa 2</option>
            <option value='empresa3'>Empresa 3</option>
          </DropOptions>
        </InputDiv>
        <InputDiv>
          <InputTitle>Contrato</InputTitle>
          <DropOptions id='contrato_id' value={contrato} onChange={changeContrato}>
            <option  disabled hidden selected ></option>
            <option value='contrato1' >Contrato 1</option>
            <option value='contrato2'>Contrato 2</option>
            <option value='contrato3'>Contrato 3</option>
          </DropOptions>
        </InputDiv>
        <InputDiv>
          <InputTitle>Rodando na Linha</InputTitle>
          <DropOptions id='linha_id' value={linha} onChange={changeLinha}>
            <option  disabled hidden selected ></option>
            <option  value='linha1'>Linha 1</option>
            <option value='linha2'>Linha 2</option>
            <option value='linha3'>Linha 3</option>
          </DropOptions>
        </InputDiv>
        <ButtonDiv>
          <Link to='/gestao'><ButtonSmall type='save' >Salvar</ButtonSmall></Link>
          <Link to='/gestao'><ButtonSmall onClick={removeHandler}>Excluir</ButtonSmall></Link>
        </ButtonDiv>
    </BgContainer>
    
    </HeaderContainer>
    </>
  )
}