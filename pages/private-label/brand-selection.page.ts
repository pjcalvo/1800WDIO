import DataHelper from '../../helpers/data.helper';

class Private_Label_Brand_Page {

    public get pageLocator()     { return $("brand-selection-page")}
    public get form()            { return browser.element("[name='vm.formController']")}
    public get txtSearch()       { return browser.element("//input[@data-selenium-id='txtSearch']")}
    public get searchResult()    { return "//div[text()='{productName}']"}
    public get bntContinue()     { return browser.element("//div[text()='Continue']")}
    
    public isOnPage() {
        this.pageLocator.waitForExist(20000);
        return this.pageLocator.isVisible();
    }

    public searchProduct(product) : void{

        let locator = this.searchResult.replace("{productName}",product.name)

        this.txtSearch.setValue(product.searchCriteria);      
        browser.waitForExist(locator,3000);
        browser.element(locator).click();
    }

    public submit() : void {
        this.bntContinue.click()
    }

}
const PrivateLabelBrandPage = new Private_Label_Brand_Page()
export default PrivateLabelBrandPage