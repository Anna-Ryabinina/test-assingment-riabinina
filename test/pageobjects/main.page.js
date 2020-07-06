//import Page from './page'
const Page = require('./page')

class MainPage extends Page {

    get searchField() { return $('#search') }
    get searchBtn() { return $('.search-button') }
    get saleBtn() { return $('a=Sale') }
    get allSale() { return $('*=View') }   

    open() {
        super.open('http://www.ctqatest.biz/ecom/')
    }

    goToSalePage() {
        this.saleBtn.waitForDisplayed()
        this.saleBtn.moveTo() //hover over element
        this.allSale.waitForDisplayed()
        this.allSale.click()
    }

}

//export default new MainPage()
module.exports = new MainPage()