import {expect} from 'chai';
import BasicAuthPage from '@/page_objects/example-basic-auth-page';

describe('Basic auth', () => {
    it('works if username and password are passed in the url', async () => {
        browser.url('http://admin:admin@the-internet.herokuapp.com/basic_auth');
        let message = await BasicAuthPage.message
        expect(message).to.eq('Congratulations! You must have the proper credentials.');
    });
});
