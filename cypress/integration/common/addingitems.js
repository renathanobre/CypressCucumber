import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
  
  When('I select an item with no options',() =>{
    cy.get('[data-test-restaurant-menu-item]').eq(0).click();

  });
  
  Then('That item is added to the cart',() =>{
    cy.get('[data-test-order-item-options-modal-add-modify-button]').click();
 });
