describe('Test Settings', () => {
    it('Should successfully change the first and last name', () => {
        cy.fixture('credentials').then((credentials) => {
            const validAdminCredentials = credentials.validAdminCredentials;
            cy.login(validAdminCredentials.email, validAdminCredentials.password)

            cy.fixture('settings').then((settings) => {
                const {first_name, last_name} = settings.personal_details;

                cy.visit('/settings')
                cy.get('[data-cy="settings-update-first_name"]').focus().clear()
                cy.get('[data-cy="settings-update-first_name"]').focus().clear()
                cy.get('[data-cy="settings-update-last_name"]').focus().clear()

                cy.get('[data-cy="settings-update-first_name"]').type(first_name)
                cy.get('[data-cy="settings-update-last_name"]').type(last_name)
            
                cy.get('[data-cy="settings-update-profile-button"]').click()

                cy.get('[data-cy="settings-update-first_name"]').should('have.value', first_name)
                cy.get('[data-cy="settings-update-last_name"]').should('have.value', last_name)

                cy.get('[data-cy="settings-update-profile_status"]').contains(/Admin Details are Updated Successfully./i).should('exist')
            })
        })
    })
    it('Should show an error when updating email when entering invalid email', () => {
        cy.fixture('credentials').then((credentials) => {
            const validAdminCredentials = credentials.validAdminCredentials;
            cy.login(validAdminCredentials.email, validAdminCredentials.password)

            cy.fixture('settings').then((settings) => {
                const {invalid_email, invalid_pass} = settings.invalid_personal_details;

                cy.visit('/settings')
                cy.get('[data-cy="settings-update-email"]').clear()

                cy.get('[data-cy="settings-update-email"]').type(invalid_email)
            
                cy.get('[data-cy="settings-update-profile-button"]').click()

                cy.get('[data-cy="settings-update-profile_status_error"]').contains(/Email is not valid/i).should('exist')
            })
        })
    })
    it('Should successfully update an email', () => {
        cy.fixture('credentials').then((credentials) => {
            const validAdminCredentials = credentials.validAdminCredentials;
            cy.login(validAdminCredentials.email, validAdminCredentials.password)

            cy.fixture('settings').then((settings) => {
                const {valid_email, valid_password} = settings.personal_details;

                cy.visit('/settings')
                cy.get('[data-cy="settings-update-email"]').clear()

                cy.get('[data-cy="settings-update-email"]').type(valid_email)
            
                cy.get('[data-cy="settings-update-profile-button"]').click()

                cy.get('[data-cy="settings-update-profile_status"]').contains(/Admin Details are Updated Successfully./i).should('exist')
            })
        })
    })
})