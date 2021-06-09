import React from 'react';
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