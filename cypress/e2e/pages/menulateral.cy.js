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
    //DONE Validar que exiista el menu hamburguesa
    it('Validar existencia de manu lateral', () => {
        cy.checkBurgerMenu()
    });

    // en todas las pantallas, (inventory, cart, checkout, thankyou page)
    //Hacer lo mismo que con el footer

    //DONE elementos demenu -all items, logout, about, resetapp store
    it('Checkin burger menu items', () => {
        cy.get('nav').find('a').each(($el, index) => {
            expect($el.text()).to.equal(burgerMenu.expectedBurgerMenuOptions()[index])
        });
    });

    //DONE cerrar menu
    it('Cerrar el menu lateral', () => {
        burgerMenu.burgerIcon().click()
        cy.wait(3000)
        burgerMenu.closeBurgerMenu().click()
    });
});
