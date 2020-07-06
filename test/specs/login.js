const LoginPage = require('../pageobjects/login.page')

describe('login form', () => {
    it('should have error message with wrong creds', () => {
        //TEST CASE 1
        //Go to the login page and enter the username as test@test.com and
        //password as ThisIs@T3st. Check if there is an error displayed.
        
        LoginPage.open()
        LoginPage.email.setValue('test@test.com')
        LoginPage.password.setValue('ThisIs@T3st')
        LoginPage.submit()

        LoginPage.errorMsg.waitForDisplayed()
        
        expect(LoginPage.errorMsg).toBeDisplayed() //using standart Jest expect for assertion
        expect(LoginPage.errorMsg).toHaveText('Invalid login or password.')
    })

    it('should have error message with empty fields', () => {
        //TEST CASE 2
        //Go to the login page and leave the username and password field blank
        //and Click on LOGIN button. Check if the validation appears in the input
        //box.

        LoginPage.open()
        LoginPage.email.setValue('') // ensure, that field is empty
        LoginPage.password.setValue('') // also clearing methods can be used instead. 
        LoginPage.submit()
        
        LoginPage.emailError.waitForDisplayed()
        LoginPage.passwordError.waitForDisplayed()

        expect(LoginPage.emailError).toHaveText('This is a required field.')
        expect(LoginPage.passwordError).toHaveText('This is a required field.')
    })
})