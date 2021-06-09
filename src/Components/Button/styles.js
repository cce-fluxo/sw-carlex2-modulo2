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