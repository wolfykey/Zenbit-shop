import React, { useEffect } from 'react'
import { Row, Col } from 'antd'

import './style.scss'

import Card from './Blocks/Card'

const Home = ({ products, fetchProducts, productAddedToCart }) => {
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <Row>
      {products.map((el) => (
        <Col span='8' key={el.id}>
          <Card item={el} productAddedToCart={() => productAddedToCart(el)} />
        </Col>
      ))}
    </Row>
  )
}

export default Home
