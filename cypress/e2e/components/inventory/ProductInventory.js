class ProductInventory {
  navigate() {
    cy.visit(Cypress.env('url') + 'inventory.html');
  }

  cardProduct(product, details, price) {
    cy.get('#item_4_title_link').type(product);
    cy.get('#').type(details);
    cy.get('#').type(price);
    cy.get('#add-to-cart-sauce-labs-backpack').click();

  }
  pageTitle() {
    return cy.get('[data-test="title"]');
  }
  //revisar factibilidad de escribirlo asi 

  addToCart(productName) {
    cy.get(`[data-test="add-to-cart-${productName}"]`).click();
  }
  //revisar factibilidad de escribirlo asi sauce-labs-backpack
  removeFromCart(productName) {
    cy.get(`[data-test="remove-${productName}"]`).click();

  }
  //verificar que el producto este en el carro 
  goToCart() {
    cy.get('a.shopping_cart_link').click();
  }

  getProductCount() {
    return cy.get('[data-test="shopping-cart-badge"]')
  }

  verifyProductInCart() {
    return cy.get('.inventory_item_name');
  }


  navigateToCategory(categoryName) {
    cy.get('.inventory_list')
      .contains(categoryName)
      .click();
  }
  filterProduct(orderBy) {
    cy.get('.product_sort_container').select(orderBy)


  }
  filterOptions() {
    return ['az', 'za', 'lohi', 'hilo']
  }
  verifyCopyright() {
    return cy.get('.footer_copy').invoke('text').should('contain', 'Sauce Labs');
  }
  socialMediaOption() {
    return ['Twitter', 'Facebook', 'LinkedIn']
  }
  verifySocialMediaLinks() {
    return cy.get('.social');
  }
}
export default ProductInventory;