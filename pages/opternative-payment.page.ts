import DataHelper from '../helpers/data.helper';

class Opternative_Payment_Page {

    public get cardNumber()               { return browser.element("[name='creditCardNumber']")}
    public get month()                    { return browser.element("[name='creditCardMonth']")}
    public get year()                     { return browser.element("[name='creditCardYear']")}
    public get cardName()                 { return browser.element("[name='creditCardName']")}
    public get address1()                 { return browser.element("[name='address1']")}
    public get address2()                 { return browser.element("[name='address2']")}
    public get zipCode()                  { return browser.element("[name='zipCode']")}
    public get city()                     { return browser.element("[name='city']")}
    public get state()                    { return browser.element("[name='state']")}
    public get continueButton()           { return browser.element("//button[@data-selenium-id='btnPlaceExamOrder']")}
    public get form()                     { return browser.element("exam-payment")}

    public isOnPage() {
        this.form.waitForExist(20000);
        return this.form.isVisible();
    }

    public enterPaymentInformation(paymentInformation?) : void{
        if (paymentInformation == undefined)
        paymentInformation = DataHelper.getAmexPaymentInformation();

        this.cardName.setValue(paymentInformation.cardName);
        this.month.selectByVisibleText(paymentInformation.month);
        this.year.selectByVisibleText(paymentInformation.year);
        this.cardName.setValue(paymentInformation.cardName);
        this.address1.setValue(paymentInformation.address1);
        this.address2.setValue(paymentInformation.address2)
        this.zipCode.setValue(paymentInformation.zipCode);
        this.city.setValue(paymentInformation.city);
        this.state.selectByVisibleText(paymentInformation.state);

        this.submit();

    }

    public submit() : void {
        this.continueButton.click();
    }

}
const OpternativePaymentPage = new Opternative_Payment_Page()
export default OpternativePaymentPage