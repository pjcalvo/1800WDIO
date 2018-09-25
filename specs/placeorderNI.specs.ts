var expect = require('chai').expect
import CBTHelper from '../helpers/cbt.helper'
import DataHelper from '../helpers/data.helper'
import Header from '../pages/header.page'
import ProductListPage from '../pages/plp.page'
import ProductPage from '../pages/pdp.page'
import Interstitial from '../pages/interstitial.page'
import ParametersPage from '../pages/parameters.page'
import PatientPage from '../pages/patient.page'
import CartPage from '../pages/cart.page'
import DoctorPage from '../pages/doctor.page'
import AddressPage from '../pages/address.page'
import { exec } from 'child_process';


suite('Place an order as an NI', () => {

        let testUser;
        let testRx;

        suiteSetup (function(){
            browser.url('/');
            Interstitial.closeModal();
            testUser = DataHelper.getRandomUser();
            testRx = DataHelper.getRxBothEyesNoColor();
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

        test('The selected Product Make it to the cart', function(){

            CartPage.isOnPage();
            expect(CartPage.verifyRxonCart(testRx)).to.be.true;
    
        })

        test('Users are able to proceed with the Order from the Cart', function(){

            CartPage.proceedToCheckout();
            expect(AddressPage.isOnPage()).to.be.true;
   
        })

        test('Users are able to enter the address and account Information', function(){

            AddressPage.enterAddressInformation(testUser);

            if (testRx.rx.isSubmitAndSkip === false){

                expect(DoctorPage.isOnPage()).to.be.true;  
                DoctorPage.selectTestDoctor(testRx.doctor)

            }

          //    expect(ReviewPage.isOnPage()).to.be.true
   
        })



        teardown(function(){

            var title = this.currentTest.title.replace(' ', '');

            //browser.saveScreenshot('./test-results/' + title + '.png');
            CBTHelper.setDescription(browser.sessionId,this.currentTest.fullTitle());
            CBTHelper.setScrore(browser.sessionId, this.currentTest.state);
        })
});