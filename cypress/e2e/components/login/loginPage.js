class LoginPage {
    navigate() {
        cy.visit('/');
    }
    fillFormAndSubmit(username, password) {
        cy.get('#user-name').type(username);
        cy.get('#password').type(password);
        cy.get('#login-button').click();
        
      }
      getUsernameInput() {
        return cy.get('#user-name');
      }
    
      getPasswordInput() {
        return cy.get('#password');
      }
    
      getLoginButton() {
        return cy.get('#login-button');
      }

    //placeholder y logo 
    //script de web en config
    
    }
    
    export default LoginPage;