var expect = require('chai').expect
import OpternativePage from '../pages/opternative.page'
import BrowserHelper from '../helpers/browser.helper'

suite('Opternative tests', () => {

    setup(() => {
        browser.setViewportSize({width:375, height:667});
    });

    test('should let users start the qualification process', () => {
        OpternativePage.open();
        OpternativePage.submit();

        var result = BrowserHelper.getTitleAndUrl();

        expect(result.title).to.eql('1-800 Contacts');
        expect(result.url).to.contain('online-contact-lens')
    });

});