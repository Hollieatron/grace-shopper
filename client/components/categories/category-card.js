import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Image, Button, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'

const mapState = state => ({
  user: state.user
})

const CategoryCard = ({id, name, imageUrl, user}) => {
  return (
    <Card>
      <Image src={imageUrl} />
      <Card.Content>
        <Card.Header>
          <Link to={`/catalog/${id}/products/`}>{name}</Link>
          {user.isAdmin ? (
            <Button
              as={Link}
              to={`/admin/category/edit/${id}`}
              icon
              style={styles.button}
            >
              <Icon name="edit" />
            </Button>
          ) : (
            ''
          )}
        </Card.Header>
      </Card.Content>
    </Card>
  )
}

const styles = {
  button: {
    marginLeft: 10
  }
}

export default connect(mapState)(CategoryCard)
