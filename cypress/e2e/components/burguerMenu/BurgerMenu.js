export default class BurgerMenu {
    burgerIcon(){
        return cy.get('#react-burger-menu-btn');
    }
    expectedBurgerMenuOptions(){
        return ['All Items','About','Logout','Reset App State']
    }
    closeBurgerMenu(){
        return cy.get('#react-burger-cross-btn');
    }
};
