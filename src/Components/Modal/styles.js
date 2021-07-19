import styled from 'styled-components';


export const ModalBg = styled.div`
    background-color: white;
    box-shadow: 15px 15px 5px 0px rgba(0,0,0,0.75);
    display:flex;
    //align-items: center;
    width:600px;
    height: 500px;
    padding:40px;
    margin-top:5%;
    border-radius: 60px;
    border: 1px solid black;
   
`
export const ModalDiv = styled.div`
    display:flex;
`

export const CloseIcon = styled.img`
    width: 30px;
    height:30px;
    
    cursor: pointer;
`

export const TopContainer=styled.div`
    //height:20%;
    background-color: black;
    width:601px;
    height: 80px;
    border-top-left-radius:60px;
    border-top-right-radius:60px;
`


export const Background = styled.div`
    height:100%;
    width: 100%;
    margin:0 auto;
    display: flex;
    justify-content: center;
    position:fixed; top: 0px; bottom:0px; left: 0px; z-index: 1;
    background: rgba(0,0,0,0.6);

` 