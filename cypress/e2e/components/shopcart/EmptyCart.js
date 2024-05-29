class EmptyCart {
    navigate() {
        cy.visit(Cypress.env('url') + 'cart.html');
    }

    getCartItem() {
        return cy.get('.cart_item');
    }

    getEmptyCartItem() {
     cy.get('.cart_item').should('not.exist');
    }

    getCheckoutButton() {
        return cy.get('.checkout_button');
    }

    getContinueShoppingButton() {
        return cy.get('.btn_secondary');
    }

    clickContinueShoppingButton() {
        this.getContinueShoppingButton().click();
    }
}

export default EmptyCart;
