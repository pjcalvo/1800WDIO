
import BrowserHelper from '../helpers/browser.helper';
import DataHelper from '../helpers/data.helper';

class Opternative_SignIn_Page {

    public get pageLocator()     { return {locators:["//exam-sign-in"]}}
    public get firstName()       { return browser.element("[name='firstName']")}
    public get lastName()        { return browser.element("[name='lastName']")}
    public get emailAddress()    { return browser.element("[name='emailAddress']")}
    public get password()        { return browser.element("[name='password']")}
    public get passwordConfirm() { return browser.element("[name='confirmPassword']")}

    public isOnPage() {
        var element = BrowserHelper.findElementWithLocators(this.pageLocator);
        if (element)
            return true;
        else
            return false;
    }

    public enterSignUpInformation(testUser?){
        if (testUser == undefined)
            testUser = DataHelper.getRandomUser();

        this.firstName.setValue(testUser.firstName);
        this.lastName.setValue(testUser.lastName);
        this.emailAddress.setValue(testUser.emailAddress);
        this.password.setValue(testUser.password);
        this.passwordConfirm.setValue(testUser.password);

        //this.form.submit;
    }

}
const OpternativeSignInPage = new Opternative_SignIn_Page()
export default OpternativeSignInPage