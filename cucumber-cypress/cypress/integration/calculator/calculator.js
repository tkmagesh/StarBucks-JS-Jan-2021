import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am in the calculator page', () => {
  cy.visit('/calculator.html')
});

When('I enter {string} in textbox1', (no) => {
  cy.get('#txtN1')
    .type(no);
});

When('I enter {string} in textbox2', (no) => {
  cy.get('#txtN2')
    .type(no);
});

When('I click the Add button', () => {
  cy
    .get('#btnAdd')
    .click()
});

Then('result {string} is displayed', (result) => {
  cy
    .get('#divResult')
    .should('contain', result)
});
