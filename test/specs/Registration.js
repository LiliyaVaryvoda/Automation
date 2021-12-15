import mainPage from "../../pages/main.page.js";
import loginPage from "../../pages/login.page.js";
import userRegistrationPage from "../../pages/userRegistration.page.js";

import { Chance } from "chance";

let chance = new Chance();
let email = chance.email({ domain: "example.com" });
let pass = chance.string({ length: 5 });
let secureAnswer = chance.color();
let option =  "Your eldest siblings middle name?";

describe("Registration", () => {
    it("Registration", async() => {
        await userRegistrationPage.open();
        await browser.pause(10000);
        //await registrationPage.registration();
        await userRegistrationPage.fillRegistrationForm(email, pass, secureAnswer, option);
        await browser.pause(10000);
        //await userRegistrationPage.sss()
       // await browser.pause(10000);
        //await $(`//*[@class="mat-option-text"]`).selectByVisibleText("Mother's maiden name?")
        //await browser.pause(10000);
        //, "11111", "1", "Mother's maiden name?"
        //await registrationPage.select2("Your eldest siblings middle name?")
        //let a = browser.getText("//*[contains(text(),'Your eldest siblings middle name?')]")
        //await a.click()
        //await registrationPage.selectQuestion("Your eldest siblings middle name?");
        //await registrationPage.registration('2@2.com', '11111', '11111', '1')
        //await registrationPage.registerBtn.click()

    })
})




