import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_ALL_PRODUCTS_FROM_CART
} from '../actions/types'

const initialState = {
  cartItems: []
}

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)]
  }

  if (idx === -1) {
    return [...cartItems, item]
  } else {
    return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)]
  }
}

const updateCartItem = (product, item = {}, quantity) => {
  const {
    id = product.id,
    name = product.name,
    image = product.image,
    price = product.price,
    count = 0,
    total = 0
  } = item

  return {
    id,
    name,
    image,
    price,
    count: count + quantity,
    total: total + quantity * product.price
  }
}

const updateOrder = (state, product, quantity) => {
  const { cartItems } = state

  const itemIdx = cartItems.findIndex(({ id }) => id === product.id)
  const item = cartItems[itemIdx]

  const newItem = updateCartItem(product, item, quantity)

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIdx)
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return updateOrder(state, action.payload, 1)
    case REMOVE_PRODUCT_FROM_CART:
      return updateOrder(state, action.payload, -1)
    case REMOVE_ALL_PRODUCTS_FROM_CART:
      const item = state.cartItems.find(({ id }) => id === action.payload.id)
      return updateOrder(state, action.payload, -item.count)
    default:
      return state
  }
}
