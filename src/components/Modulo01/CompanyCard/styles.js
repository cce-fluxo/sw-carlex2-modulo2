import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 330px;
    height: 330px;
    background: rgba( 24, 61, 104, 0.20 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:50px ;
    transition: border 1s;
    &:hover{
        border: 1px solid ${props => props.theme.colors.blue};
    }
`

export const Name = styled.h2`
    margin: 10px 0;
    color: ${props => props.theme.colors.text};
`
export const Datas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap:15px;
    margin-bottom: 20px;;
`

export const CompanyData = styled.div`
    font-size: 1.2em;
    color: ${props => props.theme.colors.text};
`

export const Btns = styled.div`
    display: flex;
    gap: 15px;
   
`

export const Btn = styled.button`
    width: 100px;
    height: 35px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.green? props.theme.colors.green: props.theme.colors.red};
`

export const ModalContainer = styled.div`
    width: 500px;
    height: 200px;
    margin: 200px auto;
    border-radius: 20px;
    background-color: ${props =>  props.theme.colors.text};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ModalTitle = styled.h2`
    font-size: 1.5em;
    
`
export const ModalMsg = styled.p`
    width: 70%;
    font-size: 1.1em;
    text-align: center;
    margin: 20px 0;
`
