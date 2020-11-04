describe('Type in SearchBar', function() {
    it('Accepts input', function() {
        cy.visit('/');

        cy.get('.searchInput')
            .type('Game Night')
            .should('have.value', 'Game Night');
    })
});




{/* Checking if user input is registered correct



describe('Check if person was added to DB', function() {
    it('Gets, types and fetches', function() {
    cy.visit('http://localhost:3000')

    cy.get('.firstNameInput')
        .type('Morgana')*/}