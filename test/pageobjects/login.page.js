//import Page from './page'
const Page = require('./page')

class LoginPage extends Page {

    get email() { return $("#email") }
    get password() { return $("#pass") }
    get submitBtn() { return $("#send2") }
    get emailError() { return $("#advice-required-entry-email") }
    get passwordError() { return $("#advice-required-entry-pass") }
    get errorMsg() { return $(".error-msg span") }

    open() {
        super.open('http://www.ctqatest.biz/ecom/customer/account/login/')
    }

    submit() {
        this.submitBtn.click()
    }

}

//export default new LoginPage()
module.exports = new LoginPage()