package com.testapp.automation.pageobjects;

import com.testapp.automation.Builder.ActionParams;
import com.testapp.automation.PageInteractions.PageInteraction;
import com.testapp.automation.browser.AbstractPage;
import com.testapp.automation.constants.Constants;
import com.testapp.automation.helpers.Util;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

/**
 * @author prajwala
 */
public class TestAppAdminPage {

    PageInteraction pageActions = new PageInteraction();
    private WebDriver driver = AbstractPage.driver;

    // LOCATORS
    private ActionParams.Params adminNav() {
        return new ActionParams.Params().setByType("xpath").setLocator("//li/a[@data-guide='admin-navitem']");
    }

    private ActionParams.Params platformSettingsLink() {
        return new ActionParams.Params().setByType("xpath").setLocator("//div[@class='tooltip-trigger']//div/div[text()='Platform Settings']");
    }

    private ActionParams.Params loginPageMessage() {
        return new ActionParams.Params().setByType("xpath").setLocator("//div/div[@aria-label='Editor editing area: main']/p");
    }

    private ActionParams.Params saveAdminChanges() {
        return new ActionParams.Params().setByType("xpath").setLocator("//button[@type='button']/span[text()=' Save ']");
    }

    private ActionParams.Params welcomeMessage() {
        return new ActionParams.Params().setByType("xpath").setLocator("//div[contains(@class,'custom-message-section')]//div[contains(@class,'custom-message')]");
    }

    private ActionParams.Params lightMode() {
        return new ActionParams.Params().setByType("xpath").setLocator("//label[@class='b-radio radio']//span[@class='control-label']/h1[text()=' Light ']");
    }

    private ActionParams.Params darkMode() {
        return new ActionParams.Params().setByType("xpath").setLocator("//label[@class='b-radio radio']//span[@class='control-label']/h1[text()=' Dark ']");
    }

    private ActionParams.Params applicationTab() {
        return new ActionParams.Params().setByType("xpath").setLocator("//ul[@role='tablist']/li[@role='tab']//span[text()='Application']");
    }

    private ActionParams.Params applicationName() {
        return new ActionParams.Params().setByType("xpath").setLocator("//div/input[@placeholder='Enter Application Name']");
    }

    // METHODS
    public void clickOnAdminNav() {
        pageActions.actionClick(adminNav());
    }

    public void clickOnPlatformSettings() {
        pageActions.actionClick(platformSettingsLink());
    }

    public void updateTheLoginMessage(String message) {
        Util.pause(Constants.WaitingTime.LONG);
        WebElement toClear = driver.findElement(By.xpath("//div/div[@aria-label='Editor editing area: main']/p"));
        toClear.sendKeys(Keys.CONTROL + "a");
        toClear.sendKeys(Keys.DELETE);
        //pageActions.actionInputText(loginPageMessage().setText("\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"));
        pageActions.actionInputText(loginPageMessage().setText(message));
    }

    public void clickOnSaveButton() {
        pageActions.actionClick(saveAdminChanges());
    }

    public String getWelcomeText() {
        return pageActions.getElementText(welcomeMessage());
    }

    public void selectLightMode() {
        pageActions.actionClick(lightMode());
        pageActions.actionClick(saveAdminChanges());
    }

    public void selectDarkMode() {
        pageActions.actionClick(darkMode());
        pageActions.actionClick(saveAdminChanges());
    }

    public void clickOnApplicationTab() {
        pageActions.actionClick(applicationTab());
    }

    public void updateTheApplicationName(String name) {
        pageActions.actionInputText(applicationName().setText("\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b"));
        pageActions.actionInputText(applicationName().setText(name));
    }
}
