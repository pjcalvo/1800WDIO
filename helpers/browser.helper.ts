class Browser_Helper {
    public getTitleAndUrl(){
        return {
            url: browser.getUrl(),
            title: browser.getTitle()
        }
    }

    public clickMobile(selector1, selector2){
        try{
            selector1.click();
        }
        catch(error){
            selector2.click();
        }
    }
}

const BrowserHelper = new Browser_Helper()
export default BrowserHelper