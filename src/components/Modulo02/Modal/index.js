import React from 'react';
import { CloseIcon, Background, ModalBg, ModalDiv, TopContainer } from './styles.js';
import { Link } from 'react-router-dom';
import Close from '../../../assets/closeRed.svg';



export default function Modal({ id = 'modal', onClose = () => { }, children }) {
    
    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose()
    };



    return (
        <Background id='modal' onClick={(e) => handleOutsideClick(e)}>
            <ModalBg >
                <ModalDiv>
                    
                    <CloseIcon onClick={onClose} src={Close} />

                    {children}

                </ModalDiv>
            </ModalBg>
        </Background>
    )
}