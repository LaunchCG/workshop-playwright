//Playwright assessment:

//Exercise 2: Check what is incorrect here. Put the below code in a new js file and find what should be fixed in this code to make it work



test('AddtoCartTest',async({page})=>{
    await page.goto("https://saucedemo.com");    
    await page.getByTitle('Username').fill("standard_user");    
    await page.getByTitle('Password').fill("secret_sauce");
    await page.locator("input#login-button").click();
    await page.waitForLoadState('networkidle');        
    await expect(page.locator("[data-test='title']")).toHaveText("Products");
	});