import React from 'react'
import NewParticipant from './new-participant'

describe('<NewParticipant />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <NewParticipant />
    )
  })
})