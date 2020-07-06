//import Page from './page'
const Page = require('./page')

class ProductPage extends Page {

    get colorSelector() { return $('#attribute92') }
    get sizeSelector() { return $('#attribute180') }
    get addToCartBtn() { return $('#product_addtocart_form button[title="Add to Cart"]') } 
    get price() { return $('.special-price .price') } 

    open() {
        super.open('http://www.ctqatest.biz/ecom/slim-fit-dobby-oxford-shirt-567.html') //can be used in test case 3 
                                                                                        //to skip search step 
                                                                                        //and make test shorter 
                                                                                        //(test case 3 can be split into 2 tests)
    }

    addToCart() {
        this.addToCartBtn.click()
    }

    selectColor() {
        this.colorSelector.waitForEnabled()
        this.colorSelector.selectByVisibleText('Blue') //method .selectByIndex(1) can also be used here
    }

    selectSize() {
        this.sizeSelector.waitForEnabled()
        this.sizeSelector.selectByVisibleText('XS')
    }

    getPriceText() {
        return this.price.getText()
    }
    
}

//export default new ProductPage()
module.exports = new ProductPage()