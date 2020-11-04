describe('Check if person was added to DB', function() {
    it('Gets, types and fetches', function() {
        cy.visit('http://localhost:3000')

        cy.get('.firstNameInput')
            .type('Morgana')