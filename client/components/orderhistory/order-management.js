import React, {Component} from 'react'
import {Header, Container} from 'semantic-ui-react'
import {fetchOrderHistory} from '../../store'
import {connect} from 'react-redux'
import OrderManagementItem from './order-management-item'

const mapState = state => ({
  user: state.user,
  orderhistory: state.orderhistory
})

const mapDispatch = dispatch => ({
  getOrderHistory: () => dispatch(fetchOrderHistory())
})

class OrderManagement extends Component {
  componentDidMount() {
    const {getOrderHistory} = this.props
    getOrderHistory()
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
            All Orders
          </Header>
          {orderhistory.map(order => (
            <OrderManagementItem {...order} key={order.id}/>
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

export default connect(mapState, mapDispatch)(OrderManagement)
