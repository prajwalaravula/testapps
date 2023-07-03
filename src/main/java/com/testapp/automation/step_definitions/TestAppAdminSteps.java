package com.testapp.automation.step_definitions;

import com.testapp.automation.browser.AbstractPage;
import com.testapp.automation.constants.Constants;
import com.testapp.automation.helpers.Util;
import com.testapp.automation.pageobjects.TestAppAdminPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.Color;

/**
 * @author prajwala
 */
public class TestAppAdminSteps {

    TestAppAdminPage testAppAdminPage = new TestAppAdminPage();
    private WebDriver driver = AbstractPage.driver;

    @When("user clicks on admin nav")
    public void userClicksOnAdminNav() {
        testAppAdminPage.clickOnAdminNav();
    }

    @And("click on platform settings")
    public void clickOnPlatformSettings() {
        testAppAdminPage.clickOnPlatformSettings();
    }

    String loginMessage;

    @Then("update the welcome message")
    public void updateTheWelcomeMessage() {
        loginMessage = "Welcome-" + RandomStringUtils.randomAlphabetic(10);
        testAppAdminPage.updateTheLoginMessage(loginMessage);
    }

    @And("click on save button")
    public void  clickOnSaveButton() {
        testAppAdminPage.clickOnSaveButton();
    }

    @Then("validate the welcome message")
    public void validateTheWelcomeMessage() {
        Assert.assertEquals(loginMessage, testAppAdminPage.getWelcomeText());
    }

    @Then("validate the background color is updated to {string}")
    public void validateTheBackgroundColor(String mode) {
        WebElement t = driver.findElement(By.tagName("h1"));
        String s = t.getCssValue("color");
        String c = Color.fromString(s).asHex();
        System.out.println("Color: "+c);
    }

    @When("user select {string} mode")
    public void userSelectMode(String mode) {
        switch (mode) {
            case "light":
                testAppAdminPage.selectLightMode();
                break;
            case "dark":
                testAppAdminPage.selectDarkMode();
        }
    }

    @When("user clicks on application tab")
    public void userClicksOnApplicationTab() {
        testAppAdminPage.clickOnApplicationTab();
    }

    String applicationName;
    @Then("update the application name")
    public void updateTheApplicationName() {
        applicationName = "testapp" + RandomStringUtils.randomNumeric(4);
        testAppAdminPage.updateTheApplicationName(applicationName);
        testAppAdminPage.clickOnSaveButton();
        Util.pause(Constants.WaitingTime.MEDIUM);
    }

    @Then("validate the application name is updated")
    public void validateTheApplicationNameIsUpdated() {
        Assert.assertTrue(driver.getTitle().contains(applicationName));
    }
}
