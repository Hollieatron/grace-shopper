import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Image, Rating} from 'semantic-ui-react'

const ProductCard = ({id, imageUrl, name, price, description}) => {
  return (
    <Card>
      <Image src={imageUrl} />
      <Card.Content>
        <Card.Header>
          <Link to={`/products/product/${id}`}>{name}</Link>
        </Card.Header>
        <Card.Meta>Price: ${price}</Card.Meta>
        <Card.Description>{description.slice(0, 40)}.</Card.Description>
        <Rating icon="star" defaultRating={4} maxRating={5} />
      </Card.Content>
    </Card>
  )
}

export default ProductCard
