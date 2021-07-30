import styled from 'styled-components'

export const HeaderBar = styled.div`
    background-color: ${props => props.theme.colors.black};
    width: 1wv;
    height:85px;
    border-bottom: 1px solid ${props => props.theme.colors.grey};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
`
export const UserImg = styled.img`
    cursor: pointer;
`
export const OpenedProfileArea = styled.div`
    width:300px;
    height: 100px;
    background-color: ${props => props.theme.colors.black};
    border: 1px solid ${props => props.theme.colors.grey};
    border-top: none;
    position: absolute;
    right: 10px;
    top: 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0 10px 0;
`

export const OpenedProfileItem = styled.div`
    font-size: ${props => props.principal? "1.6em": "1.3em"};
    font-weight: 600;
    border-bottom: 2px ridge ${props => props.theme.colors.blue};
    padding: 0 20px 5px 20px;
    color: #fff;
`