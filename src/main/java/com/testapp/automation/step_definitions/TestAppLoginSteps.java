package com.testapp.automation.step_definitions;

import com.testapp.automation.browser.AbstractPage;
import com.testapp.automation.pageobjects.TestAppLogin;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

/**
 * @author prajwala
 */
public class TestAppLoginSteps {

    TestAppLogin testAppLogin = new TestAppLogin();

    @When("the user enters username {string}")
    public void theUserEntersUserName(String userName) {
        testAppLogin.typeUserName(userName);
    }

    @When("the user enters password {string}")
    public void theUserEntersPassword(String password) {
        testAppLogin.typePassword(password);
    }

    @Then("click on login button")
    public void clickOnLoginButton() {
        testAppLogin.clickOnLoginButton();
    }

    @And("take the screenshot")
    public void takeTheScreenshot() {
        AbstractPage.screenShotFlag = true;
        AbstractPage.currentUrl = true;
    }

    @When("the user is logged out")
    public void theUserIsLoggedOut() {
        testAppLogin.userLogout();
    }
}
