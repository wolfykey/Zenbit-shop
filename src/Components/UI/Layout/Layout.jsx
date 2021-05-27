import React from 'react'
import { Layout as AntdLayout } from 'antd'
import { Header } from '../Header'

import './style.scss'

const { Footer, Content } = AntdLayout

const Layout = ({ children }) => {
  return (
    <AntdLayout className='main-layout'>
      <Header />
      <Content>
        <AntdLayout className='site-layout-background'>{children}</AntdLayout>
      </Content>
      <Footer>Ant Design © 2020</Footer>
    </AntdLayout>
  )
}

export default Layout
