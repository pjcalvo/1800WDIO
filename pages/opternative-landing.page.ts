
import BrowserHelper from '../helpers/browser.helper';

class Opternative_Landing_Page {

    public get btnContinue() { return {
        locators:[
        "//button[@data-selenium-id='examLandingQualificationsStartExamBtn']",
        "//exam-landing-qualifications[contains(@class,'visible-xs')]//button[@data-selenium-id='examLandingQualificationsStartExamBtn']"]}
    }

    public open(): void {
        browser.url('/online-contact-lens-prescription') 
    }
    public submit(): void {
        BrowserHelper.clickElementWithLocators(this.btnContinue);
    }

}
const OpternativeLandingPage = new Opternative_Landing_Page()
export default OpternativeLandingPage