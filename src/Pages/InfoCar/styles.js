import styled from 'styled-components';

export const BgContainer=styled.div`
  max-width: 1440px;
  height: 700px;
  margin: 50px auto;
  border-radius: 20px;
  padding-top: 10px;
  //background-color:gray;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  //margin-bottom: 120px;
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
