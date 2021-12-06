describe('Login', () => {
    it('Positive login test', async () => {

        // main page
        await browser.url(`http://localhost:3000/#/`);
        await $('button.close-dialog').click()
        await $('#navbarAccount').click()
        await $('button[routerlink="/login"]').click()

        // login page
        await $('#email').setValue('varyvoda.l.r@gmail.com');
        await $('#password').setValue('21232288vL!');
        await $('button#loginButton').click()

        // click on account button on main page after login
        await $('#navbarAccount').click()

        // check if logout button is displayed
        const button = await $('#navbarLogoutButton')
        await expect(button).toBeDisplayed()

        await browser.pause(10000)
    });
});

