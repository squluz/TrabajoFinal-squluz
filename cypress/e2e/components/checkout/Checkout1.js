class Checkout1 {

    navigate() {
        cy.visit(Cypress.env('url') + 'checkout-step-one.html');
    }
    getAppLogo(){
        return cy.get('.app_logo');
    }
    getTitleText() {
        return cy.get('.title');
    }
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
    getCancelButton() {
        return cy.get('#cancel')
    }

    fillCheckoutForm(firstName, lastName, postalCode) {
        this.getFirstNameInput().type(firstName);
        this.getLastNameInput().type(lastName);
        this.getPostalCodeInput().type(postalCode);
    }

    clickContinueButton() {
        this.getContinueButton().click();
    }
    clickCancelButton() {
        this.getCancelButton().click();
    }
}

export default Checkout1;
