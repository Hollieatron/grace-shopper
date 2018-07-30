import React from 'react'
import {updateOrderStatus} from '../../store'
import {connect} from 'react-redux'
import {Header, Segment, Select, Button, Form} from 'semantic-ui-react'


const mapDispatch = dispatch => ({
    editOrderStatus: (id, status) => dispatch(updateOrderStatus(id, status))
  })

class OrderManagementItem extends React.Component {
  constructor() {
    super()
    this.state = {
      orderId: 0,
      status: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
      orderId: this.props.id,
      status: this.props.status
    })
  }

  handleChange(evt, {value}) {
    this.setState({status: value})
  }

  handleSubmit() {
    const {editOrderStatus} = this.props
    const {orderId, status} = this.state
    editOrderStatus(orderId, status)
  }

  render() {
    const {status, id, orderhistories} = this.props
    return (
      <Segment.Group>
        <Header as="h5" attached="top">
          Order #{id}
        </Header>
        <Segment attached>
          {/* Total items: {orderhistories.length} */}
          <Form onSubmit={this.handleSubmit}>
          <Form.Select
            compact
            options={options}
            defaultValue={status}
            onChange={this.handleChange}
          />
          {this.state.status !== status ? <Form.Button>Save</Form.Button> : <Form.Button disabled>Save</Form.Button>}
          </Form>
        </Segment>
      </Segment.Group>
    )
  }
}


export default connect(null, mapDispatch)(OrderManagementItem)



const options = [
    {key: 'created', name: 'status', text: 'Created', value: 'Created'},
    {key: 'processing', name: 'status', text: 'Processing', value: 'Processing'},
    {key: 'cancelled', name: 'status', text: 'Cancelled', value: 'Cancelled'},
    {key: 'completed', name: 'status', text: 'Completed', value: 'Completed'}
  ]