import $ from "webdriverio/build/commands/element/$";
import BasePage from "../base/basePage.js";
import Button from "../elements/button.js"
import Dropdown from "../elements/dropdown.js";
import mainPage from "./main.page.js";

class RegistrationPage extends BasePage{

    get emailRegister(){
        return $('#emailControl')
    }

    get emailRegister(){
        return $('#passwordControl')
    }

    get repeatpass(){
        return $('#repeatPasswordControl')
    }

    get answerquestion(){
        return $('#securityAnswerControl')
    }


get questionDropDown(){
    return new Dropdown($('[name="securityQuestion"]'), "Security question");
    //return $('[name="securityQuestion"]')
}

get closePopupBtn(){
    return $('button.close-dialog')
}

get registerBtn(){
    return $('#registerButton')
}


    async open(){
        await super.open('http://localhost:3000/#/register');
        if (await this.closePopupBtn.isExisting())
        await this.closePopupBtn.click();
    }


    async selectQuestion(text){
    await this.questionDropDown.select(text);
}


async registration(email, pass, pass, answer){
    await this.emailRegister.setValue(email)
    await this.emailRegister.setValue(pass)
    await this.repeatpass.setValue(pass)
    await this.answerquestion.setValue(answer)
}
}



export default new RegistrationPage()