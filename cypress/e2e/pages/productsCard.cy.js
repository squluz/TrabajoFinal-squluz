/// <reference types="Cypress"/>
import { getRandomIndex } from "../../assets/util";
import LoginPage from "../components/login/loginPage";
import ProductDetail from "../components/productDetail/ProductDetail";

describe('', () => {
    const loginPage = new LoginPage()
    let productName = 'Sauce Labs Backpack'
    let productList = []
    const productDetail = new ProductDetail
    beforeEach(() => {
        cy.viewport(1200, 900)
        loginPage.navigate();
        loginPage.login(Cypress.env('qauser'), Cypress.env('qapassword'));
    });

    //DONE validar las card de productos 
    it.skip('Validar Card de producto', () => {
        cy.get('div').contains(productName).click();

        productDetail.goBackToProductsBtn().should('be.visible')
        productDetail.addToCartButton().should('be.visible')
        productDetail.productName().should('be.visible')
        productDetail.productDescription().should('be.visible')
        productDetail.productPrice().should('be.visible')
        productDetail.productImg().should('be.visible')

    });

    //DONE titulo, descripcion, precio, foto
    it.skip('Validar datos del producto', () => {
        cy.fixture('productList').then(function (product) {
            productList = product
            const prodID = getRandomIndex(0, productList.length - 1)
            cy.get('div').contains(productList[prodID].productName).click();

            productDetail.productName().should('have.text', productList[prodID].productName)
            productDetail.productDescription().should('have.text', productList[prodID].productDesc)
            productDetail.productPrice().should('have.text', productList[prodID].productPrice)
            productDetail.productImg().then($el => {
                console.log($el.attr('data-test'))
                expect($el.attr('data-test')).to.equal(productList[prodID].productImg)
            })
        })
    });
    
    //TODO button -solo existencia 
    it.skip('Validar', () => {

    });

    //DONE detalle de producto - goback
    it('Ir a detalle de roducto y volver', () => {
        cy.get('div').contains(productName).click();
        cy.wait(2000)
        productDetail.goBackToProductsBtn().click()
        cy.url().should('include','inventory.html')
    });
});

