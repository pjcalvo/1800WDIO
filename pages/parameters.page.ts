import DataHelper from '../helpers/data.helper';

class Parameters_Page {

    get form()           { return $(".parameters-form")}
    get pageLocator()    { return $(".RxDetails")}
    get leftEyePower()   { return browser.element("[name='power-Left']")}
    get leftEyeBC()      { return browser.element("[name='baseCurve-Left']")}
    get rightEyePower()  { return browser.element("[name='power-Right']")}
    get rightEyeBC()     { return browser.element("[name='baseCurve-Right']")}
    get enterManually()  { return browser.element("//button[@data-selenium-id='btnEnterManually']")}

    public isOnPage(){
        this.pageLocator.waitForExist(10000)
        return this.pageLocator.isVisible()
    }

    public enterParametersInformation(rx?) {

        if (!rx.isSubmitAndSkip){
            
            this.enterManually.click();

            if (rx.leftEye.power != undefined) this.leftEyePower.selectByVisibleText(rx.leftEye.power)
            if (rx.leftEye.bc != undefined) this.leftEyeBC.selectByVisibleText(rx.leftEye.bc)
            if (rx.rightEye.power != undefined) this.rightEyePower.selectByVisibleText(rx.rightEye.power)
            if (rx.rightEye.bc != undefined) this.rightEyeBC.selectByVisibleText(rx.rightEye.bc)

            this.submit()
        }
        else{}
            //this.uploadimage();
    }

    public submit() : void {
        this.form.submitForm()
    }


}
const ParametersPage = new Parameters_Page()
export default ParametersPage