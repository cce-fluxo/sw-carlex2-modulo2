import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header';
import { BgContainer, ButtonDiv, TopContainer,Icon, ButtonTitle, BotContainer,Card,CardContainer,CardName, OptionsContainer, HeaderContainer } from './styles';
import Plus from '../../Assets/plus.svg';
import Lupa from '../../Assets/search.svg';
import Car from '../../Assets/car.svg';
import MainTitle from '../../Components/MainTitle';
import AuthContext from '../../Storage/auth-context';

const Gestao = () => {
  const ctx=useContext(AuthContext);
  
  const listagemCarros=JSON.parse(localStorage.getItem('Carros'));
  //console.log(listagemCarros)
  
    
      if(localStorage.getItem('Carros')===null){
        var renderCard='sem carro'
      }
      else{
        var renderCard = listagemCarros.map((item,index)=>{
        const adress='gestao/veiculo/'+item.placa
        return(
          <>
            <Link to={adress}><Card key={index}  >
              <CardName><img src={Car}/><br/>
              {item.modelo}<p>{item.placa}</p></CardName>
            </Card></Link>
          
          </>
      )
      })
      }
    
    
  


  return (
    <><HeaderContainer>
      <Header active={'Gestão'}/>
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
      </HeaderContainer>
    </>
  )
}

export default Gestao;
