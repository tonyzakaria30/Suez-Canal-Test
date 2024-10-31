export class openNewAccountPage {

    //Locators
    type_of_account = '//select[@id="type"]'
    choose_existing_account = '//select[@id="fromAccountId"]'
    open_new_account_button = '//input[@type="button"]'
    assert_on_new_account = '//div[@id="openAccountResult"]//h1[@class="title"]'



    //Methods 
    selectAccountType () 
    {
      cy.xpath(this.type_of_account).select('SAVINGS');
    }

    chooseExistingAccount ()
    {
        cy.xpath(this.choose_existing_account).select(0);
    }

    clicOpenNewAccountButton ()
    {
        cy.xpath(this.open_new_account_button).click();
    }

    assertOnNewAccount ()
    {
        cy.xpath(this.assert_on_new_account).should('include.text','Account Opened!');
    }

}
export default new openNewAccountPage (); 