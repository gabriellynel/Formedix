import { expect } from "@playwright/test";
exports.Formedix = class Formedix {

    constructor(page) {

        this.page = page

        //LogIn
        this.Username = page.locator('xpath=//input[@id="username"]')
        this.Password = page.locator('xpath=//input[@id="password"]')
        this.SignInButton = page.locator('xpath=//div/button[text()="SIGN IN"]')
        //NavigatetoForms
        this.Repository = page.locator('#menuMdb div').filter({ hasText: 'Repository' })
        this.Studies = page.locator('#menuMdbStudies')
        this.BurgerMenu = page.locator('xpath=//span[@id="fdxMdbContainerListItem0MenuToggle"]')
        this.View = page.locator('xpath=//ul[@id="fdxMdbContainerListItem0Menu"]')
        this.DataAcquisition = page.locator('xpath=//li[@id="ViewAssetGroupdataAcquisition"]')
        this.Forms = page.locator('xpath=//li[@id="FORMTypeView"]')
        //UpdateMedicalHistory
        this.VersionChangedBadge = page.locator('xpath=//div[3][@class="renderer"]//span[@id="versionChangedBadge"]')
        this.EditForm = page.locator('xpath=//span[text()="Edit form"]')
        this.UpdateButton = page.locator('xpath=//button[text()="Update"]')
        this.AddDescription = page.locator('xpath=//button[@id="editPropsAddEntrydescription"]')
        this.EnterDescription = page.locator('xpath=//textarea[@id="assetLocaleEditTextTextareadescription"]')
        this.EnterLocale = page.locator('xpath=//input[@id="localeInputdescription"]')
        this.VerifyMainForm = page.locator('xpath=//span[@id="formDescription"]')
        //SignOut
        this.UserProfile = page.locator('xpath=//p[text()="testteamtechtest"]')
        this.SignOut = page.locator('xpath=//p[text()="testteamtechtest"]')
    }

    async NavigateToLoginPage() {
        await this.page.goto('https://ryze-staging.formedix.com/sign-in');
    }
    async SignIn(Username, Password) {
        await this.Username.waitFor();
        await this.Username.fill(Username)
        await this.Password.fill(Password)
        await this.SignInButton.click()
    }
    async NavigateToForms() {
        await this.Repository.click()
        await this.Studies.click()
        await this.BurgerMenu.click()
        await this.View.click()
        await this.DataAcquisition.click()
        await this.Forms.click()
    }
    async UpdateMedicalHistory(EnterText, EnterLocale, UpdatedText) {
        await this.VersionChangedBadge.click()
        await this.EditForm.click()
        await this.UpdateButton.waitFor();
        await expect(this.UpdateButton).toBeDisabled()
        await this.AddDescription.click()
        await this.EnterDescription.fill(EnterText)
        await this.EnterLocale.fill(EnterLocale)
        await this.UpdateButton.waitFor();
        await expect(this.UpdateButton).toBeEnabled()
        await this.UpdateButton.click()
        await this.UpdateButton.waitFor();
        await expect(this.UpdateButton).toBeDisabled()
        await expect(this.VerifyMainForm).toHaveText(UpdatedText)
        await this.UserProfile.click()
        await this.SignOut.click()
    }
}


