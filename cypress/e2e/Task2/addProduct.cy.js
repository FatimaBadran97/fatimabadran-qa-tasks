///<reference types="cypress"/>
describe('Task #2', () => {
  before(() => {
    cy.login();
  });
  it.only('B-Validate that the user can add product', () => {
    cy.contains('Catalog').click().click({ force: true });
    cy.wait(2000);
    cy.contains('Products').click();

    cy.contains('Add new').click();
    //product name
    cy.get('#Name').type('Laptop123');
    //product category
    cy.get('.k-multiselect-wrap.k-floatwrap')
      .first()
      .find('.k-input')
      .type('Computers{enter}', { delay: 100 });
    //product price
    cy.get('.k-widget.k-numerictextbox')
      .eq(1)
      .find('.k-formatted-value.k-input')
      .type(3000);
    //save btn
    cy.get('[name="save"]').click();
    //assertion
    cy.get('.alert').should(
      'contain',
      'The new product has been added successfully.'
    );
  });
});
