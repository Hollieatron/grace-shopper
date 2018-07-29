import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {reducer as formReducer} from 'redux-form'
import user from './user-reducers/user'
import product from './product-reducers/product'
import products from './product-reducers/products'
import search from './search'
import categories from './category-reducers/categories'
import category from './category-reducers/category'
import reviews from './reviews-reducers/index'
import users from './user-reducers/users'
import cart from './cart-reducers/index'
import userorderhistory from './order-reducers/user-order-history'

const reducer = combineReducers({
  user,
  users,
  product,
  products,
  form: formReducer,
  search,
  categories,
  category,
  reviews,
  cart,
  userorderhistory
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user-reducers/user'
export * from './user-reducers/users'
export * from './product-reducers/product'
export * from './product-reducers/products'
export * from './search'
export * from './category-reducers/categories'
export * from './category-reducers/category'
export * from './cart-reducers/'
export * from './order-reducers/user-order-history'
