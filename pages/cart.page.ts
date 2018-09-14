import DataHelper from '../helpers/data.helper';

class Cart_Page {

    get pageLocator()      { return $(".Cart")}
    get lineItems()        { return $$(".CartLineItemGroup")}

    public isOnPage() {
        this.pageLocator.waitForExist(10000)
        return this.pageLocator.isVisible()
    }

    public verifyRxonCart(rx){

        let isRxInCart;

        this.lineItems.some(element => {
            return true;
            
        });

        return isRxInCart;
    }


}
const Cart = new Cart_Page()
export default Cart