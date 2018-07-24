import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {reducer as formReducer} from 'redux-form'
import user from './user-reducers/user'
import product from './product-reducers/product'
import products from './product-reducers/products'
import search from './search'
import categories from './category-reducers'

const reducer = combineReducers({user, product, products, form: formReducer, search, categories})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user-reducers/user'
export * from './product-reducers/product'
export * from './product-reducers/products'
export * from './search'
export * from './category-reducers'
