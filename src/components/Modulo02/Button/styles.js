import styled from 'styled-components';

export const Button = styled.button `
    margin-top: 3%;
    width: 150px;
    height: 52px;
    color: white;
    background-color:#4369C2;
    font-weight: bold;
    font-size: 20px;
    border:0px;
    border-radius: 20px;  
    cursor:pointer;
    &&:disabled{
      background: #ccc;
      border-color: #ccc;
      color: #666666;
      cursor: not-allowed;
    }
`

export const ButtonSmall = styled.button `
    margin-top: 3%;
    margin: 0 15px;
    width: 100px;
    height: 30px;
    color: ${props=>
    {return props.type==='save'?props =>  props.theme.colors.blue :'red'}};
    background-color:white;
    font-weight: bold;
    font-size: 18px;
    border:1px solid ${props=>
    {return props.type==='save'?props =>  props.theme.colors.blue:'red'}};
    border-radius: 20px;  
    cursor:pointer;
    &&:disabled{
      background: #ccc;
      border-color: #ccc;
      color: #666666;
      cursor: not-allowed;
    }
`

export const ButtonDiv=styled.div`
  display: flex;
  align-items: center;
`