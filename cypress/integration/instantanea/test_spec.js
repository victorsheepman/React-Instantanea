
describe('instantanea', function () {
    it('Funcionamiento de rutas y Modales', function () {
        cy.visit('/')
        cy.get('#historia').contains('Tu Historia').click()
        cy.get('#exit_modal').click()
        cy.get('h4').contains('wendy').click()
    })
})