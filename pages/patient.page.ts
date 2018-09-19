import DataHelper from '../helpers/data.helper';

class Patient_Page {

    get form()           { return $("[name='vm.form']")}
    get pageLocator()    { return $(".PatientName")}
    get firstName()   { return browser.element("[name='firstName']")}
    get lastName()      { return browser.element("[name='lastName']")}

    public isOnPage(){
        this.pageLocator.waitForExist(15000)
        return this.pageLocator.isVisible()
    }

    public enterPatientInformation(patient?) {

       this.firstName.setValue(patient.firstName)
       this.lastName.setValue(patient.lastName)

        this.submit()
    }

    public submit() : void {
        this.form.submitForm()
    }


}
const PatientPage = new Patient_Page()
export default PatientPage