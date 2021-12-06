class LoginPage {

    get emailInput(){
        return $('#email')
    }
    get passwordInput(){
    return $('#password')
    }
    get loginBtn(){
    return $('button#loginButton')
}
async open(){
    await browser.url(`http://localhost:3000/#/login`);
}

async login(email, pass){
    await this.emailInput.setValue(email)
    await this.passwordInput.setValue(pass)
    await this.loginBtn.click()
}

}



export default new LoginPage()