describe('Cadastro e Login', () => {
  it('Deverá abrir a tela de pets disponíveis, voltar para Home, abrir a página de cadastro e depois a página de Login.', () => {
    
    const timestamp = Date.now();
    const nomeAleatorio = `Renato_${timestamp}`;
    const emailAleatorio = `renato${timestamp}@email.com`;
    const senha = 'Renato@123';

    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('.button', 'Ver pets disponíveis para adoção').click();
    cy.get('.header__home').click();
    cy.get('[data-test="register-button"]').click();

    cy.get('[data-test="input-name"]').type(nomeAleatorio);
    cy.get('[data-test="input-email"]').type(emailAleatorio);
    cy.get('[data-test="input-password"]').type(senha);
    cy.get('[data-test="input-confirm-password"]').type(senha);
    cy.get('[data-test="submit-button"]').click();

    cy.get('[data-test="input-loginEmail"]').type(emailAleatorio);
    cy.get('[data-test="input-loginPassword"]').type(senha);
    cy.get('[data-test="submit-button"]').click();

    cy.contains('p', 'Olá! ').should('be.visible');
    cy.get('.header__user').click();
    cy.get('.button').click();

    cy.get('#nome').should('be.visible');
  })
})