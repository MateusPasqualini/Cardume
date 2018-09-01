import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Eventos from './eventos'


const Rotas = () => (
    <main>
      <Switch>
        <Route path='/confirmarPresenca' component={Eventos}/>
      </Switch>
    </main>
  )
export default Rotas;