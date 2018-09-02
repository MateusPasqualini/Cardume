import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Eventos from './eventos';
import Presenca from './presencaConfirmada';
import CadastroEvento from './cadastroEvento';
import Detalhes from './detalhes';
import Register from './register';
import Perfil from './perfil';
import Login from './login';


const Rotas = () => (
    <main>
      <Switch>
       <Route path='/' component={Eventos}/>
        <Route path='/presencaConfirmada' component={Presenca}/>
        <Route path='/perfil' component={Perfil}/>
        <Route path='/cadastroEvento' component={CadastroEvento}/>
        <Route path='/detalhes' component={Detalhes}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </main>
  )
export default Rotas;