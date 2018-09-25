import DataHelper from '../helpers/data.helper';

class Adress_Page {

    get pageLocator()           { return $(".AddressPage")}
    get address1()              { return browser.element("[name='address1']")}
    get address2()              { return browser.element("[name='address2']")}
    get zipCode()               { return browser.element("[name='zipCode']")}
    get state()                 { return browser.element("[name='state']")}
    get phoneNumber()           { return browser.element("[name='phoneNumber']")}
    get emailAddress()          { return browser.element("[name='emailAddress']")}
    get password()              { return browser.element("[name='password']")}
    get form()                  { return browser.element("[name='vm.addressesForm']")}

    public isOnPage() {
        this.pageLocator.waitForExist(10000)
        return this.pageLocator.isVisible()
    }

    public enterAddressInformation(user): void{
        this.address1.setValue(user.paymentInformation.address1)
        this.address2.setValue(user.paymentInformation.address2)
        this.state.selectByVisibleText(user.paymentInformation.state)
        this.zipCode.setValue(user.paymentInformation.zipCode)
        this.phoneNumber.setValue(user.paymentInformation.phoneNumber)
        this.emailAddress.setValue(user.emailAddress)
        this.password.setValue(user.password)
        this.form.submitForm()
    }

}
const DoctorPage = new Adress_Page()
export default DoctorPage