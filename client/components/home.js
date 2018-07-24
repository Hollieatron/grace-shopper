import React from 'react'
import {CategoryGrid} from './index'
import {Container, Header} from 'semantic-ui-react'

const Home = () => {
  return (
    <Container style={styles.container}>
      <Header as="h1">Categories</Header>
      <CategoryGrid />
    </Container>
  )
}

const styles = {
  container: {
    margin: 30
  }
}

export default Home
