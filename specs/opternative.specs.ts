var expect = require('chai').expect
import OpternativeLandingPage from '../pages/opternative-landing.page'
import OpternativeSignInPage from '../pages/opternative-signin.page'
import CBTHelper from '../helpers/cbt.helper'


suite('Opternative Flow as an NI', () => {

        test('Users are able to start the flow ', function(){
            
            //console.log('Consoallalalala ' + this.test.fullTitle());

            OpternativeLandingPage.open();
            OpternativeLandingPage.submit();
    
            expect(OpternativeSignInPage.isOnPage()).to.be.true;
           // expect(result.url).to.contain('online-contact-lens')

        })

        test('Users are able to create an account' , function() {
            OpternativeSignInPage.enterSignUpInformation();
            browser.saveScreenshot("1.png");
        })

        teardown(function(){
            CBTHelper.setDescription(browser.sessionId,this.currentTest.fullTitle());
            CBTHelper.setScrore(browser.sessionId, this.currentTest.state);
        })
});