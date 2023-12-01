describe('FAQs Test', () => {
    it('Should successfully add a new faq', () => {
        cy.fixture('credentials').then((credentials) => {
            const validAdminCredentials = credentials.validAdminCredentials;
            cy.login(validAdminCredentials.email, validAdminCredentials.password)

            cy.fixture('faqs').then((faqs) => {
                const {question, answer} = faqs.faq;

                cy.visit('/guides/faqs')
                cy.get('[data-cy="faq-question-input"]').type(question)
                cy.get('[data-cy="faq-answer-input"]').type(answer)
                cy.get('[data-cy="faq-submit"]').click()
            })
        })
    });
    it('Successfully added faq should be visible', () => {
        cy.fixture('credentials').then((credentials) => {
            const validAdminCredentials = credentials.validAdminCredentials;
            cy.login(validAdminCredentials.email, validAdminCredentials.password)

            cy.fixture('faqs').then((faqs) => {
                const {question, answer} = faqs.faq;
    
                cy.visit('/guides/faqs')
                cy.get('[data-cy="faq-question-0"]').should('contain.text', question)
                cy.get('[data-cy="faq-answer-0"]').should('not.exist')
            })
        })
    })
    it('Should successfully edit faq', () => {
        cy.fixture('credentials').then((credentials) => {
            const validAdminCredentials = credentials.validAdminCredentials;
            cy.login(validAdminCredentials.email, validAdminCredentials.password)

            cy.fixture('faqs').then((faqs) => {
                const {question, answer} = faqs.faq;

                cy.visit('/guides/faqs')
                cy.get('[data-cy="faq-question-0"]').should('contain.text', question)
                cy.get('[data-cy="faq-edit-0"]').click()

                cy.get('[data-cy="faq-question-input"]').should('have.value', question)
                cy.get('[data-cy="faq-answer-input"]').should('have.value', answer)

                cy.get('[data-cy="faq-question-input"]').clear()
                cy.get('[data-cy="faq-answer-input"]').clear()

                cy.fixture('faqs').then((faqs) => {
                    const {question, answer} = faqs.updated_faq;

                    cy.get('[data-cy="faq-question-input"]').type(question)
                    cy.get('[data-cy="faq-answer-input"]').type(answer)
                    cy.get('[data-cy="faq-submit"]').click()
                })
            })
        })
    })
    it('Should remove the new faq', () => {
        cy.fixture('credentials').then((credentials) => {
            const validAdminCredentials = credentials.validAdminCredentials;
            cy.login(validAdminCredentials.email, validAdminCredentials.password)

            cy.fixture('faqs').then((faqs) => {
                const {question, answer} = faqs.updated_faq;

                cy.visit('/guides/faqs')
                cy.get('[data-cy="faq-question-0"]').should('contain.text', question)
                cy.get('[data-cy="faq-trash-0"]').click()
            })
        })
    })
})