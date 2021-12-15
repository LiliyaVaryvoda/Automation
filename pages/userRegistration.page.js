
import BasePage from "../base/basePage.js";
import Button from "../elements/button.js"
import Dropdown from "../elements/dropdown.js";
import MainPage from "./main.page.js";
import Input from "../elements/input.js"

class UserRegistration extends BasePage {

    get emailRegister(){
        return $('#emailControl')
}
    get passRegister(){
        return $('#passwordControl')
}
    get repeatpass(){
        return $('#repeatPasswordControl')
}
    get dropdownSecureQuestion() {
        return new Dropdown($('[name = "securityQuestion"]'),"dropdown with security questions");
}
    get secureAnswerQuestionField() {
        return new Input($("input#securityAnswerControl"), "security answer input");
}
    get closePopupBtn(){
        return $('button.close-dialog')
}
    get registerBtn(){
        return $('#registerButton')
} 
    get thisbutton(){
        return $(`//*[@class="mat-option-text"]`)
}
    async open(){
        await super.open('http://localhost:3000/#/register');
        if (await this.closePopupBtn.isExisting())
        await this.closePopupBtn.click();
    }

    async registr(email, pass, pass1, secureAnswer, option){
        await this.emailRegister.setValue(email);
        await this.passRegister.setValue(pass);
        await this.repeatpass.setValue(pass1);
        await this.dropdownSecureQuestion.select(option);
        await this.secureAnswerQuestionField.setValue(secureAnswer);
    }
    async fillRegistrationForm(email, pass, secureAnswer, option) {
        await this.emailRegister.setValue(email);
        await this.passRegister.setValue(pass);
        await this.repeatpass.setValue(pass);
        await this.dropdownSecureQuestion.select(option);
        await this.secureAnswerQuestionField.setValue(secureAnswer);
    }
}

export default new UserRegistration();