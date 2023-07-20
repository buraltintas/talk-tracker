import React from 'react'
import Meeting from './[id]'

describe('<Meeting />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Meeting />)
  })
})