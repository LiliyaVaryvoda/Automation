import mainPage from "../../pages/main.page.js";
import loginPage from "../../pages/login.page.js";
import registrationPage from "../../pages/registration.page.js";


describe("Registration", () => {
    it('Registration', async() => {
        await registrationPage.open();
        await browser.pause(10000);
        await registrationPage.selectQuestion("Mother's maiden name?");
        await registrationPage.registration('2@2.com', '11111', '11111', '1')
        await registrationPage.registerBtn.click()
        await browser.pause(10000);

    })
})