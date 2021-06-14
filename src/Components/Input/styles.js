import styled from 'styled-components';
export const Input = styled.input`
    width: 400px;
  
    margin-bottom: 15px;
    height: 45px;
    border: 1px solid black;
    padding-left: 10px;
    font-size: 16px;
    border-color:${props=>
    {return props.validation===false?'red':'none'}};
    background-color:${props=>
    {return props.validation===false?'#fbdada':'none'}};
    &&:focus{
      border-color:${props=>
    {return props.validation===false?'red':'#4369C2'}};
      
    }
    &&::placeholder{
      color:black;
    }   
    &&:disabled{
      background-color: white;
      color: black;
    }  
    @media(max-width:800px and (min-width:600px)){
    width:200px;
    //color:red;
  }
  @media(max-width:1000px) and (min-width: 800px){
    width:300px;
    //color: blue;
  }  
  @media(max-width:600px){
    width:150px;
  }
`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  
`

export const InputTitle=styled.p`
  font-size: 20px;
 // font-weight: bold;
  padding-left: 10px;
  @media(max-width:600px){
    font-size: 14px;
  }
`

export const DropOptions = styled.select`
    width: 400px;
    cursor: pointer;
    margin-bottom: 15px;
    height: 45px;
    border: 1px solid black;
    padding-left:10px;
    font-size: 16px;
    
    
    border-color:${props=>
    {return props.validation===false?'red':'none'}};
    background-color:${props=>
    {return props.validation===false?'#fbdada':'none'}};
    &&:focus{
      border-color:${props=>
    {return props.validation===false?'red':'#4369C2'}};
      
    }   
    @media(max-width:800px and (min-width:600px)){
    width:200px;
    
  }
  @media(max-width:1000px) and (min-width: 800px){
    width:300px;
    
  }  
  @media(max-width:600px){
    width:150px;
    
  }
`