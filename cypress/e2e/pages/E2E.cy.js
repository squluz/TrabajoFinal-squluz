
import LoginPage from '../components/login/loginPage';
import Shoppingcart from '../components/shopcart/shoppingcart';
import CheckoutPage from '../components/checkout/Checkout1';
import Checkout2 from '../components/checkout/Checkout2';
import BurgerMenu from '../components/burguerMenu/BurgerMenu';
import CheckoutCompletePage from '../components/checkout/CheckoutCompletePage';
import ProductInventory from '../components/inventory/ProductInventory';


describe('Checkout flow', () => {
    const loginPage = new LoginPage();
    const shoppingcart = new Shoppingcart();
    const checkoutPage = new CheckoutPage();
    const checkout2 = new Checkout2();
    const checkoutCompletePage = new CheckoutCompletePage();
    const burgerMenu = new BurgerMenu();
    const productInventory = new ProductInventory();

    beforeEach(() => {
        cy.viewport(Cypress.env('viewport'))
        loginPage.navigate();
        loginPage.login(Cypress.env('qauser'), Cypress.env('qapassword'));

    });

    it('should complete the checkout process', () => {

        productInventory.addToCart('sauce-labs-backpack','sauce-labs-bike-light','sauce-labs-bolt-t-shirt');
        shoppingcart.cartIcon();
        shoppingcart.checkout();
        checkoutPage.fillCheckoutForm('Luz', 'Squarzon', '12345');
        checkoutPage.clickContinueButton();
        checkout2.getItemNames().should('have.length.greaterThan', 0);
        checkout2.getCancelButton().should('be.visible');
        checkout2.getFinishButton().should('be.visible');

        let itemPrices = [];
        checkout2.getItemPrices().each(($el) => {
            itemPrices.push(parseFloat($el.text().replace('$', '')));
        }).then(() => {
            const calculatedSubtotal = itemPrices.reduce((sum, price) => sum + price, 0);
            checkout2.getSubtotalLabel().then($subtotal => {
                const displayedSubtotal = parseFloat($subtotal.text().replace('Item total: $', ''));
                expect(displayedSubtotal).to.equal(calculatedSubtotal);
            });

            checkout2.getTaxLabel().then($tax => {
                const displayedTax = parseFloat($tax.text().replace('Tax: $', ''));
                const calculatedTotal = calculatedSubtotal + displayedTax;

                checkout2.getTotalLabel().then($total => {
                    const displayedTotal = parseFloat($total.text().replace('Total: $', ''));
                    expect(displayedTotal).to.equal(calculatedTotal);

                    
                    checkout2.clickFinishButton();
                    cy.url().should('include', '/checkout-complete.html');
                    checkoutCompletePage.getCompleteHeader().should('contain.text', 'Thank you for your order!');
                    checkoutCompletePage.getCompleteText().should('contain.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
                    checkoutCompletePage.getBackHomeButton().should('be.visible');
                    checkoutCompletePage.clickBackHomeButton();
                    cy.url().should('include', '/inventory.html');
                    
                    burgerMenu.burgerIcon().click();
                    burgerMenu.getLogoutLink().click();
                    cy.url().should('include', '/');





                });

            });
        });
    });
});


