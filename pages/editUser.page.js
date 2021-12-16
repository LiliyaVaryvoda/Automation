
import BasePage from "../base/basePage.js";


class editUser extends BasePage {
    get userPrBtn(){
        return $('//button[@role = "menuitem"][1]')
    }

    get userField(){
        return $('//input[@id = "username"]')
    }

    get setUserNameBtn() {
        return $('//button[@id = "submit"]');
      }

    get imageUrl(){
        return $('//input[@name = "imageUrl"]')
    }

    get linkimage(){
        return $('//button[@id = "submitUrl"]');
    }

    get imageMain(){
        return $('//img[@class="img-rounded"]')
    }

    async clickUserPrBtn(){
        await this.userPrBtn.click()
    }

    async clickField(userName){
        await this.userField.setValue(userName);
        await this.setUserNameBtn.click();
    }

    async imageUrlclick(photo){
        await this.imageUrl.setValue(photo);
        await this.linkimage.click()
    }
}

export default new editUser()