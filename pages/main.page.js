import BasePage from "../base/basePage.js";
import Button from "../elements/button.js"
import Dropdown from "../elements/dropdown.js";

class MainPage extends BasePage{

get accountMenuBtn(){
    //return new Button($('#navbarAccount'), "Account Menu")
    return $('#navbarAccount')
}

get loginBtn(){
    //return new Button($('button[routerlink="/login"]'), "Login")
    return $('button[routerlink="/login"]')
}

get closePopupBtn(){
    //return new Button($('button.close-dialog'), "Close popup")
    return $('button.close-dialog')
}

async open(){
    await super.open('http://localhost:3000/#/')
    await this.closePopupBtn.click()
}


async openAccountMenu(){
    await this.accountMenuBtn.click()

}

    async navigateToLogin(){
        await this.loginBtn.click()
    }
}



export default new MainPage()