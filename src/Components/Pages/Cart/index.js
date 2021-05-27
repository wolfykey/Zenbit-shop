import { connect } from 'react-redux'
import Cart from './Cart'
import {
  productAddedToCart,
  productRemovedFromCart,
  allProductsRemovedFromCart
} from 'redux/actions'

const mapStateToProps = ({ cart }) => {
  return {
    items: cart.cartItems
  }
}

const mapDispatchToProps = {
  onIncrease: productAddedToCart,
  onDecrease: productRemovedFromCart,
  onDelete: allProductsRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
