/// <reference types="Cypress"/>

import LoginPage from '../components/login/loginPage';
import Shoppingcart from '../components/shopcart/shoppingcart';
import BurgerMenu from '../components/burguerMenu/BurgerMenu';
import ProductInventory from '../components/inventory/ProductInventory';


describe('Pending cart', () => {
    const loginPage = new LoginPage();
    const shoppingcart = new Shoppingcart();
    const burgerMenu = new BurgerMenu();
    const productInventory = new ProductInventory();
    beforeEach(() => {
        cy.viewport(Cypress.env('viewport'))
        loginPage.navigate();
        loginPage.login(Cypress.env('qauser'), Cypress.env('qapassword'));

    });

    it('Pending cart', () => {
        productInventory.addToCart('sauce-labs-backpack');
        shoppingcart.cartIcon();
        burgerMenu.burgerIcon().click();
        burgerMenu.getLogoutLink().click();
        cy.url().should('include', '/');
        cy.window().then((window) => {
            const valor = window.localStorage.getItem('cart-contents');
            cy.log(valor); // Mostrar el valor en los logs de Cypress
            expect(valor).length.greaterThan(0); // Asegurarse de que el valor es el esperado 
        });

    });
});
