describe('Products', () =>{

    beforeEach(() => {
        cy.visit('products.html');
    });

    it('should display zero products', () =>{
        cy.get('ol > li').should('have.length', 0);
    });

    it('should display the added product', () =>{
        cy.get('input[type="text"]')
            .type('Pen');

        cy.get('input[value="Add Product"]')
            .click();

        cy.get('ol > li:last-child')
            .should('contain', 'Pen')
    })
})