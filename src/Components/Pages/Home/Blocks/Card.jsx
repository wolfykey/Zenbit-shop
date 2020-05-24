import React from 'react'
import { Card as AntdCard, Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

import './style.scss'

const { Meta } = AntdCard

const Card = ({ item, productAddedToCart }) => {
  return (
    <AntdCard hoverable cover={<img alt='example' src={item.image} />}>
      <Meta title={item.name} description={item.price + ' ₴'} />
      <Button
        type='primary'
        icon={<ShoppingCartOutlined />}
        size='large'
        onClick={() => productAddedToCart(item.id)}
      >
        Add to cart
      </Button>
    </AntdCard>
  )
}

export default Card
