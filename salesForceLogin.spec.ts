import{test,chromium} from "@playwright/test";

test('Login with Salesforce' , async({page})=> {

    //To load the URL
    await page.goto ("https://login.salesforce.com/");

    //To Print the URL
    console.log(await page.url);

    //To enter the Login value
    await page.fill("#username", "harrini.rp@yahoo.com");

    //To enter the Password value
    await page.fill("#password", "Shiridi@1288");    

    //To click on Login button
    await page.click("#Login");
    await page.waitForTimeout (3000);
    //To pick the title
    console.log(await page.url());
   





 }

)
