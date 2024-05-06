
import ProductInventory from '../components/inventory/ProductInventory';
import LoginPage from '../components/login/loginPage';
import { changeProductName } from '../../utils/functions';

describe('Add and remove product card', () => {
    const productInventory = new ProductInventory();
    const loginPage = new LoginPage();
    const pName = 'Sauce Labs Fleece Jacket'

    beforeEach(() => {
        loginPage.navigate();
        loginPage.login(Cypress.env('qauser'), Cypress.env('qapassword'));
        //productInventory.navigate();
    });

    it('Add product cart, remove button, view counter', () => {
        const productName = changeProductName(pName).replace(/\s+/g, '-');
        productInventory.addToCart(productName);
        cy.contains('.shopping_cart_badge', '1').should('be.visible');
        cy.get(`button[name="remove-${productName}"]`).should('be.visible')
    });
    
    // test de validación que el boton cambie de nombre a remove 

    it('Remove product cart, add product button, view counter', () => {
        const productName = changeProductName(pName).replace(/\s+/g, '-');
        productInventory.addToCart(productName);
        cy.contains('.shopping_cart_badge', '1').should('be.visible');
        productInventory.removeFromCart(productName);
      //  cy.contains(`[data-test="add-to-cart-${productName}"]`).should('be.visible')
    });
    //asercion de que el boton teng un add to cart 

    //test de visaulizar el conteo en el carro cuando se agrega y elimina productos 

    it('Verificar que se agregue correctamente un producto al carrito', () => {
        const productName = changeProductName(pName).replace(/\s+/g, '-');

        // Agregar producto al carrito
        productInventory.addToCart(productName);

        // Verificar que el contador del carrito se actualice
        productInventory.getProductCount().should('have.text', '1');

        // Ir a la página del carrito
        productInventory.goToCart();

        // Verificar que el producto esté en el carrito
        productInventory.verifyProductInCart().each(($el, index) => {
            expect($el.text()).to.equal('Sauce Labs Fleece Jacket')
        });
        
    });

});