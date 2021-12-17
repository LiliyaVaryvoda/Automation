import mainPage from "../../pages/main.page.js";
import loginPage from "../../pages/login.page.js";
import editUserPage from "../../pages/editUser.page.js";
import superagent from "superagent"

describe('Login', () => {

        it('post for user creating', async()=> {

            let baseUrl = "http://localhost:3000/";
    
            let requestBody= { "email":"55@555555555555.com","password":"55555555555555555","passwordRepeat":"55555555555555555","securityQuestion":{"id":9,"question":"Your ZIP/postal code when you were a teenager?","createdAt":"2021-12-16T12:07:57.492Z","updatedAt":"2021-12-16T12:07:57.492Z"},"securityAnswer":"79000"};

            const res = await superagent.post(baseUrl + 'api/Users/', requestBody);
            let myemail = res.body.email
            let mypassword = res.body.password
            console.log('******************response*************' + myemail);
            console.log("********response status code**********" + mypassword);
            //expect (res.statusCode).to.equal(201)


            await mainPage.open();
            await mainPage.openAccountMenu()
            await mainPage.navigateToLogin()

            await loginPage.login(myemail, mypassword)

            await mainPage.accountMenuBtn.click()

            await expect(mainPage.logoutBtn).toBeDisplayed()
        })
    })
