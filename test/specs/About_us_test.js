describe('About us', () => {
    it('About us', async () => {

        // main page
        await browser.url(`http://localhost:3000/#/`);
        await $('button.close-dialog').click()
        await $('#navbarAccount').click()
        await $('button[routerlink="/login"]').click()

        // login page
        await $('#email').setValue('varyvoda.l.r@gmail.com');
        await $('#password').setValue('21232288vL!');
        await $('button#loginButton').click()

        await $('button.mat-focus-indicator.mat-tooltip-trigger.mat-button.mat-button-base').click()

        const ab = await $('span=About Us').click()

        await browser.pause(5000)
        const tw = await $(".mat-focus-indicator.mat-raised-button.mat-button-base.mat-accent").click()

        await browser.pause(10000)
    });
});
