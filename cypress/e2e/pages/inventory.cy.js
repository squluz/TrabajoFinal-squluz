import ProductInventory from '../components/inventory/ProductInventory';

describe('Exploración y búsqueda de productos', () => {
    const productInventory = new ProductInventory();

    beforeEach(() => {
        productInventory.visit();
    });

    it('Exploración de categorías de productos', () => {
        productInventory.navigateToCategory('Sauce Labs Backpack');
        cy.url().should('include', 'inventory-item.html?id=4');
    });

    it('Búsqueda de productos', () => {
        inventoryPage.filterProduct('Sauce Labs Fleece Jacket');
        cy.get('.inventory_item_name')
            .should('contain.text', 'Sauce Labs Fleece Jacket');
    });
    
    //revisar este test
    it('Filtrar productos por precio: de menor a mayor', () => {
        productInventory.filterProducts('lohi');
        cy.get('.inventory_item_price')
            .then(prices => {
                let sortedPrices = Array.from(prices).map(price => parseFloat(price.textContent.slice(1)));
                let isSorted = sortedPrices.every((price, index) => index === 0 || price >= sortedPrices[index - 1]);
                expect(isSorted).to.be.true;
            });
    it('Verificar copyright en el footer', () => {
    inventoryPage.verifyCopyright();
        });

    it('Verificar enlaces a redes sociales en el footer', () => {
    inventoryPage.verifySocialMediaLinks();
        });

    });
});



//validar cantidad de products en la pantalla
//validar filtros 
//validar tyc-copyrigt 
//redes sociales
//visualizar conteo de carrito al agregar productos 
//vidsualizar remover productos 

