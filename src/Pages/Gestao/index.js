import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header';
import { BgContainer, ButtonDiv, TopContainer,Icon, ButtonTitle, BotContainer,Card,CardContainer,CardName, OptionsContainer } from './styles';
import Plus from '../../Assets/plus.svg';
import Lupa from '../../Assets/search.svg';
import Car from '../../Assets/car.svg';
import MainTitle from '../../Components/MainTitle';

const Gestao = () => {
  const pacientes = [
    {name:'Renault Fluence',placa:'AAA2021'},
    {name:'Renault Fluence',placa:'AAA2021'},
    {name:'Renault Fluence',placa:'AAA2021'},
    {name:'Renault Fluence',placa:'AAA2021'},
    {name:'Renault Fluence',placa:'AAA2021'},
  ]

  const renderCard = pacientes.map((item,index)=>{
    return(
      <>
        
        <Link to='gestao/veiculo'><Card key={index}>
          <CardName><img src={Car}/><br/>
          {item.name}<p>{item.placa}</p></CardName>
        </Card></Link>
      
      </>
    )
  })


  return (
    <>
      <Header gest={true}/>
      <BgContainer>
        <TopContainer>
          <MainTitle>Gestão de Frota</MainTitle>
          <OptionsContainer>
          <Link to='gestao/adicionar'><ButtonDiv>
            <Icon src={Plus}/>
            <ButtonTitle>Adicionar veículo</ButtonTitle>
          </ButtonDiv></Link>
          <ButtonDiv>
            <Icon src={Lupa} style={{'width':'20%'}}/>
            <ButtonTitle>Filtrar</ButtonTitle>
          </ButtonDiv> </OptionsContainer>
        </TopContainer>
        
          <CardContainer>
            {renderCard}
          </CardContainer>
        

      </BgContainer>
    </>
  )
}

export default Gestao;
