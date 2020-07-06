//import Page from './page'
const Page = require('./page')

class ProductListPage extends Page {

    get priceFilterBtn() { return $('#narrow-by-list .price').$('..') } 
    get allPrices() { return $$('.products-grid .special-price .price') }   //collection of all product prices on the page ;
                                                                            //using .special-price for test case 4 
                                                                            //because every product on sale page has it  

    open() {
        super.open('http://www.ctqatest.biz/ecom/sale.html') //can be used in test case 4 to simpify steps
    }

    filterByPrice() {
        this.priceFilterBtn.waitForExist()
        this.priceFilterBtn.click() 
    }

    //find link by attribute title value
    findProductLinkByName(name) {
        if (!name) throw new Error('findProductByName name is empty')
       return $(`.product-name a[title="${name}"]`)  // ` template strings added recently, also working in es6
    }           

}

//export default new ProductListPage()
module.exports = new ProductListPage()