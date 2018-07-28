import React, {Component} from 'react'
import {Grid, Header, Divider, Button, Icon} from 'semantic-ui-react'
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
    getOrderHistory(user.id)
  }

  render() {
    const {orderhistory} = this.props
    return (
      <div
        className="ui raised very padded text container segment"
        style={styles.div}
      >
        <Header as="h1" dividing textAlign="center" style={styles.header}>
          Order History
        </Header>
        <OrderHistoryItem id={5} status={'Complete'} />
      </div>
    )
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
