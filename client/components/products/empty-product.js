import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Button} from 'semantic-ui-react'

const EmptyProduct = () => {
  return (
    <Container textAlign="center">
      Our apologies, there are no products that match with that category
      <br />
      <Button as={Link} to="/" primary>
        Home
      </Button>
    </Container>
  )
}

export default EmptyProduct
