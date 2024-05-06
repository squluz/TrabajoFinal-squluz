import LoginPage from "../components/login/loginPage";


describe('Crea la lista de productos en un archivo', () => {
    const loginPage = new LoginPage();


    beforeEach(() => {
        loginPage.navigate();
        loginPage.login(Cypress.env('qauser'), Cypress.env('qapassword'));
    });



    it('should', () => {
        let productList = []

        cy.get('.inventory_item_name ').each(($el) => {
            productList.push({
                productName: $el.text(),
                selectorName: $el.text().toLocaleLowerCase().replace(/\s+/g, '-')
            })
            cy.writeFile('cypress/fixtures/productList.json', productList)
        });


    })
    it('read json', () => {
        //Leo desde el archivo un producto y le hago click en agregar al carrito
        //Reemplazar el [0] por un número random para acceder a cualquier elemento
        cy.fixture('productList').then(function (product) {
            this.product = product
            cy.get(`button[name='add-to-cart-${this.product[3].selectorName}']`).click();
        })
    })
})