import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am in the greeter page', () => {
  cy.visit('greeter.html');
});

When('I enter my username', () => {
  cy.get('input[type="text"]')
    .type("Magesh");

});

When('click the greet button', () => {
  cy.get('input[value="Greet"]')
    .click();
});

Then('the greet message should be displayed', () => {
  cy.get('div.highlight')
    .should('contain', 'Hi Magesh, Have a nice day!');
});
