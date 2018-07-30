import React from 'react'
import {updateOrderStatus} from '../../store'
import {connect} from 'react-redux'
import {Segment, Accordion, Icon, Form} from 'semantic-ui-react'
import OrderItem from './order-item'

const mapDispatch = dispatch => ({
  editOrderStatus: (id, status) => dispatch(updateOrderStatus(id, status))
})

class OrderManagementItem extends React.Component {
  constructor() {
    super()
    this.state = {
      orderId: 0,
      status: '',
      activeIndex: 0
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

  handleClick = (e, titleProps) => {
    const {index} = titleProps
    const {activeIndex} = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({activeIndex: newIndex})
  }

  render() {
    const {status, id, orderhistories} = this.props
    const {activeIndex} = this.state

    return (
      <Segment padded>
        <Accordion>
          <Accordion.Title
            active={activeIndex === id}
            index={id}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Order #{id}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === id}>
            {orderhistories
              ? orderhistories.map(order => (
                  <OrderItem {...order} key={order.id} />
                ))
              : 'No order information available'}
          </Accordion.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Select
              compact
              options={options}
              defaultValue={status}
              onChange={this.handleChange}
            />
            {this.state.status !== status ? (
              <Form.Button>Save</Form.Button>
            ) : (
              <Form.Button disabled>Save</Form.Button>
            )}
          </Form>
        </Accordion>
      </Segment>
      //
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
