
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

    // get answerquestion(){
    //     return $('#securityAnswerControl')
    // }
    // get dropdownSecureQuestion() {
    //     return new Dropdown($('[name = "securityQuestion"]'),"dropdown with security questions");
    //   }


    //   get secureAnswerQuestionField() {
    //     return new Input($("input#securityAnswerControl"), "security answer input");
    //   }


// get questionDropDown(){
//     //return new Dropdown($('[name="securityQuestion"]'), "Security question");
//     return $('[name="securityQuestion"]')
// }

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
}

// async selectQuestion(text){
//     await this.questionDropDown.select(text)
// }

// async select2(option) {
//     await this.elem2(`[contains(text(), "${option}")]`).open();
// }
// async selectQ(){
//     await this.questionDropDown.open()
// }
// }



export default new UserRegistration();