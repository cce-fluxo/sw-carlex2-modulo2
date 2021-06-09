import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import AddCar from '../Pages/AddCar';
import Gestao from '../Pages/Gestao';
import InfoCar from '../Pages/InfoCar';


export default function Routes(){
  return(
    <div>
    <BrowserRouter>
      <Switch>
      <Route exact path='/gestao' component={Gestao}/>
      <Route exact path='/gestao/veiculo' component={InfoCar}/>
      <Route exact path='/gestao/adicionar' component={AddCar}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}
      //<Route path='/condutores' component={}/>
    //  <Route path='/checklist' component={}/>