
import BrowserHelper from '../helpers/browser.helper';

class Opternative_Page {

    public get btnContinue() { return browser.element("//button[@data-selenium-id='examLandingQualificationsStartExamnBtn']") }
    public get btnContinueMobile() { return browser.element("//exam-landing-qualifications[contains(@class,'visible-xs')]//button[@data-selenium-id='examLandingQualificationsStartExamBtn']"); }
    public get form()      { return browser.element('#logi') }
    public get flash()     { return browser.element('#flash') }

    public open(): void {
        browser.url('/online-contact-lens-prescription')
    }
    public submit(): void {
        BrowserHelper.clickMobile(this.btnContinue, this.btnContinueMobile);
    }

}
const OpternativePage = new Opternative_Page()
export default OpternativePage