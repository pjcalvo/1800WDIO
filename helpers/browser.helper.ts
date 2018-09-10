class Browser_Helper {
    public getTitleAndUrl(){
        return {
            url: browser.getUrl(),
            title: browser.getTitle()
        }
    }

    public clickElementWithLocators(locators){
        locators.some(locator => {
            try{
                var elemento = browser.element(locator);
                elemento.click();
                return true;
            }
            catch (error){
                console.log('No se pudo interactuar con el elemento: ' + locator);
                return false;
            }
        });     
    }


}

const BrowserHelper = new Browser_Helper()
export default BrowserHelper