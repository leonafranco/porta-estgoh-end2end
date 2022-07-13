/// <reference types="Cypress" />
class homePage {

  elements = {
    adminRouterLinkButton: () => cy.get('[id$="adminRouterLinkButton"]'),
    homeRouterLinkButton: () => cy.get('[id$="homeRouterLinkButton"]'),
    tilesRouterLinkButton: () => cy.get('[id$="tilesRouterLinkButton"]'),
    messagesRouterLinkButton: () => cy.get('[id$="messagesRouterLinkButton"]'),
    profileRouterLinkButton: () => cy.get('[id$="profileRouterLinkButton"]'),
    logoutButton: () => cy.get('[id$="logoutButton"]'),
    loadMore: () => cy.contains('Load more')
  }

  clickVisibleButton = () => {
    cy.wait(1000)
    cy.contains( 'Load more' ).then( $mainContainer => {
        if($mainContainer.prop('disabled')) return;
        cy.contains( 'Load more' ).click();
        this.clickVisibleButton();
    });
  }
}
module.exports = new homePage();
