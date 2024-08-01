//Playwright assessment:

//Exercise 1: Check what is incorrect here. Put the below code in a new js file and find what should be fixed in this code. 

test('Google Test',async({browser})=>{
    await page.goto("https://google.com");     
    await expect(page.locator("[alt='Google']")).toBeVisible();
    await page.locator("[name='q']").fill("playwright dev");
    await page.keyboard.press('Enter');
    await page.getByRole('link', { name: 'Playwright: Fast and reliable end-to-end testing for modern ...' }).click();
    await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
});