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
    it('')
})