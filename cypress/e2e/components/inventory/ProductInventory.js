class ProductInventory {
    navigate() {
        cy.visit('/inventory.html');
}
cardProduct(product, details, price){
    cy.get('#item_4_title_link').type(product);
    cy.get('#').type(details);
    cy.get('#').type(price);
    cy.get('#add-to-cart-sauce-labs-backpack').click();
     
  }
  //revisar factibilidad de escribirlo asi 

  addToCart(productName) {
    cy.contains('.btn_inventory', 'ADD TO CART')
      .filter(':contains("' + productName + '")')
      .click();
  }
//revisar factibilidad de escribirlo asi 
  removeFromCart(productName) {
    cy.contains('.btn_inventory', 'REMOVE')
      .filter(':contains("' + productName + '")')
      .click();
  }
  //verificar que el producto este en el carro 
  goToCart() {
    cy.get('.shopping_cart_link').click();
  }

  verifyProductInCart(productName) {
    cy.contains('.cart_list', productName).should('exist');
  }

  navigateToCategory(categoryName) {
    cy.get('.inventory_list')
      .contains(categoryName)
      .click();
  }
  filterProduct(productSort){
    cy.get('[data-test=search-box]')
      .type(productSort);
    cy.get('.product_sort_container')
      .should('be.visible');
  }
  verifyCopyright() {
    return cy.get('.footer_copy').invoke('text').should('contain', 'Sauce Labs');
  }

  verifySocialMediaLinks() {
    return cy.get('.footer_social').find('a').should('have.length', 3);
  }
}
export default ProductInventory;