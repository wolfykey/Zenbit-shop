import React from 'react'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'

import 'antd/dist/antd.css'

import { Home } from './Components/Pages/Home'
import { Cart } from './Components/Pages/Cart'
import { Header } from './Components/UI/Header'

const { Footer, Content } = Layout

function App() {
  return (
    <Layout className='wrapper'>
      <Header />
      <Content style={{ padding: '0 50px' }}>
        <Layout
          className='site-layout-background'
          style={{ padding: '24px 0' }}
        >
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
          </Switch>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2020 Created by Vlad Vovk
      </Footer>
    </Layout>
  )
}

export default App
