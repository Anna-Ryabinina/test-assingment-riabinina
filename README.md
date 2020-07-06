# test-assingment-riabinina
## UI tests using webdriverIO

Tests are using [WebdriverIO test framework for Node.js](https://webdriver.io/docs/gettingstarted.html) 

**Installation and set up** 

1. You need to have NodeJS at least v12.16.1 or higher (I'm using v14)

2. In the project folder do:
> $ npm init -y

3. Install WebdriverIO CLI using the command: 
> $ npm i --save-dev @wdio/cli 

**To run tests execute command:** 
> $ npx wdio wdio.conf.js

---------------------------------
###### Some notes for reviewers 
- I was using official doc and guidelines for [WebdriverIO framework](https://webdriver.io/docs/gettingstarted.html) and [JestJS](https://jestjs.io/docs) 
- WDIO works with Jest expect methods by default, so I was using them for assertions 
- I had a problem with import/export methods - error ‘cannot use import statement outside a module’. Tried to use babel following steps from the official WDIO doc to solve this. Unfortunately, I could not find a solution yet, so I use require/module.export methods instead. I’m going to continue to look for the solution, no matter if you decide to proceed interview process with me or not :)  
- I followed the steps described in test cases for the test assignment, but I would prefer to do some changes:  
  - Test case 3 checks if a user can use search and add a product to cart. So if search doesn’t work, then the test will fail before checking add-to-cart functionality.  I would suggest splitting test case 3 into 2 different tests. First should check if a user can find product and go to a product page (steps: type ‘shirt’ into search field, find a product in results, click title link to go to the product page, and check product info). Second should test if a user can add a product to the basket (steps: go to product page by using direct url, select options/amount, click add-to-cart button, check if product successfully added to cart). 
  - Same for Test case 4. I would suggest using a direct link to the sales page (this would be easier, faster, and more stable) in the current test and check menu links in a separate test. 
