import styled from "styled-components"

const H1 = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 2.2em;
    margin-bottom: 25px;
    color: ${props => props.theme.colors.text};
    align-self: center;
`
export default H1;