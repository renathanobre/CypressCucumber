import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
  
  When('I have finished ordering and checkout',() =>{
    cy.get('[data-test-checkout-button]').click();
  });
  
  Then('I am prompted for cutlery',() =>{
    cy.get('[data-test-form-button').click();
  });

  And('I am able to accept and finish the checkout process',() =>{
    cy.get('.rd-h1').should('have.class','rd-h1 fde-order-confirmation_title rd-mb-16');
    cy.get('.fde-order-confirmation_information').should('have.class', 'fde-order-confirmation_information rd-lead-paragraph');
  });
