import styled from 'styled-components';

export const HeaderContainer=styled.div`
  display:flex;
  
  justify-content:space-between;
`
export const BgContainer=styled.div`
  width: 100%;
  //min-height: 700px;
  margin: 50px auto;
  margin-right:20px;
  border-radius: 20px;
  padding-top: 10px;
  background-color:${props=>props.theme.colors.lightDark};
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 120px;
  @media(max-width:1400px) {
    width:90%;
  }

`

export const TopContainer=styled.div`
  margin-top:30px;
  width:80%;
  flex-direction:column;
  display: flex;
  align-items: center;
  //justify-content: space-around;

`
export const OptionsContainer=styled.div`
  margin-top:10px;
  display: flex;
  width: 80%;
  align-items: center;
  justify-content:space-between;
`
export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  //justify-content: space-between;
  background-color: black;
  border-radius:20px;
  padding:5px;
`

export const Icon = styled.img`
  width: 10%;
  margin: 0 6px;
`

export const ButtonTitle=styled.p`
  font-size:20px;
  color: white;

  @media(max-width:800px){
    font-size: 12px;
    //color:red;
  }
  @media(max-width:1000px) and (min-width: 800px){
    font-size: 16px;
    //color: blue;
  } 
`

export const Line=styled.div`
  border-bottom: 2px solid #4369C2;
`

export const BotContainer=styled.div`
  margin-top: 50px;
`

export const Card=styled.div`
  width:250px;
  height:200px;
  border-radius:30px;
  display:flex;
  margin: 30px;
  align-items:center;
  justify-content: center;
  background-color: black;
`

export const CardName=styled.div`
  color:white;
  display: flex;
  align-items:center;
  flex-direction: column;
  `

export const CardContainer=styled.div`
  margin-top:50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`