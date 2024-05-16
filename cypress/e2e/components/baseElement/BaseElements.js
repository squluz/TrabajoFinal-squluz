export default class BaseElements {
    pageTitle(){
        return cy.get('.header_label')
    }
    cartIcon(){
        return cy.get('[data-test="shopping-cart-link"]')
    }
    filterOptions(){
        return cy.get('[data-test="product-sort-container"]')
    }
    sectionTitle(){
        return cy.get('[data-test="title"]')
    }
    burgerMenu(){
        return cy.get('#react-burger-menu-btn');
    }
};
