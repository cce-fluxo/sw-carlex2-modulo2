import styled from 'styled-components';


export const Content = styled.div`
    width: 100%;
    background-color: ${props=>props.theme.colors.auxiliar};
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:50px 0;
`

export const PermisionsList = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    border-radius: 10px;
    padding: 10px 30px;
    background: rgba( 24, 61, 104, 0.20 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    transition: border 1s;
    &:hover{
        border: 1px solid ${props => props.theme.colors.blue};
    }
`

export const Permision = styled.div`
    display: flex;
    align-items: center;
    flex-direction:column;
    padding: 5px 5px;
    margin: 15px 0;
    gap: 10px;
    color: ${props => props.theme.colors.text};
    &:nth-child(2n+1){
        border-right: 1px solid grey;
        padding-right: 20px;
    }
    h4{
        text-align:center;
    }
`

export const PermisionBtn = styled.button`
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 1px solid green;
`