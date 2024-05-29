import ProductInventory from '../components/inventory/ProductInventory';
import LoginPage from '../components/login/loginPage';
import Footer from '../components/footer/footer';



describe('Exploración y búsqueda de productos', () => {
    const productInventory = new ProductInventory();
    const loginPage = new LoginPage();

    beforeEach(function () {
        loginPage.navigate();
        loginPage.login(Cypress.env('qauser'), Cypress.env('qapassword'));
    });

    it('Exploración de categorías de productos', () => {
        productInventory.navigateToCategory('Sauce Labs Backpack');
        cy.url().should('include', 'inventory-item.html?id=4');
    });

    it('Filtrar productos', () => {
        productInventory.filterOptions().forEach(el => {
            productInventory.filterProduct(el);
        }
        )
    });

    it('check footer', () => {
        cy.checkfooter()
    })

});
