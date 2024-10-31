 
export class homePage {
 
    // Locators 
    account_overview = '(//li//a)[contains(.,"Accounts Overview")]'
    open_new_account = '(//li//a)[contains(.,"Open New Account")]'
    update_contact_info = '(//li//a)[contains(.,"Update Contact Info")]'
    request_loan = '(//li//a)[contains(.,"Request Loan")]'
    log_out = '(//a)[contains(.,"Log Out")]'
   


    
    
    // Methods
    navigateToAccountOverview ()
    {
        cy.xpath(this.account_overview).click();
    }

    navigateToOpenNewAccount ()
    {
        cy.xpath(this.open_new_account).click();
    }

    logOut ()
    {
        cy.xpath(this.log_out).click();
    }

    navigateToUpdateContactInfo ()
    {
        cy.xpath(this.update_contact_info).click();
    }

    navigateToRequestLoan ()
    {
        cy.wait(500);
        cy.xpath(this.request_loan).click();
    }
  
     }
     export default new homePage (); 