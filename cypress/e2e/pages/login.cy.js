import LoginPage from '../components/login/loginPage';

describe('Validate login with validate credencial', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should display login page elements', () => {
    loginPage.getUsernameInput().should('be.visible');
    loginPage.getPasswordInput().should('be.visible');
    loginPage.getLoginButton().should('be.visible');
  });
  
  it('should validate incorrect login', () => {
    loginPage.getUsernameInput().type('errortext');
    loginPage.getPasswordInput().type('errorpass');
    loginPage.getLoginButton().click();
  });


  it('should validate login functionality', () => {
    loginPage.getUsernameInput().type('standard_user');
    loginPage.getPasswordInput().type('secret_sauce');
    loginPage.getLoginButton().click();


  });
}) 
