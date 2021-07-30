import { useState } from "react";
import InputMask from 'react-input-mask'
import ReactLoading from 'react-loading';
import cepApi from "../../../../services/cepApi"
import Container from "../../../../components/Modulo01/Container/styles"
import BlueBtn from "../../../../components/Modulo01/BlueBtn/styles"
import H1 from "../../../../components/Modulo01/H1/styles"
import SideArea from "../../../../components/SideArea"
import camera from "../../../../assets/camera.svg"
import {
    FormSection,
    InputArea,
    Label,
    InputName,
    InputValue,
    P,
    InputFile
} from "../../../../components/Modulo01/Inputs/styles"
import {
    Content,
    Form,
    FormBasicInformation,
    FormBasicSection,
    FormImgArea,
    ImageDiv,
    PreviewImg,
    Camera,
    LabelFile,
    FormSmallSection
    
} from "./styles"


const AddCompany = () => {
    
    const [companyName, setCompanyName] = useState("")
    const [abbreviation, setAbbreviation] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [cep, setCep] = useState("")
    const [district, setDistrict] = useState("")
    const [adress, setAdress] = useState("")
    const [complement, setComplement] = useState("")
    const [adressNumber, setAdressNumber] = useState("")
    const [siteAdress, setSiteAdress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [previewImg, setPreviewImg] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [file, setFile] = useState("")
    const [loading, setLoading] = useState(false)
    const [invalidCep, setInvalidCep] = useState(false)
    const handleAddCompany = () => {
        setLoading(true)
        const body = {
            companyName,
            cep,
            district,
            city,
            state,
            email,
            imageUrl,
            adress,
            abbreviation,
            cnpj,
            loading
        }
        console.log(body)
        //setLoading(false)
    }
    const handleCep = async (event) => {
        setCep(event.target.value)
        try {
            const response = await cepApi.get(`/${event.target.value}/json`)
            if (response.data.erro) {
                throw new Error();
            }
            setInvalidCep(false)
            setCity(response.data.localidade)
            setState(response.data.uf)
            setDistrict(response.data.bairro)
            setAdress(response.data.logradouro)
        }
        catch (error){
            setInvalidCep(true)
            setCity("")
            setState("")
            setDistrict("")
            setAdress("")
        }
        
    }
    const handleChooseFile = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImg(reader.result );
            };
            reader.readAsDataURL(file);
        }
        else {
            setPreviewImg("")
        }
    }
        
    

    return (
        <Container>
            <SideArea />
            <Content>
                <H1>Adicionar Empresa</H1>
                <Form>
                    <P>Informações Básicas</P>
                    <FormBasicSection>
                        <FormImgArea>
                            <ImageDiv>
                                {
                                    !previewImg ?
                                        <Camera src={camera} alt="camera" /> :
                                        <PreviewImg src={previewImg} alt="Imagem do upload"/>
                                }
                                
                            </ImageDiv>
                            <LabelFile htmlFor="company_img">
                                {
                                    previewImg ?
                                        "Alterar imagem":
                                        "Adicione uma imagem"
                                }
                                
                            </LabelFile>
                            <InputFile  accept="image/png, image/jpeg" type="file" id="company_img" value={file} onChange={(event) => handleChooseFile(event)}/>
                        </FormImgArea>
                        <FormBasicInformation>           
                            <FormSmallSection >
                                <InputArea>
                                    <Label>Email</Label>
                                    <InputName
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </InputArea>
                                <InputArea>
                                    <Label>Telefone</Label>
                                    <InputName
                                        value={phoneNumber}
                                        onChange={(event) => setPhoneNumber(event.target.value)}
                                    />
                                </InputArea>
                            </FormSmallSection>
                            <FormSmallSection>
                                <InputArea>
                                    <Label>Endereço Site</Label>
                                    <InputName
                                        value={siteAdress}
                                        onChange={(event) => setSiteAdress(event.target.value)}
                                    />
                                </InputArea>
                                <InputArea>
                                    <Label>Nome/Razão Social</Label>
                                    <InputName
                                        value={companyName}
                                        onChange={(event) => setCompanyName(event.target.value)}
                                    />
                                
                                </InputArea>  
                            </FormSmallSection>
                            <FormSmallSection>
                                <InputArea>
                                <Label>Sigla</Label>
                                <InputName
                                    value={abbreviation}
                                    onChange={(event) => setAbbreviation(event.target.value)}
                                />
                                
                                </InputArea>
                                <InputArea>
                                    <Label>CNPJ</Label>
                                    <InputMask
                                        value={cnpj}
                                        onChange={(event) => setCnpj(event.target.value)}
                                        mask="99.999.999/9999-99"
                                        maskChar=""
                                    >
                                    {(inputProps)=><InputName
                                        {...inputProps}
                                    />}
                                    </InputMask>
                                
                                </InputArea>
                                
                            </FormSmallSection>
                               
                        </FormBasicInformation>
                    </FormBasicSection>
                    
                    <P>Endereço</P>
                    <FormSection>
                        <InputArea>
                            <Label>CEP</Label>
                            <InputMask
                                value={cep}
                                onBlur={(event) => handleCep(event)}
                                onChange={(event) => setCep(event.target.value)}
                                invalid={invalidCep}
                                mask="99999-999"
                                maskChar=""
                                >
                                    
                                {
                                    (inputProps) => <InputName {...inputProps} />
                                }
                            </InputMask>
                            
                        </InputArea>
                        <InputArea>
                            <Label>Estado</Label>
                            <InputName
                                value={state}
                                onChange={(event) => setState(event.target.value)}
                            />
                        </InputArea>
                        <InputArea>
                            <Label>Cidade</Label>
                            <InputName
                                value={city}
                                onChange={(event) => setCity(event.target.value)}
                            />
                        </InputArea>                     
                    </FormSection>
                    <FormSection>
                        <InputArea>
                            <Label>Bairro</Label>
                            <InputValue
                                value={district}
                                onChange={(event) => setDistrict(event.target.value)}
                            />
                        </InputArea>
                        <InputArea>
                            <Label>Endereço</Label>
                            <InputName
                                value={adress}
                                onChange={(event) => setAdress(event.target.value)}
                            />
                        </InputArea>                        
                        <InputArea>
                            <Label>Numero</Label>
                            <InputValue
                                value={adressNumber}
                                onChange={(event) => setAdressNumber(event.target.value)}
                            />
                        </InputArea>
                        <InputArea>
                            <Label>Complemento</Label>
                            <InputValue
                                value={complement}
                                onChange={(event) => setComplement(event.target.value)}
                            />
                        </InputArea>
                    </FormSection>
                  
                    <BlueBtn onClick={handleAddCompany}>
                    {
                        loading ?
                            <ReactLoading type="spin" width={20} height={20} color="#fff" />:
                            "Adicionar"
                    }
                    </BlueBtn>
                </Form>
            </Content>
        </Container>
    )
}

export default AddCompany;