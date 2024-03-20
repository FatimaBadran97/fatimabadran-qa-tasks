///<reference types="cypress"/>
describe('Task #2', () => {
  before(() => {
    cy.login();

    cy.contains('Catalog').click().click({ force: true });
    cy.wait(1000);
    cy.contains('Products').click();

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
    //save btn
    cy.get('[name="save"]').click();
  });

  it('C- Validate that the user can search for a product', () => {
    cy.contains('Catalog').click().click({ force: true });
    cy.wait(1000);
    cy.contains('Products').click();
    //actions
    cy.get('#SearchProductName').type('Laptop123');
    cy.screenshot({ capture: 'runner' });
    cy.get('#SearchCategoryId').select('Computers');
    cy.get('#search-products').click();
    //assertions
    cy.get('#products-grid').find('td').contains('Laptop123');
  });
});
