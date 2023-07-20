describe('Create new meeting', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="new-meeting-button"]').click();
    cy.get('[data-cy="meeting-name-input"]').type('Test');
    cy.get('[data-cy="participant-name-input"]').type('Name');
    cy.get('[data-cy="add-participant-button"]').click();
    cy.get('[data-cy="participant-name-input"]').type('Name 2');
    cy.get('[data-cy="add-participant-button"]').click();
    cy.get('[data-cy="save-meeting-button"]').click();
    cy.get('[data-cy="meeting-name"]').should("have.text", "Test");
    cy.get('[data-cy="toggle-button"]').first().click();
    cy.get('[data-cy="go-home-button"]').click();
    cy.get('[data-cy="meetings-button"]').click();
    cy.url().should('include', '/meetings');
  })
})