import DataHelper from '../helpers/data.helper';

class Cart_Page {

    get pageLocator()         { return $(".Cart")}
    get lineItems()           { return $$(".CartLineItemGroup")}
    get btnproceedToCheckout(){ return browser.element("//button[@data-selenium-id='btnProceedToCheckout']")}

    public isOnPage() {
        this.pageLocator.waitForExist(10000)
        return this.pageLocator.isVisible()
    }

    public verifyRxonCart(rx){

        let isRxInCart = false;

        this.lineItems.some(element => {
            let innerText = element.getText();
            if (innerText.includes(rx.patient.firstName + ' ' + rx.patient.lastName)
            && innerText.includes(rx.product.name)){
                isRxInCart = true;
                return true;
            }           
        });

        return isRxInCart;
    }

    public proceedToCheckout(){
        this.btnproceedToCheckout.click();
    }


}
const Cart = new Cart_Page()
export default Cart