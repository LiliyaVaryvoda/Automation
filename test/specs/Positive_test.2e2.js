import mainPage from "../../pages/main.page.js";
import loginPage from "../../pages/login.page.js";

describe('Login', () => {
    it('Positive login test', async () => {

        await mainPage.open();
        await mainPage.openAccountMenu()
        await mainPage.navigateToLogin()

        await loginPage.login('test1@test.com', 'pass123')
    });
});

