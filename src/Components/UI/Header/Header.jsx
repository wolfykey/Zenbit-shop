import React from 'react'
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

import './style.scss'

const AntdHeader = Layout.Header

const Header = ({ cart }) => {
  return (
    <AntdHeader className='header'>
      <div className='header__logo'>BizTech shop</div>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item key='1'>Home</Menu.Item>
        <Menu.Item key='2'>Cart</Menu.Item>
      </Menu>
      {cart.length && (
        <div className='header__cart'>
          <ShoppingCartOutlined />
          <span className='header__cart-count'>items: {cart.length}</span>
        </div>
      )}
    </AntdHeader>
  )
}

const mapStateToProps = ({ cart }) => {
  return {
    cart
  }
}

export default connect(mapStateToProps, null)(Header)
