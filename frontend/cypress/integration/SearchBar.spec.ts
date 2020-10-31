describe('Type movie title', function() {
    it('Shows correct movie', function() {
        cy.visit('http://localhost:3000');

        cy.get('Input[]')
            .type('Game Night')
            .should('have.value', 'Game Night');

    })
});
