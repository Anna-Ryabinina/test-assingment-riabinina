# test-assingment-riabinina
## UI tests using webdriverIO

This tests are using [WebdriverIO test framework for Node.js](https://webdriver.io/docs/gettingstarted.html) 

**Installation and set up** 

1. You need to have NodeJS at least v12.16.1 or higher (I'm using v14)

2. In project folder do:
> $ npm init -y

3. Install WebdriverIO CLI using command: 
> $ npm i --save-dev @wdio/cli 

**To run tests execute command:** 
> $ npx wdio wdio.conf.js

---------------------------------
###### Some notes for reviewers 
- I was using official doc and guidlines for [WebdriverIO framework](https://webdriver.io/docs/gettingstarted.html) and [JestJS](https://jestjs.io/docs) 
- WDIO works with Jest expect methods by default, so I was using them for assertions 
- I had a problem with import/export methods - error ‘cannot use import statement outside a module’. Tried to use babel following steps from official WDIO doc to solve this. Unfortunateley, I could not find solution yet, so I use require/module.export methods instead. I’m going to continue to look for the solution, no matter if you decide to proceed interview process with me or not :)  
- I followed steps described in test cases for test assignment, but I would prefer to do some changes:  
  - Test case 3 checks if user can use search and add product to cart. So if search doesn’t work, then test will fail before checking adding to cart functionality.  I would suggest to split test case 3 into 2 different tests. First should check if user can find product and go to product page (steps: type ‘shirt’ into search field, find product in results, click title link to go to product page  and check product info). Second should test if user can add product to basket (steps: go to product page by using direct url, select options/amount, click add-to-cart button, check if product successfully added to cart).  
  - Same for Test case 4. I would suggest to use direct link to sales page (this would be easier, faster and more stable) in this test and check menu links in separate test. 
