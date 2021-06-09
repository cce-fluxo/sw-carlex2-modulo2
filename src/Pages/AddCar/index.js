import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header';
import { BgContainer,ArrowDiv,Return, InnerContainerBg } from './styles';
import Arrow from '../../Assets/arrow.svg';
import MainTitle from '../../Components/MainTitle';
import { Input,InputDiv,InputTitle, DropOptions } from '../../Components/Input/styles';
import { Button } from '../../Components/Button/styles';

export default function AddCar(){

  return(
    <>
    <Header gest={true}/>
    <BgContainer>
      <ArrowDiv><Link to='/gestao'><Return src={Arrow} alt='Voltar'/></Link></ArrowDiv>
      <MainTitle>Adicionar Veículo</MainTitle>
      <span style={{'margin-bottom':'40px'}}></span>
        <InputDiv>
          <InputTitle>Modelo</InputTitle>
          <Input/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Renavam</InputTitle>
          <Input/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Placa</InputTitle>
          <Input/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Final de Placa</InputTitle>
          <Input/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Status</InputTitle>
          <Input/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Local</InputTitle>
          <Input/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Empresa</InputTitle>
          <DropOptions>
            <option disabled hidden selected ></option>
            <option  >Empresa 1</option>
            <option >Empresa 2</option>
            <option >Empresa 3</option>
          </DropOptions>
        </InputDiv>
        <InputDiv>
          <InputTitle>Contrato</InputTitle>
          <DropOptions>
            <option disabled hidden selected ></option>
            <option  >Contrato 1</option>
            <option >Contrato 2</option>
            <option >Contrato 3</option>
          </DropOptions>
        </InputDiv>
        <InputDiv>
          <InputTitle>Rodando na Linha</InputTitle>
          <DropOptions>
            <option disabled hidden selected ></option>
            <option  >Linha 1</option>
            <option >Linha 2</option>
            <option >Linha 3</option>
          </DropOptions>
        </InputDiv>
        <Button>Adicionar</Button>
        
      
    </BgContainer>

    </>

  )
}