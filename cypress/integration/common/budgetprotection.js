import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
  
  When('I select multiple items with no options',() =>{
    cy.get('#ember323').click();
    cy.get('[data-test-ff-control-checkbox-select-input="0"]').not('[disabled]').check({force: true} ).should('be.checked');
    cy.get('[data-test-ff-control-checkbox-select-input="1"]').not('[disabled]').check({force: true} ).should('be.checked');
    cy.get('[data-test-ff-control-checkbox-select-input="2"]').not('[disabled]').check({force: true} ).should('be.checked');
    cy.get('[data-test-ff-control-checkbox-select-input="3"]').not('[disabled]').check({force: true} ).should('be.checked');
    cy.get('[data-test-ff-control-checkbox-select-input="4"]').not('[disabled]').check({force: true} ).should('be.checked');
      
  });
  
  Then('I am unable to exceed the budget',() =>{
    cy.get('[data-test-order-item-options-modal-add-modify-button]').should('be.disabled');
    cy.get('[data-test-ff-control-checkbox-select-input="0"]').not('[disabled]').uncheck({force: true} );
    cy.get('[data-test-ff-control-checkbox-select-input="1"]').not('[disabled]').uncheck({force: true} );
    cy.get('[data-test-ff-control-checkbox-select-input="2"]').not('[disabled]').uncheck({force: true} );
    cy.get('[data-test-ff-control-checkbox-select-input="3"]').not('[disabled]').uncheck({force: true} );
    cy.get('[data-test-order-item-options-modal-add-modify-button]').click();
  });
