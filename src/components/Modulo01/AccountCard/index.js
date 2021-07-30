
import React, {useState} from 'react';
import { Modal } from '@material-ui/core';
import ReactLoading from 'react-loading';


import { Btns,Btn, CardContainer, AccountData, Name, Datas, ModalContainer, ModalTitle, ModalMsg} from "./styles"


const AccountCard = ({ account }) => {
    const [openModal, setOpenModal] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleDeleteAccount = () => {
        setLoading(true)
        console.log("Deletado")
        setTimeout(() => {setLoading(false)}, 1000)
        //setOpenModal(false)
    }
    return (
        <CardContainer>
            {openModal && 
                <Modal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    
                >
                    <ModalContainer >
                        <ModalTitle>Excluir Conta</ModalTitle>
                        <ModalMsg>
                            Deseja mesmo excluir a conta {account.nome}?
                        </ModalMsg>
                        <Btn onClick={handleDeleteAccount}>
                        {loading ?
                            <ReactLoading type="spin" height={20} width={20} color="#fff" /> :
                            
                            "Excluir"
                        }
                        </Btn>
                    </ModalContainer>    
                </Modal>
            }
            <Name>{account.nome}</Name>
            <Datas>
                <AccountData>Agência: {account.agencia}</AccountData>
                <AccountData>Número: {account.conta}</AccountData>
                <AccountData>Total em conta: {(account.saldo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</AccountData>
            </Datas>
            <Btns>
                <Btn green>Ver detalhes</Btn>
                <Btn onClick={() => setOpenModal(true)}>Excluir</Btn>
            </Btns>
        </CardContainer>
     );
}
 
export default AccountCard;