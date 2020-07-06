//import Page from './page'
const Page = require('./page')

class CartPage extends Page {

    get succeessMsg() { return $('.success-msg span') }
    get productPrice() { return $('.product-cart-price .price') }
    get productLink() { return $('.product-name a') }

    open() {
        super.open('http://www.ctqatest.biz/ecom/checkout/cart/')
    }

}

//export default new CartPage()
module.exports = new CartPage()