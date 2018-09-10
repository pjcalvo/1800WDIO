
import BrowserHelper from '../helpers/browser.helper';

class Opternative_Page {

    public get btnContinue() { return {
        locators:[
        "//button[@data-selenium-id='examLandingQualificationsStartExamBtn']",
        "//exam-landing-qualifications[contains(@class,'visible-xs')]//button[@data-selenium-id='examLandingQualificationsStartExamBtn']"]}
    }

    public open(): void {
        browser.url('/online-contact-lens-prescription') 
    }
    public submit(): void {
        BrowserHelper.clickElementWithLocators(this.btnContinue.locators);
    }

}
const OpternativePage = new Opternative_Page()
export default OpternativePage