describe('Greeter', () => {
    it('Should greet the user', () => {
        //Arrange
            const expectedMessage = 'Hi Magesh, Have a nice day!';
            cy.visit('http://localhost:8080/greeter.html');

        //Act
            cy.get('#txtUserName')
                .type('Magesh')
            cy.get('#btnGreet')
                .click();
            
        //Assert
            cy.get('#divMessage')
                .should('contain', expectedMessage);
    })
})