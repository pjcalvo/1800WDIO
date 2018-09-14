var expect = require('chai').expect
import OpternativeLandingPage from '../pages/opternative-landing.page'
import OpternativeSignInPage from '../pages/opternative-signin.page'
import OpternativeQualificationPage from '../pages/opternative-qualification.page'
import OpternativePaymentPage from '../pages/opternative-payment.page'
import CBTHelper from '../helpers/cbt.helper'
import DataHelper from '../helpers/data.helper';


suite.skip('Opternative Flow as an NI', () => {

        let testUser;

        suiteSetup (function(){
            testUser = DataHelper.getRandomUser();
            console.log('Test user: %j', testUser)
        })

        test('Users are able to start the flow', function(){

            OpternativeLandingPage.open();
            OpternativeLandingPage.submit();
            expect(OpternativeSignInPage.isOnPage()).to.be.true;

        })

        test('Users are able to create an account' , function() {
         
            OpternativeSignInPage.enterSignUpInformation(testUser);
            expect(OpternativeQualificationPage.isOnPage()).to.be.true;

        })

        test('Users are able to qualify for an examn' , function() {
         
            OpternativeQualificationPage.enterQualificationInformation(testUser);
            expect(OpternativePaymentPage.isOnPage()).to.be.true;

        })

        test('Users are able to pay for the examn' , function() {
         
            OpternativePaymentPage.enterPaymentInformation(testUser.paymentInformation);
            expect(OpternativePaymentPage.isOnPage()).to.be.true;

        })


        teardown(function(){

            var title = this.currentTest.title.replace(' ', '');

            //browser.saveScreenshot('./test-results/' + title + '.png');
            CBTHelper.setDescription(browser.sessionId,this.currentTest.fullTitle());
            CBTHelper.setScrore(browser.sessionId, this.currentTest.state);
        })
});