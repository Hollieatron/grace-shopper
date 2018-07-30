/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */

export {default as UserHome} from './user-home'
export {Login, Signup} from './users/auth-form'
export {default as ProductForm} from './products/product-form'
export {default as Home} from './home'
export {default as Navbar} from './navbar/navbar'
export {default as ProductGrid} from './products/product-grid'
export {default as ProductCatalog} from './products/product-catalog'
export {default as AccountPage} from './account/account-page'
export {default as SingleProductPage} from './products/single-product-page'
export {default as CategoryForm} from './categories/category-form'
export {default as CategoryGrid} from './categories/category-grid'
export {default as UserOrderHistory} from './orderhistory/user-order-history'
export {default as AccountManagement} from './account/account-management'
export {default as EditAccount} from './account/edit-account'
export {default as UserCartPage} from './cart/user-cart-page'
export {default as CartItem} from './cart/cart-item'
export {default as OrderManagement} from './orderhistory/order-management'
export {default as Checkout} from './checkout/checkout-form'
