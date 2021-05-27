import React from 'react'
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'

import './style.scss'

const AntdHeader = Layout.Header

const Header = ({ cart }) => {
  const location = useLocation()

  const selected = {
    '/': '1',
    '/cart': '2'
  }

  return (
    <AntdHeader className='header'>
      <div className='header__logo'>BizTech shop</div>
      <Menu
        theme='dark'
        defaultSelectedKeys={[selected[location.pathname]]}
        mode='horizontal'
      >
        <Menu.Item key='1'>
          <Link
            to='/'
            style={{ color: selected[location.pathname] === '1' && 'white' }}
          >
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link
            to='/cart'
            style={{ color: selected[location.pathname] === '2' && 'white' }}
          >
            Cart
          </Link>
        </Menu.Item>
      </Menu>

      <div className='header__cart'>
        <ShoppingCartOutlined />
        <span className='header__cart-count'>
          items: {cart.cartItems.length}
        </span>
      </div>
    </AntdHeader>
  )
}

const mapStateToProps = ({ cart }) => {
  return {
    cart
  }
}

export default connect(mapStateToProps, null)(Header)
