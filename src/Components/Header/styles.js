//import styled from 'styled-components';

/*
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


*/

/*

export const HeaderBar = styled.div`
    background-color: ${props => props.theme.colors.black};
    width: 1wv;
    height:85px;
    border-bottom: 1px solid ${props => props.theme.colors.grey};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
`
export const UserImg = styled.img`
    cursor: pointer;
`
export const OpenedProfileArea = styled.div`
    width:300px;
    height: 100px;
    background-color: ${props => props.theme.colors.black};
    border: 1px solid ${props => props.theme.colors.grey};
    border-top: none;
    position: absolute;
    right: 10px;
    top: 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0 10px 0;
`

export const OpenedProfileItem = styled.div`
    font-size: ${props => props.principal? "1.6em": "1.3em"};
    font-weight: 600;
    border-bottom: 2px ridge ${props => props.theme.colors.blue};
    padding: 0 20px 5px 20px;
    color: #fff;
`




*/

import styled from 'styled-components';

export const SideBar = styled.div`
    background-color: ${props => props.theme.colors.black};
    width: ${props => props.short ? '50px' : '250px'};
    transition: width 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    resize: horizontal;
    //position: fixed;
`
export const LogoImg = styled.img`
    width: ${props => props.diminuir ? "0px" : '140px'};
    transform: rotateZ(${props => props.short && props.shortBar? '360deg' : '0deg'});
    transition: width .5s, transform .5s;
    //display:${props => props.short ? "none" : "block"};
`

export const LogoDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Menu = styled.ul`
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    
`

export const MenuContainer=styled.div`
  display: flex;
  align-items: center;
`

export const MenuItem = styled.li`
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.selected ? props.theme.colors.blue : props.theme.colors.black};
    font-weight: 500;
    font-size: 1.4em;
    min-width: ${props => props.short ? '0' : '125px'};
    display: flex;
    padding: 8px 10px;
    border-radius: 5px;
    margin: 10px 0;
    align-items: center;
    transition: background 1.5s;
    &:hover{
        cursor: pointer;
        background-color: ${props => props.selected ? props.theme.colors.blue : props.theme.colors.mediumBlue};
    }
`

export const MenuImg = styled.img`
    width:25px;
`
export const MenuName = styled.p`
    color: ${props => props.theme.colors.text};
    display:${props => props.short ? "none" : "block"};
    font-size: 1em;
    margin-left: 5px;
`

export const Name = styled.p`
    margin-top: 25px;
    padding: 2px 10px;
    max-width: 120px;
    border-bottom: 3px ridge ${props => props.theme.colors.blue};
    text-align: center;
`
export const LogoutImg = styled.img`
    margin-left: 10px;
`

export const Logout = styled.div`
    color: ${props => props.theme.colors.text};
    display: flex;
    margin-top: 20px;
`
export const LogoutP = styled.p`
    display:${props => props.short ? "none" : "block"};
    font-size: 1.3em;
`

export const Arrow = styled.img`
    width: 20px;
    cursor: pointer;
    transform: rotateZ(${props=> props.short ?'0deg':'180deg'});
    transition: transform 1s;
    margin-left: 20px;
    align-self: center;
    padding: 5px;
    &:hover{
        opacity: 0.5;
        
       
    }
`