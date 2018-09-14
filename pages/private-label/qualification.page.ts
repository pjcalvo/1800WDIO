import DataHelper from '../../helpers/data.helper';

class Private_Label_Qualification_Page {

    public get dateOfBirth()     { return browser.element("[name='dateOfBirth']")}
    public get state()           { return browser.element("[name='state']")}
    public get pageLocator()     { return $("thank-you-qual-page")}
    public get bntContinue()     { return browser.element("//div[text()='Continue']")}

    public startFlow () : void {
        browser.url('/?orderNo=0030393964&token=d4b53b4a-f93f-414e-b656-a51dd8a12a9a');
    }
    
    public isOnPage() {
        this.pageLocator.waitForExist(20000);
        return this.pageLocator.isVisible();
    }

    public enterQualificationInformation(testUser?) : void{
        if (testUser == undefined)
        testUser = DataHelper.getRandomUser();

        this.dateOfBirth.setValue(testUser.dateOfBirth);
        this.state.selectByVisibleText(testUser.state);
        this.submit();

    }

    public submit() : void {
        this.bntContinue.click()
    }

}
const PrivateLabelQualification = new Private_Label_Qualification_Page()
export default PrivateLabelQualification