class Footer {
    navigate() {
        cy.visit(Cypress.env('url'));
    }

verifyCopyright() {
    return cy.get('.footer_copy').invoke('text').should('contain', 'Sauce Labs');
  }
  socialMediaOption() {
    return ['Twitter', 'Facebook', 'LinkedIn']
  }
  verifySocialMediaLinks() {
    return cy.get('.social');
  }
}

  export default Footer;