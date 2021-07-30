import React from 'react';
import {useState} from 'react'
import { HeaderBar, OpenedProfileArea, UserImg, OpenedProfileItem} from './styles'
import Logo from '../../assets/logo.svg'
import User from '../../assets/userHeader.svg'

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