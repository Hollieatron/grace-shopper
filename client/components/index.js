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
