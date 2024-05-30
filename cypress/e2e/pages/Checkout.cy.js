import LoginPage from '../components/login/loginPage';
import Shoppingcart from '../components/shopcart/shoppingcart';
import Checkout2 from '../components/checkout/Checkout2';
import ProductInventory from '../components/inventory/ProductInventory';
import Checkout1 from '../components/checkout/Checkout1';
import BurgerMenu from '../components/burguerMenu/BurgerMenu';



describe('Checkout Visual Elements', () => {
    const loginPage = new LoginPage();
    const shoppingcart = new Shoppingcart();
    const checkout1 = new Checkout1();
    const checkout2 = new Checkout2();
    const productInventory = new ProductInventory();
    const burgerMenu = new BurgerMenu

    beforeEach(function () {
        cy.viewport(Cypress.env('viewport'))
        loginPage.navigate();
        loginPage.login(Cypress.env('qauser'), Cypress.env('qapassword'));
    });


    it('Validate elements checkout Step 1', () => {
        productInventory.addToCart('sauce-labs-backpack');
        shoppingcart.cartIcon();
        shoppingcart.checkout();
        checkout1.getTitleText().should('be.visible').and('have.text', 'Checkout: Your Information')
        checkout1.getFirstNameInput().should('have.attr', 'placeholder', 'First Name')
        checkout1.getLastNameInput().should('have.attr', 'placeholder', 'Last Name')
        checkout1.getPostalCodeInput().should('have.attr', 'placeholder', 'Zip/Postal Code')
        checkout1.getCancelButton().should('be.visible');
        checkout1.getContinueButton().should('be.visible');
        checkout1.getAppLogo().should('be.visible');
        burgerMenu.burgerIcon().should('be.visible');
        //shoppingcart.cartIcon().should('be.visible');
        checkout1.fillCheckoutForm('Luz', 'Squarzon', '12345');
        checkout1.clickContinueButton();

    });
    it('Validate elements checkout Step 2', () => {

        productInventory.addToCart('sauce-labs-backpack');
        shoppingcart.cartIcon();
        shoppingcart.checkout(); 
        checkout1.fillCheckoutForm('Luz', 'Squarzon', '12345');
        checkout1.clickContinueButton();
        checkout2.getAppLogo().should('be.visible')
        checkout2.getTitleText().should('be.visible')
        checkout2.getItemNames().should('be.visible')
        checkout2.getItemPrices().should('be.visible')
        checkout2.getPaymentInformation().should('be.visible')
        checkout2.getShippingInformation().should('be.visible')
        checkout2.clickContinueButton();
        checkout2.getCancelButton().should('be.visible')

    });

});
