import { connect } from 'react-redux'
import Home from './Home'
import { fetchProducts, productAddedToCart } from 'redux/actions'

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
