describe('Test Login Screen', () => {
  it('Login Screen', () => {
    cy.visit('/login')
    cy.get('[data-cy="login-header"]').contains('Login')
  })
})