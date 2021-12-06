class AboutPage{

    get sideMenuBtn(){
        return $('button.mat-focus-indicator.mat-tooltip-trigger.mat-button.mat-button-base')
    }
    
    get aboutUsBtn(){
        return $('span=About Us')
    }

    get twitterBtn(){
        return $ (".mat-focus-indicator.mat-raised-button.mat-button-base.mat-accent")
    }
    
    async sideMenu(){
        await this.sideMenuBtn.click()
    
    }
    
        async openAbout(){
            await this.aboutUsBtn.click()
        }


        async openTwitter(){
            await this.twitterBtn.click()
        }
    }
    
    
    export default new AboutPage()
