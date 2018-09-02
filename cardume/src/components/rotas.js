import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Eventos from './eventos';
import Presenca from './presencaConfirmada';
import CadastroEvento from './cadastroEvento';
import Detalhes from './detalhes';
import Register from './register';


const Rotas = () => (
    <main>
      <Switch>
        <Route path='/confirmarPresenca' component={Eventos}/>
        <Route path='/presencaConfirmada' component={Presenca}/>
        <Route path='/cadastroEvento' component={CadastroEvento}/>
        <Route path='/detalhes' component={Detalhes}/>
        <Route path='/register' component={Register}/>
      </Switch>
    </main>
  )
export default Rotas;