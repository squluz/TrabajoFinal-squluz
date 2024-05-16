export default class ProductDetail {
    goBackToProductsBtn() {
        return cy.get('[data-test="back-to-products"]')
    }
    addToCartButton() {
        return cy.get('[data-test="add-to-cart"]')
    }
    productName() {
        return cy.get('[data-test="inventory-item-name"]')
    }
    productDescription() {
        return cy.get('[data-test="inventory-item-desc"]')
    }
    productPrice() {
        return cy.get('[data-test="inventory-item-price"]')
    }
    productImg(){
        return cy.get('img.inventory_details_img')
    }
};
