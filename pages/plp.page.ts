import DataHelper from '../helpers/data.helper';

class Product_List_Page {

    public get product()                    { return "//strong[text()='{0}']"}

    public selectProductbyName(productName?) : void{
        browser.element(this.product.replace("{0}",productName)).click();
    }


}
const ProductListPage = new Product_List_Page()
export default ProductListPage