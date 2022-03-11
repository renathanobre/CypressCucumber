import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
 
  Then('I am presented with a details form that validates my inputs',(dataTable) =>{
    dataTable.hashes().forEach(element =>{
      cy.get('[data-test-group-order-member-submit]').click();
      cy.get('[data-test-group-order-member-full-name] .fde-error-message' ).should('have.class', 'fde-error-message ember-view');
      cy.get('[data-test-group-order-member-email] .fde-error-message').should('have.class', 'fde-error-message ember-view');
      cy.get('[data-test-group-order-member-full-name]').type(element.fullName);
      cy.get('[data-test-group-order-member-email]').type(element.email);
      cy.get('[data-test-group-order-member-phone-number]').type(element.phoneNumber);
      cy.get('[data-test-group-order-member-department]').type(element.department);
      cy.get('[data-test-group-order-member-noitfy-by-email] #ember312-checkbox').not('[disabled]').check({force: true} ).should('be.checked');
      cy.get('[data-test-group-order-member-noitfy-by-sms] #ember313-checkbox').not('[disabled]').check({force: true} ).should('be.checked')
      cy.get('#ember314').click();
    });
  });