export default class ShopingCart {
    
        navigate() {
            cy.visit(Cypress.env('url')+ 'cart.html');
        } 
    cartIcon() {
        cy.get('[data-test="shopping-cart-link"]').click()
    }
    pageTitle() {
        return cy.get('[data-test="title"]');
    }
    continueToShopingBtn() {
        cy.get('[data-test="continue-shopping"]').click()
    }
    checkout() {
        cy.get('[data-test="checkout"]').click() 
    }
    qtyElement() {
        return cy.get('[data-test="item-quantity"]')
    }
    itemDescription() {
        return cy.get('[data-test="inventory-item-desc"]')
    }
    itemPrice() {
        return cy.get('[data-test="inventory-item-price"]')
    }

    removeItem(productName) {
        return cy.get(`[data-test=remove-${productName}]`)
    }

    
};
