import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I Navigate to {string}', function (path) {
  cy.visit(path);
});

When('Presented with the sign in modal',() =>{
  cy.get('[data-test-rd-ui-button="secondary"]').should('be.visible');
});

Then('I am able to select guest or sign in',() =>{
  cy.get('[data-test-rd-ui-button="secondary"]').click();
});

And('I am able to sign in as a guest',() =>{
  cy.get('[data-test-group-order-member-submit]').should('be.visible');
});