import{test,chromium} from "@playwright/test";

test('Login with Salesforce' , async({page})=> {

    //To load the URL
    await page.goto ("https://login.salesforce.com/");

    //To Print the URL
    console.log(await page.url);

    //To enter the Login value
    await page.fill("#username", "vidyar@testleaf.com");

    //To enter the Password value
    await page.fill("#password", "Testleaf@1234");    

    //To click on Login button
    await page.click("#Login");

    await page.waitForTimeout (3000);






 }

)
