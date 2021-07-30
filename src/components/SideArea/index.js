import React from 'react';
import { useState } from 'react'
import ToolTip from '@material-ui/core/Tooltip';
import { withStyles} from '@material-ui/core/styles';
import { SideBar,LogoImg, Menu, MenuItem,MenuName, MenuImg, LogoutImg, Logout, LogoutP, Arrow, LogoDiv} from './styles'
import Logo from '../../assets/logo.svg'
import Financial from '../../assets/financial.svg'
import Shopping from '../../assets/shopping.svg'
import Profile from '../../assets/profile.svg'
import Fines from '../../assets/fines.svg'
import Home from '../../assets/home.svg'
import LogoutIcon from '../../assets/logout.svg'
import RightArrow from '../../assets/rightArrow.svg'
import Car from '../../assets/car.svg'


import { Link } from 'react-router-dom';

const SideArea = () => {
    const [shortBar, setShortBar] = useState(false)
    const [hiddenItens, setHiddenItens] = useState(false)
    //const name = "João Silva";
    const menuItens = [
        {
            name: "Home",
            path: "/home",
            bg: Home
        },
        {
            name: "Perfil",
            path: "/perfil",
            bg: Profile
        },
        {
            name: "Financeiro",
            path: "/financeiro",
            bg: Financial,
        },
        {
            name: "Multas",
            path: "/multas",
            bg: Fines
        },
        {
            name: "Compras",
            path: "/compras",
            bg: Shopping
        },
        {
            name: "Frota",
            path: "/frota",
            bg: Car
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
                <MenuItem short={hiddenItens}   key={index} selected={item.name === "Financeiro"}>
                    <MenuImg src={item.bg} alt={item.name}/>
                    <MenuName short={hiddenItens}>{item.name}</MenuName>
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

export default SideArea;