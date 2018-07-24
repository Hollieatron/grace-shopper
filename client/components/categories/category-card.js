import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Image} from 'semantic-ui-react'

const CategoryCard = ({id, name, imageUrl}) => {
  return (
    <Card>
      <Image src={imageUrl} />
      <Card.Content>
        <Card.Header>
          <Link to={`/${id}/products/`}>{name}</Link>
        </Card.Header>
      </Card.Content>
    </Card>
  )
}

export default CategoryCard
