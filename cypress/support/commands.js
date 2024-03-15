//A- Custom Commands
Cypress.Commands.add('login', () => {
  cy.visit('/');
  cy.get('.login-button').click();
});
