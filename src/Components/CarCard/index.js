import { contains } from 'jquery';
import React from 'react';
import {Link} from 'react-router-dom';
import Car from '../../Assets/car.svg';
import {Card,CardName} from './styles';

export default function CarCard({adress,ind,item}){
  if(sessionStorage.getItem('Filtro')!==''){
    const filtroSession = JSON.parse(sessionStorage.getItem('Filtro'))
    const oldList=JSON.parse(sessionStorage.getItem('CarrosFiltrados'))
    const index = oldList.findIndex(x => x.placa ===item.placa);
    Object.entries(filtroSession).forEach(([key, value]) => {
      //console.log(`${key}: ${value}`)
      //var i=Object.keys(filtroSession).length
      
        if(value!=='' && value!=='Nenhum' && value!==item[key]){
          oldList[index].filtro=false
          console.log(oldList)
          sessionStorage.setItem('CarrosFiltrados',JSON.stringify(oldList))
        }
        else{
          console.log('true')
          
   
        }
    });
    
      //console.log(item.modelo,oldList[index].filtro)

  }
  console.log(item.filtro)
  const Display=()=>{
    return(
      <Link to={adress}>
      <Card key={ind}>
        <CardName><img src={Car}/><br/>
        {item.modelo}<p>{item.placa}</p></CardName>
      </Card>
    </Link>
    )
    
  }

  return(
    <>
    {item.filtro?<Display/>:undefined}
    </>
  )
}