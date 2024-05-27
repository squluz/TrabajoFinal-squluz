class Checkout2 {
    visit() {
        cy.visit('https://www.saucedemo.com/checkout-step-two.html');
    }

    getItemNames() {
        return cy.get('.inventory_item_name');
    }
    getPaymentInformation() {
        return cy.get('.summary_info_label');
    }
    getShippingInformation() {
        return cy.get('.summary_value_label');
    }
    getItemPrices() {
        return cy.get('.inventory_item_price');
    }

    getSubtotalLabel() {
        return cy.get('.summary_subtotal_label');
    }

    getTaxLabel() {
        return cy.get('.summary_tax_label');
    }

    getTotalLabel() {
        return cy.get('.summary_total_label');
    }
    getFinishButton() {
        return cy.get('#finish');
    }

    getCancelButton() {
        return cy.get('#cancel');
    }

    clickFinishButton() {
        this.getFinishButton().click();
    }

    clickCancelButton() {
        this.getCancelButton().click();
    }
}

export default Checkout2;
