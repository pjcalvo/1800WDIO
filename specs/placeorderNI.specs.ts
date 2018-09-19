var expect = require('chai').expect
import CBTHelper from '../helpers/cbt.helper'
import DataHelper from '../helpers/data.helper'
import Header from '../pages/header.page'
import ProductListPage from '../pages/plp.page'
import ProductPage from '../pages/pdp.page'
import Interstitial from '../pages/interstitial.page'
import ParametersPage from '../pages/parameters.page'
import PatientPage from '../pages/patient.page'


suite('Place an order as an NI', () => {

        let testUser;
        let testRx;

        suiteSetup (function(){
            browser.url('/');
            Interstitial.closeModal();
            testUser = DataHelper.getRandomUser();
            testRx = DataHelper.getRxBothEyesNoColor();
            console.log('Test user: %j', testUser);
            console.log('Test rx: %j', testRx);
        })

        test('Users are able to choose a producto from the PLP the flow', function(){

            Header.gotoGoPLP();
            ProductListPage.selectProductbyName(testRx.product.name);
            expect(ProductPage.isOnPage()).to.be.true;

        })

        test('Users are able to continue on the Product Page', function(){

            ProductPage.submit()

        })

        test('Users are able to enter the RX Parameters', function(){

            ParametersPage.enterParametersInformation(testRx.rx)
            expect(PatientPage.isOnPage()).to.be.true;
    
        })

        test('Users are able to enter Patient Information', function(){

            PatientPage.enterPatientInformation(testRx.patient)
    
        })

        teardown(function(){

            var title = this.currentTest.title.replace(' ', '');

            //browser.saveScreenshot('./test-results/' + title + '.png');
            CBTHelper.setDescription(browser.sessionId,this.currentTest.fullTitle());
            CBTHelper.setScrore(browser.sessionId, this.currentTest.state);
        })
});