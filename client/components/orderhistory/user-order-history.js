import React, {Component} from 'react'
import {Header, Container} from 'semantic-ui-react'
import {fetchUserOrderHistory} from '../../store'
import {connect} from 'react-redux'
import OrderHistoryItem from './order-history-item'

const mapState = state => ({
  user: state.user,
  orderhistory: state.userorderhistory
})

const mapDispatch = dispatch => ({
  getOrderHistory: id => dispatch(fetchUserOrderHistory(id))
})

class UserOrderHistory extends Component {
  componentDidMount() {
    const {getOrderHistory, user} = this.props
    console.log(user)
    getOrderHistory(user.id)
  }

  render() {
    const {orderhistory} = this.props
    if (orderhistory && orderhistory.length > 0) {
      return (
        <div
          className="ui raised very padded text container segment"
          style={styles.div}
        >
          <Header as="h1" dividing textAlign="center" style={styles.header}>
            Order History
          </Header>
          {orderhistory.map(order => (
            <OrderHistoryItem {...order} key={order.id} />
          ))}
        </div>
      )
    } else {
      return (
        <div
          className="ui raised very padded text container segment"
          style={styles.div}
        >
          <Header as="h1" dividing textAlign="center" style={styles.header}>
            Order History
          </Header>
          <Container> No Current Order History</Container>
        </div>
      )
    }
  }
}

const styles = {
  div: {
    marginTop: 40,
    width: 1000
  },
  header: {
    paddingBottom: 10
  },
  subtotal: {
    textAlign: 'right',
    marginRight: 20
  }
}

export default connect(mapState, mapDispatch)(UserOrderHistory)
