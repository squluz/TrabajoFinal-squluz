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
   getAboutlink() {
        return cy.get('#about_sidebar_link');
    } 
    getLogoutLink() {
        return cy.get('#logout_sidebar_link');
    }
    
    getResetlink() {
        return cy.get('#reset_sidebar_link');
    }
};
