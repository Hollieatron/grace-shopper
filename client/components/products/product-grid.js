import React from 'react'
import {Card} from 'semantic-ui-react'
import ProductCard from './product-card'

const ProductGrid = ({products}) => {
  return (
    <Card.Group itemsPerRow={6}>
      {products.map(product => <ProductCard key={product.id} {...product} />)}
    </Card.Group>
  )
}

export default ProductGrid
