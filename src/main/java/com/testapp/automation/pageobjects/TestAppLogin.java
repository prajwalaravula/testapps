package com.testapp.automation.pageobjects;

import com.testapp.automation.Builder.ActionParams;
import com.testapp.automation.PageInteractions.PageInteraction;

public class TestAppLogin {

    /**
     * @author prajwala
     */
    PageInteraction pageActions = new PageInteraction();


    // LOCATORS

    private ActionParams.Params userName() {
        return new ActionParams.Params().setByType("xpath").setLocator("//input[@placeholder='Please enter your email']");
    }

    private ActionParams.Params password() {
        return new ActionParams.Params().setByType("xpath").setLocator("//input[@placeholder='Please enter your password']");
    }

    private ActionParams.Params loginButton() {
        return new ActionParams.Params().setByType("xpath").setLocator("//button/span[text()=' Log in ']");
    }

    private ActionParams.Params adminNav() {
        return new ActionParams.Params().setByType("xpath").setLocator("//li/a[@data-guide='admin-navitem']");
    }

    private ActionParams.Params userIcon() {
        return new ActionParams.Params().setByType("xpath").setLocator("//div[@class='dropdown-trigger']//span[@class='icon']/i[contains(@class,'circle')]");
    }

    private ActionParams.Params logout() {
        return new ActionParams.Params().setByType("xpath").setLocator("//a[@class='dropdown-item' and text()=' Logout ']");
    }

    // METHODS

    public void typeUserName(String userName) {
        pageActions.actionInputText(userName().setText(userName));
    }

    public void typePassword(String password) {
        pageActions.actionInputText(password().setText(password));
    }

    public void clickOnLoginButton() {
        pageActions.actionClick(loginButton());
        pageActions.expectLocatorVisible(adminNav());
    }

    public void userLogout() {
        pageActions.actionClick(userIcon());
        pageActions.actionClick(logout());
    }
}
