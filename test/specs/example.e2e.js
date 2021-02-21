const { default: waitUntil } = require('webdriverio/build/commands/browser/waitUntil');
const { default: waitForClickable } = require('webdriverio/build/commands/element/waitForClickable');
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My search application', () => {
    it('Search', () => {      
        LoginPage.open();
        LoginPage.search('Apple Macbook'); 
 
        //expect(SecurePage.flashAlert).toBeExisting();
        //expect(SecurePage.flashAlert).toHaveTextContaining(
            //    'You logged into a secure area!');
        });
});


