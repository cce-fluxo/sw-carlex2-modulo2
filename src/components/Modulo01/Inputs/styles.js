import styled from "styled-components";


export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-bottom: 50px;
`

export const FormSection = styled.div`
    margin: 10px 0 45px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const FormGrid = styled.div`
    margin: 10px 0 45px 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
   
`

export const InputArea = styled.div`
    margin: ${props=>props.margin? props.margin: "0"};
`
export const InputName = styled.input`
    height: 30px;
    width: 250px;
    border-radius: 5px;
    font-size: 1em;
    padding-left:15px;
    border: 2px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.text};
    background-color: ${props =>props.invalid? "rgba(240, 107, 100, 0.6)": props.theme.colors.textArea};
    &:focus{
        border: 2px solid ${props=> props.theme.colors.blue};
    }
`

export const InputDate = styled.input`
    height: 30px;
    width: ${props=> props.width? props.width: "250px"};
    border-radius: 5px;
    font-size: 1.2em;
    padding-left:15px;
    border: 2px solid ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.textArea};
    
    color: ${props => props.theme.colors.text};
    &::-webkit-calendar-picker-indicator{
        background-image: url(${props=> props.bg});
    }
    &:focus{
        border: 2px solid ${props=> props.theme.colors.blue};
    }
`

export const Select = styled.select`
    height: 34px;
    width: ${props=> props.width? props.width: "264px"};
    border-radius: 5px;
    font-size: 1em;
    padding-left:15px;
    border: 2px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.textArea};
    &:focus{
        border: 2px solid ${props=> props.theme.colors.blue};
    }
`


export const Label = styled.p`
    color: ${props => props.theme.colors.text};
`

export const InputValue = styled.input`
    height: 30px;
    width: 180px;
    border-radius: 5px;
    font-size: 1em;
    padding-right:15px;
    text-align: end;
    border: 2px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.textArea};
    &:focus{
        border: 2px solid ${props=> props.theme.colors.blue};
    }
`

export const InputPorcent = styled.input`
    height: 30px;
    width: 80px;
    border-radius: 5px;
    font-size: 1em;
    padding-right:15px;
    text-align: end;
    border: 2px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.textArea};
    &:focus{
        border: 2px solid ${props=> props.theme.colors.blue};
    }
`

export const TextArea = styled.textarea`
    width:500px;
    height:180px;
    resize: none;
    font-size: 1em;
    padding: 10px;
    border-radius: 10px;
    text-decoration: none;
    border: 2px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.textArea};
    &:focus{
        border: 2px solid ${props=> props.theme.colors.blue};
    }
        @media (max-width: 800px)
        {
            width: 50vw;
        }
`

export const InputAreaExternal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;
`

export const P = styled.p`
    color: #dddddd;
    width: 100%;
    border-bottom: 1.5px solid #d2d2d2;
    margin-bottom:10px;
`
export const InputFile = styled.input`
    display: none;
`

export const LabelFile = styled.label`
    padding: 5px 5px 0 5px;
    width: 180px;
    height: 30px;
    //background-color: ${props => props.theme.colors.blue};
    border-bottom: 2px solid ${props => props.theme.colors.blue};
    //border-radius: 5px;
    color: ${props => props.theme.colors.text};//${props => props.theme.colors.blue};
    font-weight: 600;
    font-size:1.2em;
    text-align:center;
    display: block;
    cursor: pointer;
    display: flex;
    align-items:baseline;
    justify-content: space-around;
    margin-top: 10px;
`

export const FileNameArea = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    color: red;
    white-space: nowrap;
`
export const FileName = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props=>props.theme.colors.lightBlue};
    font-size: 1.2em;
    padding: 0 20px;
    height: 40px;
    border-radius: 5px;
    color: ${props => props.theme.colors.text};
    &:hover{
        background-color: ${props=>props.theme.colors.mediumBlue};
    }
`

export const FileDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FileImg = styled.img`
    width: 20px;
`

export const CloseImg = styled.img`
    margin-left: 20px;
    padding: 2px;
    width: 15px;
    cursor: pointer;
    &:hover{
        margin-left: 15px;
        width: 20px;
        opacity: 0.5;
    }
`

export const Required = styled.span`
    color: red;
`
