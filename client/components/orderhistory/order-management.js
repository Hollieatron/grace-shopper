import React, {Component} from 'react'
import {Header, Container, Input, Select} from 'semantic-ui-react'
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
      searchText: 0,
      selectText: ''
    }
  }
  componentDidMount() {
    const {getOrderHistory} = this.props
    getOrderHistory()
  }

  handleSearchChange = (evt, {value}) => {
    this.setState({searchText: Number(value)})
  }

  handleSelectChange = (evt, {value}) => {
    this.setState({selectText: value})
  }

  render() {
    const {orderhistory} = this.props
    const {searchText, selectText} = this.state
    let orders = orderhistory
    if (orderhistory && orderhistory.length > 0 && selectText !== '') {
      orders = orderhistory.filter(order => order.status === selectText)
    }
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
            floated="left"
            focus
            placeholder="Find a specific order..."
            onChange={this.handleSearchChange}
          />
          <Select
            floated="right"
            placeholder="Select an order status..."
            options={orderOptions}
            onChange={this.handleSelectChange}
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
            floated="left"
            focus
            placeholder="Find a specific order..."
            onChange={this.handleChange}
          />
          <Select
            floated="right"
            placeholder="Select an order status..."
            options={orderOptions}
            onChange={this.handleSelectChange}
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

const orderOptions = [
  {key: '1', value: 'Created', name: 'Created', text: 'Created'},
  {key: '2', value: 'Processing', name: 'Processing', text: 'Processing'},
  {key: '3', value: 'Cancelled', name: 'Cancelled', text: 'Cancelled'},
  {key: '4', value: 'Completed', name: 'Completed', text: 'Completed'}
]

export default connect(mapState, mapDispatch)(OrderManagement)
