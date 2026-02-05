

Cypress.Commands.add('login', (emailAleatorio, senha) => { 
    cy.get('[data-test="input-loginEmail"]').type(emailAleatorio);
    cy.get('[data-test="input-loginPassword"]').type(senha);
    cy.get('[data-test="submit-button"]').click();
 })

Cypress.Commands.add('cadastro', (nomeAleatorio, emailAleatorio, senha) => { 
    cy.get('[data-test="input-name"]').type(nomeAleatorio);
    cy.get('[data-test="input-email"]').type(emailAleatorio);
    cy.get('[data-test="input-password"]').type(senha);
    cy.get('[data-test="input-confirm-password"]').type(senha);
    cy.get('[data-test="submit-button"]').click();
 })

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })