import React,{useState} from 'react';
import Modal from "@material-ui/core/Modal"
import { Link } from "react-router-dom"
import ReactLoading from 'react-loading';
import { Btns, Btn, CardContainer, CompanyData, Name, Datas, ModalContainer, ModalTitle, ModalMsg } from "./styles"




const CompanyCard = ({ company }) => {
    const [openModal, setOpenModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleDeleteCompany = () => {
        setLoading(true)
        console.log("Deletado")
        setTimeout(() => {setLoading(false)}, 1000)
        //setOpenModal(false)
    }
    
    return (
        <>
            {openModal && 
                <Modal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    
                >
                    <ModalContainer >
                        <ModalTitle>Excluir Empresa</ModalTitle>
                        <ModalMsg>
                            Deseja mesmo excluir a empresa {company.nome}?
                        </ModalMsg>
                        <Btn onClick={handleDeleteCompany}>
                        {loading ?
                            <ReactLoading type="spin" height={20} width={20} color="#fff" /> :
                            
                            "Excluir"
                        }
                        </Btn>
                    </ModalContainer>    
                </Modal>
            }
        <CardContainer>
            <Name>{company.nome}</Name>
            <Datas>
                <CompanyData>Número de funcionarios: {company.funcionarios}</CompanyData>
                <CompanyData>Saldo Devedor: {(company.saldoDevedor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</CompanyData>
                <CompanyData>Emprestimos: {(company.emprestimos).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</CompanyData>
                <CompanyData>Dívidas: {(company.dividas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</CompanyData>
                <CompanyData>Faturamento: {(company.faturamento).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</CompanyData>
                <CompanyData>Numero de contas: {(company.contas.length)}</CompanyData>
            </Datas>
            <Btns>
                    <Link to={`/empresas/${company.nome}`}><Btn green>Ver detalhes</Btn></Link>
                <Btn onClick={()=>setOpenModal(true)}>Excluir</Btn>
            </Btns>
        </CardContainer>
        </>    
     );
}
 
export default CompanyCard;