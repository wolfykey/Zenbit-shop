import React from 'react'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'

import 'antd/dist/antd.css'

import { Home } from './Components/Pages/Home'
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
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default App
