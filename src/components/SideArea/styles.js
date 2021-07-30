import styled from 'styled-components'


export const SideBar = styled.div`
    background-color: ${props => props.theme.colors.black};
    width: ${props => props.short ? '50px' : '150px'};
    transition: width 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    /* position: fixed;
    top: 0;
    left: 0;
    height: 100vh; */
    z-index: 100;
`


export const LogoImg = styled.img`
    width: ${props => props.diminuir ? "0px" : '110px'};
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

export const MenuItem = styled.li`
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.selected ? props.theme.colors.blue : props.theme.colors.black};
    font-weight: 500;
    font-size: 1em;
    min-width: ${props => props.short ? '0' : '115px'};
    display: flex;
    padding: 5px 8px;
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
    width:20px;
`
export const MenuName = styled.p`
    color: ${props => props.theme.colors.text};
    display:${props => props.short ? "none" : "block"};
    font-size: 1em;
    margin-left: 5px;
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
    font-size: 1.1em;
`

export const Arrow = styled.img`
    width: 10px;
    cursor: pointer;
    transform: rotateZ(${props=> props.short ?'0deg':'180deg'});
    transition: transform 1s;
    margin-left: 20px;
    align-self: center;
    padding: 5px;
    &:hover{
        opacity: 0.5;
        width: 15px;
        padding: ${props => props.short?"1px":"2.5px" } 2.5px;
    }

`