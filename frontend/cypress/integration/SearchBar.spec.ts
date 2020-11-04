describe('Type in SearchBar', function() {
    it('Accepts input', function() {
        cy.visit('/');

        cy.get('.searchInput')
            .type('Game Night')
            .should('have.value', 'Game Night');
    })
});