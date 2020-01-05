import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Menu } from './Menu'
import Users from './Users'
import Posts from './Posts'
import Tasks from './Tasks'

export const App = props => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <>
        <div className='margen'>
          <Route exact path='/' component={Users} />
          <Route exact path='/tareas' component={Tasks} />
          <Route exact path='/posts/:key' component={Posts} />
        </div>
      </>
    </Switch>
  </BrowserRouter>
)
