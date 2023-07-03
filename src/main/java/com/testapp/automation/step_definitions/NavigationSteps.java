package com.testapp.automation.step_definitions;

import com.testapp.automation.helpers.ParseEnvironmentDomain;
import com.testapp.automation.helpers.Util;
import io.cucumber.java.en.Given;

import static com.testapp.automation.browser.AbstractPage.driver;

/**
 * @author prajwala
 */
public class NavigationSteps {

    ParseEnvironmentDomain parseEnv = new ParseEnvironmentDomain();
    Util util = new Util();
    private String feUrl = parseEnv.feUrl;

    @Given("the user navigate to environment")
    public void theUserNavigateToEnvironment() {
        util.closeAllTabs();
        driver.manage().deleteAllCookies();
        util.navigateToUrl(feUrl);
        driver.manage().window().fullscreen();
    }
}
