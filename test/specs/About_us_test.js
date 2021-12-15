import aboutPage from "../../pages/about.page.js";
import loginPage from "../../pages/login.page.js";
import mainPage from "../../pages/main.page.js";

describe('About us', () => {
    it('About us', async () => {

        // main page
        await loginPage.open()
        await mainPage.closePopupBtn.click()
        await loginPage.login("3@3.com", "33333")

        await browser.pause(5000)

        await aboutPage.sideMenu()
       
        await browser.pause(5000)

        await aboutPage.openAbout()
        await browser.pause(5000)
        await aboutPage.openTwitter()

        await browser.pause(5000)

    });
});
