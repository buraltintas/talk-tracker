import React from 'react'
import MainPage from './main-page'

describe('<MainPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MainPage />)
  })
})