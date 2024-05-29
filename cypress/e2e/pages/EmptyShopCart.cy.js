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

        EmptyCart.getEmptyCartMessage();

        cartPage.getContinueShoppingButton().should('be.visible');
        cartPage.clickContinueShoppingButton();
        cy.url().should('include', '/inventory.html');
    });
});
