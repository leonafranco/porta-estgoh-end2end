/// <reference types="Cypress" />
// load post tiles json
const menuItems = require('../../fixtures/menuItems/post.json')
const info = require('../../fixtures/info.json')
const homepage = require('../../pagesView/homePage')

describe('Create a new tile', () => {
  it('test login page and create a new tile', () => {
    cy.visit(info.localhost)
    homepage.elements.cookieWarningAcceptButton().click()
    homepage.typeUsername(info.login)
    homepage.typePassword(info.password)
    homepage.elements.loginButton().click()
    cy.request({
      method: menuItems.method,
      url: menuItems.url,
      statusCode: menuItems.statusCode,
      body: menuItems.json,
    })
     cy.contains('teste cypress menu item')
     .trigger('mouseover')
     cy.wait(5000)
     cy.get('.popover').should('contain', 'Hint on hover')
     .should('exist')
     
   });
})