const ProductListPage = require('../pageobjects/product.list.page')
const MainPage = require('../pageobjects/main.page')

describe.only('filter test', () => {
    it('should correctly filter by price', () => {  
        //TEST CASE 4
        //Click on ‘View all Sale’ under Sale menu. The sale page appears with
        //the list of products. Filter with Price $100.00-$199.99. Validate the filter
        //has been applied correctly.
        
        MainPage.open()
        MainPage.goToSalePage()
        
        //ProductListPage.open()    // this can be used instead of previous steps 
                                    // if we don't need to verify menu links functionality
        
        ProductListPage.filterByPrice() 

        const prices = ProductListPage.allPrices

        //check if products are filtered by price correctly
        prices.forEach(price => {
            const amount = parseFloat(price.getText().slice(1)) //using slice to cut currency symbol
            expect(amount).toBeLessThan(200)
            expect(amount).toBeGreaterThanOrEqual(100)
        });
        
    })

    
})