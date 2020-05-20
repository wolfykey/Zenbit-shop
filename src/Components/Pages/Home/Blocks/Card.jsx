import React from 'react'
import { connect } from 'react-redux'
import { Card as AntdCard, Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

import './style.scss'

import { productAddedToCart } from '../../../../redux/actions'

const { Meta } = AntdCard

const Card = ({ item, productAddedToCart }) => {
  return (
    <AntdCard
      hoverable
      style={{ width: '100%' }}
      cover={<img alt='example' src={item.image} />}
    >
      <Meta title={item.name} description={item.price + ' ₴'} />
      <Button
        type='primary'
        icon={<ShoppingCartOutlined />}
        size='large'
        onClick={() => productAddedToCart(item)}
      >
        Add to cart
      </Button>
    </AntdCard>
  )
}

const mapDispatchToProps = {
  productAddedToCart
}

export default connect(null, mapDispatchToProps)(Card)
