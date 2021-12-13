// mainPage.navigateToLogin()

// // login page
// // await $('#email').setValue('varyvoda.l.r@gmail.com');
// // await $('#password').setValue('21232288vL!');
// // await $('button#loginButton').click()

// loginPage.login('varyvoda.l.r@gmail.com', '21232288vL!')


// await browser.pause(10000)


// // click on account button on main page after login
// await $('#navbarAccount').click()

// // check if logout button is displayed
// const button = await $('#navbarLogoutButton')
// await expect(button).toBeDisplayed()

// });
// });

// import mainPage from "../../pages/main.page.js";
// import loginPage from "../../pages/login.page.js";
// import RegistrationPage from "../../pages/registration.page.js"

// describe('Registration', () => {
//     it('Registration test', async () => {

        // main page
        // await browser.url(`http://localhost:3000/#/`);
        // await $('button.close-dialog').click()
        // await $('#navbarAccount').click()
        // await $('button[routerlink="/login"]').click()


    //     async open(){
    //     allure.addStep("Navigating to registration")
        //await super.open(`http://localhost:3000/#/register`);
    //     if (await this.closePopupBtn.isExisting())
    //     await this.closePopupBtn.click()
    // }

        //await mainPage.open()
        // await closePopupBtn.click()
        // await accountMenuBtn.click()
        // await loginBtn.click()

        
        // await mainPage.selectQuestion("Mother's maiden name?")

        // await browser.pause(5000)


        //await mainPage.openAccountMenu()
        //mainPage.navigateToLogin()

        // login page
        // await $('#email').setValue('varyvoda.l.r@gmail.com');
        // await $('#password').setValue('21232288vL!');
        // await $('button#loginButton').click()

        //loginPage.login('varyvoda.l.r@gmail.com', '21232288vL!')


        //await browser.pause(10000)


        // click on account button on main page after login
        //await $('#navbarAccount').click()

        // check if logout button is displayed
        //const button = await $('#navbarLogoutButton')
        //await expect(button).toBeDisplayed()

//     });
// });








import mainPage from "../../pages/main.page.js";
import loginPage from "../../pages/login.page.js";
import registrationPage from "../../pages/registration.page.js";


describe("Registration", () => {
    it('Registration', async() => {
        await registrationPage.open()
        await questionDropDown.click()
        await browser.pause(5000)
    })
})