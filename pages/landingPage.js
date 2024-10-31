export class landingPage {
 
    // Locators 
    new_register = '(//div[@id="loginPanel"]//a)[contains(.,"Register")]'
    user_name_textbox = '//input[@name="username"]'
    password_textbox = '//input[@name="password"]'
    login_button = '//input[@value="Log In"]'
    assert_on_login = '//p[@class="smallText"]'
    assert_on_wrong_login = '//h1[@class="title"]'
    
    
    // Methods
  
    newRegister()
         {
          cy.xpath(this.new_register).click();
         }

    typeUserLogin(validname)
         {
          cy.xpath(this.user_name_textbox).type(validname);
         }
     
     typePasswordLogin(passwords)
     {
          cy.xpath(this.password_textbox).type(passwords);
     }

     clickLogin()
     {
          cy.xpath(this.login_button).click();
     }

     assertionOnLogin()
     {
          cy.xpath(this.assert_on_login).should('include.text', 'Welcome');
     }

     assertionOnWrongLogin()
     {
          cy.xpath(this.assert_on_wrong_login).should('include.text', 'Error');
     }

     }
     export default new landingPage (); 