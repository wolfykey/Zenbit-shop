import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import { productAddedToCart } from 'redux/actions'

import './style.scss'

import Card from './Blocks/Card'
import { fetchProducts } from 'redux/actions/index'

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

const mapStateToProps = ({ products }) => {
  return {
    products
  }
}

const mapDispatchToProps = {
  fetchProducts,
  productAddedToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
