import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Form, Button, Header, Label} from 'semantic-ui-react'
import {me, updateUserToServer} from '../../store'
import history from '../../history'

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  getUser: () => dispatch(me()),
  updateUser: data => dispatch(updateUserToServer(data))
})

class EditAccount extends Component {
  componentDidMount() {
    this.props.getUser()
    this.handleInitialize()
  }

  handleInitialize() {
    const {user} = this.props
    const initData = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email
    }

    this.props.initialize(initData)
  }

  handleCategoryFormSubmit = data => {
    this.props.updateUser(data)
    this.props.getUser()
    history.push('/account/info')
  }

  render() {
    const {pristine, reset, submitting, handleSubmit} = this.props
    return (
      <div
        className="ui raised very padded text container segment"
        style={styles.div}
      >
        <Header as="h2">Edit Account</Header>
        <Form onSubmit={handleSubmit(this.handleCategoryFormSubmit.bind(this))}>
          <label>First Name:</label>
          <Field
            name="firstName"
            component={renderField}
            type="text"
            placeholder="First Name"
          />

          <label>Last Name:</label>
          <Field
            name="lastName"
            component={renderField}
            type="text"
            placeholder="Last Name"
          />

          <label>Username:</label>
          <Field
            name="username"
            component={renderField}
            type="text"
            placeholder="Username"
          />

          <label>Email:</label>
          <Field
            name="email"
            component={renderField}
            type="text"
            placeholder="Email"
          />

          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
          <Button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </Button>
        </Form>
      </div>
    )
  }
}

const renderField = ({input, label, type, meta: {touched, error}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} />
      {touched && (error && <Label pointing>{error}</Label>)}
    </div>
  </div>
)
const styles = {
  div: {
    marginTop: 40,
    marginBottom: 40
  }
}

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Please enter your first name!'
  }
  if (!values.lastName) {
    errors.lastName = 'Please enter your last name!'
  }
  if (!values.username) {
    errors.username = 'Please enter your username!'
  }
  if (!values.email) {
    errors.email = 'Please enter your email!'
  }
  return errors
}

EditAccount = withRouter(connect(mapState, mapDispatch)(EditAccount))

export default reduxForm({
  form: 'editAccount',
  validate
})(EditAccount)
