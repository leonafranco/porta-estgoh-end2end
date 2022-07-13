/// <reference types="Cypress" />
// load post tiles json
const info = require('../../fixtures/info.json')
const loginPage = require('../pagesView/login.page')

describe('try to login with valid inputs', () => {
  it('should pass and enter to homepage', () => {
    cy.visit(info.localhost)
    loginPage.elements.cookieWarningAcceptButton().click()
    loginPage.typeUsername(info.login)
    loginPage.typePassword(info.password)
    loginPage.elements.loginButton().click()
     cy.contains('home').should('exist')
   });
})

describe('try to login with invalid inputs', () => {
  it('should failed and show a message', () => {
    cy.visit(info.localhost)
    loginPage.elements.cookieWarningAcceptButton().click()
    loginPage.typeUsername('invalidaccount@admin.pt')
    loginPage.typePassword('123456789')
    loginPage.elements.loginButton().click()
    cy.contains('We could not authenticate you, please try again').should('exist')
   });
})