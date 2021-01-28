describe('Products', () =>{

    beforeEach(() => {
        //Given
        cy.visit('products.html');
    });

    it('should display zero products', () =>{
        cy.get('ol > li').should('have.length', 0);
    });

    it('should display the added product', () =>{
        //When
        cy.get('input[type="text"]')
            .type('Pen');
        //When
        cy.get('input[value="Add Product"]')
            .click();
        //Then
        cy.get('ol > li:last-child')
            .should('contain', 'Pen')
    })
})