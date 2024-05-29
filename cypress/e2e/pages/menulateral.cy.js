/// <reference types="Cypress"/>

import BurgerMenu from "../components/burgerMenu/BurgerMenu";
import LoginPage from "../components/login/loginPage";

describe('Menú lateral', () => {
    const loginPage = new LoginPage()
    const burgerMenu = new BurgerMenu()
    beforeEach(() => {
        cy.viewport(1200, 900)
        loginPage.navigate();
        loginPage.login(Cypress.env('qauser'), Cypress.env('qapassword'));
    });

    it('Validar existencia de manu lateral', () => {
        cy.checkBurgerMenu()
    });

    it('Checkin burger menu items', () => {
        cy.get('nav').find('a').each(($el, index) => {
            expect($el.text()).to.equal(burgerMenu.expectedBurgerMenuOptions()[index])
        });
    });

    it('Cerrar el menu lateral', () => {
        burgerMenu.burgerIcon().click()
        cy.wait(3000)
        burgerMenu.closeBurgerMenu().click()
    });
});
