import ProductInventory from '../components/inventory/ProductInventory';
import LoginPage from '../components/login/loginPage';


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

    
    it('Verificar copyright en el footer', () => {
        productInventory.verifyCopyright();
    });

    it('Verificar enlaces a redes sociales en el footer', () => {
        productInventory.verifySocialMediaLinks().find('li').each((el,index)=>{
            expect(el.text()).to.equal(productInventory.socialMediaOption()[index])
        })
       
        
    });

});




//validar cantidad de products en la pantalla
//validar filtros 
//validar tyc-copyrigt 
//redes sociales
//visualizar conteo de carrito al agregar productos 
//vidsualizar remover productos 

