import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Navbar as Nav} from './navbar'
import {Dropdown, Button, Icon} from 'semantic-ui-react'
import sinon from 'sinon'

const adapter = new Adapter()
enzyme.configure({adapter})
const clickSpy = sinon.spy()

describe('NavBar', () => {
  let navBar

  beforeEach(() => {
    navBar = shallow(
      <Nav handleClick={clickSpy} isLoggedIn={true} isAdmin={true} />
    )
  })

  it('should have 1 dropdown menu', () => {
    expect(navBar.find(Dropdown).length).to.equal(1)
  })
  it('should have 3 items in the menu if admin is logged in', () => {
    expect(navBar.find(Dropdown.Item).length).to.equal(3)
  })
  it('should have a 2 buttons, one for logout and shopping cart', () => {
    expect(navBar.find(Button).length).to.equal(2)
  })

  it('should have an icon for the shopping cart', () => {
    expect(navBar.find(Icon).length).to.equal(1)
  })
})
