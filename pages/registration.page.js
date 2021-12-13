import BasePage from "../base/basePage.js";
import Button from "../elements/button.js"
import Dropdown from "../elements/dropdown.js";
import mainPage from "./main.page.js";

class RegistrationPage extends BasePage{

// get accountMenuBtn(){
//     return new Button($('#navbarAccount'), "Account Menu")
// }

// get loginBtn(){
//     return new Button($('button[routerlink="/login"]'), "Login")
// }

// get closePopupBtn(){
//     return new Button($('button.close-dialog'), "Close popup")
// }


// get questionDropDown(){
//     return new Dropdown($('[name="securityQuestion"]'), "Security question")
// }

// get closePopupBtn(){
//     return new Button($('button.close-dialog'), "Close popup")
// }

get questionDropDown(){
    return new Dropdown($('[name="securityQuestion"]'), "Security question")
}

get closePopupBtn(){
    return $('button.close-dialog')
}


    async open(){
        allure.addStep("Navigating to registration")
        await super.open(`http://localhost:3000/#/register`);
        if (await this.closePopupBtn.isExisting())
        await this.closePopupBtn.click()
    }


    async selectQuestion(text){
    await questionDropDown.select(text)
}


    // async open(){
    //     await super.open("http://localhost:3000/#/register");
    // }

// async openAccountMenu(){
//     await this.accountMenuBtn.click()

// }

//     async navigateToLogin(){
//         await this.loginBtn.click()
//     }


    //registation page

// async selectQuestion(text){
//     await questionDropDown.select(text)
// }
}



export default new RegistrationPage()