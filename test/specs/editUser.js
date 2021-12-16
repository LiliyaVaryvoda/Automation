import editUserPage from "../../pages/editUser.page.js";
import mainPage from "../../pages/main.page.js";
import loginPage from "../../pages/login.page.js";


describe("Edit profile", () => {
    it("should change user name", async () => {
        await mainPage.open();
        await mainPage.openAccountMenu()
        await mainPage.navigateToLogin()

        await loginPage.login('4@4.com', '44444')

        await mainPage.accountMenuBtn.click()

        await editUserPage.clickUserPrBtn()
        await browser.pause(10000)
        await editUserPage.clickField("liliya")

        await expect(editUserPage.userField).toHaveElementProperty("value", "liliya");

        await browser.pause(10000)


        await editUserPage.imageUrlclick("https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")

        await expect (editUserPage.imageMain).not.toHaveElementProperty("src", "default")

        await browser.pause(10000)
    })
})