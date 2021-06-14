import React,{useState,useReducer,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Components/Header';
import { BgContainer,ArrowDiv,Return, InnerContainerBg, StyledLink } from './styles';
import Arrow from '../../Assets/arrow.svg';
import MainTitle from '../../Components/MainTitle';
import { Input,InputDiv,InputTitle, DropOptions } from '../../Components/Input/styles';
import { Button } from '../../Components/Button/styles';
import { HeaderContainer } from '../Gestao/styles';
import AuthContext from '../../Storage/auth-context';

const modeloReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>2};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>2};
  }
  return {value:'', isValid:false };
};

const placaReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>2};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>2};
  }
  return {value:'', isValid:false };
};

const renavamReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>2};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>2};
  }
  return {value:'', isValid:false };
};

const finalReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>2};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>2};
  }
  return {value:'', isValid:false };
};

const statusReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>2};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>2};
  }
  return {value:'', isValid:false };
};

const localReducer = (state,action) => {
  if(action.type ==='USER_INPUT'){
    return {value:action.val, isValid: action.val.trim().length>2};
  }
  if(action.type ==='INPUT_BLUR'){
    return {value:state.value, isValid: state.value.trim().length>2};
  }
  return {value:'', isValid:false };
};




export default function AddCar(){
  const [formIsValid, setFormIsValid] = useState(false);
  const [empresa,setEmpresa]=useState();
  const [empresaIsValid,setEmpresaIsValid]=useState(null);
  const [contrato,setContrato]=useState();
  const [contratoIsValid,setContratoIsValid]=useState(null);
  const [linha,setLinha]=useState();
  const [linhaIsValid,setLinhaIsValid]=useState(null);
  const ctx=useContext(AuthContext);
  
  const [modeloState,dispatchModelo] = useReducer(modeloReducer,{
    value:'',
    isValid: null,
  });

  const [renavamState,dispatchRenavam] = useReducer(renavamReducer,{
    value:'',
    isValid: null,
  });

  const [placaState,dispatchPlaca] = useReducer(placaReducer,{
    value:'',
    isValid: null,
  });

  const [finalState,dispatchFinal] = useReducer(finalReducer,{
    value:'',
    isValid: null,
  });

  const [statusState,dispatchStatus] = useReducer(statusReducer,{
    value:'',
    isValid: null,
  });

  const [localState,dispatchLocal] = useReducer(localReducer,{
    value:'',
    isValid: null,
  });

  

  

  const {isValid: modeloIsValid } = modeloState;
  const {isValid: renavamIsValid } = renavamState;
  const {isValid: placaIsValid } = placaState;
  const {isValid: finalIsValid } = finalState;
  const {isValid: statusIsValid } = statusState;
  const {isValid: localIsValid } = localState;
  

  useEffect(() => {
    const identifier = setTimeout(() => {
      //console.log('Checking form validity!');
      setFormIsValid(
       modeloIsValid && renavamIsValid && placaIsValid && finalIsValid && statusIsValid && localIsValid && contratoIsValid &&  linhaIsValid && empresaIsValid
      );
    }, 500);

    return () => {
      //console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [ modeloIsValid ,empresaIsValid, renavamIsValid , placaIsValid , finalIsValid , statusIsValid , localIsValid , contratoIsValid  , linhaIsValid]);

  const modeloChangeHandler = (event) => {
    dispatchModelo({type:'USER_INPUT', val:event.target.value});
  };
  const renavamChangeHandler = (event) => {
    dispatchRenavam({type:'USER_INPUT', val:event.target.value});
  };
  const placaChangeHandler = (event) => {
    dispatchPlaca({type:'USER_INPUT', val:event.target.value});
  };
  const finalChangeHandler = (event) => {
    dispatchFinal({type:'USER_INPUT', val:event.target.value});
  };
  const statusChangeHandler = (event) => {
    dispatchStatus({type:'USER_INPUT', val:event.target.value});
  };
  const localChangeHandler = (event) => {
    dispatchLocal({type:'USER_INPUT', val:event.target.value});
  };
  

  const validateModeloHandler = () => {
    dispatchModelo({type:'INPUT_BLUR'});
  };
  const validateRenavamHandler = () => {
    dispatchRenavam({type:'INPUT_BLUR'});
  };
  const validatePlacaHandler = () => {
    dispatchPlaca({type:'INPUT_BLUR'});
  };
  const validateFinalHandler = () => {
    dispatchFinal({type:'INPUT_BLUR'});
  };
  const validateStatusHandler = () => {
    dispatchStatus({type:'INPUT_BLUR'});
  };
  const validateLocalHandler = () => {
    dispatchLocal({type:'INPUT_BLUR'});
  };
  

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onAdd(modeloState.value,renavamState.value,placaState.value,finalState.value,statusState.value,localState.value,empresa,contrato,linha);
  
    
  };

  const changeEmpresa=()=>{
    setEmpresa(document.getElementById('empresa_id').value);
    empresa!=''?setEmpresaIsValid(true):setEmpresaIsValid(false)
  }

  const changeContrato=()=>{
    setContrato(document.getElementById('contrato_id').value);
    contrato!=''?setContratoIsValid(true):setContratoIsValid(false)
  }

  const changeLinha=()=>{
    setLinha(document.getElementById('linha_id').value);
    linha!=''?setLinhaIsValid(true):setLinhaIsValid(false)
  }

  const empresaValidate=()=>{
    document.getElementById('empresa_id').value===''?setEmpresaIsValid(false):setEmpresaIsValid(true)
  }

  const contratoValidate=()=>{
    document.getElementById('contrato_id').value===''?setContratoIsValid(false):setContratoIsValid(true)
  }

  const linhaValidate=()=>{
    document.getElementById('linha_id').value===''?setLinhaIsValid(false):setLinhaIsValid(true)
  }
  
  return(
    <>
    <HeaderContainer>
    <Header active={'Gestão'}/>
    <BgContainer>
      <ArrowDiv><Link to='/gestao'><Return src={Arrow} alt='Voltar'/></Link></ArrowDiv>
      <MainTitle>Adicionar Veículo</MainTitle>
      
        <InputDiv>
          <InputTitle>Modelo</InputTitle>
          <Input value={modeloState.value} onChange={modeloChangeHandler} onBlur={validateModeloHandler} validation={modeloState.isValid}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Renavam</InputTitle>
          <Input value={renavamState.value} onChange={renavamChangeHandler} onBlur={validateRenavamHandler} validation={renavamState.isValid}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Placa</InputTitle>
          <Input value={placaState.value} onChange={placaChangeHandler} onBlur={validatePlacaHandler} validation={placaState.isValid}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Final de Placa</InputTitle>
          <Input value={finalState.value} onChange={finalChangeHandler} onBlur={validateFinalHandler} validation={finalState.isValid}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Status</InputTitle>
          <Input value={statusState.value} onChange={statusChangeHandler} onBlur={validateStatusHandler} validation={statusState.isValid}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Local</InputTitle>
          <Input value={localState.value} onChange={localChangeHandler} onBlur={validateLocalHandler} validation={localState.isValid}/>
        </InputDiv>
        <InputDiv>
          <InputTitle>Empresa</InputTitle>
          <DropOptions id='empresa_id' onChange={changeEmpresa} onBlur={empresaValidate} validation={empresaIsValid}>
            <option id='empresa0' disabled hidden selected ></option>
            <option value='empresa1' >Empresa 1</option>
            <option value='empresa2'>Empresa 2</option>
            <option value='empresa3'>Empresa 3</option>
          </DropOptions>
        </InputDiv>
        <InputDiv>
          <InputTitle>Contrato</InputTitle>
          <DropOptions id='contrato_id' onChange={changeContrato} onBlur={contratoValidate} validation={contratoIsValid}>
            <option  disabled hidden selected ></option>
            <option value='contrato1' >Contrato 1</option>
            <option value='contrato2'>Contrato 2</option>
            <option value='contrato3'>Contrato 3</option>
          </DropOptions>
        </InputDiv>
        <InputDiv>
          <InputTitle>Rodando na Linha</InputTitle>
          <DropOptions id='linha_id' onChange={changeLinha} onBlur={linhaValidate} validation={linhaIsValid}>
            <option  disabled hidden selected ></option>
            <option  value='linha1'>Linha 1</option>
            <option value='linha2'>Linha 2</option>
            <option value='linha3'>Linha 3</option>
          </DropOptions>
        </InputDiv>
        
          <Button onClick={submitHandler} disabled={!formIsValid}><StyledLink to='/gestao'>Adicionar</StyledLink></Button>
        
        
      
    </BgContainer>
    </HeaderContainer>
    </>

  )
}