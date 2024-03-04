///<reference types="cypress"/>

describe('Find the best selector for all elements', () => {
  //className
  it('Select conduit in navbar', () => {
    cy.visit('/#/register');
    cy.get('.navbar-brand');
  });
  //contains
  it('Select Home link', () => {
    cy.visit('/#/register');
    cy.get('.nav-link').contains('Home');
  });
  //eq
  it('Select Sign up link', () => {
    cy.visit('/#/register');
    cy.get('.nav-link').eq(2);
  });
  //tagName
  it('Select Sign up title', () => {
    cy.visit('/#/register');
    cy.get('h1');
  });
  //last
  it('Select Have an account link', () => {
    cy.visit('/#/register');
    cy.get('[ui-sref="app.login"]').last();
  });
  //first
  it('Select username input field', () => {
    cy.visit('/#/register');
    cy.get('.form-control').first();
  });
  //filter
  it('Select email input field', () => {
    cy.visit('/#/register');
    cy.get('.form-control').filter('[type=email]');
  });
  //attribute
  it('Select password input field', () => {
    cy.visit('/#/register');
    cy.get('[type=password]');
  });
  //element element
  it('Select Sign up button', () => {
    cy.visit('/#/register');
    cy.get('form button');
  });
  //find
  it('Select conduit in footer', () => {
    cy.visit('/#/register');
    //cy.get('.logo-font');
    cy.get('.container').find('.logo-font');
  });
  //next
  it('Select Copywrite', () => {
    cy.visit('/#/register');
    cy.get('.logo-font').next();
  });
});
