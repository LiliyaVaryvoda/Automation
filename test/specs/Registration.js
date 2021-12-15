import mainPage from "../../pages/main.page.js";
import loginPage from "../../pages/login.page.js";
import userRegistrationPage from "../../pages/userRegistration.page.js";


describe("Registration", () => {
    it('Registration', async() => {
        await userRegistrationPage.open();
        await browser.pause(10000);
        //await registrationPage.registration();
        await userRegistrationPage.registr('2@2.com', '11111', '11111', '1', 'Your eldest siblings middle name?');
        await browser.pause(10000);
        //await registrationPage.select2("Your eldest siblings middle name?")
        //let a = browser.getText("//*[contains(text(),'Your eldest siblings middle name?')]")
        //await a.click()
        //await registrationPage.selectQuestion("Your eldest siblings middle name?");
        //await registrationPage.registration('2@2.com', '11111', '11111', '1')
        //await registrationPage.registerBtn.click()
        await browser.pause(10000);

    })
})