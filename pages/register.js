 export class register {
 
  // Locators 

  first_name = '//input[@id="customer.firstName"]'
  last_name = '//input[@id="customer.lastName"]'
  address = '//input[@id="customer.address.street"]'
  city = '//input[@id="customer.address.city"]'
  state = '//input[@id="customer.address.state"]'
  zip_code = '//input[@id="customer.address.zipCode"]'
  phone_number = '//input[@id="customer.phoneNumber"]'
  ssn = '//input[@id="customer.ssn"]'
  user_name = '//input[@id="customer.username"]'
  password = '//input[@id="customer.password"]'
  confirm_password = '//input[@id="repeatedPassword"]'
  assertion_registeration = '//h1[@class="title"]'
  assert_On_Wrong_Registeration = '//td//span[@id="customer.username.errors"][contains(.,"This username already exists.")]'
  
  // Methods

         
         typeFirstName()
         {
          cy.xpath(this.first_name).type("Ahmed");
         }
   
         typeLastName()
         {
           cy.xpath(this.last_name).type("Mohammed");
         }
   
         typeAddress (address)
         {
           cy.xpath(this.address).type(address);
         }

         typeCity(city)
        {
          cy.xpath(this.city).type(city);
        }

        typeState(state)
        {
          cy.xpath(this.state).type(state);
        }

        typeZipCode(zipcode)
        {
          cy.xpath(this.zip_code).type(zipcode);
        }

        typePhoneNumber(phonenumber)
        {
          cy.xpath(this.phone_number).type(phonenumber);
        }

        typeSSN(ssn)
        {
          cy.xpath(this.ssn).type(ssn);
        }

        generateUserName()
        {
          const randomNumber = Math.floor(Math.random() * 10000);  // Generates a number between 0 and 10000
          const randomUserName = `Ahmed${randomNumber}`;
          return randomUserName
          
        }
        
        typeNewUserName(username) {
          
          cy.xpath(this.user_name).type(this.generateUserName(username));
        }

       typeWrongUserName(username) 
       {
        cy.xpath(this.user_name).type(username);
       }
        
        typePassword(passwords)
        {
          cy.xpath(this.password).type(passwords);
        }
        
        typeConfirmPassword(password)
        {
          cy.xpath(this.confirm_password).type(password).type ("{enter}");
        }

        assertOnRegisteration()
        {
          cy.xpath(this.assertion_registeration).should('include.text', 'Welcome ');
        }

        assertOnWrongRegisteration()
        {
          cy.xpath(this.assert_On_Wrong_Registeration).should('include.text','This username already exists');
        }
      
   
   }
   export default new register (); 
