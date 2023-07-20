import React from 'react'
import Meetings from './index'
import MockNextRouter from '../../../cypress/utils/index'

describe('<Meetings />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <MockNextRouter>
        <Meetings />
      </MockNextRouter>
    )
  })
})