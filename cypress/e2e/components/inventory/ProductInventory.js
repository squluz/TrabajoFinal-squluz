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
  detailProduct(productDetail, detailItem, priceDetail) {
    cy.get('#.inventory_details_name.large_size').type(productDetail);
    cy.get('.inventory_details_desc.large_size').type(detailItem);
    cy.get('.inventory_details_price').type(priceDetail);
    cy.get('#add-to-cart-sauce-labs-backpack').click();
  }

  pageTitle() {
    return cy.get('[data-test="title"]');
  }

  addToCart(productName) {
    cy.get(`[data-test="add-to-cart-${productName}"]`).click();
  }

  removeFromCart(productName) {
    cy.get(`[data-test="remove-${productName}"]`).click();

  }
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

}
export default ProductInventory;