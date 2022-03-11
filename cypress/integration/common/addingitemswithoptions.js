import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
  
  When('I select an item with options',() =>{
    cy.get('#ember323').click();
    cy.get('[data-test-ff-control-checkbox-select-input="0"]').not('[disabled]').check({force: true} ).should('be.checked');
    cy.get('[data-test-order-item-options-modal-add-modify-button]').click();
    
  });
  
  Then('I am able to select some modifications to the menu item',(dataTable) =>{
    dataTable.hashes().forEach(element =>{
      cy.get('#ember323').click();
      cy.get('[data-test-ff-control-checkbox-select-input="1"]').not('[disabled]').check({force: true} ).should('be.checked');
      cy.get('[data-test-ff-control-checkbox-select-input="4"]').not('[disabled]').check({force: true} ).should('be.checked');
      cy.get('textarea').type(element.textAreaAllergyNotes);
      cy.get('[data-test-order-item-options-modal-add-modify-button]').click();
    });
  });
