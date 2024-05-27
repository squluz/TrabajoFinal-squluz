
import LoginPage from '../components/login/loginPage';
import Shoppingcart from '../components/shopcart/shoppingcart';
import CheckoutPage from '../components/checkout/CheckoutPage';
import Checkout2 from  '../components/checkout/Checkout2';

describe('Checkout flow', () => {
    const loginPage = new LoginPage();
    const shoppingcart = new Shoppingcart();
    const checkoutPage = new CheckoutPage();
    const checkout2  = new Checkout2();

    it('should complete the checkout process', () => {

        loginPage.visit();
        loginPage.login('standard_user', 'secret_sauce');
        shoppingcart.visit();
        shoppingcart.clickCheckoutButton();
        checkoutPage.fillCheckoutForm('Luz', 'Squarzon', '12345');
        checkoutPage.clickContinueButton();
        checkout2.getItemNames().should('have.length.greaterThan', 0); // Verifica que haya al menos un item
        checkout2.getFinishButton().should('be.visible'); // Verifica que el botón Finish sea visible
        checkout2.getCancelButton().should('be.visible'); // Verifica que el botón Cancel sea visible
        
        //Validate price, taxes
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
                });
            });
        });

        // Test the functionality of the finish button
        Checkout2.clickFinishButton();
        cy.url().should('include', '/checkout-complete.html'); // Verifica que la URL cambie a la página de confirmación

        // Navigate back and test the cancel button
        cy.go('back');
        checkout2.clickCancelButton();
        cy.url().should('include', '/inventory.html'); // Verifica que la URL cambie a la página del inventario
    
    });
    //it ('Validate de thank you for your order!',() => {
//no se donde colocar las pruebas de pagina de agradecimeitno. Es viable dejarla en este test o en otro?
    //});


     // Verify elements on checkout complete page
        checkoutCompletePage.getCompleteHeader().should('contain.text', 'THANK YOU FOR YOUR ORDER');
        checkoutCompletePage.getCompleteText().should('contain.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');

        // Verify the Back Home button functionality
        checkoutCompletePage.getBackHomeButton().should('be.visible'); // Verifica que el botón Back Home sea visible
        checkoutCompletePage.clickBackHomeButton(); // Click en Back Home
        cy.url().should('include', '/inventory.html'); // Verifica que la URL cambie a la página del inventario
    

});






//Validar elementos titulo y tabla 
//colocar un faker
// validar campos de texto 
//validar campos mandatorios
//validar que al completar la tabla y apretar continuar yd ecidir  "volver" se vuelva a checkout yOY INFORMATION 
//Validar el boton cancel que vuelva a detalle de your cart
