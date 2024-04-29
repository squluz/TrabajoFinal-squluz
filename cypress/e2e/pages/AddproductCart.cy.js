import ProductInventory from '../components/inventory/ProductInventory';

describe('Add and remove product card', () => {
    const productInventory = new ProductInventory();

    beforeEach(() => {
        productInventory.visit();
    });

    it('Add product cart', () => {
        const productName = 'Sauce Labs Fleece Jacket';
        productInventory.addToCart(productName);
        cy.contains('.shopping_cart_badge', '1').should('be.visible');
    });


    it('Remove product cart', () => {
        const productName = 'Sauce Labs Backpack';
        productInventory.addToCart(productName);
        productInventory.removeFromCart(productName);
        cy.contains('.shopping_cart_badge', '0').should('be.visible');
    });


//test de visaulizar el conteo en el carro cuando se agrega y elimina productos 

    it('Verificar que se agregue correctamente un producto al carrito', () => {
    const productName = 'Sauce Labs Fleece Jacket';

// Agregar producto al carrito
        productInventory.addToCart(productName);
    
        // Verificar que el contador del carrito se actualice
        productInventory.getProductCount().should('eq', 1);
    
        // Ir a la página del carrito
      productInventory.goToCart();
    
        // Verificar que el producto esté en el carrito
        productInventory.verifyProductInCart(productName);
      });

    });