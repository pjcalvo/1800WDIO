import DataHelper from '../helpers/data.helper';

class Doctor_Page {

    get pageLocator()           { return $(".DoctorSearch")}
    get nameOrPhone()           { return browser.element("[name='nameOrPhone']")}
    get location()              { return browser.element("[name='location']")}
    get form()                  { return browser.element("[name='vm.doctorSearchForm']")}

    public isOnPage() {
        this.pageLocator.waitForExist(10000)
        return this.pageLocator.isVisible()
    }

    public selectTestDoctor(doctor): void{
        this.nameOrPhone.setValue(doctor.name)
        this.location.setValue(doctor.location)
        this.form.submitForm()
    }

}
const DoctorPage = new Doctor_Page()
export default DoctorPage