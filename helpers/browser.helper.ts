class Browser_Helper {
    public getTitleAndUrl(){
        return {
            url: browser.getUrl(),
            title: browser.getTitle()
        }
    }

    public clickElementWithLocators(locators){
        locators.forEach(locator => {
            try{
                browser.element(locator);
            }
            catch (error){
                console.log('No se pudo interactuar con el elemento: ' + locator)
            }
        });     
    }
}

const BrowserHelper = new Browser_Helper()
export default BrowserHelper