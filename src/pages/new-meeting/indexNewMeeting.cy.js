import React from 'react'
import NewMeeting from './index'
import MockNextRouter from '../../../cypress/utils/index'

describe('<NewMeeting />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <MockNextRouter>
        <NewMeeting />
      </MockNextRouter>
    )
  })
})