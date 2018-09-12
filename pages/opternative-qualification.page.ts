import DataHelper from '../helpers/data.helper';

class Opternative_Qualification_Page {

    public get firstName()       { return browser.element("[name='firstName']")}
    public get lastName()        { return browser.element("[name='lastName']")}
    public get dateOfBirth()     { return browser.element("[name='dateOfBirth']")}
    public get state()           { return browser.element("[name='state']")}
    public get form()            { return browser.element("[name='vm.examQualificationForm']")}

    public isOnPage() {
        this.form.waitForExist(20000);
        return this.form.isVisible();
    }

    public enterQualificationInformation(testUser?) : void{
        if (testUser == undefined)
            testUser = DataHelper.getRandomUser();

        this.firstName.setValue(testUser.firstName);
        this.lastName.setValue(testUser.lastName);
        this.dateOfBirth.setValue(testUser.dateOfBirth);
        this.state.selectByVisibleText(testUser.state);

        this.submit();

    }

    public submit() : void {
        this.form.submitForm()
    }

}
const OpternativeSignInPage = new Opternative_Qualification_Page()
export default OpternativeSignInPage