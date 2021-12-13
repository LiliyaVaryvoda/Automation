import mainPage from "../../pages/main.page.js";
import loginPage from "../../pages/login.page.js";

describe('Login', () => {
    it('Positive login test', async () => {

        await mainPage.open();
        await mainPage.openAccountMenu()
        await mainPage.navigateToLogin()

        await loginPage.login('test1@test.com', 'pass123')

        // main page
        // await browser.url(`http://localhost:3000/#/`);
        // await $('button.close-dialog').click()
        // await $('#navbarAccount').click()
        // await $('button[routerlink="/login"]').click()


        // register
        // await mainPage.open()
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

    });
});

