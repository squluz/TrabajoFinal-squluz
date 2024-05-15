import LoginPage from "../components/login/loginPage";


describe('Crea la lista de productos en un archivo', () => {
    const loginPage = new LoginPage();


    beforeEach(() => {
        loginPage.navigate();
        loginPage.login(Cypress.env('qauser'), Cypress.env('qapassword'));
    });



    it.skip('should', () => {
        let productList = []

        cy.get('.inventory_item_name ').each(($el) => {
            productList.push({
                productName: $el.text(),
                selectorName: $el.text().toLocaleLowerCase().replace(/\s+/g, '-')
            })
            cy.writeFile('cypress/fixtures/productList.json', productList)
        });


    })
    it.skip('read json', () => {
        //Leo desde el archivo un producto y le hago click en agregar al carrito
        //Reemplazar el [0] por un número random para acceder a cualquier elemento
        cy.fixture('productList').then(function (product) {
            this.product = product
            cy.get(`button[name='add-to-cart-${this.product[3].selectorName}']`).click();
        })

    })


    // probar valor de cookie o vigencia de la misma
    

    it ('cookie', () => {
    console.log (cy.getCookie('session-username'))
   // .should('have.property', 'value', '123ABC') 
    })
})