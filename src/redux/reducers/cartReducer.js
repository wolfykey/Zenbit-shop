import { ADD_PRODUCT_TO_CART } from '../actions/types'

const initialState = [
  {
    id: 1,
    quantity: 1,
    name: 'шарик',
    image:
      'https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg',
    price: 20,
    total: 20
  }
]

const updateCartItems = (state, product) => {
  const productInCart = state.find((el) => el.id === product.id)

  if (productInCart) {
    const productIdx = state.findIndex((el) => el.id === productInCart.id)
    const productInState = state[productIdx]

    const updateProduct = {
      ...productInState,
      quantity: ++productInState.quantity,
      total: productInState.total * ++productInState.quantity
    }

    return [...state, updateProduct]
  }

  return [...state, product]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return updateCartItems(state, action.payload)

    default:
      return state
  }
}
