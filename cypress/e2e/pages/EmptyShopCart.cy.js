import LoginPage from '../../support/page_objects/loginPage';
import EmptyCart from '../components/shopcart/EmptyCart';

describe('Empty Cart functionalities', () => {
    const loginPage = new LoginPage();
    const emptyCart = new EmptyCart();

    it('should verify elements and functionality on empty cart page', () => {
        beforeEach(function () {
            loginPage.navigate();
            loginPage.login(Cypress.env('qauser'), Cypress.env('qapassword'));
        });
       
        emptyCart.visit();

        // Verify the cart is empty
        EmptyCart.getEmptyCartMessage();

        // Verify the presence and functionality of the Continue Shopping button
        cartPage.getContinueShoppingButton().should('be.visible'); // Verifica que el botón Continue Shopping sea visible
        cartPage.clickContinueShoppingButton(); // Click en Continue Shopping
        cy.url().should('include', '/inventory.html'); // Verifica que la URL cambie a la página del inventario
    });
});
