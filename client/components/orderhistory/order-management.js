import React, {Component} from 'react'
import {Header, Container, Input} from 'semantic-ui-react'
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
  constructor() {
    super()
    this.state = {
      searchText: 0
    }
  }
  componentDidMount() {
    const {getOrderHistory} = this.props
    getOrderHistory()
  }

  handleChange = (evt, {value}) => {
    this.setState({searchText: Number(value)})
  }

  render() {
    const {orderhistory} = this.props
    const {searchText} = this.state
    let orders = orderhistory
    if (orderhistory && orderhistory.length > 0 && searchText > 0) {
      orders = orderhistory.filter(order => order.id === searchText)
    }
    if (orders.length > 0) {
      return (
        <div
          className="ui raised very padded text container segment"
          style={styles.div}
        >
          <Header as="h1" dividing textAlign="center" style={styles.header}>
            All Orders
          </Header>
          <Input
            focus
            placeholder="Find a specific order..."
            onChange={this.handleChange}
          />
          {orders.map(order => (
            <OrderManagementItem {...order} key={order.id} />
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
          <Input
            focus
            placeholder="Find a specific order..."
            onChange={this.handleChange}
          />
          <Container> No Orders Matched</Container>
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
