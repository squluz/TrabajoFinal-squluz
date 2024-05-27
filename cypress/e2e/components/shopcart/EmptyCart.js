//probar  carrito vacio desde inicio 
class EmptyCart {
    visit() {
        cy.visit('https://www.saucedemo.com/cart.html');
    }

    getCartItem() {
        return cy.get('.cart_item');
    }

    getEmptyCartMessage() {
        return cy.get('.cart_item').should('not.exist');
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
