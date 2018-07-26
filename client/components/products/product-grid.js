import React from 'react'
import {Card} from 'semantic-ui-react'
import ProductCard from './product-card'
import EmptyProduct from './empty-product'

const ProductGrid = ({products, category}) => {
  if (category.products.length < 1) {
    return <EmptyProduct />
  } else {
    return (
      <Card.Group itemsPerRow={6}>
        {products.map(product => <ProductCard key={product.id} {...product} />)}
      </Card.Group>
    )
  }
}

export default ProductGrid
