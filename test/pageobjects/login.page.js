const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchArea () { return $('#twotabsearchtextbox')}  
    get searchButton () { return $('#nav-search-submit-button')} 

    /**
    get btnSignIn () { return $('.account-user') }
    get inputUsername () { return $('#login-email') }
    get inputPassword () { return $('#login-password-input') }
    get btnSubmit () { return $('.submit') }
   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    search (value) {
        this.searchArea.setValue(value);
        this.searchButton.click();
        browser.pause(5000);
          /**
        this.btnSignIn.click;
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 

     */

    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
