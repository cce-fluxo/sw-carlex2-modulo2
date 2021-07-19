import styled from 'styled-components';

export const TitleDiv=styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  margin-bottom: 40px;
`

export const Title=styled.p`
  font-size: 36px;
  font-weight: bold;
  
  @media(max-width:800px){
    font-size: 20px;
    //color:red;
  }
  @media(max-width:1000px) and (min-width: 800px){
    font-size: 24px;
    //color: blue;
  } 
`

export const Line=styled.div`
  border-bottom: 4px solid #4369C2;
  width: 70%;
  
`