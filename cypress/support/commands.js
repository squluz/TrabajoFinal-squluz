import Footer from "../e2e/components/footer/footer";

 Cypress.Commands.add('checkfooter', () => { 
    let footer= new Footer
    footer.verifyCopyright();
    footer.verifySocialMediaLinks().find('li').each((el,index)=>{
     expect(el.text()).to.equal(footer.socialMediaOption()[index])
         })
  })

  Cypress.Commands.add('login', (username, password) => { 
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
  })

