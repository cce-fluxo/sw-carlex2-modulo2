import React, {useState,useEffect} from 'react';

const CarContext = React.createContext({
  
  onAdd:'',
  carInfo:'',
  
});
export const CarProvider =({children})=> {
  //localStorage.setItem('Carros',[]);
  const addHandler=(modelo,renavam,placa,final,status,local,empresa,contrato,linha)=>{

    const newCar={modelo:modelo.toLowerCase(),renavam:renavam,placa:placa,final:final,status:status,local:local,empresa:empresa,contrato:contrato,linha:linha,filtro:true}
    localStorage.setItem(placa,JSON.stringify(newCar));
    
    if (localStorage.getItem('Carros')===null){
      const startList=[].concat(newCar)
      localStorage.setItem('Carros',JSON.stringify(startList))
    }
    else{
      const oldList=JSON.parse(localStorage.getItem('Carros'))
      const newList=oldList.concat(newCar);
      localStorage.setItem('Carros',JSON.stringify(newList))
    }
  }

  const removeHandler=(placa)=>{
    localStorage.removeItem(placa);
    const list=JSON.parse(localStorage.getItem('Carros'))
    const index = list.findIndex(x => x.placa ===placa);
    //console.log(list,index)
    //const newList=list.splice(index);
    const filteredList = list.filter(function(i){ 
     const check=list.indexOf(i);
      return check != index;
  });
    console.log(filteredList)
  localStorage.setItem('Carros',JSON.stringify(filteredList))

  }

  const getCarInfo=(placa)=>{
    return JSON.parse(localStorage.getItem(placa));
    //console.log(code)
  }


  

  
  

  return <CarContext.Provider
    value={{
      
      
      onAdd: addHandler,
      carInfo: getCarInfo,
      onRemove:removeHandler,
      
    }}
  >{children}</CarContext.Provider>
};

export default CarContext;