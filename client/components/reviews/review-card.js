import React from 'react'
import {Rating, Segment, Header} from 'semantic-ui-react'

const ReviewCard = ({title, rating, description}) => {
  return (
    <Segment>
      <Header as="h2">
        {title.slice(0, 20)}
        <Rating
          icon="star"
          defaultRating={rating}
          maxRating={5}
          style={styles.rating}
        />
      </Header>
      <Segment>{description}</Segment>
    </Segment>
  )
}

const styles = {
  rating: {
    marginLeft: 10
  }
}

export default ReviewCard
