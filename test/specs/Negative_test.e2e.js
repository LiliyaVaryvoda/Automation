import mainPage from "../../pages/main.page.js";
import loginPage from "../../pages/login.page.js";

describe('Login', () => {
    it('Negative login test', async () => {

        await mainPage.open()
        await mainPage.openAccountMenu()
        await mainPage.navigateToLogin()

        await loginPage.login('.....', '........')

        await expect(loginPage.errorMessage).toBeDisplayed()
    });
});
