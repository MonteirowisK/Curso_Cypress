describe('Cadastro Simples', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Lucas');
    cy.get('input[name="email"]').type('email@lucas1.com');
    cy.get('input[name="password"]').type('Senha@123');
    cy.get('input[name="confirm_password"]').type('Senha@123');
    cy.contains('button', 'Cadastrar').click();
  })
})