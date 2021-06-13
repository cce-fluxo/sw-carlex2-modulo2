import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import Header from '../../Components/Header';
import { BgContainer,ArrowDiv,Return } from './styles';
import Arrow from '../../Assets/arrow.svg';
import MainTitle from '../../Components/MainTitle';
import { HeaderContainer } from '../Gestao/styles';

export default function InfoCar(){
  const fullUrl=window.location.pathname
  const id=fullUrl.slice(16)
  console.log(id)
  const carros='AAA2021'
  
    if(id === carros){
      console.log('tem')
    }else{
      console.log('n tem')
    }
  
  return(
    <>
    
    <HeaderContainer>
    <Header active={'Gestão'}/>
    <BgContainer>
      <ArrowDiv><Link to='/gestao'><Return src={Arrow} alt='Voltar'/></Link></ArrowDiv>
      <MainTitle>Informações do Veículo</MainTitle>
    </BgContainer>
    </HeaderContainer>
    </>
  )
}