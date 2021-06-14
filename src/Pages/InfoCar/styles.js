import styled from 'styled-components';

export const BgContainer=styled.div`
  width: 100%;
  
  margin: 50px auto;
  margin-right:20px;
  border-radius: 20px;
  padding-top: 10px;
  background-color:gray;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  @media(max-width:1400px) {
    width:90%;
  }
`

export const Return = styled.img`
    width: 90%;
    cursor:pointer;  
`

export const ArrowDiv=styled.div`
  width: 90%;
  display:flex;
  align-items:flex-start;
  margin-top: 20px;
`

