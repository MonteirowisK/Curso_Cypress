describe('Login com beforeEach', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deverá fazer login com sucesso utilizando beforeEach', () => {
        cy.get('[data-test="input-loginEmail"]').type('email@lucas1.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha@123');
        cy.get('[data-test="submit-button"]').click();
    })
})