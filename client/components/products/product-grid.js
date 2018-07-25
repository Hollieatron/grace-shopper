import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Container, Button} from 'semantic-ui-react'
import ProductCard from './product-card'

const ProductGrid = ({products}) => {
  if (products.length < 1) {
    return (
      <Container textAlign="center">
        Our apologies, there are no products that match with that category
        <br/>
        <Button as={Link} to='/' primary>
          Home
        </Button>
      </Container>
    )
  }
  return (
    <Card.Group itemsPerRow={6}>
      {products.map(product => <ProductCard key={product.id} {...product} />)}
    </Card.Group>
  )
}

export default ProductGrid
