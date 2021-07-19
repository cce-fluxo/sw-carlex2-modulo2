import React,{useContext,useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header';
import CarCard from '../../Components/CarCard';
import $ from 'jquery';
import { BgContainer, ButtonDiv, TopContainer,Icon, ButtonTitle, BotContainer,CardContainer, OptionsContainer, HeaderContainer, ModalDiv, WindowText,WindowTitle, DropOptions, FilterContainer } from './styles';
import { Button } from '../../Components/Button/styles';
import SelectFilter from '../../Components/SelectFilter';
import Plus from '../../Assets/plus.svg';
import Lupa from '../../Assets/search.svg';

import MainTitle from '../../Components/MainTitle';
import AuthContext from '../../Storage/auth-context';
import Modal from '../../Components/Modal';
import { modelos,empresas,contratos } from './data';


const Gestao = () => {
  const [test,setTest]=useState('');
  const listagemCarros=JSON.parse(localStorage.getItem('Carros'));
  useEffect(() => {
    sessionStorage.setItem('Filtro','')
    sessionStorage.setItem('CarrosFiltrados',JSON.stringify(listagemCarros))
    return () => {
      
    }
  }, [])
  
  const [window,setWindow]=useState(false)
  const showWindow=()=>{
    setWindow(true)
  }
  const closeWindow=()=>{
    setWindow(false)
    const modelo = $('#modelo div.select-search__value input.select-search__input').val();
    const contrato = $('#contrato div.select-search__value input.select-search__input').val().replace(/\s+/g, '');
    const empresa = $('#empresa div.select-search__value input.select-search__input').val().replace(/\s+/g, '');
    const linha = $('#linha div.select-search__value input.select-search__input').val().replace(/\s+/g, '');
    const status = $('#status div.select-search__value input.select-search__input').val();
    const local = $('#local div.select-search__value input.select-search__input').val();
    const filter={
      'modelo':modelo,'contrato':contrato,'linha':linha,'status':status,'local':local,'empresa':empresa
    }
    sessionStorage.setItem('Filtro',JSON.stringify(filter))
    document.location.reload(true);
  }
  

  const FilterSelection =()=>{
    return(
      <FilterContainer>
        <SelectFilter options={modelos} placeholder='Selecione o modelo' id='modelo'/>
        <SelectFilter options={contratos} placeholder='Selecione o contrato' id='contrato'/>
        <SelectFilter options={empresas} placeholder='Selecione a empresa' id='empresa'/>
        <SelectFilter options={modelos} placeholder='Selecione o linha' id='linha'/>
        <SelectFilter options={modelos} placeholder='Selecione o status' id='status'/>
        <SelectFilter options={modelos} placeholder='Selecione o local' id='local'/>
      </FilterContainer>
    )
  }


  const filter = () =>{
    return(
      <Modal onClose={() => setWindow(false)}>
          <ModalDiv>
            <WindowTitle>Filtro de busca</WindowTitle>
            
            <FilterSelection/>
            <Button onClick={closeWindow}>Filtrar</Button>
          </ModalDiv>
      </Modal>   
 ) 
}

  

  const ctx=useContext(AuthContext);
  
  
    
      if(localStorage.getItem('Carros')===null){
        var renderCard='sem carro'
      }
      else if(sessionStorage.getItem('Filtro')===''){
        //console.log('aaa')
        var renderCard = listagemCarros.map((item,index)=>{
        const adress='gestao/veiculo/'+item.placa
        return(
          <>
          <CarCard adress={adress} index={index} item={item}/>
          </>
      )
      })
      }
      else{
        //console.log('bbb')
        const list=JSON.parse(sessionStorage.getItem('CarrosFiltrados'))
        var renderCard = list.map((item,index)=>{
        const adress='gestao/veiculo/'+item.placa
          return(
            <>
            <CarCard adress={adress} index={index} item={item}/>
            </>
        )
          })
       }
    
    
  


  return (
    <><HeaderContainer>
      <Header active={'Gestão'}/>
      <BgContainer>
        {window?filter():null}
        <TopContainer>
          <MainTitle>Gestão de Frota</MainTitle>
          <OptionsContainer>
          <Link to='gestao/adicionar'><ButtonDiv>
            <Icon src={Plus}/>
            <ButtonTitle>Adicionar veículo</ButtonTitle>
          </ButtonDiv></Link>
          <ButtonDiv onClick={showWindow}>
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
