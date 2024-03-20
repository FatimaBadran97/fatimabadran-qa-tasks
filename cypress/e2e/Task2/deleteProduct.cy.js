///<reference types="cypress"/>
describe('Task #2', () => {
  beforeEach(() => {
    cy.login();

    cy.contains('Catalog').click().click({ force: true });
    cy.wait(1000);
    cy.contains('Products').click();

    //add product
    cy.contains('Add new').click();
    cy.get('#Name').type('Laptop123');
    cy.get('.k-multiselect-wrap.k-floatwrap')
      .first()
      .find('.k-input')
      .type('Computers{enter}', { delay: 100 });
    cy.get('.k-widget.k-numerictextbox')
      .eq(1)
      .find('.k-formatted-value.k-input')
      .type(3000);
    cy.get('[name="save"]').click();
  });

  it.only('D- Validate that the user can delete product', () => {
    cy.contains('Catalog').click().click({ force: true });
    cy.wait(1000);
    cy.contains('Products').click();

    //search for product
    cy.get('#SearchProductName').type('Laptop123');
    cy.get('#SearchCategoryId').select('Computers');
    cy.get('#search-products').click();
    //actions
    cy.wait(1500);
    cy.get('.mastercheckbox').first().check();
    cy.get('#delete-selected').click();
    cy.wait(1500);
    cy.get('#delete-selected-action-confirmation-submit-button').click();
    //assertions
    cy.get('.dataTables_empty').should('contain', 'No data available in table');
  });
});
