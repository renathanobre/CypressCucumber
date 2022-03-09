import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
 
  Then('I am presented with a details form that validates my inputs',() =>{
    cy.get('[data-test-group-order-member-submit').click();
    cy.get('#ember299').should('have.class','fde-error-message ember-view');
    cy.get('#ember303').should('have.class', 'fde-error-message ember-view');

    cy.get('[data-test-group-order-member-full-name]').type(Cypress.env('fullName'));
    cy.get('[data-test-group-order-member-email]').type(Cypress.env('email'));
    cy.get('[data-test-group-order-member-phone-number]').type(Cypress.env('phoneNumber'));
    cy.get('[data-test-group-order-member-department]').type(Cypress.env('department'));
    cy.get('#ember312 > #ember312-checkbox').not('[disabled]').check({force: true} ).should('be.checked');
    cy.get('#ember313 > #ember313-checkbox').not('[disabled]').check({force: true} ).should('be.checked')
    cy.get('#ember314').click();
  });