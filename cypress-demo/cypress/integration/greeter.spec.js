describe('Greeter', () => {
    it('Should greet the user', () => {
        //Arrange
            const expectedMessage = 'Hi Suresh, Have a nice day!';
            //cy.visit('http://localhost:8080/greeter.html');
            cy.visit('greeter.html');

        //Act
           /*  cy.get('#txtUserName')
                .type('Magesh')
            cy.get('#btnGreet')
                .click(); */

            /* 
            cy.get('div#root input[type="text"]:nth-child(4)')
                .type('Magesh'); */

            cy.get('input[type="text"]')
                .type('Suresh');

            cy.get('div#root input[type="button"]:nth-child(5)')
                .click();
            
        //Assert
            cy.get('div.highlight')
                .should('contain', expectedMessage);
    })
})