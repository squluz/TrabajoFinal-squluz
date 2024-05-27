class CheckoutPage {
    getFirstNameInput() {
        return cy.get('#first-name');
    }

    getLastNameInput() {
        return cy.get('#last-name');
    }

    getPostalCodeInput() {
        return cy.get('#postal-code');
    }

    getContinueButton() {
        return cy.get('#continue');
    }

    fillCheckoutForm(firstName, lastName, postalCode) {
        this.getFirstNameInput().type(firstName);
        this.getLastNameInput().type(lastName);
        this.getPostalCodeInput().type(postalCode);
    }

    clickContinueButton() {
        this.getContinueButton().click();
    }
}

export default CheckoutPage;
