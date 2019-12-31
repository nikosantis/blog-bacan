import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Menu } from './Menu'
import { Users } from './Users'

const Tareas = () => (
  <div>Tareas</div>
)

export const App = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route exact path='/' component={Users} />
      <Route exact path='/tareas' component={Tareas} />
    </Switch>
  </BrowserRouter>
)
