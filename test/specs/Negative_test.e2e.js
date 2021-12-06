describe('Login', () => {
    it('Negative login test', async () => {

        // main page
        await browser.url(`http://localhost:3000/#/`);
        await $('button.close-dialog').click()
        await $('#navbarAccount').click()
        await $('button[routerlink="/login"]').click()

        // login page
        await $('#email').setValue('varyvoda.l.r@gmail.com');
        await $('#password').setValue('21232288lilyy');
        await $('button#loginButton').click()

        await browser.pause(10000)

        // check if error message is displayed

        const elem = $('.error')
        await expect(elem).toBeDisplayed()
    });
});

