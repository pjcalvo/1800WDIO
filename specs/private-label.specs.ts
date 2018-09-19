var expect = require('chai').expect
import PLQualification from '../pages/private-label/qualification.page'
import PLBrandSelection from '../pages/private-label/brand-selection.page'
import ParametersPage from '../pages/parameters.page'
import CBTHelper from '../helpers/cbt.helper'
import DataHelper from '../helpers/data.helper'
import VisualHelper from '../helpers/visual-validation.helper'


suite.skip('Private Label Flow as an NI', () => {

        let testUser;
        let visualResult;

        suiteSetup (function(){
            testUser = DataHelper.getPrivateLabelUser();
            console.log('Test user: %j', testUser)
        })

        test('Users are able to start the flow', function(){

            PLQualification.startFlow()
            expect(PLQualification.isOnPage()).to.be.true;
            expect(VisualHelper.isVisuallyEqual()).to.be.true;
        })

        test('Users are able to qualify and continue the flow', function(){

            PLQualification.enterQualificationInformation(testUser)
            PLQualification.submit()
            expect(PLBrandSelection.isOnPage()).to.be.ture;
            expect(VisualHelper.isVisuallyEqual()).to.be.true;

        })

        test('Users are able to choose the brand and continue the flow', function(){

            PLBrandSelection.searchProduct(testUser.rx.product)         
            expect(VisualHelper.isVisuallyEqual()).to.be.true;

            PLBrandSelection.submit()
            expect(ParametersPage.isOnPage()).to.be.ture;

        })

        test('Users are able to enter the parametrs for the RX continue the flow', function(){

            ParametersPage.enterParametersInformation(testUser.rx.rx);
            
        })

        teardown(function(){

            var title = this.currentTest.title.replace(' ', '');

            //browser.saveScreenshot('./test-results/' + title + '.png');
            CBTHelper.setDescription(browser.sessionId,this.currentTest.fullTitle());
            CBTHelper.setScrore(browser.sessionId, this.currentTest.state);
        })
});