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

    cy.cadastro(nomeAleatorio, emailAleatorio, senha);

    cy.login(emailAleatorio, senha);

    cy.contains('p', 'Olá! ').should('be.visible');
    cy.get('.header__user').click();
    cy.get('.button').click();

    cy.get('#nome').should('be.visible');
  })
})