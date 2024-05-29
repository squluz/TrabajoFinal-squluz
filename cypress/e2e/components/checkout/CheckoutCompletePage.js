class CheckoutCompletePage {
    navigate() {
        cy.visit(Cypress.env('url') + 'checkout-complete.html');
      }

    getCompleteHeader() {
        return cy.get('[data-test="complete-header"]');
    }
getCompletePony() {
    return cy.get('.pony_express');
}
    getCompleteText() {
        return cy.get('.complete-text');
    }

    getBackHomeButton() {
        return cy.get('.btn_primary');
    }

    clickBackHomeButton() {
        this.getBackHomeButton().click();
    }
}

export default CheckoutCompletePage;
