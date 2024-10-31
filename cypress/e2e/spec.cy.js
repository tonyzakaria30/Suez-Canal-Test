

import register from '../../pages/register';
import landingPage from '../../pages/landingPage';
import testData from '../../cypress/fixtures/testData.json';
import openAccountPage from '../../pages/openAccountPage';
import homePage from '../../pages/homePage';
import updateContactPage from '../../pages/updateContactPage';
import requestLoanPage from '../../pages/requestLoanPage';


const update_Contact_Info = updateContactPage;
const request_Loan_Page = requestLoanPage;
const home_Page = homePage;
const test = testData;
const register_Page = register;
const landing_Page = landingPage;
const open_Account_Page = openAccountPage;

beforeEach(() => {
   
  
  cy.visit('https://parabank.parasoft.com/parabank/index.htm;jsessionid=8409D12793D127F308AB6D72F640FDFE')
  //cy.wait(1000);

})

 
afterEach(() => {
  cy.log('Closing the browser.');
})

describe('End to end', () => {



// Validation on successfull registeration
  
  it('successfull Register', function () {

    landing_Page.newRegister();
    register_Page.typeFirstName(test.username.firstname);
    register_Page.typeLastName(test.username.lastname);
    register_Page.typeAddress(test.address);
    register_Page.typeCity(test.city);
    register_Page.typeState(test.state);
    register_Page.typeZipCode(test.zipcode);
    register_Page.typePhoneNumber(test.phonenumber);
    register_Page.typeSSN(test.ssn);
    register_Page.typeNewUserName(register_Page.generateUserName());
    register_Page.typePassword(test.passwords);
    register_Page.typeConfirmPassword(test.passwords);
    register_Page.assertOnRegisteration();


  });

  // Validation on Un-successfull registeration

  it('Unsuccessfull Register', function () {

    landing_Page.newRegister();
    register_Page.typeFirstName(test.username.firstname);
    register_Page.typeLastName(test.username.lastname);
    register_Page.typeAddress(test.city);
    register_Page.typeCity(test.city);
    register_Page.typeState(test.state);
    register_Page.typeZipCode(test.zipcode);
    register_Page.typePhoneNumber(test.phonenumber);
    register_Page.typeSSN(test.ssn);
    register_Page.typeWrongUserName(test.username.wrongusername);
    register_Page.typePassword(test.passwords);
    register_Page.typeConfirmPassword(test.passwords);
    register_Page.assertOnWrongRegisteration();


  });


  // Validation on successfull Login
    
    it('Valid login', function () {
  
      landing_Page.typeUserLogin(test.username.validname);
      landing_Page.typePasswordLogin(test.passwords);
      landing_Page.clickLogin();
      landing_Page.assertionOnLogin();
  
  
    });

    it('Invalid login', function () {
  
      landing_Page.typeUserLogin(test.username.validname);
      landing_Page.typePasswordLogin(test.wrongpassword);
      landing_Page.clickLogin();
      landing_Page.assertionOnWrongLogin();
  
  
    });
  
  
    // Validation on open new account 
  
    it('successfull open new account', function () {

      landing_Page.typeUserLogin(test.username.validname);
      landing_Page.typePasswordLogin(test.passwords);
      landing_Page.clickLogin();

      home_Page.navigateToOpenNewAccount();

      open_Account_Page.selectAccountType();
      open_Account_Page.chooseExistingAccount();
      open_Account_Page.clicOpenNewAccountButton();
      open_Account_Page.assertOnNewAccount();
  
  
    });


    // Validation on update contact info
  
    it('successfull update contact', function () {

      landing_Page.typeUserLogin(test.username.validname);
      landing_Page.typePasswordLogin(test.passwords);
      landing_Page.clickLogin();

      home_Page.navigateToUpdateContactInfo();

      update_Contact_Info.updateFirstName(register_Page.generateUserName());
      update_Contact_Info.clickOnUpdateButton();
      update_Contact_Info.assertOnUpdate();
  
  
    });

     // Validation on request loan successfully 
  
     it('successfull request loan', function () {

      landing_Page.typeUserLogin(test.username.validname);
      landing_Page.typePasswordLogin(test.passwords);
      landing_Page.clickLogin();

      home_Page.navigateToRequestLoan();

      request_Loan_Page.enterLoanAmount(test.loan.loanvalue);
      request_Loan_Page.enterDownPayment(test.loan.loandeposite);
      request_Loan_Page.chooseLoanAccount();
      request_Loan_Page.assertOnLoan();
  
  
    });



    // Validation on logout 
  
    it('successfull Log-Out', function () {

      landing_Page.typeUserLogin(test.username.validname);
      landing_Page.typePasswordLogin(test.passwords);
      landing_Page.clickLogin();
      landing_Page.assertionOnLogin();

      home_Page.logOut();
  
  
    });


    


    
   
})

