import BasePage from "../base/basePage.js";
class LoginPage extends BasePage {

    get emailInput(){
        return $('#email')
    }
    get passwordInput(){
    return $('#password')
    }
    get loginBtn(){
    return $('button#loginButton')
}

get errorMessage(){
    return $('.error')
}

async open(){
    await super.open(`http://localhost:3000/#/login`);
}

async login(email, pass){
    await allure.startStep('Logging start')
    await this.emailInput.setValue(email)
    await this.passwordInput.setValue(pass)
    await this.loginBtn.click()
    await allure.endStep('passed')
}
}



export default new LoginPage()