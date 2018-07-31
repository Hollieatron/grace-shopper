import {createStore, combineReducers, applyMiddleware} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
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
import orderhistory from './order-reducers/order-history'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['cart']
}

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
  userorderhistory,
  orderhistory
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const pReducer = persistReducer(rootPersistConfig, reducer)

const store = createStore(pReducer, middleware)
export const persistor = persistStore(store)
persistor.purge()

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
export * from './order-reducers/order-history'
