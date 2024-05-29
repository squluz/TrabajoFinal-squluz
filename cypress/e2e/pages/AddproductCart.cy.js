
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

    });

    it('Add product cart, remove button, view counter', () => {
        const productName = changeProductName(pName).replace(/\s+/g, '-');
        productInventory.addToCart(productName);
        cy.contains('.shopping_cart_badge', '1').should('be.visible');
        cy.get(`button[name="remove-${productName}"]`).should('be.visible')
        
    });

    it('Remove product cart, add product button, view counter', () => {
        const productName = changeProductName(pName).replace(/\s+/g, '-');
        productInventory.addToCart(productName);
        cy.contains('.shopping_cart_badge', '1').should('be.visible');
        productInventory.removeFromCart(productName);

    });

    it('Verificar que se agregue correctamente un producto al carrito', () => {
        const productName = changeProductName(pName).replace(/\s+/g, '-');
        productInventory.addToCart(productName);
        productInventory.getProductCount().should('have.text', '1');
        productInventory.goToCart();
        productInventory.verifyProductInCart().each(($el, index) => {
            expect($el.text()).to.equal('Sauce Labs Fleece Jacket')
        });

    });

});