/// <reference types="Cypress" />
// load post tiles json

describe('try to login with valid inputs', () => {
    it('should pass and enter to homepage', () => {
      cy.visit("www.portalestgoh.com")
      cy.wait(1000)
      cy.contains("Entrar").click();
      cy.get(".main > form > :nth-child(1) > .form-input").type("charmander@gmail.com");
      cy.get(".main > form > :nth-child(2) > .form-input").type("123456789");
      cy.get('form > [type="submit"]').click();
      cy.wait(100)
      cy.url().should("eq", "https://www.portalestgoh.com/home")
     });
  })