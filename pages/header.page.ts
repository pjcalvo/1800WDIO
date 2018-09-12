import DataHelper from '../helpers/data.helper';

class Header_Page {

    get findMyBrand()    { return browser.element("//a[text()='Find My Brand']")}
    get viewAll()        { return browser.element("//a[contains(text(),'View All Brands')]")}
    get hamIcon()        { return $(".menu-btn")}
    get findMyBrandMobile()        { return browser.element("//a[@data-selenium-id='btnPhoneHeaderFindMyBrand']")}
    

    public gotoGoPLP() : void{

        if (browser.isMobile){
            this.hamIcon.click()
            this.findMyBrandMobile.click();
        }
        else {
            this.findMyBrand.moveToObject();
            this.viewAll.click();
        }
    }


}
const Header = new Header_Page()
export default Header