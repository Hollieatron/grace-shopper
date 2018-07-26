import React, {Component} from 'react'
import {fetchProduct} from '../../store'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  Image,
  Button,
  Grid,
  Header,
  Segment,
  Label,
  Icon
} from 'semantic-ui-react'

class SingleProductPage extends Component {
  componentDidMount() {
    const id = Number(this.props.match.params.id)
    this.props.fetchProduct(id)
  }

  render() {
    const {product, user} = this.props

    return (
      <div
        className="ui raised very padded text container segment"
        style={styles.div}
      >
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image src={product.imageUrl} size="medium" />
            </Grid.Column>
            <Grid.Column>
              <Header as="h2">{product.name}</Header>
              <Label.Group>
                <Label as="a" size="large" tag>
                  {'$' + product.price}
                </Label>
                {user.isAdmin ? (
                  <Button
                    as={Link}
                    to={`/admin/products/edit/${product.id}`}
                    style={styles.button}
                    size="small"
                  >
                    <Icon name="edit" /> Edit
                  </Button>
                ) : (
                  ''
                )}
              </Label.Group>

              <Segment>{product.description}</Segment>
              <Button as="div" labelPosition="right">
                <Button color="red">Add to Cart</Button>
                <Label as="a" basic color="red" pointing="left">
                  Only {product.inventory} left!
                </Label>
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapState = state => ({
  product: state.product,
  user: state.user
})

const mapDispatch = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id))
  }
}

const styles = {
  div: {
    marginTop: 40
  },
  button: {
    marginLeft: 5
  }
}

export default connect(mapState, mapDispatch)(SingleProductPage)
