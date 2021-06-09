import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header';
import { BgContainer,ArrowDiv,Return } from './styles';
import Arrow from '../../Assets/arrow.svg';
import MainTitle from '../../Components/MainTitle';

export default function InfoCar(){

  return(
    <>
    <Header gest={true}/>
    <BgContainer>
      <ArrowDiv><Link to='/gestao'><Return src={Arrow} alt='Voltar'/></Link></ArrowDiv>
      <MainTitle>Informações do Veículo</MainTitle>
    </BgContainer>
    </>
  )
}