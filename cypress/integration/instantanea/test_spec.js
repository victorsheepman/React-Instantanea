
describe('instantanea', function () {
    it('Funcionamiento de rutas y Modales', function () {
        cy.visit('/')
        cy.get('#historia').contains('Tu Historia').click()
        cy.get('#exit_modal').click()
        cy.get('h4').contains('wendy').click()
        cy.get('#principal').click()
        /*cy.get('nav').contains('Favoritos').click()
        cy.get('nav').contains('Mensajes').click()
        cy.get('.chat').click()
        cy.get('.modaluser__exit').click()
        cy.get('nav').contains('Perfil').click()
        cy.get('button').contains('Salir').click()*/
    })
})