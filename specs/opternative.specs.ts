var expect = require('chai').expect
import OpternativePage from '../pages/opternative.page'
import BrowserHelper from '../helpers/browser.helper'
import CBTHelper from '../helpers/cbt.helpers'


suite('Opternative tests', () => {

        test('Users are able to start the flow ', function(){
            
            //console.log('Consoallalalala ' + this.test.fullTitle());

            OpternativePage.open();
            OpternativePage.submit();
    
            var result = BrowserHelper.getTitleAndUrl()
    
            expect(result.title).to.eql('1-800 Contacts')
            expect(result.url).to.contain('online-contact-lens')

        })

        teardown(function(){
            CBTHelper.setDescription(browser.sessionId,this.currentTest.fullTitle());
            CBTHelper.setScrore(browser.sessionId, this.currentTest.state);
        })
});