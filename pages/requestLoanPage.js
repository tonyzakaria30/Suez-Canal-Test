export class requestLoan {
    

    //Loactors

    loan_amount = '//input[@id="amount"]'
    down_payment = '//input[@id="downPayment"]'
    loan_account = '//select[@id="fromAccountId"]'
    assert_on_loan = '(//div//h1[@class="title"])[contains(.,"Loan Request Processed")]'


    //Methods 

    enterLoanAmount (loanvalue) 
    {
        cy.xpath(this.loan_amount).type(loanvalue);
    }

    enterDownPayment (loandeposite)
    {
        cy.xpath(this.down_payment).type(loandeposite);
    }

    chooseLoanAccount ()
    {
        cy.xpath(this.loan_account).select(0).type('{enter}');
    }

    assertOnLoan ()
    {
        cy.xpath(this.assert_on_loan).should('include.text','Loan Request Processed');
    }


}
export default new requestLoan ;