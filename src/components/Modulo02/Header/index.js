/*import React from 'react';
import {Link} from 'react-router-dom';
import { HeaderBg, HeaderContainer,Logo, NavList, NavOption, Profile } from './styles';
import LOGO from '../../Assets/logo.svg';
import User from '../../Assets/profile.svg';


export default function Header({gest,cond,check}){


  return(
    <>
      <HeaderBg>
        <HeaderContainer>
          <Logo src={LOGO}/>
          <NavList>
            <NavOption active={gest}>Gestão</NavOption>
            <NavOption actvie={cond}>Condutores</NavOption>
            <NavOption active={check}>Checklist</NavOption>
            <Link to='/perfil'><Profile src={User}/></Link>
          </NavList>
        </HeaderContainer>

      </HeaderBg>


    </>
  )
}
*/


/*
import React from 'react';
import {useState} from 'react'
import { HeaderBar, OpenedProfileArea, UserImg, OpenedProfileItem} from './styles'
import Logo from '../../Assets/logo.svg'
import User from '../../Assets/profile.svg'

const Header = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    //const name = "João Silva"
    const OpenedProfile = () => {
        return (
            <OpenedProfileArea onMouseEnter={setIsProfileOpen(true)}>
                
                <OpenedProfileItem>Meu Perfil</OpenedProfileItem>
                <OpenedProfileItem>Sair</OpenedProfileItem>
            </OpenedProfileArea>
        )
    }
    return (
        <HeaderBar onMouseLeave={(e) => setIsProfileOpen(false)}>
            <img src={Logo} alt="GC"/>
            <UserImg onClick={(e)=>setIsProfileOpen(isProfileOpen?false: true)}  src={User} alt="perfil"/>
            {isProfileOpen? <OpenedProfile/>: null}
        </HeaderBar>
    )

}

export default Header;

*/


import React from 'react';
import { useState } from 'react'
import ToolTip from '@material-ui/core/Tooltip';
import { withStyles} from '@material-ui/core/styles';
import { SideBar,LogoImg, Menu, MenuItem,MenuName, MenuImg, LogoutImg, Logout, LogoutP, Arrow, LogoDiv, MenuContainer} from './styles'
import Logo from '../../../assets/logo.svg'
import Checklist from '../../../assets/checklist.svg'
import Condutor from '../../../assets/plus.svg'
import Gestao from '../../../assets/car.svg'
import LogoutIcon from '../../../assets/plus.svg'
import RightArrow from '../../../assets/rightArrow.svg'
import Profile from '../../../assets/user.svg'


import { Link } from 'react-router-dom';

const Header = ({active}) => {
    const [shortBar, setShortBar] = useState(false)
    const [hiddenItens, setHiddenItens] = useState(false)
    //const name = "João Silva";
    const menuItens = [
        {
            name: "Gestão",
            path: "/gestao",
            bg: Gestao
        },
        {
            name: "Condutores",
            path: "/condutores",
            bg: Condutor
        },
        {
            name: "Checklist",
            path: "/checklist",
            bg: Checklist,
        },
        {
          name: "Perfil",
          path: "/perfil",
          bg: Profile,
      }
    ]

    const LightTooltip = withStyles(() => ({
        tooltip: {
        backgroundColor: '#000',
        color: '#E4E6EB',
        fontWeight: 'bold',
        padding: '8px 10px',
        fontSize: 15,
        },
    }))(ToolTip);
    
    const renderMenuItems = menuItens.map((item, index) => {
        return (
            <LightTooltip key={index} title={hiddenItens? item.name: ''} placement="right" arrow>
                <MenuItem short={hiddenItens}   key={index} selected={item.name === active}>
                    <Link to={item.path}><MenuContainer>
                      <MenuImg src={item.bg} alt={item.name}/>
                      <MenuName short={hiddenItens}>{item.name}</MenuName>
                    </MenuContainer></Link>
                </MenuItem>
            </LightTooltip>
            
        )
    })

    const changeMenu = (e) => {
        e.preventDefault()
        if (!hiddenItens) {
            setHiddenItens(true)
            setShortBar(true)
        }
        else{
            setShortBar(false)
            setTimeout(()=>setHiddenItens(false), 500)
        }
        
    }

    return (
        <SideBar short={shortBar}>
            <LogoDiv>
                <LogoImg src={Logo} alt="GC" short={hiddenItens} shortBar={shortBar} diminuir={shortBar}/>
                <Arrow src={RightArrow} onClick={(e) => changeMenu(e)} short={shortBar}/>
            </LogoDiv>
            
            
            
            <Menu short={hiddenItens}>{renderMenuItems}</Menu>
            <Link to="/login">
                <LightTooltip title={hiddenItens? 'Sair': ''} placement="right" arrow>
                    <Logout>
                        <LogoutP short={hiddenItens}>Sair</LogoutP>
                        <LogoutImg src={LogoutIcon} />
                    </Logout>
                </LightTooltip>
            </Link>
        </SideBar>

    )

}

export default Header;