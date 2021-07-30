import React from 'react';
import { useState } from 'react'

import { makeStyles } from "@material-ui/core/styles";
import { Table, TableBody, TableCell, TableHead, Collapse, Box, IconButton, Menu, MenuItem, Modal, InputLabel, FormControl} from '@material-ui/core';
import {StatusImg, ModalTop,ModalTitle, FileNameArea, FileName,DivBtn,LabelFile, InputFile,FileDiv, FileImg, FormSection, Btn, TC, TR, TableP, Historico, ModalContainer, ModalContent, Form, Input, SelectInput, StatusDiv} from './styles'

import {CloseImg} from "../Inputs/styles"

import ArrowDown from "../../../assets/arrowDown.svg"
import ArrowUp from "../../../assets/arrowUp.svg"
import Pdf from "../../../assets/pdf.svg"
import ThreeDots from "../../../assets/threeDots.svg"
import Close from "../../../assets/close.svg"
import Ok from "../../../assets/ok.svg" 
import Clock from "../../../assets/clock.svg" 
import Clip from "../../../assets/clip.svg" 

const HistoricoStyles = makeStyles({
    root: {
      '& > *': {
        border: 'unset',
      },
    },
});
const RowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
});

const Row = ({row, rowIndex}) => {
    const [open, setOpen] = useState(false);
    const classeHistorico = HistoricoStyles();
    const classeRow = RowStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [openModal, setOpenModal] = useState(false)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };

    const handleEdit = () => {
        console.log("Oi")
    }
    const handleDelete = () => {
        console.log("Oi")
    }
    const handleOpenModal = (e) => {
        setOpenModal(true);
      };
  

    const handleCloseModal = () => {
        setOpenModal(false);
      };
  

    const ModalChildren = (row) => {
        const [file, setFile] = useState("")
        return (
            <ModalContainer>
                <ModalContent>
                    <ModalTop>
                        <ModalTitle>
                        Registrar {row.natureza ==="despesa"? "Pagamento": "Recebimento"}  
                        </ModalTitle>
                                  
                    </ModalTop>
                    <Form>
                    <FormSection>
                            <Input label="Nome da despesa" value={row.nome} readonly />
                            <Input label="Data do pagamento" type="date" InputLabelProps={{shrink: true,}}/>
                    </FormSection>
                        <FormSection>
                            <Input label="Valor Restante" readonly value={(parseFloat(row.valor) - parseFloat(row.valor_p_r)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}/>
                            <Input label="Valor"/>
                            
                        </FormSection>
                        <FormSection>
                            <FormControl>
                            <InputLabel id="forma-label">Forma de pagamento</InputLabel>
                            <SelectInput labelId="forma-label" id="forma">
                                <MenuItem>Ted</MenuItem>
                                <MenuItem>Pix</MenuItem>
                            </SelectInput>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="empresa">Empresa emissora</InputLabel>
                                <SelectInput labelId="empresa">
                                    <MenuItem>Carlex</MenuItem>
                                    <MenuItem>Lochaus</MenuItem>
                                </SelectInput>
                            </FormControl>
                        </FormSection>
                        <FormSection>
                            <FormControl>
                                <InputLabel id="conta">Conta </InputLabel>
                                <SelectInput labelId="conta">
                                    <MenuItem>Itau</MenuItem>
                                    <MenuItem>Santander</MenuItem>
                                </SelectInput>
                            </FormControl>
                            <Input label="Número da nota" />
                        </FormSection>
                        
                        {<FileDiv>
                            <LabelFile htmlFor="file">
                                <FileImg alt="arquivo" src={Clip}/>
                                Escolher arquivo
                            </LabelFile>
                            <InputFile multiple id="file" name="file" value={file} onChange={(e) => setFile(e.target.value)} type="file"/>
                            <FileNameArea file={file !== ""}>
                                {file !=="" ?
                                    <FileName>
                                        {file.slice(12,)}
                                        <CloseImg onClick={(e) => setFile("")} src={Close} alt="fechar"/>
                                    </FileName> :
                                    "Nenhum arquivo selecionado"
                                }
                            </FileNameArea>
                            </FileDiv>}
                        <DivBtn>
                            <Btn color="red" onClick={handleCloseModal}>Cancelar</Btn>
                            <Btn color="green">Adicionar</Btn>
                        </DivBtn>
                        
                    </Form>
                </ModalContent>
            </ModalContainer>
        )
    }

    const HistoricoRow = ({ row }) => {
        return(
            <TR className={classeHistorico.root} color={rowIndex} >
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                    <Historico>
                        Historico
                    </Historico>
                            {row.historico.length !== 0 ?
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TR color={rowIndex}>
                                            <TC><TableP>Data Pagamento</TableP></TC>
                                            <TC><TableP >Responsavel</TableP></TC>
                                            <TC  ><TableP>Valor</TableP></TC>
                                            <TC ><TableP>Forma de Pagamento</TableP></TC>
                                            <TC><TableP>Empresa emissora</TableP></TC>
                                            <TC><TableP>Conta</TableP></TC>
                                            <TC><TableP>Comprovante</TableP></TC>
                                        
                                        </TR>
                                    </TableHead>
                                    <TableBody>
                                        {(row.historico).map((historyRow, index) => (
                                            <TR key={index} color={rowIndex} >
                                                <TC component="th" scope="row">
                                                    <TableP>{historyRow.data_pagamento}</TableP>
                                                </TC>
                                                <TC><TableP>{historyRow.responsavel}</TableP></TC>
                                                <TC ><TableP natureza={row.natureza.toLowerCase()}>{(parseFloat(row.natureza.toLowerCase() === "despesa" ? `-${historyRow.valor_pagamento}` : historyRow.valor_pagamento)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableP></TC>
                                                <TC >
                                                    <TableP>{historyRow.forma_pagamento}</TableP>
                                                </TC>
                                                <TC>
                                                    <TableP>
                                                        {historyRow.empresa_nota}
                                                    </TableP>
                                                </TC>
                                                <TC>
                                                    <TableP>
                                                        {historyRow.conta}
                                                    </TableP>
                                                </TC>
                                                <TC>
                                                    <TableP>
                                                    <img src={Pdf} alt="pdf"/>
                                                    </TableP>
                                                </TC>
                                                
                                            </TR>
                                        ))}
                                    </TableBody>
                                </Table>
                                :
                                <TR className={classeRow.root}>
                                    <TC colspan={6}>
                                        <TableP>
                                            Não há registos de pagamento nesse lançamento
                                        </TableP>
                                    </TC>
                                </TR>}
                    </Box>
                </Collapse>
                </TableCell>
            </TR>    
        )
    }

    return (
        <>
            <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
            {ModalChildren(row)}
            </Modal>

            <TR color={rowIndex} className={classeRow.root}>
            <TC>
                <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                {open ? <img src={ArrowUp} alt="^"/> : <img src={ArrowDown} alt="v"/>}
                </IconButton>
            </TC>
            <TC>
                <TableP>
                    {row.nome}
                </TableP>
                
            </TC>
            <TC>
                <TableP natureza={row.natureza.toLowerCase()}>
                    {row.natureza}
                </TableP>
            </TC>
            <TC>
                <TableP>
                    {row.empresa}
                </TableP>
            </TC>
            <TC>
                <TableP natureza={row.natureza.toLowerCase()}>
                {(parseFloat(row.natureza.toLowerCase()==="despesa"? `-${row.valor}`: row.valor)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </TableP>
            </TC>    
            <TC>
                <TableP>
                    {row.data_vencimento}
                </TableP>
            </TC>
        
            
            <TC>
                <TableP natureza={row.natureza.toLowerCase()}>
                    {(parseFloat(row.natureza.toLowerCase()==="despesa"? `-${row.valor_p_r}`: row.valor_p_r)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </TableP>
            </TC>
                <TC onClick={(e) => row.status !== "ok" ? handleOpenModal(e) : null} >
                    
                    <TableP pointer={row.status !== "ok"}>
                        <StatusDiv>
                        <StatusImg src={row.status === "ok"? Ok: Clock}/>
                        {row.status === "ok" ? row.natureza === "Despesa" ? "Pago" : "Recebido" :
                        row.natureza === "Despesa"? "Pagar":"Receber"}
                        </StatusDiv>
                    </TableP>
                </TC> 
            <TC>
                    
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <img src={ThreeDots} alt="..."/>          
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                >
                    <MenuItem onClick={handleDelete}>Excluir</MenuItem>
                    <MenuItem onClick={handleEdit}>Editar</MenuItem>
                    {
                        row.status !== "ok" ?
                        <MenuItem onClick={e=>handleOpenModal(e)}>Adicionar</MenuItem>  
                        : null
                    }
                      
                </Menu>     
            </TC>
        </TR>
        <HistoricoRow row={row}/>
                        
        </>
    )
}


export default Row;