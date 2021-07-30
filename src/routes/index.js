import React from 'react';

import { Route, Switch, BrowserRouter } from "react-router-dom";
import PrivateRoute from './PrivateRoute';

//Pages
//SignedOut
import Login from '../pages/SignedOut/Login';
import ForgotPassword from '../pages/SignedOut/ForgotPassword';
//SignedIn
//Modulo01
import AddRelease from '../pages/SignedIn/Modulo01/AddRelease/index';
import Releases from '../pages/SignedIn/Modulo01/Releases/index';
import Companies from '../pages/SignedIn/Modulo01/Companies';
import Company from '../pages/SignedIn/Modulo01/Company';
import AddCompany from '../pages/SignedIn/Modulo01/AddCompany';
import AddEmployess from '../pages/SignedIn/Modulo01/AddEmployess';
import AddAccount from '../pages/SignedIn/Modulo01/AddAccount';

//Modulo02
import AddCar from '../pages/SignedIn/Modulo02/AddCar';
import Gestao from '../pages/SignedIn/Modulo02/Gestao';
import InfoCar from '../pages/SignedIn/Modulo02/InfoCar';


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login/>
                </Route>
                <Route path="/esqueci-senha">
                    <ForgotPassword/>
                </Route>
                <PrivateRoute path="/adicionar-despesa">
                    <AddRelease type="despesa"/>   
                </PrivateRoute>
                <PrivateRoute path="/adicionar-receita">
                    <AddRelease type="receita"/>   
                </PrivateRoute>
                <PrivateRoute path="/lancamentos">
                    <Releases/>   
                </PrivateRoute>
                <PrivateRoute path="/empresas" exact>
                    <Companies/>   
                </PrivateRoute>
                <PrivateRoute path="/adicionar-empresa">
                    <AddCompany/>   
                </PrivateRoute>
                <PrivateRoute path="/empresas/:companyName?" exact>
                    <Company/>   
                </PrivateRoute>
                <PrivateRoute path="/empresas/:companyName?/adicionar-funcionario">
                    <AddEmployess/>   
                </PrivateRoute>
                <PrivateRoute path="/empresas/:companyName?/adicionar-conta">
                    <AddAccount/>   
                </PrivateRoute>
                <Route exact path='/gestao' component={Gestao}/>
                <Route path='/gestao/veiculo' component={InfoCar}/>
                <Route exact path='/gestao/adicionar' component={AddCar}/>
                
            </Switch>        
        </BrowserRouter>
    )
}

