import styled from 'styled-components'

const BlueBtn = styled.button`
    padding: 5px 0;
    height:40px;
    width: 150px;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 1em;
    color: ${props => props.theme.colors.text};
    border:none;
    background-color: ${props => props.theme.colors.blue};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }
`

export default BlueBtn;