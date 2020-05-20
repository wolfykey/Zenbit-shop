import React from 'react'
import { Layout, Menu } from 'antd'

import './style.scss'

const AntdHeader = Layout.Header

const Header = () => {
  return (
    <AntdHeader className='header'>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item key='1'>Home</Menu.Item>
        <Menu.Item key='2'>Cart</Menu.Item>
      </Menu>
    </AntdHeader>
  )
}

export default Header
