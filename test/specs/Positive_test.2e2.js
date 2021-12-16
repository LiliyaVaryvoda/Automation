import mainPage from "../../pages/main.page.js";
import loginPage from "../../pages/login.page.js";
import editUserPage from "../../pages/editUser.page.js";

describe('Login', () => {
    it('Positive login test', async () => {

        await mainPage.open();
        await mainPage.openAccountMenu()
        await mainPage.navigateToLogin()

        await loginPage.login('1@1.com', '11111')

        await mainPage.accountMenuBtn.click()

        await expect(mainPage.logoutBtn).toBeDisplayed()
    
    });
});

