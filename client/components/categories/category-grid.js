import React from 'react'
import {Card} from 'semantic-ui-react'
import CategoryCard from './category-card'
import {connect} from 'react-redux'

const mapState = state => ({
  categories: state.categories
})

const CategoryGrid = ({categories}) => {
  return (
    <Card.Group itemsPerRow={6}>
      {categories.length > 0 ? (
        categories.map(category => (
          <CategoryCard key={category.id} {...category} />
        ))
      ) : (
        <div>No Categories</div>
      )}
      <CategoryCard key={-1} id={0} name={'All Products'} imageUrl={'http://dummyimage.com/250x250.bmp/cc0000/ffffff'}/>
    </Card.Group>
  )
}

export default connect(mapState)(CategoryGrid)
