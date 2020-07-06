const ProductPage = require('../pageobjects/product.page')
const ProductListPage = require('../pageobjects/product.list.page')
const MainPage = require('../pageobjects/main.page')
const CartPage = require('../pageobjects/cart.page')

describe('cart test', () => {
    it('can find product and add to cart', () => {  
        //TEST CASE 3
        //Find the search Bar on Top left corner, search by text ‘shirt’. From the
        //search list open the product ‘Slim Fit Dobby Oxford Shirt’. Select the
        //color and size of your choice and add to cart and validate it has
        //successfully been added to the cart.

        MainPage.open()
        MainPage.searchField.setValue('shirt')
        MainPage.searchBtn.click()

        const link = ProductListPage.findProductLinkByName('Slim fit Dobby Oxford Shirt')
        link.waitForDisplayed()
        link.click()

        const price = ProductPage.getPriceText()
        ProductPage.selectColor()
        ProductPage.selectSize()
        ProductPage.addToCart()

        CartPage.succeessMsg.waitForDisplayed()

        expect(browser).toHaveUrl('http://www.ctqatest.biz/ecom/checkout/cart/')
        expect(CartPage.succeessMsg).toHaveTextContaining('Slim fit Dobby Oxford Shirt')
        expect(CartPage.productPrice).toHaveText(price) 
        
    })

    
})