import React from 'react';
import { TitleDiv,Title,Line } from './styles';

export default function MainTitle({children}){
  //const children=children
  return(
    <TitleDiv>
      <Title>{children}</Title>
      <Line></Line>
    </TitleDiv>
  )
}