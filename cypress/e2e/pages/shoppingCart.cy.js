/// <reference types="Cypress"/>

import ProductInventory from "../components/inventory/ProductInventory";
import LoginPage from "../components/login/loginPage";
import ShopingCart from "../components/shopcart/shoppingcart";

describe('Shoping Cart', () => {
    const loginPage = new LoginPage();
    const shopingCart = new ShopingCart();
    const productInventory = new ProductInventory();
    let productName = 'sauce-labs-backpack'
    
    beforeEach(() => {
        cy.viewport(Cypress.env('viewport'))
        loginPage.navigate();
        loginPage.login(Cypress.env('qauser'), Cypress.env('qapassword'));
      
    });

    it('Checking page title', () => {
        shopingCart.cartIcon()
        cy.get('[data-test="title"]').should('have.text', 'Your Cart')

    });

    it('Check items', () => {
        productInventory.addToCart(productName);
        shopingCart.cartIcon()

        shopingCart.qtyElement().should('be.visible')
        shopingCart.itemDescription().should('be.visible')
        shopingCart.itemPrice().should('be.visible')
    });

       it ('Check remove item', () => {
        productInventory.addToCart(productName);
        shopingCart.cartIcon()

        shopingCart.removeItem(productName).should('be.visible')
        shopingCart.removeItem(productName).click()
        shopingCart.qtyElement().should('not.exist')

    });

    
    it('Modify element qty', () => {
        productInventory.addToCart(productName);
        shopingCart.cartIcon()

        shopingCart.qtyElement().type(2)

    });

    it('Check Continue Shopping', () => {
        productInventory.addToCart(productName);
        shopingCart.cartIcon()

        shopingCart.continueToShopingBtn()

        cy.url().should('contain', 'inventory.html')

    });

       
    it('Remove all items from cart', () => {
        productInventory.addToCart(productName);
        cy.wait(2000)
        productInventory.addToCart('sauce-labs-bike-light');
        cy.wait(2000)
        productInventory.addToCart('sauce-labs-bolt-t-shirt');
        cy.wait(2000)
        productInventory.addToCart('sauce-labs-fleece-jacket');
        cy.wait(3000)
        shopingCart.cartIcon()

        cy.wait(3000)
        cy.get('button[id^="remove-"]').as('btn')
        cy.get('@btn').should('be.visible').click({force:true,multiple:true})

        shopingCart.qtyElement().should('not.exist')

    });

    it('Check footer', () => {
        cy.checkfooter()
    })
    
});

