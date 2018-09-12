import DataHelper from '../helpers/data.helper';

class Product_Page {

    public get form()          { return browser.element("[name='vm.productOptionsForm']")}

    public isOnPage(){
        this.form.waitForExist(10000)
        return this.form.isVisible()
    }

    public submit() : void {
        this.form.submitForm()
    }


}
const ProductPage = new Product_Page()
export default ProductPage