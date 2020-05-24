import React from 'react'
import { Route, Switch } from 'react-router-dom'

import 'antd/dist/antd.css'

import Home from './Components/Pages/Home'
import Cart from './Components/Pages/Cart'
import { Layout } from './Components/UI/Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
