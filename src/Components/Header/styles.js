import styled from 'styled-components';


export const HeaderBg = styled.div`
  background-color: black;
`

export const HeaderContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo =styled.img`
  width: 10%;
  margin-top:20px;
  margin-bottom: 20px;
  display:block;
`

export const Profile=styled.img`
  width: 60%;
  margin:20px 0 20px 10px;
  
  display:block;
  cursor: pointer;
`




export const NavList = styled.ul`
    display: flex;
    align-items: center;
`

export const NavOption =styled.li`
    display:flex;
    justify-content: space-between;
    align-items:center;
    color: white;
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
    cursor:pointer;
    text-decoration:${props=>
    {return props.active===true?'underline':'none'}};
    text-decoration-color: #4369C2;
    &:hover{
      text-decoration:underline;
      text-decoration-color: #4369C2;

    }
    @media(max-width:800px){
    font-size: 12px;
    //color:red;
  }
  @media(max-width:1000px) and (min-width: 800px){
    font-size: 16px;
    //color: blue;
  } 
`

