
import LoginPage from '../components/login/loginPage';
import EmptyCart from '../components/shopcart/EmptyCart';
import ShopingCart from '../components/shopcart/shoppingcart';

describe('Empty Cart functionalities', () => {
    const loginPage = new LoginPage();
    const emptyCart = new EmptyCart();
    const shoppingcart = new ShopingCart
  
    beforeEach(function () {
            loginPage.navigate();
            loginPage.login(Cypress.env('qauser'), Cypress.env('qapassword'));
        }); 
    it('should verify elements and functionality on empty cart page', () => {
        shoppingcart.cartIcon();
        emptyCart.getEmptyCartItem();
        emptyCart.getContinueShoppingButton().should('be.visible');
        emptyCart.clickContinueShoppingButton();
        cy.url().should('include', '/inventory.html');
    });
});
