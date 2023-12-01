describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Should successfully login with valid credentials', () => {
    cy.fixture('credentials').then((credentials) => {
      const validAdminCredentials = credentials.validAdminCredentials;

      cy.get('input[name="email"]').type(validAdminCredentials.email)
      cy.get('input[name="password"]').type(validAdminCredentials.password)
      cy.get('[data-cy="login-button"]').click()
  
      cy.url().should('eq', 'http://localhost:5000/')
      cy.get('[data-cy="logged-welcome-header"]').should('contains', /Hi, Welcome/i)
    })
  })

  it('Should display an error message with invalid credentials', () => {
    cy.fixture('credentials').then((credentials) => {
      const invalidAdminCredentials = credentials.invalidAdminCredentials;

      cy.get('input[name="email"]').type(invalidAdminCredentials.email)
      cy.get('input[name="password"]').type(invalidAdminCredentials.password)
      cy.get('[data-cy="login-button"]').click()

      cy.get('[data-cy="login-error"]').should('be.visible')
    })
  })
})