class Browser_Helper {
    public getTitleAndUrl(){
        return {
            url: browser.getUrl(),
            title: browser.getTitle()
        }
    }

    public clickElementWithLocators(element){
        var objectoOnScreen = this.findElementWithLocators(element);
        objectoOnScreen.click();   
    }

    public findElementWithLocators(element){
        var elemento;
        
        element.locators.some(locator => {
            try{
                elemento = browser.element(locator);
                return true;
            }
            catch (error){
                console.log('No se pudo interactuar con el elemento: ' + locator);
            }
        });   
        return elemento;
    }


}

const BrowserHelper = new Browser_Helper()
export default BrowserHelper