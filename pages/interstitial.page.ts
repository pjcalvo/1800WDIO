class Interstitial_Page {

    get noThanks()          { return browser.element("//a[text()='No thanks']")}
    get pageLocator()       { return browser.element("#appStoreOuterstitialLightbox")}

    public closeModal(){
        try {
            this.pageLocator.waitForExist(15000)
            this.noThanks.click()
        }
        catch{
            console.log('Interstital was not displayed')
        }
    }

}
const InterstitialPage = new Interstitial_Page()
export default InterstitialPage