import React from 'react'
import { connect } from 'react-redux'
import { Button, Tooltip } from 'antd'
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import {
  productAddedToCart,
  productRemovedFromCart,
  allProductsRemovedFromCart
} from '../../../redux/actions'

const Cart = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, name, count, total, price } = item
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>${price}</td>
        <td>${total}</td>
        <td>
          <Tooltip title='add'>
            <Button
              type='primary'
              shape='circle'
              icon={<PlusOutlined />}
              onClick={() => onIncrease(item)}
            />
          </Tooltip>
          <Tooltip title='minus'>
            <Button
              type='primary'
              shape='circle'
              icon={<MinusOutlined />}
              onClick={() => onDecrease(item)}
            />
          </Tooltip>
          <Tooltip title='delete'>
            <Button
              shape='circle'
              icon={<DeleteOutlined />}
              onClick={() => onDelete(item)}
            />
          </Tooltip>
        </td>
      </tr>
    )
  }

  return (
    <div className='shopping-cart-table'>
      <h2>Your Order</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className='total'>Total: ${total}</div>
    </div>
  )
}

const mapStateToProps = ({ cart }) => {
  return {
    items: cart.cartItems,
    total: cart.orderTotal
  }
}

const mapDispatchToProps = {
  onIncrease: productAddedToCart,
  onDecrease: productRemovedFromCart,
  onDelete: allProductsRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
