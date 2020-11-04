describe('Type movie title', function() {
    it('Shows correct movie', function() {
        cy.visit('http://localhost:3001');

        cy.get('Input[name="Name"]')
            .type('Game Night')
            .should('have.value', 'Game Night');


        cy.get('Button[id="applyButton"]').click()

    })
});




{/* Checking if user input is registered correct



describe('Check if person was added to DB', function() {
    it('Gets, types and fetches', function() {
    cy.visit('http://localhost:3000')

    cy.get('.firstNameInput')
        .type('Morgana')*/}