import BasePage from "../base/basePage.js";
import Button from "../elements/button.js"
import Dropdown from "../elements/dropdown.js";
import mainPage from "./main.page.js";

class RegistrationPage extends BasePage{


get questionDropDown(){
    return new Dropdown($('[name="securityQuestion"]'), "Security question");
    //return $('[name="securityQuestion"]')
}

get closePopupBtn(){
    return $('button.close-dialog')
}


    async open(){
        await super.open('http://localhost:3000/#/register');
        if (await this.closePopupBtn.isExisting())
        await this.closePopupBtn.click();
    }


    async selectQuestion(text){
    await this.questionDropDown.select(text);
}
}



export default new RegistrationPage()