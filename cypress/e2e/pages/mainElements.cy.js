/// <reference types="Cypress"/>

import BaseElements from "../components/baseElements/baseElements";
import LoginPage from "../components/login/loginPage";

describe('Home page - Elementos por defecto', () => {
    const loginPage = new LoginPage()
    const mainElements = new BaseElements()
    beforeEach(() => {
        cy.viewport(1200, 900)
        loginPage.navigate();
        loginPage.login(Cypress.env('qauser'), Cypress.env('qapassword'));
    });

    // elementos que persistente en la web (titulo swag labs, icono de carrito, menu hamburguesa)
    it('Verificando existencia de elementos base', () => {
        mainElements.pageTitle().should('exist').and('be.visible')
        mainElements.cartIcon().should('exist').and('be.visible')
        mainElements.filterOptions().should('exist').and('be.visible')
        mainElements.sectionTitle().should('exist').and('be.visible')
        mainElements.burgerMenu().should('exist').and('be.visible')
    });
});